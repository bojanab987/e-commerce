import actionTypes from '../actions/actionTypes';
import { 
    handleAddItemToCart, 
    handleRemoveCartItem,
    handleDecreaseItemQty, 
    handleIncreaseItemQty,
    handleEmptyCart,
    handleConfirmOrder,
  countItemsInCart } from '../../utils/cart'

const INITIAL_STATE={
    cartItems:[],
    totalCartAmount:0
}

const cartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            handleAddItemToCart(state.cartItems,action.payload);
            state.totalCartAmount=countItemsInCart(state) 
            console.log("Item added to cart", state)
            return{
                ...state               
            };
        case actionTypes.REMOVE_CART_ITEM:          
          handleRemoveCartItem(state, action.payload);          
          console.log("Item removed from cart",state)
            return {
                ...state                
            };
        case actionTypes.EMPTY_CART:
          handleEmptyCart(state)
          console.log("Cart is cleared",state)
            return {
                ...state
            };
        case actionTypes.DECREMENT_ITEM_QTY:          
          let newState=handleDecreaseItemQty(state,action.payload);
          newState.cartItems=[...newState.cartItems]          
          console.log("Item amount decreased",state)   
            return {
                ...newState           
            };
        case actionTypes.INCREMENT_ITEM_QTY:          
          let newIncreasedState=handleIncreaseItemQty(state,action.payload);
          newIncreasedState.cartItems=[...newIncreasedState.cartItems]
          console.log("Item amount increased",newIncreasedState)            
                return{
                    ...newIncreasedState                                
                };
        case actionTypes.CONFIRM_ORDER:
          handleConfirmOrder(state) 
          console.log("Order confirmed",state)
            return {
                ...state            
            }
        default:
            return state
    }    
}

export default cartReducer;
