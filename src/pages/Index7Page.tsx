import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Index7Page() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Slider main container Start */}
      <div className="home7-slider swiper-container section">
        <div className="swiper-wrapper">
          <div className="home7-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-color="#F8F3EF">
            <div className="container">
              <div className="home7-slide1-content">
                <span className="name">
                  Large
                </span>
                <h2 className="title">
                  Cutting Board
                </h2>
                <div className="home7-slide1-image">
                  <span className="price">
                    
                                only
                                
                    <span className="amount">
                      $39
                    </span>
                  </span>
                  <img src="/assets/images/slider/home7/slide1-1.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="home7-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home7/slide2-1.webp">
            <div className="container">
              <div className="home7-slide2-content">
                <span className="sub-title">
                  First-Class
                </span>
                <h2 className="title">
                  CRAPE RECIPES
                </h2>
                <div className="link">
                  <Link to="/shop.html" className="btn btn-light btn-hover-black">
                    $39 PURCHASE NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home7-slider-prev swiper-button-prev">
          <i className="ti-angle-left"></i>
        </div>
        <div className="home7-slider-next swiper-button-next">
          <i className="ti-angle-right"></i>
        </div>
      </div>
      {/* Slider main container End */}
      {/* About Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row learts-mb-n30">
            {/* About Us Content Start */}
            <div className="col-lg-5 col-md-6 col-12 ms-lg-auto align-self-center learts-mb-30">
              <div className="about-us">
                <div className="inner">
                  <img className="logo" src="/assets/images/about/about-1.webp" alt="About Image" />
                  <p>
                    It’s all about the joy when finally you have done something beautiful on your own and observe it with quite a great deal of proud &amp; successful feeling.
                  </p>
                  <Link to="/shop.html" className="btn btn-primary2 btn-hover-black">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            {/* About Us Content End */}
            {/* About Us Image Start */}
            <div className="col-md-6 col-12 ms-lg-auto learts-mb-30">
              <div className="about-us-image">
                <img src="/assets/images/about/about-2.webp" alt="About Image" />
              </div>
            </div>
            {/* About Us Image End */}
          </div>
        </div>
      </div>
      {/* About Section End */}
      {/* Product Overview Section Start */}
      <div className="section section-fluid section-padding pt-0">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h2 className="title title-icon-both">
              Product Overview
            </h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never find elsewhere.
            </p>
          </div>
          {/* Section Title End */}
          <div className="row learts-mb-n30">
            <div className="col-lg-6 col-12 learts-mb-30">
              <div className="sale-banner7">
                <div className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/sale/sale-banner7-4.webp" alt="Sale Banner Image" />
                  </div>
                  <div className="content">
                    <h2 className="title">
                      Caught
                    </h2>
                    <h3 className="sub-title">
                      in the moment
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 learts-mb-30">
              <div className="row learts-mb-n30">
                <div className="col-sm-6 col-12 learts-mb-30">
                  <div className="sale-banner7">
                    <div className="inner">
                      <div className="image">
                        <img src="/assets/images/banner/sale/sale-banner7-5.webp" alt="Sale Banner Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 learts-mb-30">
                  <div className="sale-banner7">
                    <div className="inner">
                      <div className="image">
                        <img src="/assets/images/banner/sale/sale-banner7-6.webp" alt="Sale Banner Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 learts-mb-30">
                  <div className="sale-banner7">
                    <div className="inner">
                      <div className="image">
                        <img src="/assets/images/banner/sale/sale-banner7-7.webp" alt="Sale Banner Image" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-12 learts-mb-30">
                  <div className="sale-banner7">
                    <div className="inner">
                      <div className="image">
                        <img src="/assets/images/banner/sale/sale-banner7-8.webp" alt="Sale Banner Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product Overview Section End */}
      {/* Feature Section Start */}
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="row learts-mb-n30">
            <div className="col-xl-3 col-lg-4 col-12 me-auto learts-mb-30">
              <h1 className="fw-400">
                Lay this board along the center of your table!
              </h1>
            </div>
            <div className="col-lg-8 col-12 learts-mb-30">
              <div className="row learts-mb-n30">
                <div className="col-md-6 col-12 learts-mb-30">
                  <p className="text-heading fw-600 learts-mb-10">
                    Kitchen Ready
                  </p>
                  <p>
                    With rubber feet, it’s also finished with food grade oil to be kitchen ready.
                  </p>
                </div>
                <div className="col-md-6 col-12 learts-mb-30">
                  <p className="text-heading fw-600 learts-mb-10">
                    Large Dimension
                  </p>
                  <p>
                    Each board measures 16″ x 10-1/2″ x 1″ with rubber feet and juice groove.
                  </p>
                </div>
                <div className="col-md-6 col-12 learts-mb-30">
                  <p className="text-heading fw-600 learts-mb-10">
                    Maple Materials
                  </p>
                  <p>
                    Made from 100% American maple, our cutting boards are of superb quality.
                  </p>
                </div>
                <div className="col-md-6 col-12 learts-mb-30">
                  <p className="text-heading fw-600 learts-mb-10">
                    Express Shipping
                  </p>
                  <p>
                    Once receiving your order, we will turn your products around in 3- 5 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Section End */}
      {/* Video Banner Section Start */}
      <div className="section section-fluid">
        <div className="container">
          <div className="video-banner" data-bg-image="/assets/images/banner/video/video-banner-1.webp">
            <div className="content">
              <h2 className="title">
                LITTLE 
                <span>
                  SIMPLE
                </span>
                 THINGS
              </h2>
              <a href="https://www.youtube.com/watch?v=1jSsy7DtYgc" className="video-popup">
                <img src="/assets/images/icons/button-play.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Video Banner Section End */}
      {/* About Section Start */}
      <div className="section section-padding pb-0">
        <div className="container">
          <div className="row learts-mb-n30">
            {/* About Us Image Start */}
            <div className="col-md-6 col-12 learts-mb-30">
              <div className="about-us-image text-center">
                <img src="/assets/images/about/about-3.webp" alt="About Image" />
              </div>
            </div>
            {/* About Us Image End */}
            {/* About Us Content Start */}
            <div className="col-md-6 col-12 align-self-center learts-mb-30">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-12">
                  <div className="about-us">
                    <div className="inner">
                      <span className="special-title">
                        High quality
                      </span>
                      <h2 className="title no-shape learts-mb-20">
                        LARGE FOOD BOARD
                      </h2>
                      <img className="learts-mb-30" src="/assets/images/about/about-4.webp" alt="" />
                      <p>
                        Years of experience brought about by our skilled craftsmen could ensure that every piece produced is a work of art. Our focus is always the highest quality for our products.
                      </p>
                      <Link to="/shop.html" className="btn btn-primary2 btn-hover-black">
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
      {/* About Section End */}
      {/* Footer Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row learts-mb-n20">
            {/* Footer Menu & Copyright Start */}
            <div className="col-lg-9 col-12 learts-mb-20">
              <div className="row learts-mb-n10">
                <div className="footer5-menu col-12 learts-mb-10">
                  <ul className="widget-menu justify-content-lg-start justify-content-center">
                    <li>
                      <a href="#">
                        About us
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Store location
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Support
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Policy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        FAQs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer5-copyright col-12 learts-mb-10">
                  <p className="copyright text-lg-start text-center">
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
            </div>
            {/* Footer Menu & Copyright End */}
            {/* Footer Social Start */}
            <div className="footer5-social align-self-end col-lg-3 col-12 learts-mb-20">
              <ul className="widget-social justify-content-lg-end justify-content-center">
                <li className="hintT-top" data-hint="Twitter">
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="hintT-top" data-hint="Facebook">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hintT-top" data-hint="Instagram">
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="hintT-top" data-hint="Youtube">
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            {/* Footer Social End */}
          </div>
        </div>
      </div>
      {/* Footer Section End */}
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
