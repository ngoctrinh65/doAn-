import React from "react";

const Intro = () => (
    <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="text-center mb-4">Giới thiệu Chanel</h2>
                    <p className="text-center">
                        Chanel là một trong những thương hiệu thời trang và mỹ phẩm hàng đầu thế giới, với lịch sử lâu đời và danh tiếng vững chắc. Thương hiệu được thành lập bởi Gabrielle "Coco" Chanel vào năm 1910 tại Paris, Pháp. Từ lúc thành lập đến nay, Chanel đã không ngừng khẳng định vị thế của mình nhờ vào sự sáng tạo, phá cách và sự tinh tế trong thiết kế.
                    </p>
                    <p className="text-center">
                        Với triết lý thiết kế đơn giản, sang trọng và tinh tế, Chanel luôn đem đến cho khách hàng sự đẳng cấp và sự đặc biệt không thể nhầm lẫn. Thương hiệu nổi tiếng với các sản phẩm thời trang cao cấp như nước hoa, váy đầm, túi xách, giày dép và mỹ phẩm.
                    </p>
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Triết lý thiết kế</h4>
                            <p>
                                Chanel nổi tiếng với lối thiết kế đơn giản, tối giản nhưng vô cùng tinh tế và thực dụng. Đặc trưng của các sản phẩm Chanel là sự chọn lọc kỹ lưỡng về chất liệu và chi tiết, từng đường nét được chăm chút tỉ mỉ.
                            </p>
                            <p>
                                Coco Chanel đã từng nói: "Thời trang trôi qua, phong cách thời trang mãi mãi". Triết lý thiết kế này đã giúp Chanel khẳng định vị thế của mình trong ngành thời trang.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h4>Các dòng sản phẩm</h4>
                            <ul>
                                <li><strong>Nước hoa:</strong> Những loại nước hoa của Chanel không chỉ đơn thuần là mùi hương mà còn là biểu tượng của phong cách và sự thanh lịch.</li>
                                <li><strong>Thời trang:</strong> Dòng sản phẩm từ váy đầm thanh lịch, túi xách sang trọng đến giày dép đẳng cấp của Chanel luôn làm say đắm lòng người.</li>
                                <li><strong>Mỹ phẩm:</strong> Với các sản phẩm chăm sóc da cao cấp và bền bỉ, Chanel không chỉ làm đẹp mà còn bảo vệ và nuôi dưỡng làn da của bạn.</li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center">
                        Để biết thêm thông tin chi tiết và để mua sắm trực tuyến, hãy ghé thăm <a href="https://www.chanel.com" target="_blank" rel="noopener noreferrer">chanel.com</a>.
                    </p>
                    <h4 className="text-center mb-4">Thông tin liên hệ</h4>
                    <div className="text-center">
                        <p><strong>Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP. HCM</p>
                        <p><strong>Email:</strong> contact@chanel.com</p>
                        <p><strong>Điện thoại:</strong> 0123 456 789</p>
                    </div>
                    <div className="text-center mt-5">
                        <h4>Theo dõi Chanel trên mạng xã hội</h4>
                        <div className="social-icons mt-3">
                            <a href="https://www.facebook.com/chanel" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x mr-3"></i></a>
                            <a href="https://www.twitter.com/chanel" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x mr-3"></i></a>
                            <a href="https://www.instagram.com/chanelofficial" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x mr-3"></i></a>
                            <a href="https://www.youtube.com/chanel" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Intro;
