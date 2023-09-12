import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Display } from "../components";
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals } from '../features/cartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch]);

  const handleRemoveFromCartClick = (data) => {
    dispatch(removeFromCart(data));
  }

  const handleDecreaseCartClick = (data) => {
    dispatch(decreaseCart(data));
  }

  const handleIncreaseCartClick = (data) => {
    dispatch(addToCart(data));
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div>
      <h1 className='text-center'>Shopping Cart</h1>
   
      <div>
      { cart.items.length === 0 ? (
        <p className='ml-3 flex pt-10 justify-center items-center'>Your cart is currently empty</p>
      
      ) : (
        <div className="mx-20 pt-20 flex">
          <div className="mr-10">
          <div className="titles pb-5">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </div>
          <hr/>
          <div className="cart-items py-12">
            {cart.items?.map((data) => (
              <Display 
                key={data.id}
                data={data}
                handleRemoveFromCart={handleRemoveFromCartClick}
                handleDecreaseCart={handleDecreaseCartClick}
                handleIncreaseCart={handleIncreaseCartClick}
              
              />
            ))}
            
          </div>
          </div>
          <div className='summary mr-10 mt-15 text-center place-content-center leading-loose'>
          <h2 className="font-semibold">Subtotal</h2>
          <span className="font-black text-3xl">${cart.cartTotalAmount}</span>
          <p className="leading-normal">Taxes and shipping calculated at checkout</p>
          <button className="bg-[#000958] p-2 px-5 mt-6 text-white rounded-xl">Checkout</button><br></br>
          <button className="border-solid border-[#00095881] border-2 p-2 px-5 mt-2 rounded-lg" onClick={() => handleClearCart()}>Clear Cart</button>
          
        </div>
          
        </div>
      )}
      
        </div>
    </div> 
  )
}

export default Cart