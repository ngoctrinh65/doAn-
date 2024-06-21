import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../layouts/AuthContext";
import { Tabs, Tab } from 'react-bootstrap';

const PageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
	function formatPrice(priceInXu) {
		const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
		return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
	  }
    useEffect(() => {
        const fetchOrders = async () => {
			try {
				const response = await fetch(`http://localhost:8080/api/orders/user?userId=${user.userId}`);
				if (!response.ok) {
					throw new Error('Failed to fetch orders');
				}
				const data = await response.json();
				setOrders(data);
		
				// Fetch order details for each order
				data.forEach(order => {
					fetchOrderDetails(order.id);
				});
			} catch (error) {
				console.error('Error fetching orders:', error);
			}
		};

        fetchOrders();
    }, [user.userId]);
	const fetchOrderDetails = async (orderId) => {
		try {
			const response = await fetch(`http://localhost:8080/api/orderdetails/orderId?orderId=${orderId}`);
			if (!response.ok) {
				throw new Error('Failed to fetch order details');
			}
			const data = await response.json();
			setOrderDetails(data);
		} catch (error) {
			console.error('Error fetching order details:', error);
		}
	};

    return (
        <section className="section-content padding-y">
            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <aside className="col-md-3">
                        <nav className="list-group">
                            <Link to="/profile" className="list-group-item"> Tài khoản của tui </Link>
                            <Link to="/profile/orders" className="list-group-item active"> Đơn hàng </Link>
                            <Link to="/profile/wishlist" className="list-group-item"> Thông báo </Link>
                            <button className="list-group-item" onClick={() => logout()}> Đăng xuất </button>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="col-md-9">
                        {/* Order Cards */}
                        {orders.map(order => (
                            <article key={order.id} className="card mb-4">
                                <header className="card-header">
                                    {/* <a href="#" className="float-right"> <i className="fa fa-print"></i> Print</a> */}
                                    <strong className="d-inline-block mr-3">Order ID: {order.id}</strong>
                                    <span>Order Date: {order.order_date}</span>
                                </header>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h6 className="text-muted">Delivery to</h6>
                                            <p>
                                                Tên người nhận: {order.fullname} <br />
                                                Số điện thoại: {order.phone_number} <br />
                                                Email: {order.email} <br />
                                                Địa chỉ: {order.address} <br />
                                                Note: {order.note}

                                            </p>
                                        </div>
                                        <div className="col-md-4">
                                            <h6 className="text-muted">Phương thức thanh toán</h6>
                                            <span className="text-success">
                                                <i className="fab fa-lg fa-cc-visa"></i>
                                                Visa **** 4216
                                            </span>
                                            <p>
                                                Subtotal: ${order.total_money} <br />
                                                Shipping fee: $56 {/* Assuming shipping fee is a static value */}
                                                <span className="b">Total: ${order.total_money + 56}</span> {/* Assuming total = total_money + shipping_fee */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            {orderDetails.map(orderDetail => (
                                                <tr key={orderDetail.product.id}>
                                                    <td width="65">
													<img src={`./images/items/${orderDetail.product.thumbnail}`} className="img-sm" alt={orderDetail.product.title} />
                                                    </td>
                                                    <td>
                                                        <p className="title mb-0">{orderDetail.product.title}</p>
                                                        <var className="price text-muted">USD {orderDetail.price}</var>
                                                    </td>
                                                    <td> Seller</td>
                                                    <td width="250">
                                                        <a href="#" className="btn btn-outline-primary">Track order</a>
                                                        <div className="dropdown d-inline-block">
                                                            <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="#" className="dropdown-item">Return</a>
                                                                <a href="#" className="dropdown-item">Cancel order</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </article>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    );
};

export default PageOrders;
