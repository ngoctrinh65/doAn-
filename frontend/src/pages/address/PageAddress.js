import React from "react";

const PageAddress = () => (

<section className="section-content padding-y">
	<div className="container">
	
	<div className="row">
		<aside className="col-md-3">
			<nav className="list-group">
				<a className="list-group-item" href="page-profile-main.html"> Account overview  </a>
				<a className="list-group-item active" href="page-profile-address.html"> My Address </a>
				<a className="list-group-item" href="page-profile-orders.html"> My Orders </a>
				<a className="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
				<a className="list-group-item" href="page-profile-seller.html"> My Selling Items </a>
				<a className="list-group-item" href="page-profile-setting.html"> Settings </a>
				<a className="list-group-item" href="page-index-1.html"> Log out </a>
			</nav>
		</aside>
		<main className="col-md-9">

		<a href="/" className="btn btn-light mb-3"> <i className="fa fa-plus"></i> Add new address </a>

        <div className="row">
            <div className="col-md-6">
                <article className="box mb-4">
                    <h6>London, United Kingdom</h6>
                    <p>Building: Nestone  Floor: 22, Aprt: 12  </p>
                    <a href="/" className="btn btn-light disabled"> <i className="fa fa-check"></i> Default</a> <a href="/" className="btn btn-light"> <i className="fa fa-pen"></i> </a>   <a href="/" className="btn btn-light"> <i className="text-danger fa fa-trash"></i>  </a>
                </article>
            </div> 
            <div className="col-md-6">
                <article className="box mb-4">
                    <h6>Tashkent, Uzbekistan</h6>
                    <p>Building one  Floor: 2, Aprt: 32  </p>
                    <a href="/" className="btn btn-light">Make default</a> <a href="/" className="btn btn-light"> <i className="fa fa-pen"></i> </a>   <a href="/" className="btn btn-light"> <i className="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>  
            <div className="col-md-6">
                <article className="box mb-4">
                    <h6>Moscow, Russia</h6>
                    <p>Lenin street  Building A, Floor: 3, Aprt: 32  </p>
                    <a href="/" className="btn btn-light">Make default</a> <a href="/" className="btn btn-light"> <i className="fa fa-pen"></i> </a>   <a href="/" className="btn btn-light"> <i className="text-danger fa fa-trash"></i>  </a>
                </article>
            </div>
        </div> 

	</main> 
</div>

</div> 
</section>

);
export default PageAddress