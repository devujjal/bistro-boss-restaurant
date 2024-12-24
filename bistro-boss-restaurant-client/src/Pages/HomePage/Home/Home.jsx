import Banner from "../Banner/Banner";
import BistroBoss from "../BistroBoss/BistroBoss";
import ContactNumber from "../ContactNumber/ContactNumber";
import FoodSlider from "../FoodSlider/FoodSlider";
import OurMenu from "../OurMenu/OurMenu";

const Home = () => {
    return (
        <>
            <Banner />
            <FoodSlider />
            <BistroBoss />
            <OurMenu />
            <ContactNumber />
        </>
    );
};

export default Home;