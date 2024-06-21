import React from "react";

const PageSetting = () => (
<section className="section-content padding-y">
<div className="container">

<div className="row">
	<aside className="col-md-3">
		<nav className="list-group">
			<a className="list-group-item" href="page-profile-main.html"> Account overview  </a>
			<a className="list-group-item" href="page-profile-address.html"> My Address </a>
			<a className="list-group-item" href="page-profile-orders.html"> My Orders </a>
			<a className="list-group-item" href="page-profile-wishlist.html"> My wishlist </a>
			<a className="list-group-item" href="page-profile-seller.html"> My Selling Items </a>
			<a className="list-group-item active" href="page-profile-setting.html"> Settings </a>
			<a className="list-group-item" href="page-index-1.html"> Log out </a>
		</nav>
	</aside> 
	<main className="col-md-9">

	<div className="card">
      <div className="card-body">
     <form className="row">
     	<div className="col-md-9">
     		<div className="form-row">
				<div className="col form-group">
					<label>Name</label>
				  	<input type="text" className="form-control" value="Vosidiy"/>
				</div>
				<div className="col form-group">
					<label>Email</label>
				  	<input type="email" className="form-control" value="vosidiy@gmail.com"/>
				</div> 
			</div>
			
			<div className="form-row">
				<div className="form-group col-md-6">
				  <label>Country</label>
				  <select id="inputState" className="form-control">
				    <option> Choose...</option>
				      <option>Uzbekistan</option>
				      <option>Russia</option>
				      <option selected="">United States</option>
				      <option>India</option>
				      <option>Afganistan</option>
				  </select>
				</div> 
				<div className="form-group col-md-6">
				  <label>City</label>
				  <input type="text" className="form-control"/>
				</div> 
			</div>

			<div className="form-row">
				<div className="form-group col-md-6">
				  <label>Zip</label>
				  <input type="text" className="form-control" value="123009"/>
				</div> 
				<div className="form-group col-md-6">
				  <label>Phone</label>
				  <input type="text" className="form-control" value="+123456789"/>
				</div>
			</div> 

			<button className="btn btn-primary">Save</button>	
			<button className="btn btn-light">Change password</button>	

	

     	</div> 
     	<div className="col-md">
     		<img src={require("../../assets/images/avatars/avatar1.jpg")}className="img-md rounded-circle border"/>
     	</div> 
      </form>
      </div> 
    </div> 



	</main> 
</div>

</div> 
</section>


);
export default PageSetting