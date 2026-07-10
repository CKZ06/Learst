import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useCartStore } from '../store/cartStore';
import { useWishlistStore } from '../store/wishlistStore';

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items);
  const removeItem = useWishlistStore((state) => state.removeItem);
  const addCartItem = useCartStore((state) => state.addItem);

  return <Layout title="Wishlist | Learts">
    <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp"><div className="container"><div className="page-title"><h1 className="title">Wishlist</h1><ul className="breadcrumb"><li className="breadcrumb-item"><Link to="/">Home</Link></li><li className="breadcrumb-item active">Wishlist</li></ul></div></div></div>
    <section className="section section-padding"><div className="container">
      {items.length === 0 ? <div className="text-center py-5"><h2>Your wishlist is empty</h2><p>Add real products from the Shop page.</p><Link className="btn btn-dark" to="/shop.html">Go to Shop</Link></div> : <>
        <div className="table-responsive"><table className="cart-wishlist-table table"><thead><tr><th className="name" colSpan={2}>Product</th><th className="price">Unit Price</th><th className="add-to-cart">Action</th><th className="remove"><span className="visually-hidden">Remove</span></th></tr></thead><tbody>
          {items.map((item) => <tr key={item.id}><td className="thumbnail"><Link to="/product-details.html"><img src={item.image} alt={item.name} /></Link></td><td className="name"><Link to="/product-details.html">{item.name}</Link></td><td className="price"><span>£{item.price.toFixed(2)}</span></td><td className="add-to-cart"><button type="button" className="btn btn-light btn-hover-dark" onClick={() => addCartItem(item)}><i className="fas fa-shopping-cart mr-2" />Add to Cart</button></td><td className="remove"><button type="button" className="btn" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>&times;</button></td></tr>)}
        </tbody></table></div>
        <div className="text-center"><Link className="btn btn-light btn-hover-dark mr-3" to="/shop.html">Continue Shopping</Link><Link className="btn btn-dark btn-outline-hover-dark" to="/shopping-cart.html">View Cart</Link></div>
      </>}
    </div></section>
  </Layout>;
}
