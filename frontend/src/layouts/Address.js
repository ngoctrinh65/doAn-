import PageAddress from "../pages/address/PageAddress";

import PageTop from "../pages/address/PageTop";

 function Address(props){
    return (
        <div className="container">
          <PageTop/>
          <PageAddress/>
        </div>
    );
 }
 export default Address