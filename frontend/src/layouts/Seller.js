import PageSeller from "../pages/seller/PageSeller";
import PageTop from "../pages/seller/PageTop";



function Seller(props) {
    return (
        <div className="container">
            <PageTop />
            <PageSeller />
        </div>
    );
}
export default Seller