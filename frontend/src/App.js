import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import axios from 'axios'; // Import axios
import "./assets/sass/app.scss";
import { useAuth } from './layouts/AuthContext';

function App() {
  const { user } = useAuth(); // Lấy user từ context
  const [cartItemCount, setCartItemCount] = useState(0); // State to hold the cart item count

  useEffect(() => {
    if (user) {
      console.log('UserId:', user.userId);
      // Thực hiện các công việc khác liên quan đến user khi người dùng đăng nhập
      fetchCartItemCount(user.userId);
    }
  }, [user]); // Sử dụng user context trong useEffect

  const fetchCartItemCount = async (userId) => {
    try {
      const cartResponse = await axios.get(`http://localhost:8080/api/carts/user/${userId}`);
      if (cartResponse.data && cartResponse.data.length > 0) {
        const cartId = cartResponse.data[0].id; // Accessing the id from the first object in the array
        const cartItemsResponse = await axios.get(`http://localhost:8080/api/cartItems?cartId=${cartId}`);
        if (cartItemsResponse.data && Array.isArray(cartItemsResponse.data)) {
          const uniqueProductIds = new Set(cartItemsResponse.data.map(cartItem => cartItem.product.id));
          const itemCount = uniqueProductIds.size;
          setCartItemCount(itemCount);
          console.log('Số lượng mẫu sản phẩm trong giỏ hàng:', itemCount);
        } else {
          
          console.log('Cart Items Response is not an array or is empty');
        }
      } else {
        console.log('Cart Response is empty or does not contain cart id');
      }
    } catch (error) {
      setCartItemCount(0);

        console.error('Error fetching cart items:', error);
    }
  };
  console.log()
  return (
    <div>
      <GoogleOAuthProvider clientId="671650388119-qf74dbs0sbe68kapr2aqav096lmacdok.apps.googleusercontent.com">
        <Header userId={user?.userId} cartItemCount={cartItemCount} /> {/* Pass userId from user context */}

        <Main />
        <Footer />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
