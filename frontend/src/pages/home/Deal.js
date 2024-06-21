import React from "react";
const Deal = () => (
    <section className="padding-bottom">
        <div className="card card-deal">
            <div className="row">
                <div className="row-heading content-body">
                    <header className="section-heading">
                        <h3 className="section-title">Khung giờ vàng</h3>
                        <p>giảm giá bất ngờ</p>
                    </header>
                    <div className="timer">
                        <div> <span className="num">07</span> <small>Ngày</small></div>
                        <div> <span className="num">12</span> <small>Giờ</small></div>
                        <div> <span className="num">58</span> <small>Phút</small></div>
                        <div> <span className="num">02</span> <small>Giây</small></div>
                    </div>
                </div>
                <div className="row col-8 no-gutters items-wrap">
                    <div className="col-md col-6" >
                        <figure className="card-product-grid card-sm">
                            <a href="http://localhost:3000/product-detail" className="img-wrap">
                                <img src={require("../../assets/images/items/3.jpg")} alt="#" />
                            </a>
                            <div className="text-wrap p-3">
                                <a href="http://localhost:3000/product-detail" className="title">Nước hoa SexyMan</a>
                                <span className="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>
                    <div className="col-md col-6">
                        <figure className="card-product-grid card-sm">
                            <a href="http://localhost:3000/product-detail" className="img-wrap">
                                <img src={require("../../assets/images/items/4.jpg")} alt="#" />
                            </a>
                            <div className="text-wrap p-3">
                                <a href="#" className="title">Nước hoa SexyMan</a>
                                <span className="badge badge-danger"> -5% </span>
                            </div>
                        </figure>
                    </div>
                    <div className="col-md col-6">
                        <figure className="card-product-grid card-sm">
                            <a href="#" className="img-wrap">
                                <img src={require("../../assets/images/items/5.jpg")} alt="#" />
                            </a>
                            <div className="text-wrap p-3">
                                <a href="#" className="title">Nước hoa SexyMan</a>
                                <span className="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

           
        </div>

 
      

    </section>
);
export default Deal