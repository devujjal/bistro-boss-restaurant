import PropTypes from "prop-types";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useMenuDatas from "../../../../Hooks/useMenuDatas";
import BistroMenu from "../../../HomePage/Shared/BistroMenu/BistroMenu";

const Offer = ({ categoryName, heading, subHeading }) => {

    const { datas } = useMenuDatas();
    const popularItems = datas.filter(data => data.category === categoryName);

    console.log(popularItems)

    return (
        <>
            <SectionTitle heading={heading} subHeading={subHeading} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {
                    popularItems?.map(menuItem => <BistroMenu key={menuItem._id} item={menuItem} />)
                }
            </div>
        </>
    );
};

Offer.propTypes = {
    categoryName: PropTypes.string,
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default Offer;