import React from "react";

const Region = () => (
    <section className="padding-bottom">

        <header className="section-heading heading-line">
            <h4 className="title-section text-uppercase">Chọn Quốc Gia</h4>
        </header>

        <ul className="row mt-4">
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/CN.png")} /> <span>China</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/DE.png")} /> <span>Germany</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/AU.png")} /><span>Australia</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/RU.png")} /> <span>Russia</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/IN.png")} /> <span>India</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/GB.png")} /> <span>England</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/TR.png")} /> <span>Turkey</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/UZ.png")} /> <span>Uzbekistan</span> </a></li>
            <li className="col-md col-6"><a href="/" className="icontext"> <i className="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span> </a></li>
        </ul>

        <article className="my-4">
            <img src={require("../../assets/images/banners/ad-sm.png")}  className="w-100"/>
        </article>
  
    </section >
);
export default Region