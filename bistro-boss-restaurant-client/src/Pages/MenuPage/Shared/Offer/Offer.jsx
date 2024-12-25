import PropTypes from "prop-types";
import useMenuDatas from "../../../../Hooks/useMenuDatas";
import BistroMenu from "../../../HomePage/Shared/BistroMenu/BistroMenu";
import { Link } from "react-router";


const Offer = ({ categoryName }) => {

    const { datas } = useMenuDatas();
    const popularItems = datas.filter(data => data.category === categoryName);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {
                    popularItems?.slice(0, 6).map(menuItem => <BistroMenu key={menuItem._id} item={menuItem} />)
                }


            </div>
            <div className="text-center mt-8">
                <Link
                to={'/our-shop'}
                >
                    <button className="text-[#1F2937] font-inter text-base md:text-lg py-3 px-4 border-b-2 rounded-b-md border-[#1F2937]">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </>
    );
};

Offer.propTypes = {
    categoryName: PropTypes.string
}

export default Offer;