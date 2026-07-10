export interface ApiResponse<T> { success: boolean; message: string; data: T }
export const TOKEN_KEY = 'learts-admin-token';
export const USER_KEY = 'learts-admin-user';

export function getToken() { return localStorage.getItem(TOKEN_KEY); }
export function getStoredUser<T = { id: number; name: string; email: string; role: string }>() {
  const value = localStorage.getItem(USER_KEY);
  if (!value) return null;
  try { return JSON.parse(value) as T; } catch { return null; }
}
export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
}
export function saveAuth(token: string, user: unknown) { localStorage.setItem(TOKEN_KEY, token); localStorage.setItem(USER_KEY, JSON.stringify(user)); }

export async function api<T>(url: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const response = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers },
  });
  const body = await response.json() as ApiResponse<T>;
  if (!response.ok) {
    if (response.status === 401) clearAuth();
    throw new Error(body.message || 'Request failed.');
  }
  return body.data;
}
