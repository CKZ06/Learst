import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { useCartStore } from '../store/cartStore';

interface ApiProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  stock: number;
  categoryId: number;
  categoryName: string;
  categorySlug: string;
}

interface ProductsResponse {
  success: boolean;
  data: { products: ApiProduct[] };
}
interface CategoriesResponse { success: boolean; data: Array<{ id: number; name: string; slug: string }> }

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value);

export default function ShopPage() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCatalog() {
      try {
        setLoading(true);
        setError(null);
        const [productsResponse, categoriesResponse] = await Promise.all([
          fetch('/api/products?limit=20', { signal: controller.signal }),
          fetch('/api/categories', { signal: controller.signal }),
        ]);
        if (!productsResponse.ok || !categoriesResponse.ok) {
          throw new Error('Could not load the product catalog.');
        }
        const [productData, categoryData] = await Promise.all([
          productsResponse.json() as Promise<ProductsResponse>,
          categoriesResponse.json() as Promise<CategoriesResponse>,
        ]);
        setProducts(productData.data.products);
        setCategories(categoryData.data.map((category) => category.slug));
      } catch (caughtError) {
        if (caughtError instanceof DOMException && caughtError.name === 'AbortError') return;
        setError(caughtError instanceof Error ? caughtError.message : 'Unknown API error.');
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    void loadCatalog();
    return () => controller.abort();
  }, []);

  const visibleProducts = useMemo(
    () =>
      selectedCategory === 'all'
        ? products
        : products.filter((product) => product.categorySlug === selectedCategory),
    [products, selectedCategory],
  );

  return (
    <Layout title="Shop | Learts">
      <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <Container>
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">Shop</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">Products</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="section section-padding pt-0">
        <div className="shop-toolbar border-bottom">
          <Container>
            <div className="isotope-filter shop-product-filter" aria-label="Product categories">
              <button
                type="button"
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              {categories.slice(0, 8).map((category) => (
                <button
                  type="button"
                  key={category}
                  className={selectedCategory === category ? 'active' : ''}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.replace(/-/g, ' ')}
                </button>
              ))}
            </div>
          </Container>
        </div>

        <Container>
          {loading && <p className="text-center py-5" role="status">Loading products…</p>}
          {error && (
            <div className="text-center py-5" role="alert">
              <h2>Unable to load products</h2>
              <p>{error}</p>
            </div>
          )}
          {!loading && !error && (
            <>
              <p className="mt-4 mb-4">Showing {visibleProducts.length} products</p>
              <div className="products row row-cols-xl-5 row-cols-lg-4 row-cols-sm-2 row-cols-1">
                {visibleProducts.map((product) => (
                  <div className="col mb-5" key={product.id}>
                    <article className="product">
                      <div className="product-thumb">
                        <Link to="/product-details.html" className="image">
                          {product.stock === 0 && <span className="product-badges"><span className="outofstock">Out</span></span>}
                          <img src={product.image} alt={product.name} />
                        </Link>
                        <Link
                          to="/wishlist.html"
                          className="add-to-wishlist hintT-left"
                          data-hint="Add to wishlist"
                          data-product-id={product.id}
                          data-product-name={product.name}
                          data-product-price={product.price}
                          data-product-image={product.image}
                          data-product-category={product.categoryName}
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                      <div className="product-info">
                        <h2 className="title h6"><Link to="/product-details.html">{product.name}</Link></h2>
                        <span className="price">
                          <span className="new">{formatPrice(product.price)}</span>
                        </span>
                        <div className="product-buttons">
                          <Link to="/product-details.html" className="product-button hintT-top" data-hint="View Product">
                            <i className="fas fa-search" />
                          </Link>
                          <button
                            type="button"
                            className="product-button hintT-top"
                            data-hint="Add to Cart"
                            data-direct-cart="true"
                            aria-label={`Add ${product.name} to cart`}
                            disabled={product.stock === 0}
                            onClick={() =>
                              addItem({
                                id: String(product.id),
                                name: product.name,
                                price: product.price,
                                image: product.image,
                                category: product.categoryName,
                              })
                            }
                          >
                            <i className="fas fa-shopping-cart" />
                          </button>
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
}
