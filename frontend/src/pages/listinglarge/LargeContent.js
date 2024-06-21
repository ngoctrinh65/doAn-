import React from "react";

const LargeContent = () => (

<section className="section-content padding-y">
<div className="container">



<div className="card mb-3">
	<div className="card-body">
		<ol className="breadcrumb float-left">
			<li className="breadcrumb-item"><a href="/">Home</a></li>
			<li className="breadcrumb-item"><a href="/">Category name</a></li>
			<li className="breadcrumb-item active">Item details</li>
		</ol>
	</div> 
</div>



<div className="row">
	<aside className="col-md-2">

	<article className="filter-group">
		<h6 className="title">
			<a href="/" className="dropdown-toggle" data-toggle="collapse" data-target="/collapse_1">	 Product type </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_1">
			<div className="inner">
				<ul className="list-menu">
					<li><a href="/">Shorts  </a></li>
					<li><a href="/">Trousers </a></li>
					<li><a href="/">Sweaters  </a></li>
					<li><a href="/">Clothes  </a></li>
					<li><a href="/">Home items </a></li>
					<li><a href="/">Jackats</a></li>
					<li><a href="/">Somethings </a></li>
				</ul>
			</div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="/" className="dropdown-toggle" data-toggle="collapse" data-target="/collapse_2"> Brands </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_2">
			<div className="inner">
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">Adidas  
				  	<b className="badge badge-pill badge-light float-right">120</b>  </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">Nike 
				  	<b className="badge badge-pill badge-light float-right">15</b>  </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">The Noth Face 
				  	<b className="badge badge-pill badge-light float-right">35</b> </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">The cat 
				  	<b className="badge badge-pill badge-light float-right">89</b> </div>
				</label>
				<label className="custom-control custom-checkbox">
				  <input type="checkbox" className="custom-control-input"/>
				  <div className="custom-control-label">Honda 
				  	<b className="badge badge-pill badge-light float-right">30</b>  </div>
				</label>
			</div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="/" className="dropdown-toggle" data-toggle="collapse" data-target="/collapse_3"> Price range </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_3">
			<div className="inner">
				<input type="range" className="custom-range" min="0" max="100" name=""/>
				<div className="form-row">
				<div className="form-group col-md-6">
				  <label>Min</label>
				  <input className="form-control" placeholder="$0" type="number"/>
				</div>
				<div className="form-group text-right col-md-6">
				  <label>Max</label>
				  <input className="form-control" placeholder="$1,0000" type="number"/>
				</div>
				</div>
				<button className="btn btn-block btn-primary">Apply</button>
			</div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="/" className="dropdown-toggle" data-toggle="collapse" data-target="/collapse_4"> Sizes </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_4">
			  <div className="inner">
			  	<label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> XS </span>
				  </label>

				  <label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> SM </span>
				  </label>

				  <label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> LG </span>
				  </label>

				  <label className="checkbox-btn">
				    <input type="checkbox"/>
				    <span className="btn btn-light"> XXL </span>
				  </label>
			  </div> 
		</div>
	</article> 
	<article className="filter-group">
		<h6 className="title">
			<a href="/" className="dropdown-toggle" data-toggle="collapse" data-target="/collapse_5"> Condition </a>
		</h6>
		<div className="filter-content collapse show" id="collapse_5">
			<div className="inner">
				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" checked="" className="custom-control-input"/>
				  <div className="custom-control-label">Any condition</div>
				</label>

				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" className="custom-control-input"/>
				  <div className="custom-control-label">Brand new </div>
				</label>

				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" className="custom-control-input"/>
				  <div className="custom-control-label">Used items</div>
				</label>

				<label className="custom-control custom-radio">
				  <input type="radio" name="myfilter_radio" className="custom-control-input"/>
				  <div className="custom-control-label">Very old</div>
				</label>
			</div> 
		</div>
	</article> 

	</aside> 
	<main className="col-md-10">


<header className="mb-3">
		<div className="form-inline">
			<strong className="mr-md-auto">32 Items found </strong>
			<select className="mr-2 form-control">
				<option>Latest items</option>
				<option>Trending</option>
				<option>Most Popular</option>
				<option>Cheapest</option>
			</select>
			<div className="btn-group">
				<a href="page-listing-grid.html" className="btn btn-light" data-toggle="tooltip" title="List view"> 
					<i className="fa fa-bars"></i></a>
				<a href="page-listing-large.html" className="btn btn-light active" data-toggle="tooltip" title="Grid view"> 
					<i className="fa fa-th"></i></a>
			</div>
		</div>
</header>


<article className="card card-product-list">
	<div className="row no-gutters">
		<aside className="col-md-3">
			<a href="/" className="img-wrap">
				<span className="badge badge-danger"> NEW </span>
				<img src={require("../../assets/images/items/1.jpg")}/>
			</a>
		</aside> 
		<div className="col-md-6">
			<div className="info-main">
				<a href="/" className="h5 title"> Hot sale unisex New Design Shirt</a>
				<div className="rating-wrap mb-2">
					<ul className="rating-stars">
						<li style={{width:"100%"}} className="stars-active"> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
						<li>
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
					</ul>
					<div className="label-rating">9/10</div>
				</div> 
			
				<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 5 Years </span> 
					<span className="tag"> 80 reviews </span>
					<span className="tag"> Russia </span>
				</p>

				<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
				proident, sunt in culpa qui laborum.... </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">$25.00-$40.00</span> 
					<small className="text-muted">/per item</small>
				</div>
				<small className="text-warning">Paid shipping</small>
				
				<p className="text-muted mt-3">Grand textile Co</p>
				<p className="mt-3">
					<a href="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </a>
					<a href="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </a>
				</p>

				<label className="custom-control mt-3 custom-checkbox">
					  <input type="checkbox" className="custom-control-input"/>
				  	  <div className="custom-control-label">Add to compare
				  </div>
				</label>

			</div> 
		</aside> 
	</div> 
</article> 



<article className="card card-product-list">
	<div className="row no-gutters">
		<aside className="col-md-3">
			<a href="/" className="img-wrap">
            <img src={require("../../assets/images/items/2.jpg")}/>
			</a>
		</aside> 
		<div className="col-md-6">
			<div className="info-main">
				<a href="/" className="h5 title"> High Quality Winter PU Rain Jacket  </a>
				<div className="rating-wrap mb-2">
					<ul className="rating-stars">
						<li style={{width:"80%"}} className="stars-active"> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
						<li>
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
					</ul>
					<div className="label-rating">7/10</div>
				</div> 
			
				<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 2 Years </span> 
					<span className="tag"> 30 reviews </span>
					<span className="tag"> Japan </span>
				</p>

				<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
				proident, sunt in culpa qui laborum.... </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">$65.00-$70.00</span> 
					<small className="text-muted">/per item</small>
				</div>
				<small className="text-success">Free shipping</small>
				
				<p className="text-muted mt-3">Guangzhou textile Ltd</p>
				<p className="mt-3">
					<a href="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </a>
					<a href="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </a>
				</p>

				<label className="custom-control mt-3 custom-checkbox">
					  <input type="checkbox" className="custom-control-input"/>
				  	  <div className="custom-control-label">Add to compare
				  </div>
				</label>

			</div> 
		</aside> 
	</div> 
</article> 




<article className="card card-product-list">
	<div className="row no-gutters">
		<aside className="col-md-3">
			<a href="/" className="img-wrap">
            <img src={require("../../assets/images/items/3.jpg")}/>

			</a>
		</aside> 
		<div className="col-md-6">
			<div className="info-main">
				<a href="/" className="h5 title"> Great product name goes here  </a>
				<div className="rating-wrap mb-2">
					<ul className="rating-stars">
						<li style={{width:"20%"}} className="stars-active"> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
						<li>
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
					</ul>
					<div className="label-rating">2/10</div>
				</div> 
			
				<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 4 Years </span> 
					<span className="tag"> 60 reviews </span>
					<span className="tag"> China </span>
				</p>

				<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
				proident, sunt in culpa qui laborum.... </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">$325.00-$390.00</span> 
					<small className="text-muted">/per bag</small>
				</div>
				<small className="text-success">Free shipping</small>
				
				<p className="text-muted mt-3">Guangzhou Electronic Co</p>
				<p className="mt-3">
					<a href="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </a>
					<a href="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </a>
				</p>

				<label className="custom-control mt-3 custom-checkbox">
					  <input type="checkbox" className="custom-control-input"/>
				  	  <div className="custom-control-label">Add to compare
				  </div>
				</label>

			</div> 
		</aside> 
	</div> 
</article> 




<article className="card card-product-list">
	<div className="row no-gutters">
		<aside className="col-md-3">
			<a href="/" className="img-wrap">
            <img src={require("../../assets/images/items/4.jpg")}/>
			</a>
		</aside> 
		<div className="col-md-6">
			<div className="info-main">
				<a href="/" className="h5 title"> Best demo clothe with latest Fashion  </a>
				<div className="rating-wrap mb-2">
					<ul className="rating-stars">
						<li style={{width:"50%"}} className="stars-active"> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
						<li>
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
					</ul>
					<div className="label-rating">5/10</div>
				</div> 
			
				<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 4 Years </span> 
					<span className="tag"> 60 reviews </span>
					<span className="tag"> China </span>
				</p>

				<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
				proident, sunt in culpa qui laborum.... </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">$325.00-$390.00</span> 
					<small className="text-muted">/per bag</small>
				</div>
				<small className="text-success">Free shipping</small>
				
				<p className="text-muted mt-3">Guangzhou Electronic Co</p>
				<p className="mt-3">
					<a href="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </a>
					<a href="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </a>
				</p>

				<label className="custom-control mt-3 custom-checkbox">
					  <input type="checkbox" className="custom-control-input"/>
				  	  <div className="custom-control-label">Add to compare
				  </div>
				</label>

			</div> 
		</aside> 
	</div> 
</article> 



<article className="card card-product-list">
	<div className="row no-gutters">
		<aside className="col-md-3">
			<a href="/" className="img-wrap">
            <img src={require("../../assets/images/items/3.jpg")}/>
			</a>
		</aside> 
		<div className="col-md-6">
			<div className="info-main">
				<a href="/" className="h5 title"> Great product name goes here  </a>
				<div className="rating-wrap mb-2">
					<ul className="rating-stars">
						<li style={{width:"80%"}} className="stars-active"> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
						<li>
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> <i className="fa fa-star"></i> 
							<i className="fa fa-star"></i> 
						</li>
					</ul>
					<div className="label-rating">7/10</div>
				</div> 
			
				<p className="mb-3">
					<span className="tag"> <i className="fa fa-check"></i> Verified</span> 
					<span className="tag"> 4 Years </span> 
					<span className="tag"> 60 reviews </span>
					<span className="tag"> China </span>
				</p>

				<p> Take it as demo specs, ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Ut wisi enim ad minim  sint occaecat cupidatat non
				proident, sunt in culpa qui laborum.... </p>

			</div> 
		</div> 
		<aside className="col-sm-3">
			<div className="info-aside">
				<div className="price-wrap">
					<span className="h5 price">$325.00-$390.00</span> 
					<small className="text-muted">/per bag</small>
				</div>
				<small className="text-success">Free shipping</small>
				
				<p className="text-muted mt-3">Guangzhou Electronic Co</p>
				<p className="mt-3">
					<a href="/" className="btn btn-outline-primary"> <i className="fa fa-envelope"></i> Contact supplier </a>
					<a href="/" className="btn btn-light"><i className="fa fa-heart"></i> Save </a>
				</p>

				<label className="custom-control mt-3 custom-checkbox">
					  <input type="checkbox" className="custom-control-input"/>
				  	  <div className="custom-control-label">Add to compare
				  </div>
				</label>

			</div> 
		</aside> 
	</div> 
</article> 


<nav className="mb-4" aria-label="Page navigation sample">
  <ul className="pagination">
    <li className="page-item disabled"><a className="page-link" href="/">Previous</a></li>
    <li className="page-item active"><a className="page-link" href="/">1</a></li>
    <li className="page-item"><a className="page-link" href="/">2</a></li>
    <li className="page-item"><a className="page-link" href="/">3</a></li>
    <li className="page-item"><a className="page-link" href="/">4</a></li>
    <li className="page-item"><a className="page-link" href="/">5</a></li>
    <li className="page-item"><a className="page-link" href="/">Next</a></li>
  </ul>
</nav>


<div className="box text-center">
	<p>Did you find what you were looking for？</p>
	<a href="" className="btn btn-light">Yes</a>
	<a href="" className="btn btn-light">No</a>
</div>


	</main> 

</div>

</div> 
</section>

);
export default LargeContent