import actionTypes from '../actions/actionTypes';
import { getProducts, getProduct} from '../../utils/products';
// import { 
//     handleAddItemToCart, 
//     handleRemoveCartItem,
//     handleDecreaseItemQty, 
//     handleIncreaseItemQty,
//     handleEmptyCart,
//     handleConfirmOrder } from '../../utils/cart'
// import {cartItems} from '../../data'
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

const products=getProducts();

export const handleAddItemToCart=(cartItems,productId)=> {    
  const product=getProduct(productId);  
  
  if(product.id===productId){
    if(cartItems.some(item=>item["id"]===productId)){
      const cItem=cartItems.find(item=>item["id"]===productId)
      cItem.qty+=1;      
    }else {
      cartItems.push(product)    
    }
  }  
};
  
export const handleRemoveCartItem = (state,productId) => {   
    state.cartItems = state.cartItems.filter(item => item.id !== productId);  
    state.totalCartAmount=countItemsInCart(state)   
    setClearItemQty();   
    return state     
};  
  
export const handleDecreaseItemQty = (state, productId ) => {
  let items=state.cartItems;  
  items.forEach(item=>{
    if(item.id === productId){
      item.qty-=1;
    }    
  });
  state.totalCartAmount=countItemsInCart(state)    
  return state
};

export const handleIncreaseItemQty = (state,productId) =>{
  let items=state.cartItems;  
  items.forEach(item=>{
    if(item.id===productId){
      item.qty+=1
    }
  })  ;
  state.totalCartAmount=countItemsInCart(state)  
  return state  
}

export const handleEmptyCart =(state)=>{
  state.cartItems =[];
  state.totalCartAmount=0;
  setClearItemQty();  
};

export const handleConfirmOrder = (state) =>{
  if(state.cartItems.length>0){
    alert("Your order is confirmed!");
    handleEmptyCart(state)
  }
}

//function to set product quantity (amount added in cart) to 1
//as inital quantity value
function setClearItemQty(){
  products.forEach(prod=>{
    prod.qty=1;
  })
}

//function make calculation for total number of items in cart
//so it can be displayed on Navbar
const countItemsInCart=(state)=>{
  let totalItems=0;
  if(state.cartItems.length !==0){
    state.cartItems.forEach(item =>{
        totalItems += item.qty
    });
  }
  return totalItems
};