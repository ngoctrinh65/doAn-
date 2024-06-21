import React, { useState, useEffect } from 'react';
import { GET_ALL } from '../api/apiService';

const Footer = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách categories
        GET_ALL('categories')
            .then(response => {
                // Lưu danh sách categories vào state
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Lỗi khi lấy danh sách thể loại:', error);
            });
    }, []);

    return (
        <footer className="section-footer bg-dark">
            <section className="footer-top padding-y-lg text-white">
                <div className="row">
                    <aside className="col-md col-6">
                        <h6 className="title">Danh mục</h6>
                        <ul className="list-unstyled">
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a href="..">{category.name}</a>
                                </li>
                            ))}
                        </ul>
                    </aside>
                    <aside className="col-md col-6">
                        <h6 className="title">Công ty</h6>
                        <ul className="list-unstyled">
                            <li> <a href="..">Về chúng tôi</a></li>
                            <li> <a href="..">Tuyển dụng</a></li>
                            <li> <a href="..">Tìm cửa hàng</a></li>
                            <li> <a href="..">Điều khoản và quy định</a></li>
                            <li> <a href="..">Sơ đồ trang web</a></li>
                        </ul>
                    </aside>
                    <aside className="col-md col-6">
                        <h6 className="title">Trợ giúp</h6>
                        <ul className="list-unstyled">
                            <li> <a href="..">Liên hệ chúng tôi</a></li>
                            <li> <a href="..">Hoàn tiền</a></li>
                            <li> <a href="..">Trạng thái đơn hàng</a></li>
                            <li> <a href="..">Thông tin vận chuyển</a></li>
                            <li> <a href="..">Mở tranh chấp</a></li>
                        </ul>
                    </aside>
                   
                    <aside className="col-md">
                        <h6 className="title">Mạng xã hội</h6>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/chanelofficial/"> <i className="fab fa-instagram "></i> Instagram</a></li>
                            <li><a href="https://x.com/chanel?lang=en"> <i className="fab fa-twitter"></i> Twitter </a></li>
                            <li><a href="https://www.facebook.com/chanel/?locale=vi_VN" target="_blank"> <i className="fab fa-facebook"></i> Facebook </a></li>
                            <li><a href="https://www.youtube.com/@CHANEL" target="_blank"> <i className="fab fa-youtube"></i> Youtube </a></li>
                        </ul>
                    </aside>
                </div>
            </section>
            <div className="row justify-content-md-center mb-4">
                <div className="col-lg-4 col-sm-6">
                    <form className="form-row">
                        <div className="col-8">
                            <input className="form-control" placeholder="Email của bạn" type="email" />
                        </div>
                        <div className="col-4">
                            <button type="submit" className="btn btn-block btn-warning"> <i className="fa fa-envelope"></i> </button>
                        </div>
                    </form>
                </div>
            </div>

            <section className="footer-bottom text-center">
                <p className="text-white">Chính sách bảo mật - Điều khoản sử dụng - Hướng dẫn điều tra thông tin người dùng</p>
                <p className="text-white"> &copy 2019 Tên công ty, Bảo lưu mọi quyền </p>
            </section>
        </footer>
    );
};

export default Footer;
