import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartInteractionBridge from './CartInteractionBridge';
import { useLegacyTheme } from '../hooks/useLegacyTheme';

interface LayoutProps { children: ReactNode; title?: string }

export default function Layout({ children, title = 'Learts' }: LayoutProps) {
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();
  useLegacyTheme(mainRef, location.pathname);
  useEffect(() => {
    document.title = title.includes('Handmade Shop') ? 'Learts – Handmade Shop eCommerce HTML Template' : title;
    window.scrollTo(0, 0);
  }, [title]);
  return <><CartInteractionBridge /><Header /><main ref={mainRef}>{children}</main><Footer /></>;
}
