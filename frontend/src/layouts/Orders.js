import PageOrders from "../pages/orders/PageOrders";

import PageTop from "../pages/orders/PageTop";



function Orders(props) {
    return (
        <div className="container">
            <PageTop />
            <PageOrders />
        </div>
    );
}
export default Orders