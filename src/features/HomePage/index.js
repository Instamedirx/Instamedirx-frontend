import Navbar from './Navbar';
import Hero from "./Hero";
import Quote from "./Quote";
import FeaturedDoctors from "./FeaturedDoctors";
import HomeServices from "./HomeServices";
import Consultation from "./Consultation";

const HomePage = () => {
    return (
        <div>
        <Navbar />
        <Hero />
        <Quote />
        <FeaturedDoctors />
        <HomeServices />
        <Consultation />
        </div>
    );
    }
    export default HomePage;