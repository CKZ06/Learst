import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from './api';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const location = useLocation();
  return getToken() ? children : <Navigate to="/admin/login" replace state={{ from: location.pathname }} />;
}
