import useMenuDatas from "../../Hooks/useMenuDatas";
import Loader from "../Loader/Loader";
import SaladCard from "../SaladCard/SaladCard";
import PropTypes from "prop-types";

const TabContentCard = ({ items }) => {

    const { loading } = useMenuDatas();

    const counts = Array(6).fill(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {
                loading ? (
                    counts.map((unUsed, index) => <Loader key={index} />)
                ) : (
                    items?.map(salad => <SaladCard key={salad._id} style={true} item={salad} />)
                )
            }
        </div>
    );
};

TabContentCard.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    style: PropTypes.bool
};




export default TabContentCard;