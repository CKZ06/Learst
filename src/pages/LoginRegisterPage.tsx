import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api, saveAuth } from '../admin/api';

export default function LoginRegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [register, setRegister] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [registerError, setRegisterError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const data = await api<{ token: string; user: { role: string } }>('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      saveAuth(data.token, data.user);
      navigate(data.user.role === 'admin' ? '/admin/dashboard' : '/my-account.html', { replace: true });
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : 'Đăng nhập thất bại.');
    } finally {
      setIsLoggingIn(false);
    }
  }

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRegisterError('');
    if (register.password !== register.confirmPassword) {
      setRegisterError('Mật khẩu xác nhận không khớp.');
      return;
    }
    setIsRegistering(true);
    try {
      const data = await api<{ token: string; user: unknown }>('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ name: register.name, email: register.email, password: register.password }),
      });
      saveAuth(data.token, data.user);
      navigate('/my-account.html', { replace: true });
    } catch (error) {
      setRegisterError(error instanceof Error ? error.message : 'Đăng ký thất bại.');
    } finally {
      setIsRegistering(false);
    }
  }

  return (
    <Layout title={'Learts – Handmade Shop eCommerce HTML Template'}>
      <>
      {/* Page Title/Header Start */}
      <div className="page-title-section section" data-bg-image="/assets/images/bg/page-title-1.webp">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">
                  Login &amp; Register
                </h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Login &amp; Register
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Title/Header End */}
      {/* Login & Register Section Start */}
      <div className="section section-padding">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="user-login-register bg-light">
                <div className="login-register-title">
                  <h2 className="title">
                    Login
                  </h2>
                  <p className="desc">
                    Great to have you back!
                  </p>
                </div>
                <div className="login-register-form">
                  <form onSubmit={handleLogin}>
                    <div className="row learts-mb-n50">
                      <div className="col-12 learts-mb-50">
                        <input
                          type="email"
                          placeholder="Username or email address"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </div>
                      <div className="col-12 learts-mb-50">
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          required
                        />
                      </div>
                      {loginError && <div className="col-12 text-danger learts-mb-20" role="alert">{loginError}</div>}
                      <div className="col-12 text-center learts-mb-50">
                        <button className="btn btn-dark btn-outline-hover-dark" type="submit" disabled={isLoggingIn}>
                          {isLoggingIn ? 'Logging in...' : 'Login'}
                        </button>
                      </div>
                      <div className="col-12 learts-mb-50">
                        <div className="row learts-mb-n20">
                          <div className="col-12 learts-mb-20">
                            <div className="form-check">
                              <input type="checkbox" className="form-check-input" id="rememberMe" />
                              <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col-12 learts-mb-20">
                            <Link to="/lost-password.html" className="fw-400">
                              Lost your password?
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="user-login-register">
                <div className="login-register-title">
                  <h2 className="title">
                    Register
                  </h2>
                  <p className="desc">
                    If you don’t have an account, register now!
                  </p>
                </div>
                <div className="login-register-form">
                  <form onSubmit={handleRegister}>
                    <div className="row learts-mb-n50">
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerName">Full name <abbr className="required">*</abbr></label>
                        <input id="registerName" value={register.name} onChange={(event) => setRegister({ ...register, name: event.target.value })} required minLength={2} />
                      </div>
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerEmail">
                          Email address 
                          <abbr className="required">
                            *
                          </abbr>
                        </label>
                        <input type="email" id="registerEmail" value={register.email} onChange={(event) => setRegister({ ...register, email: event.target.value })} required />
                      </div>
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerPassword">Password <abbr className="required">*</abbr></label>
                        <input type="password" id="registerPassword" value={register.password} onChange={(event) => setRegister({ ...register, password: event.target.value })} required minLength={6} />
                      </div>
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerConfirmPassword">Confirm password <abbr className="required">*</abbr></label>
                        <input type="password" id="registerConfirmPassword" value={register.confirmPassword} onChange={(event) => setRegister({ ...register, confirmPassword: event.target.value })} required minLength={6} />
                      </div>
                      <div className="col-12 learts-mb-50">
                        <p>
                          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy
                        </p>
                      </div>
                      {registerError && <div className="col-12 text-danger learts-mb-20" role="alert">{registerError}</div>}
                      <div className="col-12 text-center learts-mb-50">
                        <button className="btn btn-dark btn-outline-hover-dark" type="submit" disabled={isRegistering}>
                          {isRegistering ? 'Registering...' : 'Register'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Login & Register Section End */}
      </>
    </Layout>
  );
}
