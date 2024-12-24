import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import ContactNumber from "../ContactNumber/ContactNumber";
import FoodSlider from "../FoodSlider/FoodSlider";
import OurMenu from "../OurMenu/OurMenu";
import ParallexSection from "../ParallexSection/ParallexSection";
import Recommends from "../Recommends/Recommends";

const Home = () => {
    return (
        <>
            <Banner />
            <FoodSlider />
            <BistroBoss />
            <OurMenu />
            <ContactNumber />
            <Recommends />
            <ParallexSection />

        </>
    );
};

export default Home;