import type { ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { clearAuth } from './api';

interface AdminLayoutProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
}

const navItems = [
  { to: '/admin/dashboard', label: 'Tổng quan', icon: '⌂' },
  { to: '/admin/products', label: 'Sản phẩm', icon: '◇' },
  { to: '/admin/orders', label: 'Đơn hàng', icon: '▤' },
];

export default function AdminLayout({ title, subtitle, action, children }: AdminLayoutProps) {
  const logout = () => {
    clearAuth();
    window.location.replace('/admin/login');
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="admin-brand" to="/admin/dashboard" aria-label="Learts Admin dashboard">
          <span className="admin-brand-mark">L</span>
          <span><strong>LEARTS</strong><small>STUDIO ADMIN</small></span>
        </Link>
        <nav className="admin-nav" aria-label="Admin navigation">
          <span className="admin-nav-label">QUẢN LÝ</span>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) => `admin-nav-link${isActive ? ' active' : ''}`}>
              <span className="admin-nav-icon" aria-hidden="true">{item.icon}</span>{item.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <Link className="admin-store-link" to="/">↗ <span>Xem cửa hàng</span></Link>
          <button className="admin-logout" onClick={logout}><span>⇥</span> Đăng xuất</button>
        </div>
      </aside>

      <div className="admin-workspace">
        <header className="admin-mobile-bar">
          <Link className="admin-mobile-brand" to="/admin/dashboard">LEARTS <small>ADMIN</small></Link>
          <nav aria-label="Mobile admin navigation">
            {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
          </nav>
          <button onClick={logout} aria-label="Đăng xuất">⇥</button>
        </header>
        <main className="admin-main">
          <header className="admin-page-header">
            <div>
              <p className="admin-eyebrow">LEARTS / QUẢN TRỊ</p>
              <h1>{title}</h1>
              {subtitle && <p className="admin-page-subtitle">{subtitle}</p>}
            </div>
            {action && <div className="admin-page-action">{action}</div>}
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}
