const Display = ({data, handleRemoveFromCart, handleDecreaseCart, handleIncreaseCart}) => {

  return (
    <>
    <div className='dispaly-container pb-10'>
      <div className='flex gap-10'>
        <img src={data.image} className="w-[150px]"/>
        <div>
          <h3>{data.name}</h3>
          <p className='pr-32 pt-2'>{data.detail}</p>
          <button className='border border-[#D98585] p-2 mt-3 rounded-lg' onClick={() => handleRemoveFromCart(data)}>Remove</button>
        </div>
      </div>
      
      <p>${data.price}</p> 
      <div className='flex gap-3 border-solid border w-[70px] p-2 rounded-lg'>
        <button onClick={() => handleDecreaseCart(data)}>-</button>
        <p>{data.cartQuantity}</p>
        <button onClick={() => handleIncreaseCart(data)}>+</button>
      </div> 
      <p>${data.price * data.cartQuantity}</p>
      

    </div>
    <hr className="pb-10"/>
    </>
  )
}

export default Display