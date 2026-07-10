import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Index5Page() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Slider main container Start */}
      <div className="home5-slider swiper-container section">
        <div className="swiper-wrapper">
          <div className="home5-slide-item swiper-slide" data-swiper-autoplay="5000">
            <div className="row align-items-center learts-mb-n20">
              <div className="home5-slide1-content col-12 learts-mb-50">
                <span className="sub-title">
                  Live out your life
                </span>
                <h2 className="title">
                  Little simple things
                </h2>
              </div>
              <div className="col-12 learts-mb-20">
                <div className="row align-items-center learts-mb-n20">
                  <div className="home5-slide1-image text-sm-right col-sm-7 col-12 learts-mb-20">
                    <img src="/assets/images/slider/home5/slide1-1.webp" alt="Home 5 Slider Image" />
                  </div>
                  <div className="home5-slide1-image text-sm-right col-sm-5 col-12 learts-mb-20">
                    <img src="/assets/images/slider/home5/slide1-2.webp" alt="Home 5 Slider Image" />
                  </div>
                </div>
              </div>
              <div className="home5-slide-collection">
                NEW COLLECTION
              </div>
              <div className="home5-slide-sale">
                30% OFF
              </div>
              <div className="home5-slide-shop-link">
                <Link to="/shop.html">
                  Online Store
                </Link>
              </div>
            </div>
          </div>
          <div className="home5-slide-item swiper-slide" data-swiper-autoplay="5000">
            <div className="row align-items-center learts-mb-n20">
              <div className="home5-slide2-content col-md-6 col-12 learts-mb-20">
                <span className="sub-title">
                  Large 
                </span>
                <h2 className="title">
                  Marquetry Shelf
                </h2>
                <div className="link">
                  <Link to="/shop.html" className="btn">
                    shop now
                  </Link>
                </div>
              </div>
              <div className="home5-slide2-image col-md-6 col-12 learts-mb-20">
                <img src="/assets/images/slider/home5/slide2-1.webp" alt="Home 5 Slider Image" />
              </div>
              <div className="home5-slide-collection">
                NEW COLLECTION
              </div>
              <div className="home5-slide-sale">
                30% OFF
              </div>
              <div className="home5-slide-shop-link">
                <Link to="/shop.html">
                  Online Store
                </Link>
              </div>
            </div>
          </div>
          <div className="home5-slide-item swiper-slide" data-swiper-autoplay="5000">
            <div className="row align-items-center learts-mb-n20">
              <div className="home5-slide3-content col-12 learts-mb-50">
                <span className="sub-title">
                  Live out your life
                </span>
                <h2 className="title">
                  HANDICRAFT SHOP
                </h2>
              </div>
              <div className="home5-slide3-image col-12 learts-mb-20">
                <img src="/assets/images/slider/home5/slide3-1.webp" alt="Home 5 Slider Image" />
              </div>
              <div className="home5-slide-collection">
                NEW COLLECTION
              </div>
              <div className="home5-slide-sale">
                30% OFF
              </div>
              <div className="home5-slide-shop-link">
                <Link to="/shop.html">
                  Online Store
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home5-slider-prev swiper-button-prev d-none"></div>
        <div className="home5-slider-next swiper-button-next d-none"></div>
        <div className="home5-slider-pagination swiper-pagination"></div>
      </div>
      {/* Slider main container End */}
      {/* Product & Banner Section Start */}
      <div className="section section-fluid learts-mt-40">
        <div className="container">
          <div className="isotope-grid row learts-mb-n30">
            <div className="grid-sizer col-1"></div>
            <div className="grid-item col-lg-6 col-12 learts-mb-30">
              <div className="sale-banner7">
                <div className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/sale/sale-banner7-1.webp" alt="Sale Banner Image" />
                  </div>
                  <div className="content">
                    <h2 className="title">
                      Spring sale
                    </h2>
                    <h3 className="sub-title">
                      up to 10% all
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product2-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Aluminum Equestrian
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $100.00
                            
                  </span>
                </div>
                <div className="product2-buttons">
                  <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Add to Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Compare">
                    <i className="fas fa-random"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <img src="/assets/images/product/s328/product-16.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-16-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product2-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Metal Wall Clock
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $200.00 - $250.00
                            
                  </span>
                </div>
                <div className="product2-buttons">
                  <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Add to Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Compare">
                    <i className="fas fa-random"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-6 col-12 learts-mb-30">
              <div className="sale-banner7">
                <div className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/sale/sale-banner7-2.webp" alt="Sale Banner Image" />
                  </div>
                  <div className="content">
                    <h2 className="title">
                      Caught
                    </h2>
                    <h3 className="sub-title">
                      in the present
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product2-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Aluminum Equestrian
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $100.00
                            
                  </span>
                </div>
                <div className="product2-buttons">
                  <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Add to Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Compare">
                    <i className="fas fa-random"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <img src="/assets/images/product/s328/product-15.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-15-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product2-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Metal Wall Clock
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $9.00
                            
                  </span>
                </div>
                <div className="product2-buttons">
                  <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Add to Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Compare">
                    <i className="fas fa-random"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-6 col-12 learts-mb-30">
              <div className="sale-banner7">
                <div className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/sale/sale-banner7-3.webp" alt="Sale Banner Image" />
                  </div>
                  <div className="content">
                    <h2 className="title">
                      Cool summer
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <img src="/assets/images/product/s328/product-15.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-15-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product2-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      3D Attractive Pot
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $90.00
                            
                  </span>
                </div>
                <div className="product2-buttons">
                  <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Add to Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Compare">
                    <i className="fas fa-random"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-item col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <img src="/assets/images/product/s328/product-18.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-18-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product2-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Ultimate Glass Mug
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $50.00
                            
                  </span>
                </div>
                <div className="product2-buttons">
                  <a href="#quickViewModal" data-bs-toggle="modal" className="product-button hintT-top" data-hint="Quick View">
                    <i className="fas fa-search"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Add to Cart">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                  <a href="#" className="product-button hintT-top" data-hint="Compare">
                    <i className="fas fa-random"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product & Banner Section End */}
      <div className="section section-padding">
        <div className="container text-center">
          <img src="/assets/images/logo/logo-4.webp" alt="" />
          <p className="copyright">
            © 2023 learts. All Rights Reserved | 
            <strong>
              (+00) 123 567990
            </strong>
             | 
            <a href="mailto:contact@learts.com">
              contact@learts.com
            </a>
          </p>
        </div>
      </div>
      {/* Modal */}
      <div className="quickViewModal modal fade" id="quickViewModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="close" data-bs-dismiss="modal">
              ×
            </button>
            <div className="row learts-mb-n30">
              {/* Product Images Start */}
              <div className="col-lg-6 col-12 learts-mb-30">
                <div className="product-images">
                  <div className="product-gallery-slider-quickview">
                    <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-1.webp">
                      <img src="/assets/images/product/single/1/product-1.webp" alt="" />
                    </div>
                    <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-2.webp">
                      <img src="/assets/images/product/single/1/product-2.webp" alt="" />
                    </div>
                    <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-3.webp">
                      <img src="/assets/images/product/single/1/product-3.webp" alt="" />
                    </div>
                    <div className="product-zoom" data-image="assets/images/product/single/1/product-zoom-4.webp">
                      <img src="/assets/images/product/single/1/product-4.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Images End */}
              {/* Product Summery Start */}
              <div className="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
                <div className="product-summery customScroll">
                  <div className="product-ratings">
                    <span className="star-rating">
                      <span className="rating-active" style={{width: '100%'}}>
                        ratings
                      </span>
                    </span>
                    <a href="#reviews" className="review-link">
                      (
                      <span className="count">
                        3
                      </span>
                       customer reviews)
                    </a>
                  </div>
                  <h3 className="product-title">
                    Cleaning Dustpan &amp; Brush
                  </h3>
                  <div className="product-price">
                    £38.00 – £50.00
                  </div>
                  <div className="product-description">
                    <p>
                      Easy clip-on handle – Hold the brush and dustpan together for storage; the dustpan edge is serrated to allow easy scraping off the hair without entanglement. High-quality bristles – no burr damage, no scratches, thick and durable, comfortable to remove dust and smaller particles.
                    </p>
                  </div>
                  <div className="product-variations">
                    <table>
                      <tbody>
                        <tr>
                          <td className="label">
                            <span>
                              Size
                            </span>
                          </td>
                          <td className="value">
                            <div className="product-sizes">
                              <a href="#">
                                Large
                              </a>
                              <a href="#">
                                Medium
                              </a>
                              <a href="#">
                                Small
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>
                              Color
                            </span>
                          </td>
                          <td className="value">
                            <div className="product-colors">
                              <a href="#" data-bg-color="#000000"></a>
                              <a href="#" data-bg-color="#ffffff"></a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>
                              Quantity
                            </span>
                          </td>
                          <td className="value">
                            <div className="product-quantity">
                              <span className="qty-btn minus">
                                <i className="ti-minus"></i>
                              </span>
                              <input type="text" className="input-qty" value="1" />
                              <span className="qty-btn plus">
                                <i className="ti-plus"></i>
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="product-buttons">
                    <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="#" className="btn btn-dark btn-outline-hover-dark">
                      <i className="fas fa-shopping-cart"></i>
                       Add to Cart
                    </a>
                    <a href="#" className="btn btn-icon btn-outline-body btn-hover-dark">
                      <i className="fas fa-random"></i>
                    </a>
                  </div>
                  <div className="product-brands">
                    <span className="title">
                      Brands
                    </span>
                    <div className="brands">
                      <a href="#">
                        <img src="/assets/images/brands/brand-3.webp" alt="" />
                      </a>
                      <a href="#">
                        <img src="/assets/images/brands/brand-8.webp" alt="" />
                      </a>
                    </div>
                  </div>
                  <div className="product-meta mb-0">
                    <table>
                      <tbody>
                        <tr>
                          <td className="label">
                            <span>
                              SKU
                            </span>
                          </td>
                          <td className="value">
                            0404019
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>
                              Category
                            </span>
                          </td>
                          <td className="value">
                            <ul className="product-category">
                              <li>
                                <a href="#">
                                  Kitchen
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>
                              Tags
                            </span>
                          </td>
                          <td className="value">
                            <ul className="product-tags">
                              <li>
                                <a href="#">
                                  handmade
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  learts
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  mug
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  product
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  learts
                                </a>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td className="label">
                            <span>
                              Share on
                            </span>
                          </td>
                          <td className="va">
                            <div className="product-share">
                              <a href="#">
                                <i className="fab fa-facebook-f"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-twitter"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-google-plus-g"></i>
                              </a>
                              <a href="#">
                                <i className="fab fa-pinterest"></i>
                              </a>
                              <a href="#">
                                <i className="far fa-envelope"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Product Summery End */}
            </div>
          </div>
        </div>
      </div>
      {/* JS ============================================ */}
      {/* Vendors JS */}
      {/* Plugins JS */}
      {/* Use the minified version files listed below for better performance and remove the files listed above */}
      {/* <script src="assets/js/vendor/vendor.min.js"></script> <script src="assets/js/plugins/plugins.min.js"></script> */}
      {/* Main Activation JS */}
      </>
    </Layout>
  );
}
