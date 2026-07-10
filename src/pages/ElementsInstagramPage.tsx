import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ElementsInstagramPage() {
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
                  Gallery
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
                    Gallery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}
      {/* Map Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="section-title2 text-center">
            <h2 className="title title-icon-both">
              Gallery carousel
            </h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never find elsewhere.
            </p>
          </div>
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
      {/* Map Section End */}
      {/* Map Section Start */}
      <div className="section section-padding border-top">
        <div className="container">
          <div className="section-title2 text-center">
            <h2 className="title title-icon-both">
              Gallery Grid
            </h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never find elsewhere.
            </p>
          </div>
          <div className="instafeed instafeed-grid">
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
          </div>
        </div>
      </div>
      {/* Map Section End */}
      </>
    </Layout>
  );
}
