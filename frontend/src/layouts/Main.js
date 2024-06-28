// Main.js
import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import Offers from './Offers';
import Shopping from './Shopping';
import Register from './Register';
import Login from './Login';
import Category from './Category';
import Payment from './Payment';
import Content from './Content';
import Starter from './Starter';
import Wishlist from './Wishlist';
import Setting from './Setting';
import Seller from './Seller';
import Orders from './Orders';
import PageMain from './PageMain';
import Address from './Address';
import ListingLarge from './ListingLarge';
import ListingGrid from './ListingGrid';
import UserLogin from '../pages/login/UserLogin';
import SearchResultsPage from './SearchResultsPage';
import Location from '../pages/location/Tracking';
import InfoPayment from '../pages/payment/InfoPayment';
import ProtectedRoute from './ProtectedRoute';
import Tracking from '../pages/location/Tracking';
import MyAccount from '../pages/login/MyAccount';
import Contact from '../pages/orders/Contact';
import Intro from '../pages/orders/Intro';

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search-page" element={<SearchResultsPage />} />
      <Route path="chi-tiet-san-pham" element={<ProductDetail />} />
      <Route path="offers" element={<Offers />} />
      <Route path="gio-hang" element={<ProtectedRoute><Shopping /></ProtectedRoute>} />
      <Route path="payment-info" element={<InfoPayment />} />
      <Route path="register" element={<Register />} />
      <Route path="userlogin" element={<UserLogin />} />
      <Route path="login" element={<Login />} />
      <Route path="my-account" element={<MyAccount />} />
      <Route path="lien-he" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
      <Route path="gioi-thieu" element={<Intro />} />


      <Route path="payment" element={<Payment />} />
      <Route path="danh-muc" element={<Category />} />
      <Route path="content" element={<Content />} />
      <Route path="starter" element={<Starter />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="tracking/:orderId" element={<Tracking/>} />
      <Route path="setting" element={<Setting />} />
      <Route path="seller" element={<Seller />} />
      <Route path="orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="pagemain" element={<PageMain />} />
      <Route path="address" element={<Address />} />
      <Route path="listinglarge" element={<ListingLarge />} />
      <Route path="listinggrid" element={<ListingGrid />} />
    </Routes>
  </main>
);

export default Main;
