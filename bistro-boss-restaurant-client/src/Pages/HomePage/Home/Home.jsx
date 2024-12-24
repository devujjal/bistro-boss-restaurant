import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import ContactNumber from "../ContactNumber/ContactNumber";
import FoodSlider from "../FoodSlider/FoodSlider";
import OurMenu from "../OurMenu/OurMenu";
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
        </>
    );
};

export default Home;