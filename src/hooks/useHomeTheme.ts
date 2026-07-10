import { useEffect } from 'react';
import { loadLegacyScripts } from '../components/LegacyPage';

type ThemeSwiper = {
  autoplay?: { stop: () => void };
  destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
  slideToLoop?: (index: number, speed?: number) => void;
};
type ThemeElement = HTMLElement & { swiper?: ThemeSwiper };
type SwiperConstructor = new (element: Element, options: Record<string, unknown>) => ThemeElement['swiper'];
type JQueryCollection = {
  hasClass: (className: string) => boolean;
  slick: (optionsOrMethod: Record<string, unknown> | string) => JQueryCollection;
};
type JQueryFactory = (element: Element) => JQueryCollection;

/** Initialize Home's legacy widgets, including when the route is entered again. */
export function useHomeTheme(): void {
  useEffect(() => {
    let active = true;

    void loadLegacyScripts().then(() => {
      if (!active) return;

      document.querySelectorAll<HTMLElement>('[data-bg-image]').forEach((element) => {
        const image = element.dataset.bgImage;
        if (image) element.style.backgroundImage = `url("${image}")`;
      });

      const slider = document.querySelector<ThemeElement>('.home1-slider');
      const Swiper = (window as typeof window & { Swiper?: SwiperConstructor }).Swiper;
      if (slider && Swiper && !slider.swiper) {
        new Swiper(slider, {
          loop: true,
          speed: 750,
          effect: 'fade',
          initialSlide: 0,
          navigation: { nextEl: '.home1-slider-next', prevEl: '.home1-slider-prev' },
          autoplay: false,
        });
      }
      slider?.swiper?.autoplay?.stop();
      slider?.swiper?.slideToLoop?.(0, 0);

      const carousel = document.querySelector('.category-banner1-carousel');
      const jquery = (window as typeof window & { jQuery?: JQueryFactory }).jQuery;
      if (carousel && jquery) {
        const $carousel = jquery(carousel);
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous categories"><i class="fas fa-long-arrow-alt-left"></i></button>',
            nextArrow: '<button class="slick-next" aria-label="Next categories"><i class="fas fa-long-arrow-alt-right"></i></button>',
            responsive: [
              { breakpoint: 991, settings: { slidesToShow: 2 } },
              { breakpoint: 767, settings: { slidesToShow: 1 } },
            ],
          });
        }

        const positionCarousel = () => $carousel.slick('setPosition');
        positionCarousel();
        requestAnimationFrame(positionCarousel);
        carousel.querySelectorAll('img').forEach((image) => {
          if (!image.complete) image.addEventListener('load', positionCarousel, { once: true });
        });
      }

      window.dispatchEvent(new Event('resize'));
    });

    return () => {
      active = false;
      document.querySelector<ThemeElement>('.home1-slider')?.swiper?.destroy(true, true);

      const carousel = document.querySelector('.category-banner1-carousel');
      const jquery = (window as typeof window & { jQuery?: JQueryFactory }).jQuery;
      if (carousel && jquery) {
        const $carousel = jquery(carousel);
        if ($carousel.hasClass('slick-initialized')) $carousel.slick('unslick');
      }
    };
  }, []);
}
