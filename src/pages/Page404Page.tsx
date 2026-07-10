import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Page404Page() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* 404 Section Start */}
      <div className="section-404 section" data-bg-image="/assets/images/bg/bg-404.webp">
        <div className="container">
          <div className="content-404">
            <h1 className="title">
              Oops!
            </h1>
            <h2 className="sub-title">
              Page not found!
            </h2>
            <p>
              You could either go back or go to homepage
            </p>
            <div className="buttons">
              <Link className="btn btn-primary btn-outline-hover-dark" to="/">
                Go back
              </Link>
              <Link className="btn btn-dark btn-outline-hover-dark" to="/">
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* 404 Section End */}
      {/* JS ============================================ */}
      {/* Vendors JS */}
      {/* Plugins JS */}
      {/* Use the minified version files listed below for better performance and remove the files listed above */}
      {/* <script src="assets/js/vendor/vendor.min.js"></script> <script src="assets/js/plugins/plugins.min.js"></script> */}
      {/* Main Activation JS */}
      </>
    </Layout>
  );
}
