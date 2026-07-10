import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function ComingSoonPage() {
  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      <div className="coming-soon-section section section-padding" data-bg-image="/assets/images/bg/coming-soon-bg.webp">
        <div className="container">
          <div className="coming-soon-content">
            <div className="logo">
              <Link to="/">
                <img src="/assets/images/logo/logo-2.webp" alt="" />
              </Link>
            </div>
            <h2 className="title">
              Coming soon
            </h2>
            <div className="countdown3" data-countdown="2024/01/01"></div>
            <div className="coming-soon-subscribe">
              <form id="mc-form" className="mc-form widget-subscibe">
                <input id="mc-email" className="bg-light" autoComplete="off" type="email" placeholder="Enter your e-mail address" />
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
