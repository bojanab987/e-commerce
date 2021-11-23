import { getProducts, getProduct} from './products';

const products=getProducts();

export const handleAddItemToCart=(cartItems,productId)=> {    
  const product=getProduct(productId);  
  
  if(product.id===productId){
    if(cartItems.some(item=>item["id"]===productId)){
      const cItem=cartItems.find(item=>item["id"]===productId)
      cItem.qty+=1;       
      return [
        ...cartItems]
    }else {      
      return [...cartItems,product]             
    }    
  }   
   
};
  
export const handleRemoveCartItem = (cartItems,productId) => {   
    let items= cartItems.filter(item => item.id !== productId);
    return [...items]  
};  
  
export const handleDecreaseItemQty = (cartItems, productId ) => {
    cartItems.forEach(item=>{
    if(item.id === productId){
      item.qty-=1;
    }    
  });
  return [...cartItems]  
};

export const handleIncreaseItemQty = (cartItems,productId) =>{
  
  cartItems.forEach(item=>{
    if(item.id===productId){
      item.qty+=1
    }
  })  ;
  return [...cartItems]  
}

export const handleEmptyCart =(state)=>{
  state.cartItems =[];
  state.totalCartAmount=0;
  setClearItemQty(); 
  return {...state}
};

export const handleConfirmOrder = (state) =>{
  if(state.cartItems.length>0){
    alert("Your order is confirmed!");
    handleEmptyCart(state)
  }
  return state;
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
    state.cartItems.map(item =>{
        totalItems += item.qty
        return totalItems
    });
  } 
  state.totalCartAmount=totalItems
  return state.totalCartAmount
};