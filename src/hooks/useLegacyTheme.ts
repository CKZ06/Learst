import { useEffect, type RefObject } from 'react';
import { loadLegacyScripts } from '../components/LegacyPage';

type ThemeElement = HTMLElement & { swiper?: { destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void } };
type ThemeWindow = Window & typeof globalThis & { jQuery?: (element: Element | string) => any; Swiper?: new (element: Element, options: Record<string, unknown>) => unknown };
const arrows = { prevArrow: '<button class="slick-prev" aria-label="Previous"><i class="ti-angle-left"></i></button>', nextArrow: '<button class="slick-next" aria-label="Next"><i class="ti-angle-right"></i></button>' };
const slickWidgets: Array<[string, Record<string, unknown>]> = [
  ['.product-carousel', { infinite: true, slidesToShow: 4, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 991, settings: { slidesToShow: 3 } }, { breakpoint: 767, settings: { slidesToShow: 2 } }, { breakpoint: 575, settings: { slidesToShow: 1 } }] }],
  ['.product-list-slider', { rows: 3, ...arrows }],
  ['.blog-carousel', { infinite: true, slidesToShow: 3, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 991, settings: { slidesToShow: 2 } }, { breakpoint: 767, settings: { slidesToShow: 1 } }] }],
  ['.brand-carousel', { infinite: true, slidesToShow: 5, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 1199, settings: { slidesToShow: 4 } }, { breakpoint: 991, settings: { slidesToShow: 3 } }, { breakpoint: 767, settings: { slidesToShow: 2 } }, { breakpoint: 575, settings: { slidesToShow: 1 } }] }],
  ['.testimonial-slider', { infinite: true, slidesToShow: 1, slidesToScroll: 1, ...arrows }],
  ['.testimonial-carousel', { infinite: true, slidesToShow: 3, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 991, settings: { slidesToShow: 2 } }, { breakpoint: 767, settings: { slidesToShow: 1 } }] }],
  ['.category-banner1-carousel', { infinite: true, slidesToShow: 3, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 991, settings: { slidesToShow: 2 } }, { breakpoint: 767, settings: { slidesToShow: 1 } }] }],
  ['.instafeed-carousel1', { infinite: true, slidesToShow: 5, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 1199, settings: { slidesToShow: 4 } }, { breakpoint: 991, settings: { slidesToShow: 3 } }, { breakpoint: 767, settings: { slidesToShow: 2 } }, { breakpoint: 479, settings: { slidesToShow: 1 } }] }],
  ['.instafeed-carousel2', { infinite: true, slidesToShow: 3, slidesToScroll: 1, ...arrows, responsive: [{ breakpoint: 767, settings: { slidesToShow: 2 } }, { breakpoint: 479, settings: { slidesToShow: 1 } }] }],
];
const swiperWidgets: Array<[string, Record<string, unknown>]> = [
  ['.home1-slider', { loop: true, speed: 750, effect: 'fade', navigation: { nextEl: '.home1-slider-next', prevEl: '.home1-slider-prev' } }],
  ['.home2-slider', { loop: true, speed: 750, effect: 'fade', navigation: { nextEl: '.home2-slider-next', prevEl: '.home2-slider-prev' } }],
  ['.home3-slider', { loop: true, speed: 750, effect: 'fade', navigation: { nextEl: '.home3-slider-next', prevEl: '.home3-slider-prev' } }],
  ['.home4-slider', { loop: true, speed: 750, spaceBetween: 200, pagination: { el: '.home4-slider-pagination', clickable: true }, navigation: { nextEl: '.home4-slider-next', prevEl: '.home4-slider-prev' } }],
  ['.home5-slider', { loop: true, speed: 750, spaceBetween: 30, pagination: { el: '.home5-slider-pagination', clickable: true }, navigation: { nextEl: '.home5-slider-next', prevEl: '.home5-slider-prev' } }],
  ['.home7-slider, .home8-slider, .home12-slider', { loop: true, speed: 750, spaceBetween: 30, effect: 'fade' }],
];

/** Rehydrates legacy Learts widgets whenever React mounts a new route. */
export function useLegacyTheme(rootRef: RefObject<HTMLElement | null>, routeKey: string): void {
  useEffect(() => {
    let active = true;
    const initializedSlick: Element[] = [];
    const initializedSwiper: ThemeElement[] = [];
    void loadLegacyScripts().then(() => {
      if (!active || !rootRef.current) return;
      const root = rootRef.current;
      const win = window as ThemeWindow;
      const $ = win.jQuery;
      root.querySelectorAll<HTMLElement>('[data-bg-image]').forEach((el) => { if (el.dataset.bgImage) el.style.backgroundImage = `url("${el.dataset.bgImage}")`; });
      root.querySelectorAll<HTMLElement>('[data-bg-color]').forEach((el) => { if (el.dataset.bgColor) el.style.backgroundColor = el.dataset.bgColor; });
      if ($) {
        // Header off-canvas is React-managed. Remove the one-time template handlers
        // so they cannot race React state or keep references to a previous render.
        $('.offcanvas-toggle').off('click');
        $('.offcanvas-close, .offcanvas-overlay').off('click');
        slickWidgets.forEach(([selector, options]) => root.querySelectorAll(selector).forEach((el) => {
          const widget = $(el);
          if (!widget.hasClass('slick-initialized')) { widget.slick(options); initializedSlick.push(el); }
          widget.slick('setPosition');
        }));
        root.querySelectorAll('.isotope-grid').forEach((el) => {
          if (el.hasAttribute('data-react-isotope')) return;
          el.setAttribute('data-react-isotope', 'true');
          const grid = $(el);
          const start = () => grid.isotope({ itemSelector: '.grid-item', masonry: { columnWidth: '.grid-sizer' } });
          if (typeof grid.imagesLoaded === 'function') grid.imagesLoaded(start); else start();
        });
        root.querySelectorAll('.video-popup').forEach((el) => { if (!el.hasAttribute('data-react-popup')) { $(el).magnificPopup({ type: 'iframe' }); el.setAttribute('data-react-popup', 'true'); } });
        root.querySelectorAll('.image-gallery').forEach((el) => { if (!el.hasAttribute('data-react-popup')) { $(el).magnificPopup({ delegate: 'a', type: 'image', gallery: { enabled: true } }); el.setAttribute('data-react-popup', 'true'); } });
      }
      if (win.Swiper) swiperWidgets.forEach(([selector, options]) => root.querySelectorAll<ThemeElement>(selector).forEach((el) => { if (!el.swiper) { new win.Swiper!(el, options); initializedSwiper.push(el); } }));
      requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
    });
    return () => {
      active = false;
      const $ = (window as ThemeWindow).jQuery;
      initializedSwiper.forEach((el) => el.swiper?.destroy(true, true));
      if ($) initializedSlick.forEach((el) => { const widget = $(el); if (widget.hasClass('slick-initialized')) widget.slick('unslick'); });
    };
  }, [rootRef, routeKey]);
}
