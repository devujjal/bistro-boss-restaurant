import { Parallax } from 'react-parallax';
import PropTypes from 'prop-types';

const Cover = ({ img }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className='h-[400px] md:h-[550px] text-center py-36 px-10 md:py-44 md:px-44'>
                <div className='text-white bg-[#15151599] py-10 px-3 md:py-28 md:px-16'>
                    <h2 className='text-4xl md:text-6xl font-semibold font-cinzel mb-5'>OUR MENU</h2>
                    <p className='uppercase font-cinzel text-sm'><span>Would you Like to try a dish?</span></p>
                </div>
            </div>
        </Parallax>
    );
};

Cover.propTypes = {
    img: PropTypes.string
}

export default Cover;

// flex justify-center items-center
// w-[60%] text-center py-20 px-16 