import React from "react";
import { Link } from "react-router-dom";

const Apparel = () => (

    <section className="padding-bottom">
        <div className="card card-home-category">
            <div className="row no-gutters">
                <div className="col-md-7">
                    <img
                        className="img-bg"
                        src={require("../../assets/images/banners/THE-COCO-MADEMOISELLE-LOOK.webp")}
                        style={{
                            width: "186%", // Chiều rộng ảnh sẽ đầy đủ chiều rộng của col-md-7
                            height: "auto", // Chiều cao tự động điều chỉnh để giữ tỷ lệ
                            display: "block", // Đảm bảo ảnh hiển thị là một khối độc lập
                            objectFit: "cover" // Đảm bảo ảnh không bị biến dạng và đầy đủ kích thước phù hợp
                        }}
                    />
                </div>
                <div className="col-md-5" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <ul className="row no-gutters bordered-cols" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <li style={{ listStyle: "none" }}>
                            <span style={{ fontSize: "0.75rem", letterSpacing: "1px", lineHeight: "1.125rem", fontWeight: "600" }}>ĐỘC QUYỀN</span>
                        </li>
                        <li style={{ listStyle: "none" }}>
                            <span style={{ fontSize: "1.875rem", letterSpacing: "3px", lineHeight: "2.25rem", fontWeight: "600" }}>THE COCO MADEMOISELLE LOOK</span>
                        </li>
                        <Link style={{ borderColor: '#1d1d1d', borderStyle: 'solid', borderWidth: 'thin', height: '3rem', padding: '.28125rem 1.3125rem', transition: 'color .2s, background-color .2s, border-color .2s', alignItems: 'center', cursor: 'pointer', display: 'inline-flex', fontSize: '.6875rem', justifyContent: 'center', lineHeight: '.875rem', marginTop: '1.125rem', position: 'relative' }}>
                            <span style={{ fontWeight: '600', fontSize: '.6875rem', textTransform: 'uppercase' }}>khám phá</span>


                        </Link>
                    </ul>
                </div>
            </div>
        </div>


    </section>
);

export default Apparel