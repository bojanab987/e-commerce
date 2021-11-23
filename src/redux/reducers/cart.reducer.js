import actionTypes from '../actions/actionTypes';
import { 
    handleAddItemToCart, 
    handleRemoveCartItem,
    handleDecreaseItemQty, 
    handleIncreaseItemQty,
    // handleEmptyCart,
    handleConfirmOrder,
  countItemsInCart 
} from '../../utils/cart'

const INITIAL_STATE={
    cartItems:[],
    totalCartAmount:0
}

const cartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:            
            return {
                ...state,
                cartItems:handleAddItemToCart(
                state.cartItems,
                action.payload
                ),
                totalCartAmount:countItemsInCart(state)
            }
        case actionTypes.REMOVE_CART_ITEM:        
            let newCartItems=handleRemoveCartItem(state.cartItems, action.payload)
            return{
                ...state,
                cartItems:newCartItems,
                totalCartAmount:countItemsInCart(state)
            }
        case actionTypes.EMPTY_CART:        
          console.log("Cart is cleared",state)
            return {
                ...state,
                ...INITIAL_STATE
            };
        case actionTypes.DECREMENT_ITEM_QTY:
        return {
            ...state,
            cartItems:handleDecreaseItemQty(
                state.cartItems,
                action.payload
            ),
            totalCartAmount:countItemsInCart(state)
        }
        case actionTypes.INCREMENT_ITEM_QTY:
            return {
                ...state,
                cartItems:handleIncreaseItemQty(state.cartItems, action.payload),
                totalCartAmount:countItemsInCart(state)
            }
        case actionTypes.CONFIRM_ORDER:
         let newState=handleConfirmOrder(state) 
          console.log("Order confirmed",state)
            return {
                ...newState         
            }
        default:
            return state
    }    
}

export default cartReducer;
