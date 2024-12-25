import PropTypes from 'prop-types';

const BistroMenu = ({item}) => {
const {name, image, recipe, price} = item;

    return (
        <div className='flex space-x-4'>
            <div>
                <img src={image} className='w-[150px]' style={{borderRadius: '0px 200px 200px 200px'}} alt="" />
            </div>
            <div>
                <h2 className='font-cinzel text-xl text-[#151515]'>{name}</h2>
                <p className='font-inter text-base text-[#737373]'>{recipe}</p>
            </div>
            <div>
                <span className='font-inter text-[#BB8506]'>${price}</span>
            </div>

        </div>
    );
};
BistroMenu.propTypes = {
    item: PropTypes.object
}


export default BistroMenu;