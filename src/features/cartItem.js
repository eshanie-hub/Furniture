import { createSlice } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const initialState = {
  items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [], //storing data after refresh
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

export const itemSlice = createSlice ({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.items.findIndex(
              (item) => item.id === action.payload.id
            );
      
            if (itemIndex >= 0) {
              state.items[itemIndex] = {
                ...state.items[itemIndex],
                cartQuantity: state.items[itemIndex].cartQuantity + 1,
              };
              toast.info("Increased product quantity", {
                position: "bottom-left",
              });
            } else {
              let tempProductItem = { ...action.payload, cartQuantity: 1 };
              state.items.push(tempProductItem);
              toast.success("Product added to cart", {
                position: "bottom-left",
              });
            }
            localStorage.setItem("items", JSON.stringify(state.items));
          },

        removeFromCart(state, action) {
            const nextCartItems = state.items.filter(
                (item) => item.id !== action.payload.id
            )

            state.items = nextCartItems;
            localStorage.setItem("items", JSON.stringify(state.items));
            
            toast.error(`${action.payload.name} Product removed`, {
                position: "bottom-left",
              });

        },

        decreaseCart(state, action){
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload.id
            )
            
            if(state.items[itemIndex].cartQuantity > 1){
                state.items[itemIndex].cartQuantity -= 1

                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position: "bottom-left",
                });
            }else if (state.items[itemIndex].cartQuantity === 1 ){
                const nextCartItems = state.items.filter(
                    (item) => item.id !== action.payload.id
                )
    
                state.items = nextCartItems;
                
                toast.error(`${action.payload.name} Product removed`, {
                    position: "bottom-left",
                  });
            }
            localStorage.setItem("items", JSON.stringify(state.items));
                

        },
        clearCart(state){
          state.items = [];

          toast.error(`Cart cleared!`, {
            position: "bottom-left",
          });
          
          localStorage.setItem("items", JSON.stringify(state.items));

        },
          getTotals(state){
          let {total , quantity} = state.items.reduce(
            (cartTotal, cartItem) => {
            const{price, cartQuantity} = cartItem;
            const itemTotal = price * cartQuantity;

            cartTotal.total += itemTotal
            cartTotal.quantity +=cartQuantity
            
            return cartTotal
          }, 
          {
          total: 0,
          quantity: 0
        });
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
    },

  },
});

export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = itemSlice.actions;
export default itemSlice.reducer;