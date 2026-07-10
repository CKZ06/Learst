import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Index10Page() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Slider main container Start */}
      <div className="section section-fluid">
        <div className="container">
          <div className="row learts-mb-n30">
            <div className="col-lg-6 learts-mb-30">
              <div className="sale-banner4">
                <div className="inner">
                  <img src="/assets/images/banner/sale/sale-banner4-1.webp" alt="Products Image" />
                  <div className="content">
                    <h3 className="sub-title">
                      Little simple things.
                    </h3>
                    <h2 className="title">
                      Live out your life
                    </h2>
                    <Link className="button-banner" to="/shop.html">
                      <img src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="Sale Banner button" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 learts-mb-30">
              <div className="row learts-mb-n30">
                <div className="col-12 learts-mb-30">
                  <div className="sale-banner5">
                    <a href="#" className="inner">
                      <img src="/assets/images/banner/sale/sale-banner5-1.webp" alt="Sale Banner Image" />
                      <div className="content">
                        <h3 className="title">
                          Holiday
                          <br />
                           Gifts
                        </h3>
                        <span className="price">
                          From $9.00
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-12 learts-mb-30">
                  <div className="sale-banner6">
                    <div className="inner">
                      <img src="/assets/images/banner/sale/sale-banner6-1.webp" alt="Sale Banner Image" />
                      <div className="content">
                        <img className="icon" src="/assets/images/banner/sale/sale-banner1-1.1.webp" alt="" />
                        <h3 className="title">
                          Spring sale
                        </h3>
                        <img className="price" src="/assets/images/banner/sale/sale-banner6-1.1.webp" alt="" />
                        <a href="#" className="link">
                          Shop now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider main container End */}
      {/* Products Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title4 text-center">
            <h2 className="title title-icon-both">
              Just for you
            </h2>
          </div>
          {/* Section Title End */}
          {/* Product Tab Start */}
          <div className="row">
            <div className="col-12">
              <ul className="product-tab-list tab-hover2 nav">
                <li>
                  <a className="active" data-bs-toggle="tab" href="#tab-new-sale">
                    New arrivals
                  </a>
                </li>
                <li>
                  <a data-bs-toggle="tab" href="#tab-sale-items">
                    Sale items
                  </a>
                </li>
                <li>
                  <a data-bs-toggle="tab" href="#tab-best-sellers">
                    Best sellers
                  </a>
                </li>
              </ul>
              <div className="prodyct-tab-content1 tab-content">
                <div className="tab-pane fade show active" id="tab-new-sale">
                  {/* Products Start */}
                  <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="onsale">
                                -13%
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-1.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Boho Beard Mug
                            </Link>
                          </h6>
                          <span className="price">
                            <span className="old">
                              $45.00
                            </span>
                            <span className="new">
                              $39.00
                            </span>
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-2.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-2-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Motorized Tricycle
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $35.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <span className="product-badges">
                            <span className="hot">
                              hot
                            </span>
                          </span>
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-3.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-3-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Walnut Cutting Board
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $100.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="onsale">
                                -27%
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-4.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-4-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Pizza Plate Tray
                            </Link>
                          </h6>
                          <span className="price">
                            <span className="old">
                              $30.00
                            </span>
                            <span className="new">
                              $22.00
                            </span>
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-5.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-5-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                          <div className="product-options">
                            <ul className="colors">
                              <li style={{backgroundColor: '#c2c2c2'}}>
                                color one
                              </li>
                              <li style={{backgroundColor: '#374140'}}>
                                color two
                              </li>
                              <li style={{backgroundColor: '#8ea1b2'}}>
                                color three
                              </li>
                            </ul>
                            <ul className="sizes">
                              <li>
                                Large
                              </li>
                              <li>
                                Medium
                              </li>
                              <li>
                                Small
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Minimalist Ceramic Pot
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $120.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-6.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-6-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Clear Silicate Teapot
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $140.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="hot">
                                hot
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Lucky Wooden Elephant
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $35.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="outofstock">
                                <i className="far fa-frown"></i>
                              </span>
                              <span className="hot">
                                hot
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-8.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-8-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                          <div className="product-options">
                            <ul className="colors">
                              <li style={{backgroundColor: '#000000'}}>
                                color one
                              </li>
                              <li style={{backgroundColor: '#b2483c'}}>
                                color two
                              </li>
                            </ul>
                            <ul className="sizes">
                              <li>
                                Large
                              </li>
                              <li>
                                Medium
                              </li>
                              <li>
                                Small
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Decorative Christmas Fox
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $50.00
                                            
                          </span>
                          <div className="product-buttons">
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
                  {/* Products End */}
                </div>
                <div className="tab-pane fade" id="tab-sale-items">
                  {/* Products Start */}
                  <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="onsale">
                                -27%
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-4.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-4-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Pizza Plate Tray
                            </Link>
                          </h6>
                          <span className="price">
                            <span className="old">
                              $30.00
                            </span>
                            <span className="new">
                              $22.00
                            </span>
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-5.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-5-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                          <div className="product-options">
                            <ul className="colors">
                              <li style={{backgroundColor: '#c2c2c2'}}>
                                color one
                              </li>
                              <li style={{backgroundColor: '#374140'}}>
                                color two
                              </li>
                              <li style={{backgroundColor: '#8ea1b2'}}>
                                color three
                              </li>
                            </ul>
                            <ul className="sizes">
                              <li>
                                Large
                              </li>
                              <li>
                                Medium
                              </li>
                              <li>
                                Small
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Minimalist Ceramic Pot
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $120.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-6.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-6-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Clear Silicate Teapot
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $140.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="hot">
                                hot
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Lucky Wooden Elephant
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $35.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="outofstock">
                                <i className="far fa-frown"></i>
                              </span>
                              <span className="hot">
                                hot
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-8.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-8-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                          <div className="product-options">
                            <ul className="colors">
                              <li style={{backgroundColor: '#000000'}}>
                                color one
                              </li>
                              <li style={{backgroundColor: '#b2483c'}}>
                                color two
                              </li>
                            </ul>
                            <ul className="sizes">
                              <li>
                                Large
                              </li>
                              <li>
                                Medium
                              </li>
                              <li>
                                Small
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Decorative Christmas Fox
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $50.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-9.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-9-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Aluminum Equestrian
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $100.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-10.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-10-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Fish Cut Out Set
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $9.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="onsale">
                                -13%
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-1.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Boho Beard Mug
                            </Link>
                          </h6>
                          <span className="price">
                            <span className="old">
                              $45.00
                            </span>
                            <span className="new">
                              $39.00
                            </span>
                          </span>
                          <div className="product-buttons">
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
                  {/* Products End */}
                </div>
                <div className="tab-pane fade" id="tab-best-sellers">
                  {/* Products Start */}
                  <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-6.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-6-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Clear Silicate Teapot
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $140.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="hot">
                                hot
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-7.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-7-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Lucky Wooden Elephant
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $35.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="outofstock">
                                <i className="far fa-frown"></i>
                              </span>
                              <span className="hot">
                                hot
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-8.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-8-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                          <div className="product-options">
                            <ul className="colors">
                              <li style={{backgroundColor: '#000000'}}>
                                color one
                              </li>
                              <li style={{backgroundColor: '#b2483c'}}>
                                color two
                              </li>
                            </ul>
                            <ul className="sizes">
                              <li>
                                Large
                              </li>
                              <li>
                                Medium
                              </li>
                              <li>
                                Small
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Decorative Christmas Fox
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $50.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-9.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-9-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Aluminum Equestrian
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $100.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-10.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-10-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Fish Cut Out Set
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $9.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <span className="product-badges">
                              <span className="onsale">
                                -13%
                              </span>
                            </span>
                            <img src="/assets/images/product/s270/product-1.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Boho Beard Mug
                            </Link>
                          </h6>
                          <span className="price">
                            <span className="old">
                              $45.00
                            </span>
                            <span className="new">
                              $39.00
                            </span>
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-2.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-2-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Motorized Tricycle
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $35.00
                                            
                          </span>
                          <div className="product-buttons">
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
                    <div className="col">
                      <div className="product">
                        <div className="product-thumb">
                          <span className="product-badges">
                            <span className="hot">
                              hot
                            </span>
                          </span>
                          <Link to="/product-details.html" className="image">
                            <img src="/assets/images/product/s270/product-3.webp" alt="Product Image" />
                            <img className="image-hover" src="/assets/images/product/s270/product-3-hover.webp" alt="Product Image" />
                          </Link>
                          <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                            <i className="far fa-heart"></i>
                          </Link>
                        </div>
                        <div className="product-info">
                          <h6 className="title">
                            <Link to="/product-details.html">
                              Walnut Cutting Board
                            </Link>
                          </h6>
                          <span className="price">
                            
                                                $100.00
                                            
                          </span>
                          <div className="product-buttons">
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
                  {/* Products End */}
                </div>
              </div>
            </div>
          </div>
          {/* Product Tab End */}
          <div className="row g-0 justify-content-center learts-mt-50">
            <a href="#" className="btn p-0">
              <i className="ti-plus"></i>
               load more ...
            </a>
          </div>
        </div>
      </div>
      {/* Products Section End */}
      {/* Sale Banner Start */}
      <div className="section section-padding" data-bg-color="#f4ede7">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 align-self-center">
              <div className="product-deal-image text-center">
                <img src="/assets/images/banner/sale/sale-banner9-2.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="sale-banner9 p-0">
                <div className="inner">
                  <div className="content">
                    <h3 className="title">
                      New collection
                    </h3>
                    <span className="cuppon">
                      EVERYTHING WITH CODE: 
                      <span className="code">
                        NEW 30
                      </span>
                    </span>
                    <span className="offer">
                      30% OFF
                    </span>
                    <Link to="/shop.html" className="btn btn-dark btn-hover-primary">
                      shop now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sale Banner End */}
      {/* Feature Section Start */}
      <div className="section learts-pt-30 learts-pb-30" data-bg-color="#eee4dc">
        <div className="container">
          <div className="row learts-mb-n30">
            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <i className="fas fa-truck"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    Free shipping
                  </h4>
                  <p>
                    All orders over $59
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <i className="fas fa-redo-alt"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    Free returns
                  </h4>
                  <p>
                    Free 7-day returns
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    24/7 Support
                  </h4>
                  <p>
                    Dedicated support
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon">
                  <i className="fas fa-gift"></i>
                </div>
                <div className="content">
                  <h4 className="title">
                    Gift cards
                  </h4>
                  <p>
                    Code promotion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Section End */}
      {/* Banner & List Product Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row learts-mb-n30">
            {/* Sale banner Start */}
            <div className="col-lg-4 col-12 learts-mb-30">
              <div className="sale-banner10">
                <div className="inner">
                  <img src="/assets/images/banner/sale/sale-banner10-1.webp" alt="Sale Banner Image" />
                  <div className="content">
                    <span className="sub-title">
                      Superb quality
                    </span>
                    <h2 className="title">
                      GIFT IDEAS
                    </h2>
                    <img src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
            {/* Sale banner End */}
            {/* Top rate Start */}
            <div className="col-lg-4 col-md-6 col-12 learts-mb-30">
              <div className="block-title">
                <h3 className="title">
                  Top rate
                </h3>
              </div>
              <div className="product-list-slider">
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-7.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Pottery Bowl Set
                      </Link>
                    </h6>
                    <span className="price">
                      <span className="old">
                        $45.00
                      </span>
                      <span className="new">
                        $39.00
                      </span>
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-8.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Electric Egg Blender
                      </Link>
                    </h6>
                    <span className="price">
                      
                                    $200.00
                                
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-9.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Hallmark Grandma Mug
                      </Link>
                    </h6>
                    <span className="price">
                      <span className="old">
                        $45.00
                      </span>
                      <span className="new">
                        $39.00
                      </span>
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-10.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Modern Camera
                      </Link>
                    </h6>
                    <span className="price">
                      
                                    $380.00
                                
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-11.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Steel Watering Can
                      </Link>
                    </h6>
                    <span className="price">
                      <span className="old">
                        $20.00
                      </span>
                      <span className="new">
                        $18.00
                      </span>
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-12.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Minimalist Ceramic Pot
                      </Link>
                    </h6>
                    <span className="price">
                      
                                    $120.00
                                
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '100%'}}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Top rate End */}
            {/* Sale items Start */}
            <div className="col-lg-4 col-md-6 col-12 learts-mb-30">
              <div className="block-title">
                <h3 className="title">
                  Sale items
                </h3>
              </div>
              <div className="product-list-slider">
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-1.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Boho Beard Mug
                      </Link>
                    </h6>
                    <span className="price">
                      <span className="old">
                        $45.00
                      </span>
                      <span className="new">
                        $39.00
                      </span>
                    </span>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-13.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Antique Sewing Scissors
                      </Link>
                    </h6>
                    <span className="price">
                      <span className="old">
                        $15.00
                      </span>
                      <span className="new">
                        $12.00
                      </span>
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '80%'}}></span>
                    </div>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-4.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Pizza Plate Tray
                      </Link>
                    </h6>
                    <span className="price">
                      <span className="old">
                        $30.00
                      </span>
                      <span className="new">
                        $22.00
                      </span>
                    </span>
                    <div className="ratting">
                      <span className="rate" style={{width: '80%'}}></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sale items End */}
          </div>
        </div>
      </div>
      {/* Banner & List Product Section End */}
      {/* Separator */}
      <div className="section">
        <div className="container">
          <hr className="m-0" />
        </div>
      </div>
      {/* Separator */}
      {/* Brands Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="section-title2 text-md-left text-center row justify-content-between align-items-center">
            <div className="col-md-auto col-12">
              {/* Section Title Start */}
              <h2 className="title title-icon-right">
                Shop by brands
              </h2>
              {/* Section Title End */}
            </div>
            <div className="col-md-auto d-none d-md-block mt-4 mt-md-0">
              <a href="#" className="btn btn-light btn-hover-black">
                view all
              </a>
            </div>
          </div>
          <div className="row align-items-center row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n50">
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-1.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-2.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-3.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-4.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-5.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-6.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-7.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-50">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-8.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
          </div>
          <div className="row d-md-none learts-mt-50">
            <div className="col text-center">
              <a href="#" className="btn btn-light btn-hover-black">
                view all
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Brands Section End */}
      {/* Testimonials Section Start */}
      <div className="section section-fluid">
        <div className="container">
          <div className="section-padding" data-bg-image="/assets/images/bg/bg-1.webp">
            <div className="container">
              <div className="testimonial-slider">
                <div className="col">
                  <div className="testimonial2">
                    <p>
                      There's nothing would satisfy me much more than a worry-free clean and responsive theme for my high-traffic site.
                    </p>
                    <div className="author">
                      <img src="/assets/images/testimonial/testimonial-1.webp" alt="" />
                      <div className="content">
                        <h6 className="name">
                          Anais Coulon
                        </h6>
                        <span className="title">
                          Actor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="testimonial2">
                    <p>
                      Really good design/documentation, pretty much everything is nicely setup. The best choice for Woocommerce shop.
                    </p>
                    <div className="author">
                      <img src="/assets/images/testimonial/testimonial-2.webp" alt="" />
                      <div className="content">
                        <h6 className="name">
                          Ian Schneider
                        </h6>
                        <span className="title">
                          Actor
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="testimonial2">
                    <p>
                      ThemeMove deserves 5 star for theme’s features, design quality, flexibility, customizability and support service!
                    </p>
                    <div className="author">
                      <img src="/assets/images/testimonial/testimonial-3.webp" alt="" />
                      <div className="content">
                        <h6 className="name">
                          Florence Polla
                        </h6>
                        <span className="title">
                          Customer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="testimonial2">
                    <p>
                      Thanks for always keeping your WordPress themes up to date. Your level of support is second to none.
                    </p>
                    <div className="author">
                      <img src="/assets/images/testimonial/testimonial-4.webp" alt="" />
                      <div className="content">
                        <h6 className="name">
                          Sally Ramsey
                        </h6>
                        <span className="title">
                          Reporter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials Section End */}
      {/* Blog Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h3 className="sub-title">
              Blog updates
            </h3>
            <h2 className="title title-icon-both">
              From our blogs
            </h2>
          </div>
          {/* Section Title End */}
          <div className="blog-carousel">
            <div className="col">
              <div className="blog">
                <div className="image">
                  <Link to="/blog-details-right-sidebar.html">
                    <img src="/assets/images/blog/s370/blog-1.webp" alt="Blog Image" />
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar"></i>
                      <a href="#">
                        January 22, 2020
                      </a>
                    </li>
                    <li>
                      <i className="far fa-eye"></i>
                       201 views
                    </li>
                  </ul>
                  <h5 className="title">
                    <Link to="/blog-details-right-sidebar.html">
                      Start a Kickass Online Blog
                    </Link>
                  </h5>
                  <div className="desc">
                    <p>
                      Working on writing our first book has been one of the most amazing projects. It seems like it will be forever until I get to show you what we’ve been…
                    </p>
                  </div>
                  <Link to="/blog-details-right-sidebar.html" className="link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="blog">
                <div className="image">
                  <Link to="/blog-details-right-sidebar.html">
                    <img src="/assets/images/blog/s370/blog-2.webp" alt="Blog Image" />
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar"></i>
                      <a href="#">
                        January 22, 2020
                      </a>
                    </li>
                    <li>
                      <i className="far fa-eye"></i>
                       158 views
                    </li>
                  </ul>
                  <h5 className="title">
                    <Link to="/blog-details-right-sidebar.html">
                      Tile Tray with Brass Handles
                    </Link>
                  </h5>
                  <div className="desc">
                    <p>
                      Happy New Year All! I am back after the holiday break and so excited for all the home projects I have planned in 2020. So when they asked me to come…
                    </p>
                  </div>
                  <Link to="/blog-details-right-sidebar.html" className="link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="blog">
                <div className="image">
                  <Link to="/blog-details-right-sidebar.html">
                    <img src="/assets/images/blog/s370/blog-3.webp" alt="Blog Image" />
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar"></i>
                      <a href="#">
                        January 22, 2020
                      </a>
                    </li>
                    <li>
                      <i className="far fa-eye"></i>
                       119 views
                    </li>
                  </ul>
                  <h5 className="title">
                    <Link to="/blog-details-right-sidebar.html">
                      Dining Table Chairs Makeover
                    </Link>
                  </h5>
                  <div className="desc">
                    <p>
                      I did not know exactly the shape I was looking for, but knew that I wanted to paint them with this SUPER pretty Krylon® Italian Olive color. I stopped at…
                    </p>
                  </div>
                  <Link to="/blog-details-right-sidebar.html" className="link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="blog">
                <div className="image">
                  <Link to="/blog-details-right-sidebar.html">
                    <img src="/assets/images/blog/s370/blog-4.webp" alt="Blog Image" />
                  </Link>
                </div>
                <div className="content">
                  <ul className="meta">
                    <li>
                      <i className="far fa-calendar"></i>
                      <a href="#">
                        January 22, 2020
                      </a>
                    </li>
                    <li>
                      <i className="far fa-eye"></i>
                       83 views
                    </li>
                  </ul>
                  <h5 className="title">
                    <Link to="/blog-details-right-sidebar.html">
                      Faux Map Drawer Dresser
                    </Link>
                  </h5>
                  <div className="desc">
                    <p>
                      I gave you all a peek at my guest room makeover yesterday and promised I would share all the details on my DIY Map Dresser, so here we go! I initially had…
                    </p>
                  </div>
                  <Link to="/blog-details-right-sidebar.html" className="link">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Section End */}
      {/* Subscribe Section Start */}
      <div className="section learts-pt-60 learts-pb-60" data-bg-image="/assets/images/bg/bg-3.webp">
        <div className="container">
          <div className="row align-items-center learts-mb-n30">
            <div className="col-lg-5 learts-mb-30">
              {/* Section Title Start */}
              <div className="section-title text-center mb-0">
                <h3 className="sub-title">
                  Stay connected 
                  <br />
                   with us
                </h3>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-7 learts-mb-30">
              <span className="d-block h4 text-heading learts-mb-10 text-center text-lg-start">
                Subscribe to our newsletter.
              </span>
              <form id="mc-form" className="mc-form widget-subscibe m-lg-0">
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
          </div>
        </div>
      </div>
      {/* Subscribe Section End */}
      </>
    </Layout>
  );
}
