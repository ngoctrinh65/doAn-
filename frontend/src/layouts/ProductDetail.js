// ProductDetail.js
import Subscribe from "../pages/home/Subscribe";
import Content from "../pages/productdetail/Content";
import Description from "../pages/productdetail/Description";
import { useState, useEffect } from "react";

const ProductDetail = () => {
   const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
   const [cartItems, setCartItems] = useState(initialCartItems);

   const handleAddToCart = (cartItem) => {
      setCartItems([...cartItems, cartItem]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartItem]));
      console.log("Item added to cart:", cartItem);
   
      // Update state and local storage
      setCartItems((prevCartItems) => [...prevCartItems, cartItem]);
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartItem]));
   
      // Navigate to shopping cart
      //navigate("/shopping-cart", { state: { cartItems: [...cartItems, cartItem] } });
   };
   

   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]);

   return (
      <div className="container">
    
      <Content onAddToCart={handleAddToCart} setCartItems={setCartItems} cartItems={cartItems} />

         <Description />
         <Subscribe />
      </div>
   );
};

export default ProductDetail;
