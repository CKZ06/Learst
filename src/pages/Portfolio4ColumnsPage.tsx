import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Portfolio4ColumnsPage() {
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
                  Portfolio
                </h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Portfolio
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}
      {/* Portfolio Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-1.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Fresh Fruit Keeper
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      I made this out of brushed stainless steel. It has…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-2.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Wooden Cutting Board
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      My personalized Walnut or Maple Cutting Board makes a wonderful…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-3.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Elegant Kitchen Utensils
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      This is made of porcelain, lead free and stain resistant.…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-4.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Square RoseWood Box
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      Dashing and colorful. Swirling colors ranging from reddish-tan to deep…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-5.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Knitted Table Placemats
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      These gorgeous hand knit cloths are perfect for so many…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-6.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Ceramic Handmade Pot
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      This vessel is a unique piece of art. It is…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-1.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Fresh Fruit Keeper
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      I made this out of brushed stainless steel. It has…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col learts-mb-30">
              <div className="portfolio">
                <div className="thumbnail">
                  <img src="/assets/images/portfolio/portfolio-2.webp" alt="" />
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to="/portfolio-details.html">
                      Wooden Cutting Board
                    </Link>
                  </h4>
                  <div className="desc">
                    <p>
                      My personalized Walnut or Maple Cutting Board makes a wonderful…
                    </p>
                  </div>
                  <div className="link">
                    <Link to="/portfolio-details.html">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row learts-mt-50">
            <div className="col text-center">
              <a href="#" className="btn btn-dark btn-outline-hover-dark">
                Load More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio Section End */}
      </>
    </Layout>
  );
}
