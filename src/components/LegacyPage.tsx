import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const scripts: string[] = [
  '/assets/js/vendor/modernizr-3.6.0.min.js',
  '/assets/js/vendor/jquery-3.4.1.min.js',
  '/assets/js/vendor/jquery-migrate-3.1.0.min.js',
  '/assets/js/vendor/bootstrap.bundle.min.js',
  '/assets/js/plugins/select2.min.js',
  '/assets/js/plugins/jquery.nice-select.min.js',
  '/assets/js/plugins/perfect-scrollbar.min.js',
  '/assets/js/plugins/swiper.min.js',
  '/assets/js/plugins/slick.min.js',
  '/assets/js/plugins/mo.min.js',
  '/assets/js/plugins/jquery.ajaxchimp.min.js',
  '/assets/js/plugins/jquery.countdown.min.js',
  '/assets/js/plugins/imagesloaded.pkgd.min.js',
  '/assets/js/plugins/isotope.pkgd.min.js',
  '/assets/js/plugins/jquery.matchHeight-min.js',
  '/assets/js/plugins/ion.rangeSlider.min.js',
  '/assets/js/plugins/photoswipe.min.js',
  '/assets/js/plugins/photoswipe-ui-default.min.js',
  '/assets/js/plugins/jquery.zoom.min.js',
  '/assets/js/plugins/ResizeSensor.js',
  '/assets/js/plugins/jquery.sticky-sidebar.min.js',
  '/assets/js/plugins/product360.js',
  '/assets/js/plugins/jquery.magnific-popup.min.js',
  '/assets/js/plugins/jquery.scrollUp.min.js',
  '/assets/js/plugins/scrollax.min.js',
  '/assets/js/main.js',
];

let assetsPromise: Promise<void> | undefined;

export function loadLegacyScripts(): Promise<void> {
  if (assetsPromise) return assetsPromise;

  assetsPromise = scripts.reduce<Promise<void>>(
    (promise, src) =>
      promise.then(
        () =>
          new Promise<void>((resolve) => {
            if (document.querySelector(`script[data-learts-src="${src}"]`)) {
              resolve();
              return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.dataset.leartsSrc = src;
            script.onload = () => resolve();
            script.onerror = () => resolve();
            document.body.appendChild(script);
          }),
      ),
    Promise.resolve(),
  );

  return assetsPromise;
}

interface LegacyPageProps {
  html: string;
  title?: string;
}

export default function LegacyPage({ html, title }: LegacyPageProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = title ?? 'Learts';
    window.scrollTo(0, 0);
    void loadLegacyScripts().then(() => {
      window.dispatchEvent(new Event('resize'));
    });
  }, [html, title]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        /^https?:\/\//i.test(href)
      ) {
        return;
      }

      if (href.endsWith('.html')) {
        event.preventDefault();
        navigate(href === 'index.html' ? '/' : `/${href.replace(/^\.\//, '')}`);
      }
    };

    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [navigate, html]);

  return (
    <div
      ref={rootRef}
      className="legacy-page"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
