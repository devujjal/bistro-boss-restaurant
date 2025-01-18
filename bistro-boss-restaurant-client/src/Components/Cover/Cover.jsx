import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Cover = ({ img, heading, des, style }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className={`h-[400px] ${style ? 'md:h-[480px] md:py-28 md:px-60' : 'md:h-[550px] md:py-44 md:px-44'} text-center py-36 px-10`}>
                <div className={`text-white bg-[#15151599] ${style ? 'md:py-20' : 'md:py-24'} py-10 px-3 md:px-16`}>
                    <h2 className={`${style ? 'md:text-3xl text-3xl' : 'md:text-6xl text-4xl'}  font-semibold font-cinzel mb-5`}>{heading}</h2>
                    <p className={`${style ? 'font-inter capitalize' : 'font-cinzel uppercase'} text-sm`}><span>{des}</span></p>
                </div>
            </div>
        </Parallax>
    );
};

Cover.propTypes = {
    img: PropTypes.string,
    heading: PropTypes.string,
    des: PropTypes.string,
    style: PropTypes.bool
}

export default Cover;

// flex justify-center items-center
// w-[60%] text-center py-20 px-16 