import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './admin/ProtectedRoute';

type PageModule = { default: ComponentType };
type LazyPage = LazyExoticComponent<ComponentType>;

const pageModules = import.meta.glob<PageModule>('./pages/*Page.tsx');

function lazyPage(fileName: string): LazyPage {
  const loader = pageModules[`./pages/${fileName}.tsx`];
  if (!loader) throw new Error(`Không tìm thấy page module: ${fileName}`);
  return lazy(loader);
}

const NotFound = lazy(() => import('./components/NotFound.tsx'));

const routeDefinitions: Array<[string, string]> = [
  ['/404.html', 'Page404Page'],
  ['/about-us-2.html', 'AboutUs2Page'],
  ['/about-us.html', 'AboutUsPage'],
  ['/blog-details-fullwidth.html', 'BlogDetailsFullwidthPage'],
  ['/blog-details-left-sidebar.html', 'BlogDetailsLeftSidebarPage'],
  ['/blog-details-right-sidebar.html', 'BlogDetailsRightSidebarPage'],
  ['/blog-fullwidth.html', 'BlogFullwidthPage'],
  ['/blog-grid-fullwidth.html', 'BlogGridFullwidthPage'],
  ['/blog-grid-left-sidebar.html', 'BlogGridLeftSidebarPage'],
  ['/blog-grid-right-sidebar.html', 'BlogGridRightSidebarPage'],
  ['/blog-left-sidebar.html', 'BlogLeftSidebarPage'],
  ['/blog-list-fullwidth.html', 'BlogListFullwidthPage'],
  ['/blog-list-left-sidebar.html', 'BlogListLeftSidebarPage'],
  ['/blog-list-right-sidebar.html', 'BlogListRightSidebarPage'],
  ['/blog-masonry-fullwidth.html', 'BlogMasonryFullwidthPage'],
  ['/blog-masonry-left-sidebar.html', 'BlogMasonryLeftSidebarPage'],
  ['/blog-masonry-right-sidebar.html', 'BlogMasonryRightSidebarPage'],
  ['/blog-right-sidebar.html', 'BlogRightSidebarPage'],
  ['/checkout.html', 'CheckoutPage'],
  ['/coming-soon.html', 'ComingSoonPage'],
  ['/contact-us.html', 'ContactUsPage'],
  ['/elements-brands.html', 'ElementsBrandsPage'],
  ['/elements-buttons.html', 'ElementsButtonsPage'],
  ['/elements-category-banner.html', 'ElementsCategoryBannerPage'],
  ['/elements-faq.html', 'ElementsFaqPage'],
  ['/elements-icon-box.html', 'ElementsIconBoxPage'],
  ['/elements-instagram.html', 'ElementsInstagramPage'],
  ['/elements-map.html', 'ElementsMapPage'],
  ['/elements-product-sale-banner.html', 'ElementsProductSaleBannerPage'],
  ['/elements-products-tabs.html', 'ElementsProductsTabsPage'],
  ['/elements-products.html', 'ElementsProductsPage'],
  ['/elements-team.html', 'ElementsTeamPage'],
  ['/elements-testimonials.html', 'ElementsTestimonialsPage'],
  ['/index-10.html', 'Index10Page'],
  ['/index-11.html', 'Index11Page'],
  ['/index-2.html', 'Index2Page'],
  ['/index-3.html', 'Index3Page'],
  ['/index-4.html', 'Index4Page'],
  ['/index-5.html', 'Index5Page'],
  ['/index-6.html', 'Index6Page'],
  ['/index-7.html', 'Index7Page'],
  ['/index-8.html', 'Index8Page'],
  ['/index-9.html', 'Index9Page'],
  ['/', 'IndexPage'],
  ['/login-register.html', 'LoginRegisterPage'],
  ['/lost-password.html', 'LostPasswordPage'],
  ['/my-account.html', 'MyAccountPage'],
  ['/order-tracking.html', 'OrderTrackingPage'],
  ['/portfolio-3-columns.html', 'Portfolio3ColumnsPage'],
  ['/portfolio-4-columns.html', 'Portfolio4ColumnsPage'],
  ['/portfolio-5-columns.html', 'Portfolio5ColumnsPage'],
  ['/portfolio-details.html', 'PortfolioDetailsPage'],
  ['/product-details-360.html', 'ProductDetails360Page'],
  ['/product-details-background.html', 'ProductDetailsBackgroundPage'],
  ['/product-details-extra-content.html', 'ProductDetailsExtraContentPage'],
  ['/product-details-fullwidth.html', 'ProductDetailsFullwidthPage'],
  ['/product-details-group.html', 'ProductDetailsGroupPage'],
  ['/product-details-image-variation.html', 'ProductDetailsImageVariationPage'],
  ['/product-details-sidebar.html', 'ProductDetailsSidebarPage'],
  ['/product-details-sticky.html', 'ProductDetailsStickyPage'],
  ['/product-details.html', 'ProductDetailsPage'],
  ['/shop-fullwidth-left-sidebar.html', 'ShopFullwidthLeftSidebarPage'],
  ['/shop-fullwidth-no-gutters.html', 'ShopFullwidthNoGuttersPage'],
  ['/shop-fullwidth-right-sidebar.html', 'ShopFullwidthRightSidebarPage'],
  ['/shop-fullwidth.html', 'ShopFullwidthPage'],
  ['/shop-left-sidebar.html', 'ShopLeftSidebarPage'],
  ['/shop-right-sidebar.html', 'ShopRightSidebarPage'],
  ['/shop.html', 'ShopPage'],
  ['/shopping-cart.html', 'ShoppingCartPage'],
  ['/wishlist.html', 'WishlistPage'],
  ['/admin/login', 'AdminLoginPage'],
  ['/admin/register', 'AdminRegisterPage'],
  ['/admin/dashboard', 'AdminDashboardPage'],
  ['/admin/products', 'AdminProductsPage'],
  ['/admin/products/create', 'AdminProductFormPage'],
  ['/admin/products/:id/edit', 'AdminProductFormPage'],
  ['/admin/orders', 'AdminOrdersPage'],
];

const protectedPaths = new Set([
  '/admin/dashboard',
  '/admin/products',
  '/admin/products/create',
  '/admin/products/:id/edit',
  '/admin/orders',
]);

const appRoutes = routeDefinitions.map(([path, fileName]) => ({
  path,
  Page: lazyPage(fileName),
}));

function RouteLoading() {
  return (
    <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
      <p role="status">Đang tải trang…</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<RouteLoading />}>
        <Routes>
          {appRoutes.map(({ path, Page }) => (
            <Route
              key={path}
              path={path}
              element={protectedPaths.has(path) ? <ProtectedRoute><Page /></ProtectedRoute> : <Page />}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
