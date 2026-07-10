import { useEffect } from 'react';
import { useCartStore, type Product } from '../store/cartStore';

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function readProduct(button: Element): { product: Product; quantity: number } | null {
  const element = button as HTMLElement;
  const explicitName = element.dataset.productName;
  const explicitPrice = Number(element.dataset.productPrice);
  const explicitImage = element.dataset.productImage;
  const explicitId = element.dataset.productId;
  if (explicitName && Number.isFinite(explicitPrice) && explicitImage) {
    return {
      product: {
        id: explicitId || slugify(explicitName),
        name: explicitName,
        price: explicitPrice,
        image: explicitImage,
        category: element.dataset.productCategory,
      },
      quantity: 1,
    };
  }

  const scope =
    button.closest('.product') ??
    button.closest('.product-summery') ??
    button.closest('.modal-content');
  if (!scope) return null;

  const name =
    scope.querySelector<HTMLElement>('.product-title, .product-info .title, .title a')
      ?.innerText.trim() ?? '';
  const priceText =
    scope.querySelector<HTMLElement>('.product-price, .product-info .price, .price')
      ?.innerText ?? '';
  const priceMatch = priceText.replace(/,/g, '').match(/\d+(?:\.\d+)?/);
  if (!name || !priceMatch) return null;

  const image =
    scope.querySelector<HTMLImageElement>('.product-thumb img:not(.image-hover), .product-images img, img')
      ?.getAttribute('src') ?? '/assets/images/product/cart-product-1.webp';
  const quantityInput = scope.querySelector<HTMLInputElement>('.input-qty');
  const quantity = Math.max(1, Number.parseInt(quantityInput?.value ?? '1', 10) || 1);

  return {
    product: {
      id: slugify(name),
      name,
      price: Number(priceMatch[0]),
      image,
      category:
        scope.querySelector<HTMLElement>('.product-category')?.innerText.trim() || undefined,
    },
    quantity,
  };
}

export default function CartInteractionBridge() {
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const button = target.closest<HTMLElement>(
        '[data-hint="Add to Cart"], [data-cart-action="add"]',
      );
      const textButton = target.closest<HTMLElement>('a, button');
      const addButton =
        button ??
        (textButton?.textContent?.trim().toLowerCase().includes('add to cart')
          ? textButton
          : null);
      if (!addButton) return;
      if (addButton.dataset.directCart === 'true') return;

      const result = readProduct(addButton);
      if (!result) return;

      event.preventDefault();
      addItem(result.product, result.quantity);
      addButton.setAttribute('data-hint', 'Added to cart');
      addButton.setAttribute('aria-label', `${result.product.name} added to cart`);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [addItem]);

  return null;
}
