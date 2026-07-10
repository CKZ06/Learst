export default function Footer() {
  return (
    <>
    <div className="footer1-section section section-padding">
      <div className="container">
        <div className="row text-center row-cols-1">
          <div className="footer1-logo col text-center">
            <img src="/assets/images/logo/logo.webp" alt="" />
          </div>
          <div className="footer1-menu col">
            <ul className="widget-menu justify-content-center">
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
          <div className="footer1-subscribe d-flex flex-column col">
            <form id="mc-form" className="mc-form widget-subscibe">
              <input id="mc-email" autoComplete="off" type="email" placeholder="Enter your e-mail address" />
              <button id="mc-submit" className="btn btn-dark">
                subscibe
              </button>
            </form>
            {/* mailchimp-alerts Start */}
            <div className="mailchimp-alerts text-centre">
              <div className="mailchimp-submitting"></div>
              {/* mailchimp-submitting end */}
              <div className="mailchimp-success text-success"></div>
              {/* mailchimp-success end */}
              <div className="mailchimp-error text-danger"></div>
              {/* mailchimp-error end */}
            </div>
            {/* mailchimp-alerts end */}
          </div>
          <div className="footer1-social col">
            <ul className="widget-social justify-content-center">
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
          <div className="footer1-copyright col">
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
  );
}
