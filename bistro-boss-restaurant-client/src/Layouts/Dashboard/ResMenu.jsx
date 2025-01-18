import PropTypes from "prop-types";
import { IoMenu } from "react-icons/io5";

const ResMenu = ({ setToggle }) => {
    return (
        <div className="flex py-2 px-2 justify-between mb-2">
            <button onClick={() => setToggle(true)}><IoMenu size={30} /></button>
            <h2 className="md:text-2xl font-bold">BISTRO BOSS</h2>

        </div>
    );
};

ResMenu.propTypes = {
    setToggle: PropTypes.func
}

export default ResMenu;