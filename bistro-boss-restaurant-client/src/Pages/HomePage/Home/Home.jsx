import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import ContactNumber from "../ContactNumber/ContactNumber";
import FoodSlider from "../FoodSlider/FoodSlider";
import OurMenu from "../OurMenu/OurMenu";
import ParallexSection from "../ParallexSection/ParallexSection";
import Recommends from "../Recommends/Recommends";
import Testimonial from "../Testimonial/Testimonial";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Your Favorite Spot for Fresh and Tasty Meals - Bistro Boss</title>
                <meta name="description" content="Explore the menu of Bistro Boss. From appetizers to main courses, discover the best dishes crafted for you!" />
                {/* <link rel="canonical" href="https://www.bistroboss.com/" /> */}
            </Helmet>


            <Banner />
            <FoodSlider />
            <BistroBoss />
            <OurMenu />
            <ContactNumber />
            <Recommends />
            <ParallexSection />
            <Testimonial />
        </>
    );
};

export default Home;