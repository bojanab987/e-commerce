import './App.css';
import  Navbar from './components/Navbar';
import  Home  from './routes/Home/Home';
import Products from './routes/Products/Products';
import Cart from './routes/Cart/Cart';
import ProductPage from './routes/ProductPage/ProductPage';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { getProducts, getProduct} from './data';

const useStyles = makeStyles({
 
  header:{
      backgroundColor: "white",
      height: '20px',
      display:"flex",
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      margin:"0 20px 10px 0",
      borderBottom:"solid 1px",      
      padding:"10px 10px 20px 0",
      position:"fixed",
      top:"0",
      zIndex:3       
  },
  bold:{        
      fontSize:"18px"
  },
  blue:{
      color:"#2116FF"
  },    
})
function App() {
  let [cartItems, setCartItems] = useState([]);
  let [totalCartAmount, setTotalCartAmount]=useState();
  const classes= useStyles();
  const products=getProducts();
  
  function addItemToCart(productId) {    
    const product=getProduct(productId);    
    if(product.id===productId){
      if(cartItems.some(item=>item["id"]===productId)){
        const cItem=cartItems.find(item=>item["id"]===productId)
        cItem.qty+=1;
        setCartItems(cartItems => [...cartItems,product])
      }else{
        setCartItems(cartItems => [...cartItems, product])
      }
    }
    alert(`${product.title} is added to cart`)
  };

  function removeItem(productId) {
    setCartItems(cartItems => cartItems.filter(product=>{
      return product.id !== productId;
    }));
    setClearItemQty();
  };

  function emptyCart(){
    setCartItems([]);
    setClearItemQty();
  };

  function increaseItemQty(productId){
    cartItems.forEach(item=>{
      if(item.id===productId){
        item.qty+=1
      }
    });
    setCartItems(prev=>[...prev])
  };

  function decreaseItemQty(productId){
    cartItems.forEach(item=>{
      if(item.id===productId){
        item.qty-=1;
      }
    });
    setCartItems(prev =>[...prev]);
  };

  function confirmOrder(){
    if(cartItems.length >0){
      alert("Your order is confirmed!");      
      emptyCart()
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
  const countItemsInCart=()=>{
    let totalItems=0;
    cartItems.forEach(item =>{
      totalItems += item.qty
    });
    setTotalCartAmount(totalItems);
  };

  useEffect(()=>{
    countItemsInCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cartItems])


  return (
    <div className="App">  
      <BrowserRouter>
      
        <header className={classes.header}>        
          <Typography className={classes.bold}>
              <h2><em>fak</em>
                <span className={classes.blue}>E</span>-commerce
              </h2>
          </Typography>                    
          <Navbar totalCartAmount={totalCartAmount}/>                
        </header>             
        <Routes>
          <Route path="/" element={<Home /> }/>          
          <Route path="/products" element={<Products cartItems={cartItems} addItemToCart={addItemToCart}/>}/>       
          <Route path="/products/:id" element={<ProductPage addItemToCart={addItemToCart}/>}/> 
          <Route path="/cart" element={<Cart cartItems={cartItems} removeItem={removeItem} increaseItemQty={increaseItemQty} decreaseItemQty={decreaseItemQty} emptyCart={emptyCart} confirmOrder={confirmOrder}/>}/> 
        </Routes> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
