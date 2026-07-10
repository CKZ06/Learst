import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ElementsBrandsPage() {
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
                  Brands
                </h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">
                      Elements
                    </a>
                  </li>
                  <li className="breadcrumb-item active">
                    Brands
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}
      {/* Feature Brands Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h2 className="title">
              Feature Brands
            </h2>
          </div>
          {/* Section Title End */}
          <div className="row align-items-center row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
            <div className="col learts-mb-30">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-1.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-2.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-3.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-4.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-5.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-6.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature Brands Section End */}
      {/* Brand Carousel Section Start */}
      <div className="section section-padding border-top">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h2 className="title">
              Brand Carousel
            </h2>
          </div>
          {/* Section Title End */}
          <div className="brand-carousel">
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-7.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-8.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-1.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-2.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-3.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-4.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-5.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
            <div className="col">
              <div className="brand-item">
                <a href="#">
                  <img src="/assets/images/brands/brand-6.webp" alt="Brands Image" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand Carousel Section End */}
      </>
    </Layout>
  );
}
