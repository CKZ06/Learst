import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useHomeTheme } from '../hooks/useHomeTheme';

export default function IndexPage() {
  useHomeTheme();

  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Slider main container Start */}
      <div className="home1-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home1/slide-1.webp">
            <div className="home1-slide1-content">
              <span className="bg"></span>
              <span className="slide-border"></span>
              <span className="icon">
                <img src="/assets/images/slider/home1/slide-1-1.webp" alt="Slide Icon" />
              </span>
              <h2 className="title">
                Handicraft Shop
              </h2>
              <h3 className="sub-title">
                Just for you
              </h3>
              <div className="link">
                <Link to="/shop.html">
                  shop now
                </Link>
              </div>
            </div>
          </div>
          <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home1/slide-2.webp">
            <div className="home1-slide2-content">
              <span className="bg" data-bg-image="/assets/images/slider/home1/slide-2-1.webp"></span>
              <span className="slide-border"></span>
              <span className="icon">
                <img src="/assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon" />
                <img src="/assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon" />
              </span>
              <h2 className="title">
                Newly arrived
              </h2>
              <h3 className="sub-title">
                Sale up to 
                <br />
                10%
              </h3>
              <div className="link">
                <Link to="/shop.html">
                  shop now
                </Link>
              </div>
            </div>
          </div>
          <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/assets/images/slider/home1/slide-3.webp">
            <div className="home1-slide3-content">
              <h2 className="title">
                Affectious gifts
              </h2>
              <h3 className="sub-title">
                <img className="left-icon" src="/assets/images/slider/home1/slide-2-2.webp" alt="Slide Icon" />
                
                        For friends &amp; family
                        
                <img className="right-icon" src="/assets/images/slider/home1/slide-2-3.webp" alt="Slide Icon" />
              </h3>
              <div className="link">
                <Link to="/shop.html">
                  shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home1-slider-prev swiper-button-prev">
          <i className="ti-angle-left"></i>
        </div>
        <div className="home1-slider-next swiper-button-next">
          <i className="ti-angle-right"></i>
        </div>
      </div>
      {/* Slider main container End */}
      {/* Sale Banner Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title text-center">
            <h3 className="sub-title">
              Just for you
            </h3>
            <h2 className="title title-icon-both">
              Making &amp; crafting
            </h2>
          </div>
          {/* Section Title End */}
          <div className="row learts-mb-n40">
            <div className="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
              <div className="sale-banner1" data-bg-image="/assets/images/banner/sale/sale-banner1-1.webp">
                <div className="inner">
                  <img src="/assets/images/banner/sale/sale-banner1-1.1.webp" alt="Sale Banner Icon" />
                  <span className="title">
                    Spring sale
                  </span>
                  <h2 className="sale-percent">
                    <span className="number">
                      40
                    </span>
                     % 
                    <br />
                     off
                            
                  </h2>
                  <Link to="/shop.html" className="link">
                    shop now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
              <div className="sale-banner2">
                <div className="inner">
                  <div className="image">
                    <img src="/assets/images/banner/sale/sale-banner2-1.webp" alt="" />
                  </div>
                  <div className="content row justify-content-between mb-n3">
                    <div className="col-auto mb-3">
                      <h2 className="sale-percent">
                        10% off
                      </h2>
                      <span className="text">
                        YOUR NEXT PURCHASE
                      </span>
                    </div>
                    <div className="col-auto mb-3">
                      <Link className="btn btn-hover-dark" to="/shop.html">
                        SHOP NOW
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sale Banner Section End */}
      {/* Category Banner Section Start */}
      <div className="section section-fluid section-padding pt-0">
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
      <div className="section section-fluid section-padding pt-0">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title text-center">
            <h3 className="sub-title">
              Shop now
            </h3>
            <h2 className="title title-icon-both">
              Shop our best-sellers
            </h2>
          </div>
          {/* Section Title End */}
          {/* Products Start */}
          <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
            <div className="col">
              <div className="product">
                <div className="product-thumb">
                  <Link to="/product-details.html" className="image">
                    <span className="product-badges">
                      <span className="onsale">
                        -13%
                      </span>
                    </span>
                    <img src="/assets/images/product/s328/product-1.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-1-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-2.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-2-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-3.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-3-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-4.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-4-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-5.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-5-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-6.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-6-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-7.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-7-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-8.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-8-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-9.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-9-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-10.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-10-hover.webp" alt="Product Image" />
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
                    <img src="/assets/images/product/s328/product-11.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-11-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Electric Egg Blender
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $200.00
                            
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
                    <img src="/assets/images/product/s328/product-12.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-12-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Cape Cottage Playhouse
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
                    <img src="/assets/images/product/s328/product-13.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-13-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                  <div className="product-options">
                    <ul className="colors">
                      <li style={{backgroundColor: '#ffffff'}}>
                        color one
                      </li>
                      <li style={{backgroundColor: '#01796f'}}>
                        color two
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Kernel Popcorn Bowl
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $25.00
                            
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
                    </span>
                    <img src="/assets/images/product/s328/product-14.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-14-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                  <div className="product-options">
                    <ul className="colors">
                      <li style={{backgroundColor: '#000000'}}>
                        color one
                      </li>
                      <li style={{backgroundColor: '#ffffff'}}>
                        color two
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Abstract Folded Pots
                    </Link>
                  </h6>
                  <span className="price">
                    
                                $50.00 - $55.00
                            
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
                    <img src="/assets/images/product/s328/product-15.webp" alt="Product Image" />
                    <img className="image-hover" src="/assets/images/product/s328/product-15-hover.webp" alt="Product Image" />
                  </Link>
                  <Link to="/wishlist.html" className="add-to-wishlist hintT-left" data-hint="Add to wishlist">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
                <div className="product-info">
                  <h6 className="title">
                    <Link to="/product-details.html">
                      Brush &amp; Dustpan Set
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
          </div>
          {/* Products End */}
        </div>
      </div>
      {/* Product Section End */}
      </>
    </Layout>
  );
}
