import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Index6Page() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Slider main container Start */}
      <div className="home6-slider section">
        <div className="home6-slide-item" data-bg-image="/assets/images/slider/home6/slide1-1.webp">
          <div className="container">
            <div className="home6-slide1-content">
              <h3 className="sub-title">
                Little Simple Things
              </h3>
              <h2 className="title">
                Where Motivations Take Root
              </h2>
              <div className="link">
                <Link to="/shop.html" className="btn btn-light btn-hover-black">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider main container End */}
      {/* Category Banner Section Start */}
      <div className="section section-fluid learts-pt-30">
        <div className="container">
          <div className="category-banner1-carousel">
            <div className="col">
              <div className="category-banner1">
                <div className="inner">
                  <Link to="/shop.html" className="image">
                    <img src="/assets/images/banner/category/banner-s1-1.webp" alt="" />
                  </Link>
                  <div className="content">
                    <h3 className="title">
                      <Link to="/shop.html">
                        Gift ideas
                      </Link>
                      <span className="number">
                        16
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="category-banner1">
                <div className="inner">
                  <Link to="/shop.html" className="image">
                    <img src="/assets/images/banner/category/banner-s1-2.webp" alt="" />
                  </Link>
                  <div className="content">
                    <h3 className="title">
                      <Link to="/shop.html">
                        Home Decor
                      </Link>
                      <span className="number">
                        16
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="category-banner1">
                <div className="inner">
                  <Link to="/shop.html" className="image">
                    <img src="/assets/images/banner/category/banner-s1-3.webp" alt="" />
                  </Link>
                  <div className="content">
                    <h3 className="title">
                      <Link to="/shop.html">
                        Kids &amp; Babies
                      </Link>
                      <span className="number">
                        6
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="category-banner1">
                <div className="inner">
                  <Link to="/shop.html" className="image">
                    <img src="/assets/images/banner/category/banner-s1-4.webp" alt="" />
                  </Link>
                  <div className="content">
                    <h3 className="title">
                      <Link to="/shop.html">
                        Kitchen
                      </Link>
                      <span className="number">
                        15
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="category-banner1">
                <div className="inner">
                  <Link to="/shop.html" className="image">
                    <img src="/assets/images/banner/category/banner-s1-5.webp" alt="" />
                  </Link>
                  <div className="content">
                    <h3 className="title">
                      <Link to="/shop.html">
                        Kniting &amp; Sewing
                      </Link>
                      <span className="number">
                        4
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner Section End */}
      {/* Product Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row learts-mb-50">
            <div className="col">
              {/* Section Title Start */}
              <div className="section-title text-center mb-0">
                <h3 className="sub-title">
                  Just for you
                </h3>
                <h2 className="title title-icon-both">
                  Making &amp; crafting
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          {/* Product Tab List Start */}
          <div className="row learts-mb-40">
            <div className="col">
              <ul className="nav text-uppercase justify-content-center mx-n1 mb-n2">
                <li className="nav-item mx-1 mb-2">
                  <a href="#product-all" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary active">
                    All
                  </a>
                </li>
                <li className="nav-item mx-1 mb-2">
                  <a href="#product-gift-ideas" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">
                    Gift ideas
                  </a>
                </li>
                <li className="nav-item mx-1 mb-2">
                  <a href="#product-home-decor" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">
                    Home Decor
                  </a>
                </li>
                <li className="nav-item mx-1 mb-2">
                  <a href="#product-kitchen" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">
                    Kitchen
                  </a>
                </li>
                <li className="nav-item mx-1 mb-2">
                  <a href="#product-toys" data-bs-toggle="tab" className="btn btn-md btn-light btn-hover-primary">
                    Toys
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Product Tab List End */}
          <div className="tab-content">
            <div className="tab-pane fade show active" id="product-all">
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
                        <img src="/assets/images/product/s270/product-19.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Country Feast Set
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-20.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Wooden Condiment Cups
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-21.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <img src="/assets/images/product/s270/product-22.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <span className="product-badges">
                          <span className="hot">
                            hot
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Round Tray Plate
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-24.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-24-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Metal Wall Clock
                        </Link>
                      </h6>
                      <span className="price">
                        
                                        $200.00 - $250.00
                                    
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
            <div className="tab-pane fade" id="product-gift-ideas">
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
                        <img src="/assets/images/product/s270/product-21.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <img src="/assets/images/product/s270/product-22.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <span className="product-badges">
                          <span className="hot">
                            hot
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Round Tray Plate
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-24.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-24-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Metal Wall Clock
                        </Link>
                      </h6>
                      <span className="price">
                        
                                        $200.00 - $250.00
                                    
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
                        <img src="/assets/images/product/s270/product-19.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Country Feast Set
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-20.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Wooden Condiment Cups
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
            <div className="tab-pane fade" id="product-home-decor">
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
                        <span className="product-badges">
                          <span className="hot">
                            hot
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Round Tray Plate
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-24.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-24-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Metal Wall Clock
                        </Link>
                      </h6>
                      <span className="price">
                        
                                        $200.00 - $250.00
                                    
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
                        <img src="/assets/images/product/s270/product-19.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Country Feast Set
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-20.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Wooden Condiment Cups
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-21.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <img src="/assets/images/product/s270/product-22.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
            <div className="tab-pane fade" id="product-kitchen">
              {/* Products Start */}
              <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="/product-details.html" className="image">
                        <span className="product-badges">
                          <span className="onsale">
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-24.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-24-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Metal Wall Clock
                        </Link>
                      </h6>
                      <span className="price">
                        
                                        $200.00 - $250.00
                                    
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
                        <img src="/assets/images/product/s270/product-19.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Country Feast Set
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-20.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Wooden Condiment Cups
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-21.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <img src="/assets/images/product/s270/product-22.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <span className="product-badges">
                          <span className="hot">
                            hot
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Round Tray Plate
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
            <div className="tab-pane fade" id="product-toys">
              {/* Products Start */}
              <div className="products row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                <div className="col">
                  <div className="product">
                    <div className="product-thumb">
                      <Link to="/product-details.html" className="image">
                        <span className="product-badges">
                          <span className="hot">
                            hot
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-23.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-23-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Round Tray Plate
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-24.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-24-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                            -10%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-16.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-16-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Metal Wall Clock
                        </Link>
                      </h6>
                      <span className="price">
                        
                                        $200.00 - $250.00
                                    
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
                        <img src="/assets/images/product/s270/product-19.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Country Feast Set
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-20.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
                      <h6 className="title">
                        <Link to="/product-details.html">
                          Wooden Condiment Cups
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
                        <span className="product-badges">
                          <span className="onsale">
                            -13%
                          </span>
                        </span>
                        <img src="/assets/images/product/s270/product-21.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
                        <img src="/assets/images/product/s270/product-22.webp" alt="Product Image" />
                        <img className="image-hover" src="/assets/images/product/s270/product-1-hover.webp" alt="Product Image" />
                      </Link>
                      <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                        <i className="far fa-heart"></i>
                      </Link>
                    </div>
                    <div className="product-info">
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
          </div>
        </div>
      </div>
      {/* Product Section End */}
      {/* Product/Sale Banner Section Start */}
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-1 learts-mb-n30">
            <div className="col learts-mb-30">
              <div className="sale-banner8">
                <img src="/assets/images/banner/sale/sale-banner8-1.webp" alt="Sale Banner Image" />
                <div className="content">
                  <h2 className="title">
                    Little simple 
                    <br />
                     things
                  </h2>
                  <a href="#" className="link">
                    shop now
                  </a>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="sale-banner8">
                <img src="/assets/images/banner/sale/sale-banner8-2.webp" alt="Sale Banner Image" />
                <div className="content">
                  <h2 className="title">
                    Holiday 
                    <br />
                     Gifts
                  </h2>
                  <a href="#" className="link">
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Product/Sale Banner Section End */}
      {/* Deal of the Day Section Start */}
      <div className="section section-fluid section-padding" data-bg-color="#f4f3ec">
        <div className="container">
          <div className="row align-items-center learts-mb-n30">
            <div className="col-lg-6 col-12 learts-mb-30">
              <div className="product-deal-image text-center">
                <img src="/assets/images/product/deal-product-2.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-12 learts-mb-30">
              <div className="product-deal-content">
                <h2 className="title">
                  Deal of the day
                </h2>
                <div className="desc">
                  <p>
                    Years of experience brought about by our skilled craftsmen could ensure that every piece produced is a work of art. Our focus is always the best quality possible.
                  </p>
                </div>
                <div className="countdown1" data-countdown="2024/01/01"></div>
                <Link to="/shop.html" className="btn btn-dark btn-hover-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Deal of the Day Section End */}
      {/* List Product Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 learts-mb-n30">
            {/* New arrivals Start */}
            <div className="col learts-mb-30">
              <div className="block-title">
                <h3 className="title">
                  New arrivals
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
                      <img src="/assets/images/product/list-product-2.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Motorized Tricycle
                      </Link>
                    </h6>
                    <span className="price">
                      
                                    $35.00
                                
                    </span>
                  </div>
                </div>
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-3.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Walnut Cutting Board
                      </Link>
                    </h6>
                    <span className="price">
                      
                                    $100.00
                                
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
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-5.webp" alt="List product" />
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
                <div className="list-product">
                  <div className="thumbnail">
                    <Link to="/product-details.html">
                      <img src="/assets/images/product/list-product-6.webp" alt="List product" />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link to="/product-details.html">
                        Clear Silicate Teapot
                      </Link>
                    </h6>
                    <span className="price">
                      
                                    $140.00
                                
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* New arrivals End */}
            {/* Top rate Start */}
            <div className="col learts-mb-30">
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
            <div className="col learts-mb-30">
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
      {/* List Product Section End */}
      {/* Gallery Section Start */}
      <div className="section section-padding pt-0">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h3 className="sub-title">
              Follow us on Instagram
            </h3>
            <h2 className="title">
              @learts_shop
            </h2>
          </div>
          {/* Section Title End */}
          <div className="instafeed instafeed-carousel instafeed-carousel1">
            <a className="instafeed-item" href="#">
              <img src="/assets/images/instagram/instagram-1.webp" alt="instagram image" />
            </a>
            <a className="instafeed-item" href="#">
              <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
            </a>
            <a className="instafeed-item" href="#">
              <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
            </a>
            <a className="instafeed-item" href="#">
              <img src="/assets/images/instagram/instagram-4.webp" alt="instagram image" />
            </a>
            <a className="instafeed-item" href="#">
              <img src="/assets/images/instagram/instagram-2.webp" alt="instagram image" />
            </a>
            <a className="instafeed-item" href="#">
              <img src="/assets/images/instagram/instagram-3.webp" alt="instagram image" />
            </a>
          </div>
        </div>
      </div>
      {/* Gallery Section End */}
      </>
    </Layout>
  );
}
