import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, saveAuth } from '../admin/api';

export default function AdminRegisterPage() {
  const navigate = useNavigate(); const [form, setForm] = useState({ name: '', email: '', password: '' }); const [error, setError] = useState('');
  async function submit(event: FormEvent) { event.preventDefault(); try { const data = await api<{ token: string; user: unknown }>('/api/auth/register', { method: 'POST', body: JSON.stringify(form) }); saveAuth(data.token, data.user); navigate('/admin/dashboard'); } catch (caught) { setError(caught instanceof Error ? caught.message : 'Registration failed.'); } }
  return <main className="container py-5" style={{ maxWidth: 520 }}><h1>Admin Register</h1><form onSubmit={submit} className="bg-light p-4 mt-4">{(['name','email','password'] as const).map((field) => <div key={field}><label className="form-label text-capitalize">{field}</label><input className="form-control mb-3" type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'} value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} required /></div>)}{error && <p className="text-danger">{error}</p>}<button className="btn btn-dark w-100">Register</button><p className="mt-3"><Link to="/admin/login">Back to login</Link></p></form></main>;
}
