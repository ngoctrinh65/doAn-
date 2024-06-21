import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../layouts/AuthContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const handleLogin = async () => {
    try {
      if (email && password) {
        const response = await axios.get('http://localhost:8080/api/users', {
          params: { email, password },
        });
        const user = response.data.find(user => user.email === email);
        if (user) {
          const { id: userId, fullname, token } = user;
          console.log('UserId:', userId);

          login(userId, fullname, token);
          
          // Kiểm tra xem người dùng đã có giỏ hàng hay chưa
          try {
            const cartResponse = await axios.get(`http://localhost:8080/api/carts/user/${userId}`);
            console.log('User has an existing cart:', cartResponse.data);
          } catch (cartError) {
            if (cartError.response && cartError.response.status === 404) {
              // Người dùng chưa có giỏ hàng, tạo giỏ hàng mới
              const newCartResponse = await axios.post(`http://localhost:8080/api/carts`, { user: { id: userId } });
              console.log('Created new cart for user:', newCartResponse.data);
            } else {
              console.error('Error checking cart:', cartError);
            }
          }
          
          navigate('/');
        } else {
          setError('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.');
        }
      } else {
        setError('Email and password are required');
      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      if (error.response) {
        setError(`Đăng nhập thất bại. ${error.response.data.message}`);
      } else {
        setError('Đăng nhập thất bại. Vui lòng thử lại.');
      }
    }
  };

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{ width: '320px' }}>
        <article className="card-body">
          <header className="mb-4">
            <h4 className="card-title">Đăng nhập</h4>
          </header>
          <form>
            <div className="form-group">
              <label>Email</label>
              <input
                required="email"
                className="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <input
                required="password"
                className="form-control"
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              {error && <p className="text-danger">{error}</p>}
              <button
                type="button"
                onClick={handleLogin}
                className="btn btn-primary btn-block"
              >
                Đăng nhập
              </button>
            </div>
            <div className="form-group mt-3">
              <label className="form-group mt-3">
                Bạn chưa có tài khoản?{' '}
                <button onClick={() => navigate('/register')}>
                  Đăng ký ở đây
                </button>
              </label>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default UserLogin;
