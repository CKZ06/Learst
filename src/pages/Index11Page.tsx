import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Index11Page() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Slider main container Start */}
      <div className="home12-slider section swiper-container">
        <div className="swiper-wrapper">
          <div className="home12-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home12/slide-1.webp">
            <div className="home12-slide1-content">
              <div className="bg"></div>
              <span className="sub-title">
                First-rate
              </span>
              <h2 className="title">
                JUST FOR YOU
              </h2>
              <img className="price" src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="" />
            </div>
          </div>
          <div className="home12-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home12/slide-2.webp">
            <div className="home12-slide2-content">
              <div className="bg"></div>
              <img src="/assets/images/logo/logo-4-big.webp" alt="" className="icon" />
              <span className="title">
                Spring sale
              </span>
              <img className="price" src="/assets/images/slider/home12/slide-2.1.webp" alt="" />
              <div className="link">
                <Link to="/shop.html">
                  Shop collection
                </Link>
              </div>
            </div>
          </div>
          <div className="home12-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home12/slide-3.webp">
            <div className="home12-slide3-content">
              <h2 className="title">
                Just for you
              </h2>
              <h3 className="sub-title">
                <img className="left-icon" src="/assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon" />
                
                        Making &amp; crafting
                        
                <img className="right-icon" src="/assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon" />
              </h3>
              <span className="price">
                FROM $39
              </span>
            </div>
          </div>
        </div>
        <div className="home12-slider-prev swiper-button-prev">
          <i className="ti-angle-left"></i>
        </div>
        <div className="home12-slider-next swiper-button-next">
          <i className="ti-angle-right"></i>
        </div>
      </div>
      {/* Slider main container End */}
      {/* About us Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-12 mx-auto">
              <div className="about-us2">
                <div className="inner">
                  <h2 className="title">
                    Live out your life
                  </h2>
                  <h5 className="sub-title">
                    WELCOME TO LEARTS STORE
                  </h5>
                  <div className="desc">
                    <p>
                      Learts is an online shop of two passionate craftsmen where they sell handicrafts and arts’ works in the US. We provide high-end unique vases, wall arts, home accessories, and furniture pieces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About us Section End */}
      {/* Category Banner Section Start */}
      <div className="section">
        <div className="container">
          <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 learts-mb-n40">
            <div className="col learts-mb-40">
              <div className="category-banner4">
                <Link to="/shop.html" className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/category/banner-s4-1.webp" alt="" />
                  </div>
                  <div className="content" data-bg-color="#f4ede7">
                    <h3 className="title">
                      Gift ideas
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col learts-mb-40">
              <div className="category-banner4">
                <Link to="/shop.html" className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/category/banner-s4-2.webp" alt="" />
                  </div>
                  <div className="content" data-bg-color="#e8f5f2">
                    <h3 className="title">
                      Home Decor
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col learts-mb-40">
              <div className="category-banner4">
                <Link to="/shop.html" className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/category/banner-s4-3.webp" alt="" />
                  </div>
                  <div className="content" data-bg-color="#e3e4f5">
                    <h3 className="title">
                      Toys
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col learts-mb-40">
              <div className="category-banner4">
                <Link to="/shop.html" className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/category/banner-s4-4.webp" alt="" />
                  </div>
                  <div className="content" data-bg-color="#faf5e5">
                    <h3 className="title">
                      Kitchen
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Banner Section End */}
      {/* Product Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h2 className="title title-icon-both">
              Our best sellers
            </h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never find elsewhere.
            </p>
          </div>
          {/* Section Title End */}
          <div className="row learts-mb-n30">
            <div className="col-lg-6 col-12 learts-mb-30">
              <div className="sale-banner11">
                <div className="inner">
                  <img src="/assets/images/banner/sale/sale-banner11-1.webp" alt="" />
                  <div className="content">
                    <h3 className="title">
                      Rosewood Shelf
                    </h3>
                    <img className="price" src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="countdown2 primary2 justify-content-center learts-mt-50" data-countdown="2024/01/01"></div>
              <div className="d-flex justify-content-center learts-mt-50">
                <a href="#" className="btn btn-primary btn-hover-black">
                  shop now
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 learts-mb-30">
              {/* Products Start */}
              <div className="products row row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
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
              </div>
              {/* Products End */}
            </div>
          </div>
        </div>
      </div>
      {/* Product Section End */}
      {/* Banner Section Start */}
      <div className="home12-slide-item section swiper-slide-active" data-bg-image="/assets/images/slider/home12/slide-1.webp">
        <div className="home12-slide1-content">
          <div className="bg"></div>
          <span className="sub-title">
            First-rate
          </span>
          <h2 className="title">
            JUST FOR YOU
          </h2>
          <img className="price" src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="" />
        </div>
      </div>
      {/* Banner Section End */}
      {/* Product Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h2 className="title title-icon-both">
              Our best sellers
            </h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never find elsewhere.
            </p>
          </div>
          {/* Section Title End */}
          <div className="row learts-mb-n30">
            <div className="col-lg-6 col-12 order-lg-2 learts-mb-30">
              <div className="sale-banner11">
                <div className="inner">
                  <img src="/assets/images/banner/sale/sale-banner11-2.webp" alt="" />
                  <div className="content">
                    <h3 className="title">
                      Alumsy Shelf
                    </h3>
                    <img className="price" src="/assets/images/banner/sale/sale-banner4-1.1.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="countdown2 primary2 justify-content-center learts-mt-50" data-countdown="2024/06/01"></div>
              <div className="d-flex justify-content-center learts-mt-50">
                <a href="#" className="btn btn-primary btn-hover-black">
                  shop now
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-1 learts-mb-30">
              {/* Products Start */}
              <div className="products row row-cols-lg-2 row-cols-md-3 row-cols-sm-2 row-cols-1">
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
                      <span className="product-badges">
                        <span className="onsale">
                          -13%
                        </span>
                      </span>
                      <Link to="/product-details.html" className="image">
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
                      <span className="product-badges">
                        <span className="onsale">
                          -13%
                        </span>
                      </span>
                      <Link to="/product-details.html" className="image">
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
          </div>
        </div>
      </div>
      {/* Product Section End */}
      {/* Feature Section Start */}
      <div className="section border-top learts-pt-30 learts-pb-30">
        <div className="container">
          <div className="row learts-mb-n30">
            <div className="col-lg-3 col-sm-6 col-12 learts-mb-30">
              <div className="icon-box5">
                <div className="icon" data-bg-color="#f4ede7">
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
                <div className="icon" data-bg-color="#f4ede7">
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
                <div className="icon" data-bg-color="#f4ede7">
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
                <div className="icon" data-bg-color="#f4ede7">
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
      {/* Sale Banner Start */}
      <div className="section section-fluid">
        <div className="row g-0">
          <div className="col-lg-6 col-12">
            <div className="sale-banner9 bg-light">
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
          <div className="col-lg-6 col-12">
            <div className="sale-banner9-image">
              <img src="/assets/images/banner/sale/sale-banner9-1.2.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Sale Banner End */}
      {/* Sale Banner Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row learts-mb-n40">
            <div className="col-lg-4 learts-mb-40">
              {/* Section Title Start */}
              <div className="section-title2 mb-5">
                <h2 className="title title-icon-right">
                  Blog update
                </h2>
                <p>
                  Subscribe for latest news and blog updates from our editor.
                </p>
              </div>
              {/* Section Title End */}
              <ul className="widget-list">
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <a href="#">
                    Start a Kickass Online Blog
                  </a>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <a href="#">
                    Tile Tray with Brass Handles
                  </a>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <a href="#">
                    Dining Table Chairs Makeover
                  </a>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <a href="#">
                    Faux Map Drawer Dresser
                  </a>
                </li>
                <li>
                  <i className="fas fa-long-arrow-alt-right"></i>
                  <a href="#">
                    Printable Season Postcards 2019
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 learts-mb-40">
              <div className="row learts-mb-n40">
                <div className="col-md-6 col-12 learts-mb-40">
                  <div className="blog">
                    <div className="image">
                      <Link to="/blog-details-right-sidebar.html">
                        <img src="/assets/images/blog/s370/blog-7.webp" alt="Blog Image" />
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
                           95 views
                        </li>
                      </ul>
                      <h5 className="title">
                        <Link to="/blog-details-right-sidebar.html">
                          Composure SDR Traveller
                        </Link>
                      </h5>
                      <div className="desc">
                        <p>
                          Our products enable a very pure form of travel, allowing our customer to confidently belong anywhere without worrying about what they are carrying. We have no exterior branding, no padding,…
                        </p>
                      </div>
                      <Link to="/blog-details-right-sidebar.html" className="link">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 learts-mb-40">
                  <div className="blog">
                    <div className="image">
                      <Link to="/blog-details-right-sidebar.html">
                        <img src="/assets/images/blog/s370/blog-9.webp" alt="Blog Image" />
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
                           78 views
                        </li>
                      </ul>
                      <h5 className="title">
                        <Link to="/blog-details-right-sidebar.html">
                          Craftsmanship and Geopolitics
                        </Link>
                      </h5>
                      <div className="desc">
                        <p>
                          There’s been a buzz in the world of craft and artisanship of late, and I’m not talking about a new artisanal brew, air-dried hachiko persimmons or hand-turned foraged wood beard…
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
        </div>
      </div>
      {/* Sale Banner End */}
      {/* Instagram Section Start */}
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
      {/* Instagram Section End */}
      </>
    </Layout>
  );
}
