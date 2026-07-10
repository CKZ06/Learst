import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, clearAuth, getStoredUser, getToken } from '../admin/api';
import Layout from '../components/Layout';

interface Customer { id: number; name: string; email: string; role: string; createdAt?: string }
interface CustomerOrder { id: number; code: string; total: number; status: string; createdAt: string }

export default function MyAccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<Customer | null>(() => getStoredUser<Customer>());
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!getToken()) { navigate('/login-register.html', { replace: true }); return; }
    Promise.all([api<Customer>('/api/auth/me'), api<CustomerOrder[]>('/api/account/orders')])
      .then(([profile, orderList]) => { setUser(profile); setOrders(orderList); })
      .catch((cause: unknown) => setError(cause instanceof Error ? cause.message : 'Không thể tải tài khoản.'));
  }, [navigate]);

  function logout() {
    clearAuth();
    window.location.replace('/login-register.html');
  }

  return <Layout title="My Account | Learts">
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp"><div className="container"><div className="page-title"><h1 className="title">My Account</h1><ul className="breadcrumb"><li className="breadcrumb-item"><Link to="/">Home</Link></li><li className="breadcrumb-item active">My Account</li></ul></div></div></div>
    <section className="section section-padding"><div className="container">
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row learts-mb-n30">
        <div className="col-lg-4 col-12 learts-mb-30"><div className="myaccount-tab-list nav">
          <a href="#dashboard" className="active" data-bs-toggle="tab">Dashboard <i className="far fa-home" /></a>
          <a href="#orders" data-bs-toggle="tab">Orders <i className="far fa-file-alt" /></a>
          <Link to="/shop.html">Continue Shopping <i className="far fa-shopping-bag" /></Link>
          <button type="button" onClick={logout} className="w-100 text-start">Logout <i className="far fa-sign-out-alt" /></button>
        </div></div>
        <div className="col-lg-8 col-12 learts-mb-30"><div className="tab-content">
          <div className="tab-pane fade show active" id="dashboard"><div className="myaccount-content dashboard">
            <h3>Welcome, {user?.name ?? 'customer'}!</h3><p>Email: <strong>{user?.email}</strong></p>
            <p>From your account you can view recent orders and continue shopping with Learts.</p>
          </div></div>
          <div className="tab-pane fade" id="orders"><div className="myaccount-content order">
            {orders.length === 0 ? <div className="text-center py-4"><p>You have not placed an order yet.</p><Link className="btn btn-dark" to="/shop.html">Shop now</Link></div> :
              <div className="table-responsive"><table className="table"><thead><tr><th>Order</th><th>Date</th><th>Status</th><th>Total</th></tr></thead><tbody>
                {orders.map((order) => <tr key={order.id}><td>{order.code}</td><td>{new Date(order.createdAt).toLocaleDateString('vi-VN')}</td><td>{order.status}</td><td>{order.total.toLocaleString('vi-VN')} ₫</td></tr>)}
              </tbody></table></div>}
          </div></div>
        </div></div>
      </div>
    </div></section>
  </Layout>;
}
