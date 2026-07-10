import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { getCartTotal, useCartStore } from '../store/cartStore';

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(value);

export default function ShoppingCartPage() {
  const items = useCartStore((state) => state.items);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = getCartTotal(items);

  return (
    <Layout title="Shopping Cart | Learts">
      <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <Container>
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">Cart</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="section section-padding">
        <Container>
          {items.length === 0 ? (
            <div className="text-center py-5">
              <h2 className="mb-3">Your cart is empty</h2>
              <p className="mb-4">Add a product from Home, Shop or Product Details.</p>
              <Link className="btn btn-dark btn-outline-hover-dark" to="/shop.html">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <form className="cart-form" onSubmit={(event) => event.preventDefault()}>
                <table className="cart-wishlist-table table">
                  <thead>
                    <tr>
                      <th className="name" colSpan={2}>Product</th>
                      <th className="price">Price</th>
                      <th className="quantity">Quantity</th>
                      <th className="subtotal">Total</th>
                      <th className="remove"><span className="visually-hidden">Remove</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id}>
                        <td className="thumbnail">
                          <Link to="/product-details.html">
                            <img src={item.image} alt={item.name} />
                          </Link>
                        </td>
                        <td className="name">
                          <Link to="/product-details.html">{item.name}</Link>
                        </td>
                        <td className="price"><span>{formatPrice(item.price)}</span></td>
                        <td className="quantity">
                          <div className="product-quantity">
                            <button
                              type="button"
                              className="qty-btn minus"
                              aria-label={`Decrease ${item.name} quantity`}
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              <i className="ti-minus" />
                            </button>
                            <input
                              type="number"
                              min="1"
                              className="input-qty"
                              value={item.quantity}
                              aria-label={`${item.name} quantity`}
                              onChange={(event) =>
                                setQuantity(item.id, Number.parseInt(event.target.value, 10) || 1)
                              }
                            />
                            <button
                              type="button"
                              className="qty-btn plus"
                              aria-label={`Increase ${item.name} quantity`}
                              onClick={() => increaseQuantity(item.id)}
                            >
                              <i className="ti-plus" />
                            </button>
                          </div>
                        </td>
                        <td className="subtotal">
                          <span>{formatPrice(item.price * item.quantity)}</span>
                        </td>
                        <td className="remove">
                          <button
                            type="button"
                            className="btn"
                            aria-label={`Remove ${item.name} from cart`}
                            onClick={() => removeItem(item.id)}
                          >
                            &times;
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="row justify-content-between mb-n3">
                  <div className="col-auto mb-3">
                    <button type="button" className="btn btn-light btn-hover-dark" onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                  <div className="col-auto">
                    <Link className="btn btn-light btn-hover-dark mr-3 mb-3" to="/shop.html">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </form>

              <div className="cart-totals mt-5">
                <h2 className="title">Cart totals</h2>
                <table>
                  <tbody>
                    <tr className="subtotal">
                      <th>Subtotal</th>
                      <td><span className="amount">{formatPrice(total)}</span></td>
                    </tr>
                    <tr className="total">
                      <th>Total</th>
                      <td><strong><span className="amount">{formatPrice(total)}</span></strong></td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/checkout.html" className="btn btn-dark btn-outline-hover-dark">
                  Proceed to checkout
                </Link>
              </div>
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
}
