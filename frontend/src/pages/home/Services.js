import React from "react";

const Services = () => (
    <section className="padding-bottom">

        <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Dịch vụ thương mại</h4>
        </header>

        <div className="row">
            <div className="col-md-3 col-sm-6">
                <article className="card card-post">
                    <img src={require("../../assets/images/posts/1.jpg")} className="card-img-top" />
                        <div className="card-body">
                            <h6 className="title">TÌM CỬA HÀNG CÓ N°5 L’EAU</h6>
                        </div>
                </article>
            </div>
            <div className="col-md-3 col-sm-6">
                <article className="card card-post">
                <img src={require("../../assets/images/posts/2.jpg")} className="card-img-top" />
                        <div className="card-body">
                            <h6 className="title">TÌM MỘT BOUTIQUE</h6>
                        </div>
                </article>
            </div>
            <div className="col-md-3 col-sm-6">
                <article className="card card-post">
                <img src={require("../../assets/images/posts/3.jpg")} className="card-img-top" />
                        <div className="card-body">
                            <h6 className="title">PHỤ NỮ CÓ SỨC MẠNH THAY ĐỔI THẾ GIỚI</h6>
                        </div>
                </article>
            </div>
            <div className="col-md-3 col-sm-6">
                <article className="card card-post">
                <img src={require("../../assets/images/posts/4.jpg")} className="card-img-top" />
                        <div className="card-body">
                            <h6 className="title">QUAN HỆ ĐỐI TÁC</h6>
                        </div>
                </article>
            </div>
        </div>

    </section>
);
export default Services