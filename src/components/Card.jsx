
import { arrow } from '../assets';

const Card = ({handleAddToCart, data}) => {
  return (
    <div className='text-center mt-10'>
      <div className='relative bg-[#FFF1E2] rounded-lg w-[250px] h-[300px] mt-10 pt-20 px-5'>
      <div className='absolute text-center  w-[180px] -mt-40'>
        <img src={data.image}/>
      </div>
      
          <h2 className=' font-bold text-xl pt-5'>{data.name}</h2>
          <p>{data.detail}</p>
          <div className='absolute flex  group pt-7 bottom-7 gap-20'>
          <p className=' font-bold'>${data.price}</p>
          <div className='group inline-block relative'>
          <button onClick={() => handleAddToCart(data)}>Buy Now  </button>
          <img src={arrow} className={`w-3 absolute -right-5  top-2.5 group-hover:'-right-6':'-right-5' `}/>
          </div>
        </div>
         
        </div>
        

    </div>
  )
}

export default Card