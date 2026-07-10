import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ElementsTeamPage() {
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
                  Team Member
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
                    Team Member
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}
      {/* Team Member Section Start */}
      <div className="section section-padding">
        <div className="container">
          {/* Section Title Start */}
          <div className="section-title2 text-center">
            <h2 className="title">
              Team Member
            </h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never find elsewhere.
            </p>
          </div>
          {/* Section Title End */}
          <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
            <div className="col learts-mb-30">
              <div className="team">
                <div className="image">
                  <img src="/assets/images/team/team-1.webp" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h6 className="name">
                    Albert McKinney
                  </h6>
                  <span className="title">
                    CEO &amp; CO-FOUNDER
                  </span>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="team">
                <div className="image">
                  <img src="/assets/images/team/team-2.webp" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h6 className="name">
                    Etta Schneider
                  </h6>
                  <span className="title">
                    Ceramics
                  </span>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="team">
                <div className="image">
                  <img src="/assets/images/team/team-3.webp" alt="" />
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="content">
                  <h6 className="name">
                    Roger Collins
                  </h6>
                  <span className="title">
                    Wood
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Member Section End */}
      </>
    </Layout>
  );
}
