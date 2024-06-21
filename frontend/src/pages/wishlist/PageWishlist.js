import React from "react";

const PageWishlist = () => (


	

    <section className="section-content padding-y">
        <div className="container">

            <div className="row">
                <aside className="col-md-3">
                    <nav className="list-group">
                        <a className="list-group-item" href="page-profile-main.html"> Account overview  </a>
                        <a className="list-group-item" href="page-profile-address.html"> My Address </a>
                        <a className="list-group-item" href="page-profile-orders.html"> My Orders </a>
                        <a className="list-group-item active" href="page-profile-wishlist.html"> My wishlist </a>
                        <a className="list-group-item" href="page-profile-seller.html"> My Selling Items </a>
                        <a className="list-group-item" href="page-profile-setting.html"> Settings </a>
                        <a className="list-group-item" href="page-index-1.html"> Log out </a>
                    </nav>
                </aside>
                <main className="col-md-9">

                    <article className="card">
                        <div className="card-body">

                            <div className="row">
                                <div className="col-md-6">
                                    <figure className="itemside mb-4">
                                        <div className="aside"><img src = {require("../../assets/images/items/1.jpg")} className="border img-md"/></div>
                                        <figcaption className="info">
                                            <a href="/" className="title">Great product name goes here</a>
                                            <p className="price mb-2">$80</p>
                                            <a href="/" className="btn btn-secondary btn-sm"> Add to cart </a>
                                            <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="col-md-6">
                                    <figure className="itemside mb-4">
                                        <div className="aside"><img src = {require("../../assets/images/items/2.jpg")} className="border img-md"/></div>
                                        <figcaption className="info">
                                            <a href="/" className="title">Men's Jackeet for Winter </a>
                                            <p className="price mb-2">$1280</p>
                                            <a href="/" className="btn btn-secondary btn-sm"> Add to cart </a>
                                            <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
                                        </figcaption>
                                    </figure>
                                </div>

                                <div className="col-md-6">
                                    <figure className="itemside mb-4">
                                        <div className="aside"><img src = {require("../../assets/images/items/3.jpg")}className="border img-md"/></div>
                                        <figcaption className="info">
                                            <a href="/" className="title">Another book of item goes here </a>
                                            <p className="price mb-2">$280</p>
                                            <a href="/" className="btn btn-secondary btn-sm"> Add to cart </a>
                                            <a href="/" className="btn btn-danger btn-sm" data-toggle="tooltip" title="" data-original-title="Remove from wishlist"> <i className="fa fa-times"></i> </a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>

                        </div>
                    </article>


                </main>
            </div>

        </div>
    </section>
);

export default PageWishlist