import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading, text }) => {
    return (
        <div className='text-center font-inter mb-8 z-0'>
            <span className='text-[#D99904] mb-2 block'>---{subHeading}---</span>
            <div className="relative py-5 md:py-7 z-0">
                <h3 className={`${text === true ? 'text-white' : ''} relative z-10 text-center text-[#151515] text-2xl md:text-3xl font-medium`}>{heading}</h3>

                <div
                    className="absolute w-[300px] h-[3px] bg-[#E8E8E8] left-[50%] transform -translate-x-1/2 top-[5px] md:top-[12px] md:w-[300px]">
                </div>

                <div
                    className="absolute w-[300px] h-[3px] bg-[#E8E8E8] left-[50%] transform -translate-x-1/2 top-[65px] sm:w-[200px] md:top-[80px] md:w-[300px]">
                </div>
            </div>

        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
    text: PropTypes.bool
}

export default SectionTitle;
