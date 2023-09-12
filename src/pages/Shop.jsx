import { furniture } from '../pages/furniture';
import { Card } from '../components/index.js';


import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartItem';

const Shop = () => {
  const dispatch = useDispatch();

  const handleAddToCartClick = (data) =>{
    dispatch(addToCart(data));
  };

  return (
    <div className=' text-center'>
      <h1>Latest Furnitures</h1>
      <div className="flex pt-20 absolute inset-x-48  flex-wrap sm:justify-start justify-center gap-8  my-5 ">
      {furniture.map((data) => (
      <Card 
      key={data.id}
      data={data}
      handleAddToCart = {handleAddToCartClick}
      />
      ))}
      </div>
    </div>
  )
}

export default Shop