import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyAccount = ({ logout }) => {
  const [user, setUser] = useState({
    username: 'midang3332',
    name: '',
    email: 'tr******@gmail.com',
    phone: '*******97',
    gender: '',
    birthDate: '1990-01-01',
    avatar: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Replace with your backend API endpoint to fetch user data
        const response = await axios.get(`http://localhost:8080/api/users/${user.username}`);
        setUser(response.data); // Assuming response.data structure matches `user` state
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      avatar: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User data submitted:', user);
    // Example: Save user data to backend using axios post or put request
  };

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <aside className="col-md-3">
            <nav className="list-group">
              <Link to={`/my-account`} className="list-group-item"> Tài khoản của tui </Link>
              <Link to={`/orders`} className="list-group-item "> Đơn hàng </Link>
              <Link to="/profile/wishlist" className="list-group-item"> Thông báo </Link>
              <button className="list-group-item" onClick={() => logout()}> Đăng xuất </button>
            </nav>
          </aside>
          {/* Main content */}
          <div className="col-md-9">
            <div className="my-account">
              <h2>Hồ Sơ Của Tôi</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Tên đăng nhập: </label>
                  <span>{user.username}</span>
                </div>
                <div>
                  <label htmlFor="name">Tên:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <span>{user.email}</span> <button>Thay Đổi</button>
                </div>
                <div>
                  <label>Số điện thoại:</label>
                  <span>{user.phone}</span> <button>Thay Đổi</button>
                </div>
                <div>
                  <label>Giới tính:</label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={user.gender === 'male'}
                      onChange={handleChange}
                    /> Nam
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={user.gender === 'female'}
                      onChange={handleChange}
                    /> Nữ
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      checked={user.gender === 'other'}
                      onChange={handleChange}
                    /> Khác
                  </label>
                </div>
                <div>
                  <label>Ngày sinh:</label>
                  <input
                    type="date"
                    name="birthDate"
                    value={user.birthDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Ảnh đại diện:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {user.avatar && <img src={user.avatar} alt="Avatar" width="100" />}
                </div>
                <button type="submit">Lưu</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
