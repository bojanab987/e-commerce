import { getProducts, getProduct} from './products';

const products=getProducts();

export const handleAddItemToCart=(state,productId)=> {    
  const product=getProduct(productId);
     
  if(product.id===productId){
    if(state.cartItems.some(item=>item["id"]===productId)){
      const cItem=state.cartItems.find(item=>item["id"]===productId)
      cItem.qty+=1;
      return [...state.cartItems]
    }else{
      return [...state.cartItems, product]      
    }
  }
  alert(`${product.title} is added to cart`)
};
  
export const handleRemoveCartItem = (state,productId) => {
    return state.cartItems.filter(item => item.id !== productId);
};  
  
export const handleDecreaseItemQty = (state, productId ) => {
  state.cartItems.forEach(item=>{
    if(item.id === productId){
      item.qty-=1;
    }
    return state;
  });
};

export const handleIncreaseItemQty = (state,productId) =>{
  state.cartItems.forEach(item=>{
    if(item.id===productId){
      item.qty+=1
    }
  })
  return state;
}

export const handleEmptyCart =(state)=>{
  state.cartItems =[];
  state.totalCartAmount=0;
  setClearItemQty();
  return state;
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
function setClearItemQty(){
  products.forEach(prod=>{
    prod.qty=1;
  })
}

//function make calculation for total number of items in cart
//so it can be displayed on Navbar
// const countItemsInCart=()=>{
//   let totalItems=0;
//   cartItems.forEach(item =>{
//     totalItems += item.qty
//   });
//   setTotalCartAmount(totalItems);
// };