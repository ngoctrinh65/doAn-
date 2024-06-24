import React, { useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useAuth } from "../../layouts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const InfoPayment = () => {
  const { user } = useAuth(); // Get the logged-in user from the AuthContext
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [paymentOption, setPaymentOption] = useState("cod");
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // New state to hold cart items

  const [receiverName, setReceiverName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://localhost:8080/api/carts/user/${user.userId}`);
          if (response.data && response.data.length > 0) {
            const cartId = response.data[0].id;
            const cartItemsResponse = await axios.get(`http://localhost:8080/api/cartItems?cartId=${cartId}`);
            setCartItems(cartItemsResponse.data);
            setProducts(cartItemsResponse.data.map((cartItem) => cartItem.product));
          }
        } catch (error) {
          console.error('Error fetching cart items:', error);
        }
      }
    };
    fetchCartItems();
  }, [user]);

  const handlePaymentChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleDeliveryChange = (event) => {
    setDeliveryOption(event.target.value);
  };
  const calculateFinalPrice = (product) => {
    if (product.discount > 0) {
      return product.price - (product.price * product.discount) / 100;
    }
    return product.price;
  };
  const totalPrice = cartItems.reduce(
    (total, cartItem) => total + calculateFinalPrice(cartItem.product) * cartItem.quantity,
    0
  );
  const finalTotalPrice = totalPrice + (deliveryOption === "fast" ? 20 : 10);

  function formatPrice(priceInXu) {
    const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
  }
  const handlePayPalSuccess = (details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);

    // OPTIONAL: Call your server to save the transaction
    return fetch("/paypal-transaction-complete", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderId: data.orderID,
        payerID: data.payerID,
        paymentID: data.paymentID,
        totalPrice: totalPrice
      })
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[A-Z0-9._%+-]+@gmail\.com$/i;
    const phonePattern = /^\d{10}$/;
    if (!receiverName.trim()) newErrors.receiverName = "Vui lòng nhập tên người nhận.";
    if (!email.trim()) newErrors.email = "Vui lòng nhập email.";
    else if (!emailPattern.test(email.trim())) newErrors.email = "Email không hợp lệ. Vui lòng sử dụng email @gmail.com.";
    if (!phoneNumber.trim()) newErrors.phoneNumber = "Vui lòng nhập số điện thoại.";
    else if (!phonePattern.test(phoneNumber.trim())) newErrors.phoneNumber = "Số điện thoại phải chứa 10 chữ số.";
    if (!address.trim()) newErrors.address = "Vui lòng nhập địa chỉ.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      window.scrollTo(0, 0); // Scroll to top if there are errors
      return false;
    }
    return true;
  };

  const handleConfirm = async () => {
    if (validateForm()) {
      const orderData = {
        address: address.trim(),
        email: email.trim(),
        fullname: receiverName.trim(),
        note: deliveryOption === "standard" ? "Giao hàng tiêu chuẩn" : "Giao hàng nhanh",
        order_date: new Date().toISOString().slice(0, 10), // Current date
        phone_number: phoneNumber.trim(),
        status: 0, // Assuming 0 means a new order
        total_money: finalTotalPrice,
        user: { id: user.userId } // Assuming userId is the identifier
      };

      try {
        const response = await axios.post("http://localhost:8080/api/orders", orderData);
        console.log('order Response dfs:', response.data);

        if (response.status === 201) {
          const orderId = response.data.id;
          console.log('orderId Response dfs:', orderId);

          if (orderId) { // Kiểm tra orderId có tồn tại không
            const orderDetail = cartItems.map(cartItem => ({
              quantity: cartItem.quantity,
              price: calculateFinalPrice(cartItem.product),
              order: { id: orderId }, // Link each OrderDetail to the created Order
              product: { id: cartItem.product.id } // Link each OrderDetail to the product
            }));
            console.log(orderDetail);

            // Send OrderDetail objects to the backend
            const orderDetailResponse = await axios.post("http://localhost:8080/api/orderdetails", orderDetail);
            if (orderDetailResponse.status === 201) {
              toast.success("Bạn đã đặt hàng thành công");
            
              const userCartsResponse = await axios.get(`http://localhost:8080/api/carts/user/${user.userId}`);
              const userCarts = userCartsResponse.data;

              // Xóa tất cả các mục trong giỏ hàng của người dùng
              for (const cart of userCarts) {
                try {
                  // Fetch all cart items for the current cart ID
                  const cartItemsResponse = await axios.get(`http://localhost:8080/api/cartItems?cartId=${cart.id}`);
                  const cartItems = cartItemsResponse.data;
                  console.log(`Cart ID: ${cart.id}`);
                  console.log("Cart Items:", cartItems);
                  // Iterate through each cart item and delete it
                  for (const cartItem of cartItems) {
                    await axios.delete(`http://localhost:8080/api/cartItems/delete?cartId=${cart.id}`);                    console.log(`Deleted cart item with ID ${cartItem.id}`);
                  }
                } catch (error) {
                  console.error("Error fetching or deleting cart items:", error);
                }
              }
            } else {
              alert("Failed to place the OrderDetail. Please try again.");
            }
          } else {
            alert("Failed to place the OrderDetail. Please try again.");
          }
        } else {
          alert("Failed to place the OrderDetail. Please try again.");
        }
        localStorage.removeItem('cartItems');
        navigate('/orders');
        window.location.reload();
      } catch (error) {
        console.error("Error placing order:", error);
        alert("An error occurred while placing the order. Please try again.");
      }

    }
  };
  return (
    <section className="section-content padding-y">
      <div className="container" style={{ width: "780px" }}>
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="card-title mb-3">Thông tin giao hàng</h4>
            <div className="form-row">
              <div className="form-group col-sm-6">
                <label className={`js-check box ${deliveryOption === "standard" ? "active" : ""}`}>
                  <input type="radio" name="dostavka" value="standard" checked={deliveryOption === "standard"}
                    onChange={handleDeliveryChange}
                  />
                  <h6 className="title">Giao hàng tiêu chuẩn</h6>
                  <p className="text-muted">Phí thêm  {formatPrice(10)}</p>
                </label>
              </div>
              <div className="form-group col-sm-6">
                <label className={`js-check box ${deliveryOption === "fast" ? "active" : ""}`}>
                  <input type="radio" name="dostavka" value="fast"
                    checked={deliveryOption === "fast"}
                    onChange={handleDeliveryChange}
                  />
                  <h6 className="title">Giao hàng nhanh</h6>
                  <p className="text-muted">Phí thêm  {formatPrice(20)}</p>
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <label>Tên người nhận</label>
                <input type="text" className="form-control" value={receiverName} onChange={(e) => setReceiverName(e.target.value)} />
                {errors.receiverName && <small className="text-danger">{errors.receiverName}</small>}
              </div>
            </div>
            <div className="form-row">
              <div className="col form-group">
                <label>Email</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>
              <div className="col form-group">
                <label>Điện thoại</label>
                <input type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
              </div>
            </div>
            <div className="form-group">
              <label>Địa chỉ</label>
              <textarea className="form-control" rows="2" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
              {errors.address && <small className="text-danger">{errors.address}</small>}
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h4 className="card-title mb-4">Phương thức Thanh toán</h4>
            <div className="form-row">
              <div className="form-group col-sm-6">
                <label className={`js-check box ${paymentOption === "cod" ? "active" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentOption === "cod"}
                    onChange={handlePaymentChange}
                  />
                  <h6 className="title">Thanh toán khi nhận hàng</h6>
                </label>
              </div>
            </div>
            <div>
              <PayPalButton
                amount={(totalPrice / 1000).toFixed(2)} // Converting totalPrice from dong to USD for PayPal
                onSuccess={handlePayPalSuccess}
                options={{
                  clientId: "ARVt8ivC8vX3vron7Q7GmsCFKx_AaXodJjzPUSiut6p4OeNISClTaaAsQGjrYUcPhOI3lQY3OEBQFwoq"
                }}
              />
            </div>
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-body">
            <h4 className="card-title mb-3">Sản phẩm của bạn</h4>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem) => (
                <table className="table table-borderless table-shopping-cart" key={cartItem.product.id}>
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col" width="60%">Product</th>
                      <th scope="col" width="20">Quantity</th>
                      <th scope="col" width="20">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="itemside">
                          <div className="aside">
                            <img src={`./images/items/${cartItem.product.thumbnail}`} className="img-sm" alt={cartItem.product.title} />
                          </div>
                          <figcaption className="info">
                            <a href="#" className="title text-dark">{cartItem.product.title}</a>
                            <p className="text-muted small">Size: XL, Color: blue, Brand: Gucci</p>
                            {cartItem.product.discount > 0 && (
                              <p className="text-muted small">{cartItem.product.discount}%</p>
                            )}
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <div className="price-wrap">
                          {cartItem.quantity}
                        </div>
                      </td>
                      <td>
                        <div className="price-wrap">
                          {cartItem.product.discount > 0 ? (
                            <>
                              <small style={{ color: 'red', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                {formatPrice(calculateFinalPrice(cartItem.product) * cartItem.quantity)}
                              </small>
                              <p className="text-muted" style={{ textDecoration: "line-through" }}>
                                {formatPrice(cartItem.product.price * cartItem.quantity)}
                              </p>
                            </>
                          ) : (
                            <small className="" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                              {formatPrice(cartItem.product.price * cartItem.quantity)}
                            </small>
                          )}
                        </div>
                      </td>

                    </tr>
                  </tbody>
                </table>

              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="card-body">
              <div className="form-group">
                <p className="text-right" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                  Tổng tiền: {formatPrice(totalPrice + (deliveryOption === "fast" ? 20 : 10))}
                </p>
              </div>
            </div>
          </div>
          <button className="subscribe btn btn-primary btn-block mb-3" type="button" onClick={handleConfirm}>Xác nhận</button>

        </div>
      </div>
    </section>
  );
};

export default InfoPayment;
