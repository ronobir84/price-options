
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-purple-300 rounded-md p-4 flex flex-col mt-4'>
            <h2 className='text-center'>
            <span className='text-5xl'>{price}</span>
            <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-2xl text-center my-5'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map(( feature , index) => <Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <div className='text-center'>
            <button className='mt-12 bg-yellow-950 px-5 py-2 text-white hover:bg-slate-950'>Buy Now</button>
            </div>
        </div>
    );
};
PriceOption.propTypes = {
    option : PropTypes.object 
}
export default PriceOption;