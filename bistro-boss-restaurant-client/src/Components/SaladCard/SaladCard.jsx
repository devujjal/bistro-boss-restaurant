import PropTypes from 'prop-types';

const SaladCard = ({ salad }) => {

    const { name, image, recipe } = salad;
    return (
        <div
            className="bg-[#F3F3F3] w-full font-inter max-w-sm overflow-hidden mx-auto mt-4">
            <div className="min-h-[245px]">
                <img src={image} className="w-full" />
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed pb-6">{recipe}</p>
                <button
                    type="button"
                    className="px-5 py-2 uppercase bg-[#E8E8E8] text-base text-[#BB8506] border-[#BB8506] hover:bg-gray-200 border-b-2 rounded-md hover:bg-[#1F2937] transition hover:border-b-0">
                    Add to cart
                </button>
            </div>
        </div>
    );
};

SaladCard.propTypes = {
    salad: PropTypes.object
}

export default SaladCard;