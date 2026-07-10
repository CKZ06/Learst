import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCartCount, getCartTotal, useCartStore } from '../store/cartStore';

export default function Header() {
  const cartItems = useCartStore((state) => state.items);
  const cartCount = getCartCount(cartItems);
  const cartTotal = getCartTotal(cartItems);
  const [activeOffcanvas, setActiveOffcanvas] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const toggle = target.closest<HTMLAnchorElement>('.offcanvas-toggle');
      if (toggle) {
        const panelId = toggle.getAttribute('href');
        if (panelId?.startsWith('#offcanvas-')) {
          event.preventDefault();
          setActiveOffcanvas(panelId.slice(1));
        }
        return;
      }

      if (target.closest('.offcanvas-close, .offcanvas-overlay')) {
        event.preventDefault();
        setActiveOffcanvas(null);
        return;
      }

      if (target.closest('.offcanvas a[href]') && !target.closest('a[href^="#"]')) {
        setActiveOffcanvas(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveOffcanvas(null);
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('offcanvas-open', activeOffcanvas !== null);
    return () => document.body.classList.remove('offcanvas-open');
  }, [activeOffcanvas]);

  const offcanvasClass = (id: string, baseClass: string) =>
    `offcanvas ${baseClass}${activeOffcanvas === id ? ' offcanvas-open' : ''}`;

  return (
    <>
    {/* Topbar Section Start */}
    <div className="topbar-section section bg-primary2">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-auto col-12">
            <p className="text-white text-center text-md-left my-2">
              Free shipping for orders over $59 !
            </p>
          </div>
          <div className="col-auto d-none d-md-block">
            <div className="topbar-menu">
              <ul>
                <li>
                  <a href="#" className="text-white">
                    <i className="fa fa-map-marker-alt"></i>
                    Store Location
                  </a>
                </li>
                <li>
                  <Link to="/order-tracking.html" className="text-white">
                    <i className="fa fa-truck"></i>
                    Order Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Topbar Section End */}
    {/* Header Section Start */}
    <div className="header-section section bg-white d-none d-xl-block">
      <div className="container">
        <div className="row row-cols-lg-3 align-items-center">
          {/* Header Language & Currency Start */}
          <div className="col">
            <ul className="header-lan-curr">
              <li>
                <a href="#">
                  English
                </a>
                <ul className="curr-lan-sub-menu">
                  <li>
                    <a href="#">
                      Français
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Deutsch
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  USD
                </a>
                <ul className="curr-lan-sub-menu">
                  <li>
                    <a href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      GBP
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Header Language & Currency End */}
          {/* Header Logo Start */}
          <div className="col">
            <div className="header-logo justify-content-center">
              <Link to="/">
                <img src="/assets/images/logo/logo.webp" alt="Learts Logo" />
              </Link>
            </div>
          </div>
          {/* Header Logo End */}
          {/* Header Tools Start */}
          <div className="col">
            <div className="header-tools justify-content-end">
              <div className="header-login">
                <Link to="/login-register.html" aria-label="Login and register">
                  <i className="far fa-user"></i>
                </Link>
              </div>
              <div className="header-search">
                <a href="#offcanvas-search" className="offcanvas-toggle">
                  <i className="fas fa-search"></i>
                </a>
              </div>
              <div className="header-wishlist">
                <a href="#offcanvas-wishlist" className="offcanvas-toggle">
                  <span className="wishlist-count">
                    3
                  </span>
                  <i className="far fa-heart"></i>
                </a>
              </div>
              <div className="header-cart">
                <a href="#offcanvas-cart" className="offcanvas-toggle">
                  <span className="cart-count">
                    {cartCount}
                  </span>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Header Tools End */}
        </div>
      </div>
      {/* Site Menu Section Start */}
      <div className="site-menu-section section">
        <div className="container">
          <nav className="site-main-menu justify-content-center">
            <ul>
              <li className="has-children">
                <Link to="/">
                  <span className="menu-text">
                    Home
                  </span>
                </Link>
                <ul className="sub-menu mega-menu">
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        HOME GROUP
                      </span>
                    </a>
                    <ul>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-01.webp" alt="home-01" />
                        <Link to="/">
                          <span className="menu-text">
                            Arts Propelled
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-02.webp" alt="home-02" />
                        <Link to="/index-2.html">
                          <span className="menu-text">
                            Decor Thriving
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-03.webp" alt="home-03" />
                        <Link to="/index-3.html">
                          <span className="menu-text">
                            Savvy Delight
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-04.webp" alt="home-04" />
                        <Link to="/index-4.html">
                          <span className="menu-text">
                            Perfect Escapes
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/index-2.html" className="mega-menu-title">
                      <span className="menu-text">
                        HOME GROUP
                      </span>
                    </Link>
                    <ul>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-05.webp" alt="home-05" />
                        <Link to="/index-5.html">
                          <span className="menu-text">
                            Kitchen Cozy
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-06.webp" alt="home-06" />
                        <Link to="/index-6.html">
                          <span className="menu-text">
                            Dreamy Designs
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-07.webp" alt="home-07" />
                        <Link to="/index-7.html">
                          <span className="menu-text">
                            Crispy Recipes
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-08.webp" alt="home-08" />
                        <Link to="/index-8.html">
                          <span className="menu-text">
                            Decoholic Chic
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/index-2.html" className="mega-menu-title">
                      <span className="menu-text">
                        HOME GROUP
                      </span>
                    </Link>
                    <ul>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-9.webp" alt="home-9" />
                        <Link to="/index-9.html">
                          <span className="menu-text">
                            Reblended Dish
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-10.webp" alt="home-10" />
                        <Link to="/index-10.html">
                          <span className="menu-text">
                            Craftin House
                          </span>
                        </Link>
                      </li>
                      <li>
                        <img className="mmh_img" src="/assets/images/demo/menu/home-11.webp" alt="home-11" />
                        <Link to="/index-11.html">
                          <span className="menu-text">
                            Craftswork Biz
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="menu-banner">
                      <img src="/assets/images/banner/menu-banner-1.webp" alt="Home Menu Banner" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="/shop.html">
                  <span className="menu-text">
                    Shop
                  </span>
                </Link>
                <ul className="sub-menu mega-menu">
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        SHOP PAGES
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/shop.html">
                          <span className="menu-text">
                            Shop No Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop-left-sidebar.html">
                          <span className="menu-text">
                            Shop Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop-right-sidebar.html">
                          <span className="menu-text">
                            Shop Right Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop-fullwidth-no-gutters.html">
                          <span className="menu-text">
                            Shop Fullwidth No Space
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop-fullwidth.html">
                          <span className="menu-text">
                            Shop Fullwidth No Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop-fullwidth-left-sidebar.html">
                          <span className="menu-text">
                            Shop Fullwidth Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop-fullwidth-right-sidebar.html">
                          <span className="menu-text">
                            Shop Fullwidth Right Sidebar
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        PRODUCT PAGES
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/product-details.html">
                          <span className="menu-text">
                            Basic
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-fullwidth.html">
                          <span className="menu-text">
                            Fullwidth
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-sticky.html">
                          <span className="menu-text">
                            Sticky Details
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-sidebar.html">
                          <span className="menu-text">
                            Width Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-extra-content.html">
                          <span className="menu-text">
                            Extra Content
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-image-variation.html">
                          <span className="menu-text">
                            Variations Images
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-group.html">
                          <span className="menu-text">
                            Bought Together
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/product-details-360.html">
                          <span className="menu-text">
                            Product 360
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        PRODUCT &amp; Other PAGES
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/product-details-background.html">
                          <span className="menu-text">
                            Product with Background
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shopping-cart.html">
                          <span className="menu-text">
                            Shopping Cart
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/checkout.html">
                          <span className="menu-text">
                            Checkout
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/order-tracking.html">
                          <span className="menu-text">
                            Order Tracking
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/wishlist.html">
                          <span className="menu-text">
                            Wishlist
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/login-register.html">
                          <span className="menu-text">
                            Customer Login
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/my-account.html">
                          <span className="menu-text">
                            My Account
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/lost-password.html">
                          <span className="menu-text">
                            Lost Password
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="align-self-center">
                    <a href="#" className="menu-banner">
                      <img src="/assets/images/banner/menu-banner-2.webp" alt="Shop Menu Banner" />
                    </a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="/portfolio-3-columns.html">
                  <span className="menu-text">
                    Project
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/portfolio-3-columns.html">
                      <span className="menu-text">
                        Portfolio 3 Columns
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio-4-columns.html">
                      <span className="menu-text">
                        Portfolio 4 Columns
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio-5-columns.html">
                      <span className="menu-text">
                        Portfolio 5 Columns
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio-details.html">
                      <span className="menu-text">
                        Portfolio Details
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="/elements-products.html">
                  <span className="menu-text">
                    Elements
                  </span>
                </Link>
                <ul className="sub-menu mega-menu">
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        Column One
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/elements-products.html">
                          <span className="menu-text">
                            Product Styles
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-products-tabs.html">
                          <span className="menu-text">
                            Product Tabs
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-product-sale-banner.html">
                          <span className="menu-text">
                            Product &amp; Sale Banner
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        Column Two
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/elements-category-banner.html">
                          <span className="menu-text">
                            Category Banner
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-team.html">
                          <span className="menu-text">
                            Team Member
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-testimonials.html">
                          <span className="menu-text">
                            Testimonials
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        Column Three
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/elements-instagram.html">
                          <span className="menu-text">
                            Instagram
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-map.html">
                          <span className="menu-text">
                            Google Map
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-icon-box.html">
                          <span className="menu-text">
                            Icon Box
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="mega-menu-title">
                      <span className="menu-text">
                        Column Four
                      </span>
                    </a>
                    <ul>
                      <li>
                        <Link to="/elements-buttons.html">
                          <span className="menu-text">
                            Buttons
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-faq.html">
                          <span className="menu-text">
                            FAQs / Toggles
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/elements-brands.html">
                          <span className="menu-text">
                            Brands
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="/blog-right-sidebar.html">
                  <span className="menu-text">
                    Blog
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li className="has-children">
                    <Link to="/blog-right-sidebar.html">
                      <span className="menu-text">
                        Standard Layout
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blog-right-sidebar.html">
                          <span className="menu-text">
                            Right Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-left-sidebar.html">
                          <span className="menu-text">
                            Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-fullwidth.html">
                          <span className="menu-text">
                            Full Width
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/blog-grid-right-sidebar.html">
                      <span className="menu-text">
                        Grid Layout
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blog-grid-right-sidebar.html">
                          <span className="menu-text">
                            Right Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-grid-left-sidebar.html">
                          <span className="menu-text">
                            Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-grid-fullwidth.html">
                          <span className="menu-text">
                            Full Width
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/blog-list-right-sidebar.html">
                      <span className="menu-text">
                        List Layout
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blog-list-right-sidebar.html">
                          <span className="menu-text">
                            Right Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-list-left-sidebar.html">
                          <span className="menu-text">
                            Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-list-fullwidth.html">
                          <span className="menu-text">
                            Full Width
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/blog-masonry-right-sidebar.html">
                      <span className="menu-text">
                        Masonry Layout
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blog-masonry-right-sidebar.html">
                          <span className="menu-text">
                            Right Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-masonry-left-sidebar.html">
                          <span className="menu-text">
                            Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-masonry-fullwidth.html">
                          <span className="menu-text">
                            Full Width
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link to="/blog-details-right-sidebar.html">
                      <span className="menu-text">
                        Single Post Layout
                      </span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/blog-details-right-sidebar.html">
                          <span className="menu-text">
                            Right Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details-left-sidebar.html">
                          <span className="menu-text">
                            Left Sidebar
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-details-fullwidth.html">
                          <span className="menu-text">
                            Full Width
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <Link to="/about-us.html">
                  <span className="menu-text">
                    Pages
                  </span>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about-us.html">
                      <span className="menu-text">
                        About us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us-2.html">
                      <span className="menu-text">
                        About us 02
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us.html">
                      <span className="menu-text">
                        Contact us
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/coming-soon.html">
                      <span className="menu-text">
                        Coming Soon
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/404.html">
                      <span className="menu-text">
                        Page 404
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Site Menu Section End */}
    </div>
    {/* Header Section End */}
    {/* Header Sticky Section Start */}
    <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
      <div className="container">
        <div className="row align-items-center">
          {/* Header Logo Start */}
          <div className="col">
            <div className="header-logo">
              <Link to="/">
                <img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" />
              </Link>
            </div>
          </div>
          {/* Header Logo End */}
          {/* Search Start */}
          <div className="col d-none d-xl-block">
            <nav className="site-main-menu justify-content-center">
              <ul>
                <li className="has-children">
                  <Link to="/">
                    <span className="menu-text">
                      Home
                    </span>
                  </Link>
                  <ul className="sub-menu mega-menu">
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          HOME GROUP
                        </span>
                      </a>
                      <ul>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-01.webp" alt="home-01" />
                          <Link to="/">
                            <span className="menu-text">
                              Arts Propelled
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-02.webp" alt="home-02" />
                          <Link to="/index-2.html">
                            <span className="menu-text">
                              Decor Thriving
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-03.webp" alt="home-03" />
                          <Link to="/index-3.html">
                            <span className="menu-text">
                              Savvy Delight
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-04.webp" alt="home-04" />
                          <Link to="/index-4.html">
                            <span className="menu-text">
                              Perfect Escapes
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/index-2.html" className="mega-menu-title">
                        <span className="menu-text">
                          HOME GROUP
                        </span>
                      </Link>
                      <ul>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-05.webp" alt="home-05" />
                          <Link to="/index-5.html">
                            <span className="menu-text">
                              Kitchen Cozy
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-06.webp" alt="home-06" />
                          <Link to="/index-6.html">
                            <span className="menu-text">
                              Dreamy Designs
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-07.webp" alt="home-07" />
                          <Link to="/index-7.html">
                            <span className="menu-text">
                              Crispy Recipes
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-08.webp" alt="home-08" />
                          <Link to="/index-8.html">
                            <span className="menu-text">
                              Decoholic Chic
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/index-2.html" className="mega-menu-title">
                        <span className="menu-text">
                          HOME GROUP
                        </span>
                      </Link>
                      <ul>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-9.webp" alt="home-9" />
                          <Link to="/index-9.html">
                            <span className="menu-text">
                              Reblended Dish
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-10.webp" alt="home-10" />
                          <Link to="/index-10.html">
                            <span className="menu-text">
                              Craftin House
                            </span>
                          </Link>
                        </li>
                        <li>
                          <img className="mmh_img" src="/assets/images/demo/menu/home-11.webp" alt="home-11" />
                          <Link to="/index-11.html">
                            <span className="menu-text">
                              Craftswork Biz
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="menu-banner">
                        <img src="/assets/images/banner/menu-banner-1.webp" alt="Home Menu Banner" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <Link to="/shop.html">
                    <span className="menu-text">
                      Shop
                    </span>
                  </Link>
                  <ul className="sub-menu mega-menu">
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          SHOP PAGES
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/shop.html">
                            <span className="menu-text">
                              Shop No Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-left-sidebar.html">
                            <span className="menu-text">
                              Shop Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-right-sidebar.html">
                            <span className="menu-text">
                              Shop Right Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-fullwidth-no-gutters.html">
                            <span className="menu-text">
                              Shop Fullwidth No Space
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-fullwidth.html">
                            <span className="menu-text">
                              Shop Fullwidth No Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-fullwidth-left-sidebar.html">
                            <span className="menu-text">
                              Shop Fullwidth Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-fullwidth-right-sidebar.html">
                            <span className="menu-text">
                              Shop Fullwidth Right Sidebar
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          PRODUCT PAGES
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/product-details.html">
                            <span className="menu-text">
                              Basic
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-fullwidth.html">
                            <span className="menu-text">
                              Fullwidth
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-sticky.html">
                            <span className="menu-text">
                              Sticky Details
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-sidebar.html">
                            <span className="menu-text">
                              Width Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-extra-content.html">
                            <span className="menu-text">
                              Extra Content
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-image-variation.html">
                            <span className="menu-text">
                              Variations Images
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-group.html">
                            <span className="menu-text">
                              Bought Together
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-details-360.html">
                            <span className="menu-text">
                              Product 360
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          PRODUCT &amp; Other PAGES
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/product-details-background.html">
                            <span className="menu-text">
                              Product with Background
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shopping-cart.html">
                            <span className="menu-text">
                              Shopping Cart
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/checkout.html">
                            <span className="menu-text">
                              Checkout
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/order-tracking.html">
                            <span className="menu-text">
                              Order Tracking
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/wishlist.html">
                            <span className="menu-text">
                              Wishlist
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/login-register.html">
                            <span className="menu-text">
                              Customer Login
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/my-account.html">
                            <span className="menu-text">
                              My Account
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/lost-password.html">
                            <span className="menu-text">
                              Lost Password
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="align-self-center">
                      <a href="#" className="menu-banner">
                        <img src="/assets/images/banner/menu-banner-2.webp" alt="Shop Menu Banner" />
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <Link to="/portfolio-3-columns.html">
                    <span className="menu-text">
                      Project
                    </span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/portfolio-3-columns.html">
                        <span className="menu-text">
                          Portfolio 3 Columns
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-4-columns.html">
                        <span className="menu-text">
                          Portfolio 4 Columns
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-5-columns.html">
                        <span className="menu-text">
                          Portfolio 5 Columns
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details.html">
                        <span className="menu-text">
                          Portfolio Details
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <Link to="/elements-products.html">
                    <span className="menu-text">
                      Elements
                    </span>
                  </Link>
                  <ul className="sub-menu mega-menu">
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          Column One
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/elements-products.html">
                            <span className="menu-text">
                              Product Styles
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-products-tabs.html">
                            <span className="menu-text">
                              Product Tabs
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-product-sale-banner.html">
                            <span className="menu-text">
                              Product &amp; Sale Banner
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          Column Two
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/elements-category-banner.html">
                            <span className="menu-text">
                              Category Banner
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-team.html">
                            <span className="menu-text">
                              Team Member
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-testimonials.html">
                            <span className="menu-text">
                              Testimonials
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          Column Three
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/elements-instagram.html">
                            <span className="menu-text">
                              Instagram
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-map.html">
                            <span className="menu-text">
                              Google Map
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-icon-box.html">
                            <span className="menu-text">
                              Icon Box
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="mega-menu-title">
                        <span className="menu-text">
                          Column Four
                        </span>
                      </a>
                      <ul>
                        <li>
                          <Link to="/elements-buttons.html">
                            <span className="menu-text">
                              Buttons
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-faq.html">
                            <span className="menu-text">
                              FAQs / Toggles
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/elements-brands.html">
                            <span className="menu-text">
                              Brands
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <Link to="/blog-right-sidebar.html">
                    <span className="menu-text">
                      Blog
                    </span>
                  </Link>
                  <ul className="sub-menu">
                    <li className="has-children">
                      <Link to="/blog-right-sidebar.html">
                        <span className="menu-text">
                          Standard Layout
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog-right-sidebar.html">
                            <span className="menu-text">
                              Right Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-left-sidebar.html">
                            <span className="menu-text">
                              Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-fullwidth.html">
                            <span className="menu-text">
                              Full Width
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="/blog-grid-right-sidebar.html">
                        <span className="menu-text">
                          Grid Layout
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog-grid-right-sidebar.html">
                            <span className="menu-text">
                              Right Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-grid-left-sidebar.html">
                            <span className="menu-text">
                              Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-grid-fullwidth.html">
                            <span className="menu-text">
                              Full Width
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="/blog-list-right-sidebar.html">
                        <span className="menu-text">
                          List Layout
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog-list-right-sidebar.html">
                            <span className="menu-text">
                              Right Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-list-left-sidebar.html">
                            <span className="menu-text">
                              Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-list-fullwidth.html">
                            <span className="menu-text">
                              Full Width
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="/blog-masonry-right-sidebar.html">
                        <span className="menu-text">
                          Masonry Layout
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog-masonry-right-sidebar.html">
                            <span className="menu-text">
                              Right Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-masonry-left-sidebar.html">
                            <span className="menu-text">
                              Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-masonry-fullwidth.html">
                            <span className="menu-text">
                              Full Width
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-children">
                      <Link to="/blog-details-right-sidebar.html">
                        <span className="menu-text">
                          Single Post Layout
                        </span>
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/blog-details-right-sidebar.html">
                            <span className="menu-text">
                              Right Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details-left-sidebar.html">
                            <span className="menu-text">
                              Left Sidebar
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-details-fullwidth.html">
                            <span className="menu-text">
                              Full Width
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-children">
                  <Link to="/about-us.html">
                    <span className="menu-text">
                      Pages
                    </span>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about-us.html">
                        <span className="menu-text">
                          About us
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about-us-2.html">
                        <span className="menu-text">
                          About us 02
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us.html">
                        <span className="menu-text">
                          Contact us
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/coming-soon.html">
                        <span className="menu-text">
                          Coming Soon
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/404.html">
                        <span className="menu-text">
                          Page 404
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          {/* Search End */}
          {/* Header Tools Start */}
          <div className="col-auto">
            <div className="header-tools justify-content-end">
              <div className="header-login">
                <Link to="/login-register.html" aria-label="Login and register">
                  <i className="far fa-user"></i>
                </Link>
              </div>
              <div className="header-search d-none d-sm-block">
                <a href="#offcanvas-search" className="offcanvas-toggle">
                  <i className="fas fa-search"></i>
                </a>
              </div>
              <div className="header-wishlist">
                <a href="#offcanvas-wishlist" className="offcanvas-toggle">
                  <span className="wishlist-count">
                    3
                  </span>
                  <i className="far fa-heart"></i>
                </a>
              </div>
              <div className="header-cart">
                <a href="#offcanvas-cart" className="offcanvas-toggle">
                  <span className="cart-count">
                    {cartCount}
                  </span>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
              <div className="mobile-menu-toggle d-xl-none">
                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                  <svg viewBox="0 0 800 600">
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                    <path d="M300,320 L540,320" className="middle"></path>
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Header Tools End */}
        </div>
      </div>
    </div>
    {/* Header Sticky Section End */}
    {/* Mobile Header Section Start */}
    <div className="mobile-header bg-white section d-xl-none">
      <div className="container">
        <div className="row align-items-center">
          {/* Header Logo Start */}
          <div className="col">
            <div className="header-logo">
              <Link to="/">
                <img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" />
              </Link>
            </div>
          </div>
          {/* Header Logo End */}
          {/* Header Tools Start */}
          <div className="col-auto">
            <div className="header-tools justify-content-end">
              <div className="header-login d-none d-sm-block">
                <Link to="/login-register.html" aria-label="Login and register">
                  <i className="far fa-user"></i>
                </Link>
              </div>
              <div className="header-search d-none d-sm-block">
                <a href="#offcanvas-search" className="offcanvas-toggle">
                  <i className="fas fa-search"></i>
                </a>
              </div>
              <div className="header-wishlist d-none d-sm-block">
                <a href="#offcanvas-wishlist" className="offcanvas-toggle">
                  <span className="wishlist-count">
                    3
                  </span>
                  <i className="far fa-heart"></i>
                </a>
              </div>
              <div className="header-cart">
                <a href="#offcanvas-cart" className="offcanvas-toggle">
                  <span className="cart-count">
                    {cartCount}
                  </span>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
              <div className="mobile-menu-toggle">
                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                  <svg viewBox="0 0 800 600">
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                    <path d="M300,320 L540,320" className="middle"></path>
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Header Tools End */}
        </div>
      </div>
    </div>
    {/* Mobile Header Section End */}
    {/* Mobile Header Section Start */}
    <div className="mobile-header sticky-header bg-white section d-xl-none">
      <div className="container">
        <div className="row align-items-center">
          {/* Header Logo Start */}
          <div className="col">
            <div className="header-logo">
              <Link to="/">
                <img src="/assets/images/logo/logo-2.webp" alt="Learts Logo" />
              </Link>
            </div>
          </div>
          {/* Header Logo End */}
          {/* Header Tools Start */}
          <div className="col-auto">
            <div className="header-tools justify-content-end">
              <div className="header-login d-none d-sm-block">
                <Link to="/login-register.html" aria-label="Login and register">
                  <i className="far fa-user"></i>
                </Link>
              </div>
              <div className="header-search d-none d-sm-block">
                <a href="#offcanvas-search" className="offcanvas-toggle">
                  <i className="fas fa-search"></i>
                </a>
              </div>
              <div className="header-wishlist d-none d-sm-block">
                <a href="#offcanvas-wishlist" className="offcanvas-toggle">
                  <span className="wishlist-count">
                    3
                  </span>
                  <i className="far fa-heart"></i>
                </a>
              </div>
              <div className="header-cart">
                <a href="#offcanvas-cart" className="offcanvas-toggle">
                  <span className="cart-count">
                    {cartCount}
                  </span>
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
              <div className="mobile-menu-toggle">
                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                  <svg viewBox="0 0 800 600">
                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                    <path d="M300,320 L540,320" className="middle"></path>
                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* Header Tools End */}
        </div>
      </div>
    </div>
    {/* Mobile Header Section End */}
    {/* OffCanvas Search Start */}
    <div id="offcanvas-search" className={offcanvasClass('offcanvas-search', 'offcanvas-search')}>
      <div className="inner">
        <div className="offcanvas-search-form">
          <button className="offcanvas-close">
            ×
          </button>
          <form action="#">
            <div className="row mb-n3">
              <div className="col-lg-8 col-12 mb-3">
                <input type="text" placeholder="Search Products..." />
              </div>
              <div className="col-lg-4 col-12 mb-3">
                <select className="search-select select2-basic">
                  <option value="0">
                    All Categories
                  </option>
                  <option value="kids-babies">
                    Kids &amp; Babies
                  </option>
                  <option value="home-decor">
                    Home Decor
                  </option>
                  <option value="gift-ideas">
                    Gift ideas
                  </option>
                  <option value="kitchen">
                    Kitchen
                  </option>
                  <option value="toys">
                    Toys
                  </option>
                  <option value="kniting-sewing">
                    Kniting &amp; Sewing
                  </option>
                  <option value="pots">
                    Pots
                  </option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <p className="search-description text-body-light mt-2">
          <span>
            # Type at least 1 character to search
          </span>
          <span>
            # Hit enter to search or ESC to close
          </span>
        </p>
      </div>
    </div>
    {/* OffCanvas Search End */}
    {/* OffCanvas Wishlist Start */}
    <div id="offcanvas-wishlist" className={offcanvasClass('offcanvas-wishlist', 'offcanvas-wishlist')}>
      <div className="inner">
        <div className="head">
          <span className="title">
            Wishlist
          </span>
          <button className="offcanvas-close">
            ×
          </button>
        </div>
        <div className="body customScroll">
          <ul className="minicart-product-list">
            <li>
              <Link to="/product-details.html" className="image">
                <img src="/assets/images/product/cart-product-1.webp" alt="Cart product Image" />
              </Link>
              <div className="content">
                <Link to="/product-details.html" className="title">
                  Walnut Cutting Board
                </Link>
                <span className="quantity-price">
                  1 x 
                  <span className="amount">
                    $100.00
                  </span>
                </span>
                <a href="#" className="remove">
                  ×
                </a>
              </div>
            </li>
            <li>
              <Link to="/product-details.html" className="image">
                <img src="/assets/images/product/cart-product-2.webp" alt="Cart product Image" />
              </Link>
              <div className="content">
                <Link to="/product-details.html" className="title">
                  Lucky Wooden Elephant
                </Link>
                <span className="quantity-price">
                  1 x 
                  <span className="amount">
                    $35.00
                  </span>
                </span>
                <a href="#" className="remove">
                  ×
                </a>
              </div>
            </li>
            <li>
              <Link to="/product-details.html" className="image">
                <img src="/assets/images/product/cart-product-3.webp" alt="Cart product Image" />
              </Link>
              <div className="content">
                <Link to="/product-details.html" className="title">
                  Fish Cut Out Set
                </Link>
                <span className="quantity-price">
                  1 x 
                  <span className="amount">
                    $9.00
                  </span>
                </span>
                <a href="#" className="remove">
                  ×
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="foot">
          <div className="buttons">
            <Link to="/wishlist.html" className="btn btn-dark btn-hover-primary">
              view wishlist
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* OffCanvas Wishlist End */}
    {/* OffCanvas Cart Start */}
    <div id="offcanvas-cart" className={offcanvasClass('offcanvas-cart', 'offcanvas-cart')}>
      <div className="inner">
        <div className="head">
          <span className="title">
            Cart
          </span>
          <button className="offcanvas-close">
            ×
          </button>
        </div>
        <div className="body customScroll">
          <ul className="minicart-product-list">
            <li>
              <Link to="/product-details.html" className="image">
                <img src="/assets/images/product/cart-product-1.webp" alt="Cart product Image" />
              </Link>
              <div className="content">
                <Link to="/product-details.html" className="title">
                  Walnut Cutting Board
                </Link>
                <span className="quantity-price">
                  1 x 
                  <span className="amount">
                    $100.00
                  </span>
                </span>
                <a href="#" className="remove">
                  ×
                </a>
              </div>
            </li>
            <li>
              <Link to="/product-details.html" className="image">
                <img src="/assets/images/product/cart-product-2.webp" alt="Cart product Image" />
              </Link>
              <div className="content">
                <Link to="/product-details.html" className="title">
                  Lucky Wooden Elephant
                </Link>
                <span className="quantity-price">
                  1 x 
                  <span className="amount">
                    $35.00
                  </span>
                </span>
                <a href="#" className="remove">
                  ×
                </a>
              </div>
            </li>
            <li>
              <Link to="/product-details.html" className="image">
                <img src="/assets/images/product/cart-product-3.webp" alt="Cart product Image" />
              </Link>
              <div className="content">
                <Link to="/product-details.html" className="title">
                  Fish Cut Out Set
                </Link>
                <span className="quantity-price">
                  1 x 
                  <span className="amount">
                    $9.00
                  </span>
                </span>
                <a href="#" className="remove">
                  ×
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="foot">
          <div className="sub-total">
            <strong>
              Subtotal :
            </strong>
            <span className="amount">
              £{cartTotal.toFixed(2)}
            </span>
          </div>
          <div className="buttons">
            <Link to="/shopping-cart.html" className="btn btn-dark btn-hover-primary">
              view cart
            </Link>
            <Link to="/checkout.html" className="btn btn-outline-dark">
              checkout
            </Link>
          </div>
          <p className="minicart-message">
            Free Shipping on All Orders Over $100!
          </p>
        </div>
      </div>
    </div>
    {/* OffCanvas Cart End */}
    {/* OffCanvas Search Start */}
    <div id="offcanvas-mobile-menu" className={offcanvasClass('offcanvas-mobile-menu', 'offcanvas-mobile-menu')}>
      <div className="inner customScroll">
        <div className="offcanvas-menu-search-form">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <div className="offcanvas-menu">
          <ul>
            <li>
              <Link to="/">
                <span className="menu-text">
                  Home
                </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Home Group
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/">
                        <span className="menu-text">
                          Arts Propelled
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-2.html">
                        <span className="menu-text">
                          Decor Thriving
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-3.html">
                        <span className="menu-text">
                          Savvy Delight
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-4.html">
                        <span className="menu-text">
                          Perfect Escapes
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Home Group
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/index-5.html">
                        <span className="menu-text">
                          Kitchen Cozy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-6.html">
                        <span className="menu-text">
                          Dreamy Designs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-7.html">
                        <span className="menu-text">
                          Crispy Recipes
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-8.html">
                        <span className="menu-text">
                          Decoholic Chic
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Home Group
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/index-9.html">
                        <span className="menu-text">
                          Reblended Dish
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-10.html">
                        <span className="menu-text">
                          Craftin House
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/index-11.html">
                        <span className="menu-text">
                          Craftswork Biz
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/shop.html">
                <span className="menu-text">
                  Shop
                </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Shop Pages
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/shop.html">
                        <span className="menu-text">
                          Shop No Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-left-sidebar.html">
                        <span className="menu-text">
                          Shop Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-right-sidebar.html">
                        <span className="menu-text">
                          Shop Right Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-fullwidth-no-gutters.html">
                        <span className="menu-text">
                          Shop Fullwidth No Space
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-fullwidth.html">
                        <span className="menu-text">
                          Shop Fullwidth No Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-fullwidth-left-sidebar.html">
                        <span className="menu-text">
                          Shop Fullwidth Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop-fullwidth-right-sidebar.html">
                        <span className="menu-text">
                          Shop Fullwidth Right Sidebar
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Product Pages
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/product-details.html">
                        <span className="menu-text">
                          Basic
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-fullwidth.html">
                        <span className="menu-text">
                          Fullwidth
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-sticky.html">
                        <span className="menu-text">
                          Sticky Details
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-sidebar.html">
                        <span className="menu-text">
                          Width Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-extra-content.html">
                        <span className="menu-text">
                          Extra Content
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-image-variation.html">
                        <span className="menu-text">
                          Variations Images
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-group.html">
                        <span className="menu-text">
                          Bought Together
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-360.html">
                        <span className="menu-text">
                          Product 360
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/product-details-background.html">
                        <span className="menu-text">
                          Product with Background
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title">
                    <span className="menu-text">
                      PRODUCT &amp; Other PAGES
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/shopping-cart.html">
                        <span className="menu-text">
                          Shopping Cart
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/checkout.html">
                        <span className="menu-text">
                          Checkout
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/order-tracking.html">
                        <span className="menu-text">
                          Order Tracking
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/wishlist.html">
                        <span className="menu-text">
                          Wishlist
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/login-register.html">
                        <span className="menu-text">
                          Customer Login
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/my-account.html">
                        <span className="menu-text">
                          My Account
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lost-password.html">
                        <span className="menu-text">
                          Lost Password
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/portfolio-3-columns.html">
                <span className="menu-text">
                  Project
                </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/portfolio-3-columns.html">
                    <span className="menu-text">
                      Portfolio 3 Columns
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio-4-columns.html">
                    <span className="menu-text">
                      Portfolio 4 Columns
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio-5-columns.html">
                    <span className="menu-text">
                      Portfolio 5 Columns
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio-details.html">
                    <span className="menu-text">
                      Portfolio Details
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/elements-products.html">
                <span className="menu-text">
                  Elements
                </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <a href="#" className="mega-menu-title">
                    <span className="menu-text">
                      Column One
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/elements-products.html">
                        <span className="menu-text">
                          Product Styles
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-products-tabs.html">
                        <span className="menu-text">
                          Product Tabs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-product-sale-banner.html">
                        <span className="menu-text">
                          Product &amp; Sale Banner
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title">
                    <span className="menu-text">
                      Column Two
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/elements-category-banner.html">
                        <span className="menu-text">
                          Category Banner
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-team.html">
                        <span className="menu-text">
                          Team Member
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-testimonials.html">
                        <span className="menu-text">
                          Testimonials
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title">
                    <span className="menu-text">
                      Column Three
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/elements-instagram.html">
                        <span className="menu-text">
                          Instagram
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-map.html">
                        <span className="menu-text">
                          Google Map
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-icon-box.html">
                        <span className="menu-text">
                          Icon Box
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="mega-menu-title">
                    <span className="menu-text">
                      Column Four
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/elements-buttons.html">
                        <span className="menu-text">
                          Buttons
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-faq.html">
                        <span className="menu-text">
                          FAQs / Toggles
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/elements-brands.html">
                        <span className="menu-text">
                          Brands
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog-right-sidebar.html">
                <span className="menu-text">
                  Blog
                </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Standard Layout
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog-right-sidebar.html">
                        <span className="menu-text">
                          Right Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-left-sidebar.html">
                        <span className="menu-text">
                          Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-fullwidth.html">
                        <span className="menu-text">
                          Full Width
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Grid Layout
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog-grid-right-sidebar.html">
                        <span className="menu-text">
                          Right Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-grid-left-sidebar.html">
                        <span className="menu-text">
                          Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-grid-fullwidth.html">
                        <span className="menu-text">
                          Full Width
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      List Layout
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog-list-right-sidebar.html">
                        <span className="menu-text">
                          Right Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-list-left-sidebar.html">
                        <span className="menu-text">
                          Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-list-fullwidth.html">
                        <span className="menu-text">
                          Full Width
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Masonry Layout
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog-masonry-right-sidebar.html">
                        <span className="menu-text">
                          Right Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-masonry-left-sidebar.html">
                        <span className="menu-text">
                          Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-masonry-fullwidth.html">
                        <span className="menu-text">
                          Full Width
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="menu-text">
                      Single Post Layout
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/blog-details-right-sidebar.html">
                        <span className="menu-text">
                          Right Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details-left-sidebar.html">
                        <span className="menu-text">
                          Left Sidebar
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-details-fullwidth.html">
                        <span className="menu-text">
                          Full Width
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about-us.html">
                <span className="menu-text">
                  Pages
                </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/about-us.html">
                    <span className="menu-text">
                      About us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/about-us-2.html">
                    <span className="menu-text">
                      About us 02
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us.html">
                    <span className="menu-text">
                      Contact us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/coming-soon.html">
                    <span className="menu-text">
                      Coming Soon
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/404.html">
                    <span className="menu-text">
                      Page 404
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="offcanvas-buttons">
          <div className="header-tools">
            <div className="header-login">
              <Link to="/login-register.html" aria-label="Login and register">
                <i className="far fa-user"></i>
              </Link>
            </div>
            <div className="header-wishlist">
              <Link to="/wishlist.html">
                <span>
                  3
                </span>
                <i className="far fa-heart"></i>
              </Link>
            </div>
            <div className="header-cart">
              <Link to="/shopping-cart.html">
                <span className="cart-count">
                  {cartCount}
                </span>
                <i className="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="offcanvas-social">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
    {/* OffCanvas Search End */}
    <div
      className="offcanvas-overlay"
      style={{ display: activeOffcanvas ? 'block' : 'none' }}
      aria-hidden="true"
    ></div>
    </>
  );
}
