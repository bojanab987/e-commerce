import actionTypes from '../actions/actionTypes';
import { 
    handleAddItemToCart, 
    handleRemoveCartItem,
    handleDecreaseItemQty, 
    handleIncreaseItemQty,
    handleEmptyCart,
    handleConfirmOrder } from '../../utils/cart'
// import {cartItems} from '../../data'
const INITIAL_STATE={
    cartItems:[]
}

const cart =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return{
                ...state,
                cartItems:handleAddItemToCart(state.cartItems,action.payload),                
            };
        case actionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems:handleRemoveCartItem(state.cartItems,action.payload)
            };
        case actionTypes.EMPTY_CART:
            return {
                ...handleEmptyCart(state)
            };
        case actionTypes.DECREMENT_ITEM_QTY:
            return{
                ...state,
                cartItems:handleDecreaseItemQty(state.cartItems,action.payload)                
            };
        case actionTypes.INCREMENT_ITEM_QTY:
                return{
                    ...state,
                    cartItems:handleIncreaseItemQty(state.cartItems,action.payload)                
                };
        case actionTypes.CONFIRM_ORDER:
            return {
                ...handleConfirmOrder(state)              
            }
        default:
            return state
    }    
}

export default cart;
