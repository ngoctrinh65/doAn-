import React from "react";

const PageSeller = () => (
<section className="section-content padding-y">
<div className="container">

<div className="row">
	<aside className="col-md-3">
		<nav className="list-group">
			<a className="list-group-item" href="page-profile-main.html"> Account overview  </a>
			<a className="list-group-item" href="page-profile-address.html"> My Address </a>
			<a className="list-group-item" href="page-profile-orders.html"> My Orders </a>
			<a className="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
			<a className="list-group-item active" href="page-profile-seller.html"> My Selling Items </a>
			<a className="list-group-item" href="page-profile-setting.html"> Settings </a>
			<a className="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> 
	<main className="col-md-9">

		<article className="card">
			<div className="card-body">

		<div className="row">
				<div className="col-md-4">
					<figure className="card card-product-grid">
						<div className="img-wrap"> 
							<img src={require("../../assets/images/items/1.jpg")}/>
						</div>
						<figcaption className="info-wrap">
								<a href="#" className="title mb-2">Hot sale unisex New Design Shirt for sport polo shirts latest design</a>
								<div className="price-wrap mb-3">
									<span className="price">$32.00-$40.00</span> 
									<small className="text-muted">/per item</small>
								</div> 
								<a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
								<a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>
							
								<a href="#" className="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div className="col-md-4">
					<figure className="card card-product-grid">
						<div className="img-wrap"> 
                        <img src={require("../../assets/images/items/2.jpg")}/>
						</div> 
						<figcaption className="info-wrap">
								<a href="#" className="title mb-2">High Quality Winter PU Rain Jacket with Padding for Men's outdoor</a>
								<div className="price-wrap mb-3">
									<span className="price">$41.00-$50.00</span> 
									<small className="text-muted">/per item</small>
								</div>
								<a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
								<a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>
								
								
								<a href="#" className="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div className="col-md-4">
					<figure className="card card-product-grid">
						<div className="img-wrap"> 
                        <img src={require("../../assets/images/items/1.jpg")}/>
						</div> 
						<figcaption className="info-wrap">
								<a href="#" className="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
								<div className="price-wrap mb-3">
									<span className="price">$32.00-$40.00</span> 
									<small className="text-muted">/per item</small>
								</div> 
								<a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
								<a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>
								
							
								<a href="#" className="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div className="col-md-4">
					<figure className="card card-product-grid">
						<div className="img-wrap"> 
                        <img src={require("../../assets/images/items/4.jpg")}/>						</div> 
						<figcaption className="info-wrap">
								<a href="#" className="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
								<div className="price-wrap mb-3">
									<span className="price">$32.00-$40.00</span> 
									<small className="text-muted">/per item</small>
								</div>
								<a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
								<a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>
								
							
								<a href="#" className="btn btn-success btn-block">  Promote </a>
						</figcaption>
					</figure>
				</div> 

				<div className="col-md-4">
					<figure className="card card-product-grid">
						<div className="img-wrap"> 
                        <img src={require("../../assets/images/items/5.jpg")}/>
						</div> 
						<figcaption className="info-wrap">
								<a href="#" className="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a>
								<div className="price-wrap mb-3">
									<span className="price">$32.00-$40.00</span> 
									<small className="text-muted">/per item</small>
								</div>
								<a href="#" className="btn btn-outline-primary"> <i className="fa fa-pen"></i> Edit </a>
								<a href="#" className="btn btn-primary"> <i className="fa fa-eye"></i> View  </a>
								
							
								<a href="#" className="btn btn-success btn-block">  Promote </a>
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
export default PageSeller