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
        </div>
    );
};

export default Home;