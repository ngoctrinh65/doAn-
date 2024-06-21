import React from "react";

const Banner1 = () => (
    <section className="padding-bottom">
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <img src={require("../../assets/images/banners/banner1.webp")} style={{ height: '100%', width: '100%' }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                textAlign: 'center',
                marginLeft: '8.0555555556%',
                maxWidth: '40.97222222222222%',
                minWidth: '40.97222222222222%'
            }}>
                <span style={{ textTransform: 'uppercase', fontWeight: 600, fontSize: '1.875rem', color: '#fff', letterSpacing: 6 }}>BLEU DE CHANEL</span>
                <br />
                <span style={{ fontSize: '16px', fontWeight: 300, color: '#fff' }}>BLEU DE CHANEL Eau de Parfum, nước hoa hương gỗ đặc trưng với các nốt hương hổ phách và xạ hương.</span>
                <br />
                <button style={{
                    marginTop: '10px',
                    padding: '15px 18px',
                    fontSize: '.6875rem',
                    fontWeight: 300,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    backgroundColor: 'transparent', /* Đặt màu nền là transparent */
                    color: '#fff',
                    border: '2px solid gray'
                }}>Khám phá</button></div>

        </div>
    </section>
);

export default Banner1;
