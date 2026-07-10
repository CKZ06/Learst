import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Layout from '../components/Layout';
import { getCartTotal, useCartStore } from '../store/cartStore';

interface OrderResult { id:number; code:string; total:number }
interface ApiResponse<T> { success:boolean; message:string; data:T }

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const [customer, setCustomer] = useState({ name: '', email: '', address: '' });
  const [error, setError] = useState('');
  const [order, setOrder] = useState<OrderResult | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault(); setError(''); setSubmitting(true);
    try {
      const orderItems = items.map((item) => ({ productId: Number(item.id), quantity: item.quantity }));
      if (!orderItems.length || orderItems.some((item) => !Number.isInteger(item.productId))) throw new Error('Your cart contains legacy products. Please add products from the Shop API page.');
      const response = await fetch('/api/orders', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ customer, items: orderItems }) });
      const body = await response.json() as ApiResponse<OrderResult>;
      if (!response.ok) throw new Error(body.message);
      setOrder(body.data); clearCart();
    } catch (caught) { setError(caught instanceof Error ? caught.message : 'Checkout failed.'); }
    finally { setSubmitting(false); }
  }

  return <Layout title="Checkout | Learts">
    <div className="page-title-section section"><Container><div className="page-title"><h1 className="title">Checkout</h1><ul className="breadcrumb"><li className="breadcrumb-item"><Link to="/">Home</Link></li><li className="breadcrumb-item active">Checkout</li></ul></div></Container></div>
    <section className="section section-padding"><Container>
      {order ? <div className="alert alert-success text-center"><h2>Order placed successfully</h2><p>Order code: <strong>{order.code}</strong></p><p>Total: £{order.total.toFixed(2)}</p><Link className="btn btn-dark" to="/shop.html">Continue Shopping</Link></div> :
      <div className="row g-5"><div className="col-lg-7"><h2>Customer information</h2><form onSubmit={submit} className="checkout-form mt-4"><label>Name</label><input className="form-control mb-3" value={customer.name} onChange={e=>setCustomer({...customer,name:e.target.value})} required/><label>Email</label><input className="form-control mb-3" type="email" value={customer.email} onChange={e=>setCustomer({...customer,email:e.target.value})} required/><label>Address</label><textarea className="form-control mb-3" value={customer.address} onChange={e=>setCustomer({...customer,address:e.target.value})} required/>{error&&<p className="alert alert-danger">{error}</p>}<button className="btn btn-dark" disabled={submitting||!items.length}>{submitting?'Placing order…':'Place Order'}</button></form></div><div className="col-lg-5"><div className="order-review bg-light p-4"><h2>Your order</h2>{items.map(item=><div className="d-flex justify-content-between border-bottom py-2" key={item.id}><span>{item.name} × {item.quantity}</span><strong>£{(item.price*item.quantity).toFixed(2)}</strong></div>)}<div className="d-flex justify-content-between pt-3"><strong>Total</strong><strong>£{getCartTotal(items).toFixed(2)}</strong></div></div></div></div>}
    </Container></section>
  </Layout>;
}
