import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { useFormik } from 'formik';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContentRegister = () => {
  const [error, setError] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isCheckingEmail, setIsCheckingEmail] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [profile, setProfile] = useState([]);
  const [users, setUsers] = useState(null);

  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setUsers(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(() => {
    if (users) {
      axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${users.access_token}`, {
          headers: {
            Authorization: `Bearer ${users.access_token}`,
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [users]);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      address: '',
      phone_number: '',
      role_id: 2
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[A-Z0-9._%+-]+@gmail\.com$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.phone_number) {
        errors.phone_number = 'Phone number is required';
      } else if (values.phone_number.length !== 10 || !/^\d+$/.test(values.phone_number)) {
        errors.phone_number = 'Invalid phone number (must be 10 digits)';
      }

      // Additional validation rules for other fields can be added here

      return errors;
    },
    onSubmit: async (values) => {
      const { email, password, fullname, address, phone_number } = values;
      
      try {
        // Kiểm tra định dạng email
        if (!/^[A-Z0-9._%+-]+@gmail\.com$/i.test(email)) {
          formik.setFieldError('email', 'Invalid email address');
          return;
        }
    
        await checkDuplicateEmail(email);
    
        if (isValidEmail) {
          const response = await axios.post("http://localhost:8080/api/users", {
            email,
            password,
            fullname,
            address,
            phone_number,
            role: {id: 2}
          });
    
          if (response.data.id) {
            toast.success("Đăng ký thành công");
            setTimeout(() => {
              window.location.reload();
          }, 1100);
          } else {
            setError("Đăng ký không thành công. Vui lòng thử lại.");
            console.log('Server response:', response.data);
          }
        } else {
          setError("Email đã tồn tại");
        }
      } catch (error) {
        console.error('Registration failed:', error);
        if (error.response) {
          console.log('Server response:', error.response.data);
        }
        setError("Đăng ký không thành công. Vui lòng thử lại.");
      }
    },
  });

  const checkDuplicateEmail = async (email) => {
    try {
      setIsCheckingEmail(true);
      const response = await axios.get("http://localhost:8080/api/users");
      const userEmails = response.data.map(user => user.email);
      setIsValidEmail(!userEmails.includes(email));
    } catch (error) {
      console.error('Error fetching user emails:', error);
    } finally {
      setIsCheckingEmail(false);
    }
  };

  const responseFacebook = async (response) => {
    console.log(response);
    if (response.status !== 'unknown') {
      setIsLoggedIn(true);
      setUserData(response);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    googleLogout();
    setProfile(null);
  };

  return (
    <section className="section-content padding-y">
      <div className="card mx-auto" style={{ width: '520px' }} >
        <article className="card-body">
          <header className="mb-4"><h4 className="card-title">Sign up</h4></header>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-row">
              <label>Tên</label>
              <input
                className="form-control"
                type="text"
                placeholder="Tên"
                {...formik.getFieldProps('fullname')}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                type="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && <p className="text-danger">{formik.errors.email}</p>}
              {!formik.errors.email && !isValidEmail && <p className="text-danger">Email đã tồn tại</p>}
            </div>
            <div className="form-row">
              <label>Mật khẩu</label>
              <input
                className="form-control"
                type="password"
                placeholder="Mật khẩu"
                {...formik.getFieldProps('password')}
              />
            </div>
            <div className="form-row">
              <label>Địa chỉ</label>
              <input
                className="form-control"
                type="text"
                placeholder="Địa chỉ"
                {...formik.getFieldProps('address')}
              />
            </div>
            <div className="form-row">
              <label>Số điện thoại</label>
              <input
                className={`form-control ${formik.touched.phone_number && formik.errors.phone_number ? 'is-invalid' : ''}`}
                type="tel"
                placeholder="Số điện thoại"
                {...formik.getFieldProps('phone_number')}
              />
              {formik.touched.phone_number && formik.errors.phone_number && <p className="text-danger">{formik.errors.phone_number}</p>}
            </div>
            <label className="form-group mt-3">
              Bạn đã có tài khoản? Vui lòng{' '}
              <Link to="/login" className="text-danger">Đăng nhập tài khoản</Link>
            </label>

            <div className="form-group mt-3">
              {error && <p className="text-danger">{error}</p>}

              <button
                type="submit"
                className="btn btn-primary btn-block"
              >Đăng ký
              </button>
            </div>
            {!isLoggedIn ? (
              <>
                <FacebookLogin 
                  appId="3719318968393153"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  isMobile={false}
                />
                <a href="#" className="btn-block mt-3">
                  <button
                    onClick={loginGoogle}
                    style={{
                      minHeight: 56,
                      minWidth: 243,
                      background: "rgb(241 79 14)",
                      color: "#fff",
                      padding: "10px,20px",
                      border: "none",
                      borderRadius: "5px",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.12)",
                      textAlign: "center",
                      display: "flex",
                      textTransform: "uppercase",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      fontSize: "16px",
                      cursor: "pointer",
                      maxWidth: "360px",
                    }}
                  >
                    Login in with Google 
                  </button>
                </a>
              </>
            ) : (
              <button type="button" onClick={logout} className="btn btn-danger">Đăng xuất</button>
            )}
          </form>
        </article>
      </div>
      <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    </section>
  );
};

export default ContentRegister;
