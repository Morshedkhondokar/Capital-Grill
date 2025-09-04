import AppShowcase from "../components/home/AppShowcase";
import Banner from "../components/home/banner";
import Discover from "../components/home/Discover";
import Offer from "../components/home/Offer";
import PopularMenu from "../components/home/PopularMenu";


const Home = () => {
    return (
        <div>
           <Banner/>
            <PopularMenu/>
            <Offer/>
            <Discover/>
            <AppShowcase/>
        </div>
    );
};

export default Home;