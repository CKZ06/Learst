import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../admin/AdminLayout';
import { api } from '../admin/api';

interface Product { id: number; name: string; price: number; stock: number; categoryName: string }
interface Order { id: number; code: string; customerName: string; customerEmail: string; total: number; status: string; createdAt: string }

const statusLabels: Record<string, string> = {
  pending: 'Chờ xác nhận', confirmed: 'Đã xác nhận', shipping: 'Đang giao', completed: 'Hoàn thành', cancelled: 'Đã hủy',
};
const statusOrder = ['pending', 'confirmed', 'shipping', 'completed', 'cancelled'];

function money(value: number) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', maximumFractionDigits: 0 }).format(value);
}

export default function AdminDashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([
      api<{ products: Product[] }>('/api/products?limit=100'),
      api<Order[]>('/api/admin/orders'),
    ]).then(([productData, orderData]) => {
      setProducts(productData.products);
      setOrders(orderData);
    }).catch((cause: unknown) => {
      setError(cause instanceof Error ? cause.message : 'Không thể tải dữ liệu quản trị.');
    }).finally(() => setLoading(false));
  }, []);

  const lowStock = useMemo(() => products.filter((product) => product.stock <= 5).sort((a, b) => a.stock - b.stock), [products]);
  const pendingCount = orders.filter((order) => order.status === 'pending').length;
  const statusCounts = statusOrder.map((status) => ({ status, count: orders.filter((order) => order.status === status).length }));
  const maxCount = Math.max(1, ...statusCounts.map((item) => item.count));
  const today = new Intl.DateTimeFormat('vi-VN', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(new Date());

  return (
    <AdminLayout
      title="Chào mừng trở lại"
      subtitle={`Tổng quan hoạt động cửa hàng · ${today}`}
      action={<Link className="admin-primary-action" to="/admin/products/create"><span>＋</span> Thêm sản phẩm</Link>}
    >
      {error && <div className="admin-alert" role="alert"><strong>Không thể tải dashboard.</strong><span>{error}</span></div>}

      <section className="admin-kpi-grid" aria-label="Số liệu tổng quan">
        {[
          { label: 'Sản phẩm', value: products.length, note: 'Trong danh mục', tone: 'ink', icon: '◇' },
          { label: 'Đơn hàng', value: orders.length, note: 'Tất cả đơn hàng', tone: 'clay', icon: '▤' },
          { label: 'Chờ xử lý', value: pendingCount, note: pendingCount ? 'Cần bạn xác nhận' : 'Đã xử lý hết', tone: 'gold', icon: '◷' },
          { label: 'Sắp hết hàng', value: lowStock.length, note: 'Tồn kho ≤ 5', tone: 'sage', icon: '!' },
        ].map((item) => (
          <article className={`admin-kpi admin-kpi-${item.tone}`} key={item.label}>
            <div className="admin-kpi-top"><span>{item.label}</span><i aria-hidden="true">{item.icon}</i></div>
            <strong>{loading ? '—' : item.value.toString().padStart(2, '0')}</strong>
            <small>{item.note}</small>
          </article>
        ))}
      </section>

      <div className="admin-dashboard-grid">
        <section className="admin-panel admin-order-pulse">
          <header className="admin-panel-header">
            <div><span className="admin-section-kicker">NHỊP ĐƠN HÀNG</span><h2>Trạng thái xử lý</h2></div>
            <Link to="/admin/orders">Xem tất cả →</Link>
          </header>
          <div className="admin-pulse-chart" aria-label="Biểu đồ số đơn theo trạng thái">
            {statusCounts.map((item) => (
              <div className="admin-pulse-column" key={item.status}>
                <span className="admin-pulse-value">{item.count}</span>
                <div className="admin-pulse-track"><i className={`status-${item.status}`} style={{ height: `${Math.max(8, item.count / maxCount * 100)}%` }} /></div>
                <small>{statusLabels[item.status]}</small>
              </div>
            ))}
          </div>
          <div className="admin-pulse-caption"><span>● Cập nhật trực tiếp từ hệ thống</span><strong>{orders.length} đơn tổng cộng</strong></div>
        </section>

        <section className="admin-panel admin-low-stock">
          <header className="admin-panel-header"><div><span className="admin-section-kicker">KHO HÀNG</span><h2>Cần bổ sung</h2></div><Link to="/admin/products">Quản lý →</Link></header>
          {loading ? <div className="admin-loading">Đang kiểm tra tồn kho…</div> : lowStock.length === 0 ? (
            <div className="admin-empty"><b>Kho hàng đang ổn định</b><span>Không có sản phẩm nào sắp hết.</span></div>
          ) : (
            <ul className="admin-stock-list">
              {lowStock.slice(0, 5).map((product) => <li key={product.id}>
                <span className="admin-stock-monogram">{product.name.charAt(0)}</span>
                <div><strong>{product.name}</strong><small>{product.categoryName}</small></div>
                <span className={`admin-stock-count${product.stock === 0 ? ' empty' : ''}`}>{product.stock} còn lại</span>
                <Link to={`/admin/products/${product.id}/edit`} aria-label={`Sửa ${product.name}`}>→</Link>
              </li>)}
            </ul>
          )}
        </section>
      </div>

      <section className="admin-panel admin-recent-orders">
        <header className="admin-panel-header"><div><span className="admin-section-kicker">SỔ ĐƠN GẦN ĐÂY</span><h2>Đơn hàng mới nhất</h2></div><Link to="/admin/orders">Quản lý đơn →</Link></header>
        {loading ? <div className="admin-loading">Đang tải đơn hàng…</div> : orders.length === 0 ? (
          <div className="admin-empty"><b>Chưa có đơn hàng</b><span>Đơn mới từ cửa hàng sẽ xuất hiện tại đây.</span></div>
        ) : <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Mã đơn</th><th>Khách hàng</th><th>Ngày tạo</th><th>Giá trị</th><th>Trạng thái</th></tr></thead><tbody>
          {orders.slice(0, 6).map((order) => <tr key={order.id}><td><strong>{order.code}</strong></td><td>{order.customerName}<small>{order.customerEmail}</small></td><td>{new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(order.createdAt))}</td><td>{money(order.total)}</td><td><span className={`admin-status status-${order.status}`}>{statusLabels[order.status] ?? order.status}</span></td></tr>)}
        </tbody></table></div>}
      </section>
    </AdminLayout>
  );
}
