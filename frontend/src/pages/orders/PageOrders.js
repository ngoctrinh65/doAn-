import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../../layouts/AuthContext";
import { Tabs, Tab } from 'react-bootstrap';
import './Order.css';

const PageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const { user, logout } = useAuth();
    const filterOrdersByStatus = (status) => {
        return orders.filter(order => order.status === status);
    };
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
                            <Link to={`/my-account`} className="list-group-item"> Tài khoản của tui </Link>
                            <Link to={`/orders`} className="list-group-item"> Đơn hàng </Link>
                            <Link to="/profile/wishlist" className="list-group-item"> Thông báo </Link>
                            <button className="list-group-item" onClick={() => logout()}> Đăng xuất </button>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="col-md-9">
                        {/* Tabs */}
                        <Tabs defaultActiveKey="0" id="orders-tab" className="mb-3">
                            <Tab eventKey="0" title="Chờ xác nhận">
                                {filterOrdersByStatus(0).map((order, index) => (
                                    <OrderCard key={index} order={order} orderDetails={orderDetails} />
                                ))}
                            </Tab>
                            <Tab eventKey="1" title="Đã xác nhận">
                                {filterOrdersByStatus(1).map((order, index) => (
                                    <OrderCard key={index} order={order} orderDetails={orderDetails} />
                                ))}
                            </Tab>
                            <Tab eventKey="2" title="Đang vận chuyển">
                                {filterOrdersByStatus(2).map((order, index) => (
                                    <OrderCard key={index} order={order} orderDetails={orderDetails} />
                                ))}
                            </Tab>
                            <Tab eventKey="3" title="Đã giao hàng">
                                {filterOrdersByStatus(3).map((order, index) => (
                                    <OrderCard key={index} order={order} orderDetails={orderDetails} />
                                ))}
                            </Tab>
                        </Tabs>
                    </main>
                </div>
            </div>
        </section>
    );
};

const OrderCard = ({ order, orderDetails }) => {
    // Tính phí vận chuyển dựa trên tùy chọn giao hàng
    const shippingFee = order.note === "Giao hàng nhanh" ? 20 : 10; // Phí vận chuyển bằng USD
    const totalPrice = order.total_money;
    const finalTotalPrice = totalPrice + shippingFee;
    function formatPrice(priceInXu) {
        const dong = priceInXu * 1000; // Assuming 1 dong = 100 xu
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(dong);
    }
    return (
        <article className="card mb-4">
            <header className="card-header">
                <h4 className="d-inline-block mr-3">Mã đơn hàng: {order.id}</h4>
                <span>Ngày đặt hàng: {order.order_date}</span>
            </header>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-8">
                        <h6 className="text-muted">Giao đến</h6>
                        <p>
                            Tên người nhận: {order.fullname} <br />
                            Số điện thoại: {order.phone_number} <br />
                            Email: {order.email} <br />
                            Địa chỉ: {order.address} <br />
                            Ghi chú: {order.note}
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-muted">Phương thức thanh toán</h6>
                        <span className="text-success">
                            <i className="fab fa-lg fa-cc-visa"></i>
                            Tiền mặt                        </span>
                        <p>
                            Tổng tiền: {formatPrice(totalPrice)} <br />
                            Phí vận chuyển: {formatPrice(shippingFee)} <br />
                            <b>Tổng đơn: {formatPrice(finalTotalPrice)}</b>
                        </p>
                    </div>
                </div>
            </div>
            {orderDetails.slice(0, 1).map(orderDetail => (
                <>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="horizontal-timeline">
                                <ul className="list-inline items d-flex justify-content-between">
                                    <li className="list-inline-item items-list">
                                        <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#f37a27' }}>Chờ xác nhận</p>
                                    </li>
                                    <li className="list-inline-item items-list">
                                        <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#f37a27' }}>Đang giao hàng</p>
                                    </li>
                                    <li className="list-inline-item items-list">
                                        <p className="py-1 px-2 rounded text-white" style={{ backgroundColor: '#f37a27' }}>Đã giao hàng</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="table-responsive mt-4">
                        <table className="table table-hover">
                            <tbody>
                                <tr key={orderDetail.product.id}>
                                    <td width="65">
                                        <img src={`./images/items/${orderDetail.product.thumbnail}`} className="img-sm" alt={orderDetail.product.title} />
                                    </td>
                                    <td>
                                        <p className="title mb-0">{orderDetail.product.title}</p>
                                        <var className="price text-muted"> {formatPrice(orderDetail.price)}</var>
                                    </td>
                                    <td width="250">
                                        <Link to={`/tracking/${order.id}`} className="btn btn-outline-primary"> Theo dõi</Link>
                                        {/* <div className="dropdown d-inline-block">
                                            <a href="#" data-toggle="dropdown" className="dropdown-toggle btn btn-outline-secondary">More</a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a href="#" className="dropdown-item">Hủy đơn</a>
                                            </div>
                                        </div> */}
                                    </td>


                                </tr>
                                <h6>{orderDetails.length} sản phẩm</h6> {/* Hiển thị số lượng orderDetail */}
                            </tbody>
                        </table>

                    </div>
                </>
            ))}
        </article >
    );

};

export default PageOrders;