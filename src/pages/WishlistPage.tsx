import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function WishlistPage() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Page Title/Header Start */}
      <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">
                  Wishlist
                </h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Wishlist
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}
      {/* Wishlist Section Start */}
      <div className="section section-padding">
        <div className="container">
          <form className="cart-form" action="#">
            <table className="cart-wishlist-table table">
              <thead>
                <tr>
                  <th className="name" colSpan={2}>
                    Product
                  </th>
                  <th className="price">
                    Unit Price
                  </th>
                  <th className="add-to-cart"></th>
                  <th className="remove"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/cart-product-1.webp" alt="wishlist-product-1" />
                    </Link>
                  </td>
                  <td className="name">
                    <Link to="/product-details.html">
                      Walnut Cutting Board
                    </Link>
                  </td>
                  <td className="price">
                    <span>
                      £100.00
                    </span>
                  </td>
                  <td className="add-to-cart">
                    <a href="#" className="btn btn-light btn-hover-dark">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Add to Cart
                    </a>
                  </td>
                  <td className="remove">
                    <a href="#" className="btn">
                      ×
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/cart-product-2.webp" alt="wishlist-product-2" />
                    </Link>
                  </td>
                  <td className="name">
                    <Link to="/product-details.html">
                      Lucky Wooden Elephant
                    </Link>
                  </td>
                  <td className="price">
                    <span>
                      £35.00
                    </span>
                  </td>
                  <td className="add-to-cart">
                    <a href="#" className="btn btn-light btn-hover-dark">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Add to Cart
                    </a>
                  </td>
                  <td className="remove">
                    <a href="#" className="btn">
                      ×
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/cart-product-3.webp" alt="wishlist-product-3" />
                    </Link>
                  </td>
                  <td className="name">
                    <Link to="/product-details.html">
                      Fish Cut Out Set
                    </Link>
                  </td>
                  <td className="price">
                    <span>
                      £9.00
                    </span>
                  </td>
                  <td className="add-to-cart">
                    <a href="#" className="btn btn-light btn-hover-dark">
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Add to Cart
                    </a>
                  </td>
                  <td className="remove">
                    <a href="#" className="btn">
                      ×
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col text-center mb-n3">
                <Link className="btn btn-light btn-hover-dark mr-3 mb-3" to="/shop.html">
                  Continue Shopping
                </Link>
                <Link className="btn btn-dark btn-outline-hover-dark mb-3" to="/shopping-cart.html">
                  View Cart
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Wishlist Section End */}
      </>
    </Layout>
  );
}
