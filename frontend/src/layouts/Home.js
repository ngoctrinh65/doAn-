import Slider from "../pages/home/Slider";
import Apparel from "../pages/home/Apparel";
import Items from "../pages/home/Items";
import Services from "../pages/home/Services";
import Subscribe from "../pages/home/Subscribe";

import Banner1 from "../pages/home/Banner1";
import Sale from "../pages/home/Sale";
function Home() {
    return (
        <>
            <Slider />
            <div className="container">
                <Items/>
                <Apparel />
                <Sale />
                <Banner1 />
                <Services />
            </div>
        </>
    );
}
export default Home