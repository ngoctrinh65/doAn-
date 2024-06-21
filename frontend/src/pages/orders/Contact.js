import React from "react";

const Contact = () => (
    <section className="py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="text-center mb-3">
                        <h4 className="title-section">Liên hệ chúng tôi</h4>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Họ và tên</label>
                            <input type="text" className="form-control" id="name" placeholder="Nhập họ và tên của bạn" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Nhập email của bạn" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Chủ đề</label>
                            <input type="text" className="form-control" id="subject" placeholder="Nhập chủ đề liên hệ" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Nội dung</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Nhập nội dung liên hệ"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
