import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../layouts/AuthContext";
import axios from "axios";

const cardTextStyle = {
    maxWidth: "80%",
};

const Details = ({ setCartItems, cartItems }) => {
    const [product, setProduct] = useState({});
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    const [quantity, setQuantity] = useState(1);
    const { user } = useAuth();
    const navigate = useNavigate();

    const increaseQuantity = () => {
        if (quantity < product.quantity) {
            setQuantity(quantity + 1);
        } else {
            toast.error("Số lượng sản phẩm vượt quá số lượng trong kho");
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    function formatPrice(priceInXu) {
        const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [productId]);

    const handleUpdateQuantity = async (productId, newQuantity, cartId) => {
        try {
            const response = await axios.put(`http://localhost:8080/api/cartItems/${cartId}/${productId}`, { quantity: newQuantity });

            if (response.status === 200) {
                setCartItems((prevCartItems) =>
                    prevCartItems.map((cartItem) =>
                        cartItem.product.id === productId && cartItem.cart.id === cartId
                            ? { ...cartItem, quantity: newQuantity }
                            : cartItem
                    )
                );
            } else {
                console.error('Failed to update cart item quantity:', response);
            }
        } catch (error) {
            console.error('Failed to update cart item quantity:', error);
        }
    };

    const handleAddToCart = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            let cartId;
            const cartResponse = await axios.get(`http://localhost:8080/api/carts/user/${user.userId}`);
            if (cartResponse.data.length > 0) {
                cartId = cartResponse.data[0].id;
            }

            const existingCartItem = cartItems.find(cartItem => cartItem.product.id === product.id && cartItem.cart.id === cartId);

            if (existingCartItem) {
                await handleUpdateQuantity(product.id, existingCartItem.quantity + quantity, cartId);
            } else {
                const cartItem = {
                    product: { id: product.id },
                    cart: { id: cartId },
                    quantity: quantity
                };

                const response = await axios.post('http://localhost:8080/api/cartItems', cartItem);

                if (response.data && response.data.id) {
                    const newCartItem = {
                        ...response.data,
                        product: { id: product.id },
                        cart: { id: cartId }
                    };
                    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
                    localStorage.setItem("cartItems", JSON.stringify([...cartItems, newCartItem]));
                } else {
                    console.error('Error in response data:', response.data);
                }
            }

            setQuantity(1);
            toast.success("Thêm sản phẩm thành công");
            // setTimeout(() => {
            //     // window.location.reload();
            // }, 1100); // 1000 milliseconds (1 second) delay
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    const buyNow = async () => {
        if (!user) {
            navigate('/login');
            return;
        }

        try {
            let cartId;
            const cartResponse = await axios.get(`http://localhost:8080/api/carts/user/${user.userId}`);
            if (cartResponse.data.length > 0) {
                cartId = cartResponse.data[0].id;
            }

            const existingCartItem = cartItems.find(cartItem => cartItem.product.id === product.id && cartItem.cart.id === cartId);

            if (existingCartItem) {
                await handleUpdateQuantity(product.id, existingCartItem.quantity + quantity, cartId);
            } else {
                const cartItem = {
                    product: { id: product.id },
                    cart: { id: cartId },
                    quantity: quantity
                };

                const response = await axios.post('http://localhost:8080/api/cartItems', cartItem);

                if (response.data && response.data.id) {
                    const newCartItem = {
                        ...response.data,
                        product: { id: product.id },
                        cart: { id: cartId }
                    };
                    setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
                    localStorage.setItem("cartItems", JSON.stringify([...cartItems, newCartItem]));
                } else {
                    console.error('Error in response data:', response.data);
                }
            }

            setQuantity(1);
            setTimeout(() => {
                navigate('/gio-hang'); // Navigate to shopping cart after adding item
            }, 1000);
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <section>
            <section className="py-3 bg-light">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            {/* Add other breadcrumb items if necessary */}
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {product.title}
                        </li>
                    </ol>
                </div>
            </section>
            <section className="section-content bg-white padding-y">
                <div className="container">
                    <div className="row">
                        <aside className="col-md-6">
                            <div className="card">
                                <article className="gallery-wrap">
                                    <div className="img-big-wrap">
                                        <div>
                                            <img src={`./images/items/${product.thumbnail}`} alt={product.title} />
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </aside>
                        <main className="col-md-6">
                            <article className="product-info-aside">
                                <h2 className="title mt-3">{product.title}</h2>
                                <div className="rating-wrap my-3">
                                    <small className="label-rating text-muted">132 reviews</small>
                                    <small className="label-rating text-success">
                                        <i className="fa fa-clipboard-check"></i> 154 orders{" "}
                                    </small>
                                </div>
                                <div className="mb-3">
                                    {product.discount > 0 ? (
                                        <div>
                                            <span className="price" style={{ fontSize: '1.6rem', color: '#e63b3b' }}>
                                                {formatPrice(product.price - (product.price * product.discount) / 100)}
                                            </span>
                                            <span className="price-old" style={{ textDecoration: "line-through" }}>{formatPrice(product.price)}</span>
                                            <span style={{ color: "white", backgroundColor: "red", padding: "2px 5px", marginLeft: "5px" }}>
                                                Giảm {product.discount}%
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="price">{formatPrice(product.price)}</span>
                                    )}
                                </div>
                                <p>{product.description}</p>
                                <dl className="row">
                                    <dt className="col-sm-3">Nhà sản xuất</dt>
                                    <dd className="col-sm-9"><a href="#">1Four</a></dd>
                                    <dt className="col-sm-3">Bảo hành</dt>
                                    <dd className="col-sm-9">24 tháng</dd>
                                    <dt className="col-sm-3">Thời gian nhận hàng:</dt>
                                    <dd className="col-sm-9">3-4 ngày</dd>
                                    <dt className="col-sm-3">Tình trạng</dt>
                                    <dd className="col-sm-9">Còn hàng</dd>
                                </dl>
                                <div className="form-group col-md d-flex align-items-center">
                                    <button className="btn btn-primary" onClick={decreaseQuantity}>-</button>
                                    <input type="text" value={quantity} className="form-control text-center mx-2" style={{ width: '70px' }} readOnly />
                                    <button className="btn btn-primary" onClick={increaseQuantity}>+</button>
                                </div>
                                <div className="form-row mt-4">
                                    <div className="form-group col-md">
                                        <Link to={`/gio-hang`} className="widget-view">
                                            <button className="btn" onClick={buyNow} style={{ backgroundColor: 'orange', color: '#fff' }}>
                                                Mua ngay
                                            </button>
                                        </Link>
                                        <button className="btn" onClick={handleAddToCart} style={{ backgroundColor: 'orange', color: '#fff', marginLeft: '30px' }}>
                                            Thêm giỏ hàng
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </main>
                    </div>
                </div>
            </section>
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

export default Details;
