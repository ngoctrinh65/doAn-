// Content.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../layouts/AuthContext";


const Content = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth(); // Get the logged-in user from the AuthContext
    const [cartItems, setCartItems] = useState([]); // New state to hold cart items

    const handleCheckout = async () => {
        navigate('/payment-info');
    };
    useEffect(() => {
        const fetchCartItems = async () => {
            if (user) {
                try {
                    const response = await axios.get(`http://localhost:8080/api/carts/user/${user.userId}`);

                    if (response.data && response.data.length > 0) {
                        const cartId = response.data[0].id;
                        const cartItemsResponse = await axios.get(`http://localhost:8080/api/cartItems?cartId=${cartId}`);

                        console.log('Cart Items Response:', cartItemsResponse.data);

                        setCartItems(cartItemsResponse.data); // Set cart items

                        setProducts(cartItemsResponse.data.map((cartItem) => cartItem.product));
                    } else {
                        console.log('Cart Response is empty or does not contain cart id');
                    }
                } catch (error) {
                    console.error('Error fetching cart items:', error);
                }
            } else {
                navigate('/login');
            }
        };

        fetchCartItems();
    }, [user, navigate]);
    const handleRemoveCartItem = async (cartItemId, productId) => {
        try {
            // Find the cart item to remove
            const cartItem = cartItems.find(cartItem => cartItem.id === cartItemId);
            if (!cartItem) {
                console.error('Cart item not found for cart item ID:', cartItemId);
                return;
            }
    
            // Get the cart ID
            const cartId = cartItem.cart.id;
    
            // Fetch the current product details
            const productResponse = await axios.get(`http://localhost:8080/api/products/${productId}`);
            const product = productResponse.data;
    
            // Calculate the new product quantity
            const updatedProductQuantity = product.quantity + cartItem.quantity;
    
            // Create an object with the updated quantity, keeping other fields unchanged
            const updatedProduct = {
                ...product,
                quantity: updatedProductQuantity,
            };
    
            // Update the product quantity in the backend
            await axios.put(`http://localhost:8080/api/products/${productId}`, updatedProduct);
    
            // Remove the cart item
            await axios.delete(`http://localhost:8080/api/cartItems/${cartId}/${productId}`);
    
            // Update the state of cartItems and products
            setCartItems(cartItems.filter(item => item.id !== cartItemId));
            setProducts(products.map(item => item.id === productId ? { ...item, quantity: updatedProductQuantity } : item));
    
            // Update the local storage
            const updatedCartItems = cartItems.filter(item => item.id !== cartItemId);
            localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    
            // Reload the page after a short delay
            setTimeout(() => {
                window.location.reload();
            }, 1000);
    
        } catch (error) {
            console.error('Failed to remove cart item:', error);
        }
    };
    
    const handleUpdateQuantity = async (productId, newQuantity) => {
        try {
            // Find the cart item associated with the product
            const cartItem = cartItems.find(cartItem => cartItem.product.id === productId);
            if (!cartItem) {
                console.error('Cart item not found for product ID:', productId);
                return;
            }
    
            // Get the cart ID
            const cartId = cartItem.cart.id;
    
            // Update the cart item's quantity in the backend
            const response = await axios.put(`http://localhost:8080/api/cartItems/${cartId}/${productId}`, { quantity: newQuantity });
    
            if (response.status === 200) {
                console.log('Successfully updated cart item quantity.');
    
                // Update state of cartItems with the new quantity
                setCartItems(prevCartItems =>
                    prevCartItems.map(item =>
                        item.product.id === productId && item.cart.id === cartId
                            ? { ...item, quantity: newQuantity }
                            : item
                    )
                );
    
                // Update product.quantity locally by the difference in quantities
                const product = products.find(product => product.id === productId);
                if (product) {
                    const quantityDifference = newQuantity - cartItem.quantity;
                    const updatedProduct = {
                        ...product,
                        quantity: product.quantity - quantityDifference,
                    };
    
                    // Update the products state with the updated product quantity
                    setProducts(prevProducts =>
                        prevProducts.map(item =>
                            item.id === productId ? updatedProduct : item
                        )
                    );
                }
            } else {
                console.error('Failed to update cart item quantity:', response);
            }
        } catch (error) {
            console.error('Failed to update cart item quantity:', error);
        }
    };
    
    const handleIncreaseQuantity = async (productId, currentQuantity) => {
        try {
            const product = products.find(product => product.id === productId);
            if (!product) {
                console.error('Product not found for product ID:', productId);
                return;
            }
    
            const updatedQuantity = currentQuantity + 1;
    
            // Check if the updated quantity exceeds the available product quantity
            if (updatedQuantity > product.quantity) {
                console.error("Số lượng sản phẩm vượt quá số lượng trong kho");
                return;
            }
    
            // Call handleUpdateQuantity to increase the quantity by 1
            await handleUpdateQuantity(productId, updatedQuantity);
    
            // Update the product's quantity in the backend
            const response = await axios.put(`http://localhost:8080/api/products/${productId}`, {
                ...product,
                quantity: product.quantity - 1 // Ensure quantity is updated
            });
    
            if (response.status === 200) {
                console.log('Successfully updated product quantity in the backend.');
    
                // Update product.quantity locally by subtracting 1
                const updatedProduct = {
                    ...product,
                    quantity: product.quantity - 1, // Ensure to subtract 1 from product.quantity
                };
    
                // Update the products state with the updated product quantity
                setProducts(prevProducts =>
                    prevProducts.map(item =>
                        item.id === productId ? updatedProduct : item
                    )
                );
            } else {
                console.error('Failed to update product quantity:', response);
            }
    
        } catch (error) {
            console.error('Failed to increase product quantity:', error);
        }
    };
    
    
    const handleDecreaseQuantity = async (productId, currentQuantity) => {
        try {
            const product = products.find(product => product.id === productId);
            if (!product) {
                console.error('Product not found for product ID:', productId);
                return;
            }
    
            if (currentQuantity <= 1) {
                console.error("Quantity cannot be decreased further");
                return;
            }
    
            const updatedQuantity = currentQuantity - 1;
    
            // Call handleUpdateQuantity to decrease the quantity by 1
            await handleUpdateQuantity(productId, updatedQuantity);
    
            // Update the product's quantity in the backend
            const response = await axios.put(`http://localhost:8080/api/products/${productId}`, {
                ...product,
                quantity: product.quantity + 1 // Ensure quantity is updated
            });
    
            if (response.status === 200) {
                console.log('Successfully updated product quantity in the backend.');
    
                // Update product.quantity locally by adding 1
                const updatedProduct = {
                    ...product,
                    quantity: product.quantity + 1, // Ensure to add 1 to product.quantity
                };
    
                // Update the products state with the updated product quantity
                setProducts(prevProducts =>
                    prevProducts.map(item =>
                        item.id === productId ? updatedProduct : item
                    )
                );
            } else {
                console.error('Failed to update product quantity:', response);
            }
    
        } catch (error) {
            console.error('Failed to decrease product quantity:', error);
        }
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

    function formatPrice(priceInXu) {
        const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
    }

    return (
        <section className="section-content padding-y">
            <div className="container">
                <div className="row">
                    <main className="col-md-12">
                        <div className="card">
                            {cartItems.length > 0 ? (
                                cartItems.map((cartItem) => (
                                    <table className="table table-borderless table-shopping-cart" key={cartItem.product.id}>
                                        <thead className="text-muted">
                                            <tr className="small text-uppercase">
                                                <th scope="col" width="40%">Sản phẩm</th> {/* Adjusted width */}
                                                <th scope="col" width="20%">Số lượng</th> {/* Adjusted width */}
                                                <th scope="col" width="20%">Giá tiền</th> {/* Adjusted width */}
                                                <th scope="col" className="text-right" width="20%"></th> {/* Adjusted width */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <figure className="itemside">
                                                        <div className="aside">
                                                        <img
                                                                src={`./images/items/${cartItem.product.thumbnail}`}
                                                                className="img-sm"
                                                                alt={cartItem.product.title}
                                                                onClick={() => {
                                                                    window.location.href = `/chi-tiet-san-pham?productId=${cartItem.product.id}`;
                                                                }}
                                                            />
                                                        </div>
                                                        <figcaption className="info">
                                                            <a href="#" className="title text-dark" style={{ width: '420px', }}>{cartItem.product.title}</a>
                                                            <p className="text-muted small">Size: XL, Color: blue, Brand: Gucci</p>
                                                            {cartItem.product.discount > 0 && (
                                                                <p className="text-muted small">{cartItem.product.discount}%</p>
                                                            )}
                                                        </figcaption>
                                                    </figure>
                                                </td>
                                                <td>
                                                    <div className="quantity-control">
                                                        <button
                                                            onClick={() => handleDecreaseQuantity(cartItem.product.id, cartItem.quantity)}
                                                            className="btn btn-outline-secondary btn-sm"
                                                            style={{ margin: '3px' }}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="quantity">{cartItem.quantity}</span>
                                                        <button
                                                            onClick={() => handleIncreaseQuantity(cartItem.product.id, cartItem.quantity)}
                                                            className="btn btn-outline-secondary btn-sm"
                                                            style={{ margin: '3px' }}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="price-wrap">
                                                        {cartItem.product.discount > 0 ? (
                                                            <>
                                                                <small style={{ color: 'red', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                                                    {formatPrice(calculateFinalPrice(cartItem.product) * cartItem.quantity)}
                                                                </small>
                                                                <small className="text-muted" style={{ textDecoration: "line-through" }}>
                                                                    {formatPrice(cartItem.product.price * cartItem.quantity)}
                                                                </small>
                                                            </>
                                                        ) : (
                                                            <small className="" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                                                                {formatPrice(cartItem.product.price * cartItem.quantity)}
                                                            </small>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <button className="btn btn-light" onClick={() => handleRemoveCartItem(cartItem.id,cartItem.product.id)}> Xóa</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))
                            ) : (
                                <p>Giỏ hàng của bạn trống</p>
                            )}
                            <div className="card-body">
                                <dl className="dlist-align">
                                    <dd
                                        className="text-right"
                                        style={{ fontSize: '24px', fontWeight: 'bold' }}
                                    >
                                        Tổng tiền: {formatPrice(totalPrice)}
                                    </dd>
                                </dl>
                            </div>
                            <div className="card-body border-top">
                                {cartItems.length > 0 && (
                                    <button className="btn btn-info float-md-right" onClick={handleCheckout}>
                                        Mua hàng <i className="fa fa-chevron-right"></i>
                                    </button>
                                )}
                                <a href="http://localhost:3000/" className="btn btn-light">
                                    <i className="fa fa-chevron-left"></i> Tiếp tục mua sắm
                                </a>
                            </div>
                        </div>

                        <div className="alert alert-success mt-3">
                            <p className="icontext"><i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Content;
