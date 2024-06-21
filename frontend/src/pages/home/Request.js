import React from "react";
import background from '../../assets/images/banners/banner-banner1.jpg';
const Request = () => (
    
    <section className="padding-bottom">

        <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Yêu cầu về giá</h4>
        </header>

        <div className="row">
            <div className="col-md-8">
                <div className="card-banner banner-quote overlay-gradient" style={{backgroundImage: `url(${background})`}}>
                    <div className="card-img-overlay white">
                        <h3 className="card-title">Một cách dễ dàng để gửi yêu cầu tới nhà cung cấp</h3>
                        <p className="card-text" style={{ width: "400px" }}>Lựa chọn giá cả hoặc mẫu mã theo yêu cầu
                            .</p>
                        <a href="http://localhost:3000/listinggrid" className="btn btn-info rounded-pill"> Xem thêm</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">

                <div className="card card-body">
                    <h4 className="title py-3">Một yêu cầu - Nhiều trích dẫn</h4>
                    <form>
                        <div className="form-group">
                            <input className="form-control" name="" placeholder="Bạn đang tìm kiếm điều gì ?" type="text" />
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <input className="form-control" placeholder="Số lượng" name="" type="text" />

                                <select className="custom-select form-control">
                                    <option>Pieces</option>
                                    <option>Litres</option>
                                    <option>Tons</option>
                                    <option>Gramms</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group text-muted">
                            <p>Chọn loại mẫu:</p>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="option1" />
                                <span className="form-check-label">Yêu cầu về giá</span>
                            </label>
                            <label className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" value="option2" />
                                <span className="form-check-label">Yêu cầu về mẫu</span>
                            </label>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success">Gửi yêu cầu</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
);
export default Request