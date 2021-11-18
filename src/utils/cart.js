import { getProducts, getProduct} from './products';

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
export function setClearItemQty(){
  products.forEach(prod=>{
    prod.qty=1;
  })
}

//function make calculation for total number of items in cart
//so it can be displayed on Navbar
export const countItemsInCart=(state)=>{
  let totalItems=0;
  if(state.cartItems.length !==0){
    state.cartItems.forEach(item =>{
        totalItems += item.qty
    });
  }
  return totalItems
};