import CartItem from '../components/CartItem';
// import {cart} from './../data';
import QueryNavLink from '../components/QueryNavLink';
import {Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { makeStyles } from '@mui/styles';
// import { useState, useEffect } from 'react';

const useStyles = makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        width:"100%",
        paddingTop:"50px"
    },
    cartWrapper:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-start",
        marginLeft:"50px",       
    },
    top:{
        display:"flex",
        width:"70%",
        justifyContent:"space-between",
        borderBottom:"1px solid #d3cbcb"
    },
    item:{
        width:"70%",        
    },
    qty:{
        width:"20%"
    },
    middle:{
        width:"70%",
    },   
    link:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"7px",
        textDecoration:"none",
        width:"100%", 
        color:"#1976d2",
        '&:visited':{
            color:"#1976d2"
        }
    },
    bottom:{
        width:"72%",
        marginTop:"20px",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    btnGroup:{
        display:"flex",
        width:"75%",        
        justifyContent:"flex-start"
    },
    total:{
        fontSize:"1.5rem",
        width:"30%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        fontWeight:"700"
    },
    finalBtns:{
        display:"flex",
        justifyContent:"flex-end",
        gap:"20px",
        width:"72%"
    }
})

export default function Cart({cartItems, removeItem, increaseItemQty,decreaseItemQty, emptyCart, confirmOrder}){
    const classes=useStyles();    

    const totalAmount=()=>{
        let total=0;
        cartItems.forEach(element => {
            total+=element.price*element.qty
        });
        return parseFloat(total).toFixed(2);
    }    

    // useEffect(()=>{
    //     const cartItems=JSON.parse(localStorage.getItem('cart'));
    //     if(cartItems){
    //         setCartContent(cartItems)
    //     }
    // },[]);

    // useEffect(()=>{
    //     localStorage.setItem('cart', JSON.stringify(cartContent))
    // },[cartContent]);

    return(
        <main className={classes.container}>
            <h1>Your cart</h1>
            <div className={classes.cartWrapper}>
                <div className={classes.top}>
                    <p className={classes.item}>Item</p>
                    <p className={classes.qty}>Qty</p>
                    <p className={classes.price}>Price</p>                    
                </div>
                <div className={classes.middle}>
                    {(cartItems.length===0)
                        ? <p>Your cart is empty. Go to store to add some products.</p>
                        : cartItems.map( item => (
                            <CartItem key={item.id} 
                                cartItem={item} 
                                handleClick={()=>removeItem(item.id)}
                                increaseItemQty={()=>increaseItemQty(item.id)}
                                decreaseItemQty={()=>decreaseItemQty(item.id)}/> 
                        )
                    )}                    
                </div>
                <div className={classes.bottom}>
                    <div className={classes.btnGroup}>
                        <Button variant="outlined" >
                            <QueryNavLink to={'/products'} className={classes.link}>
                                <KeyboardBackspaceIcon/>
                                Back to store   
                            </QueryNavLink>                
                        </Button>
                    </div> 
                    <div className={classes.total}>                   
                        <p>Total:</p>
                        <p>$ {totalAmount()}</p>
                    </div>
                </div>
                {cartItems.length !== 0 &&
                    (<div className={classes.finalBtns}>
                        <Button 
                            variant="contained" 
                            onClick={()=>emptyCart()}
                            style={{backgroundColor:"#D92025"}}>
                            Empty Cart
                        </Button>
                        <Button 
                            variant="contained"
                            style={{backgroundColor:"#4CD652"}}
                            onClick={()=>confirmOrder()}>Confirm order</Button>
                    </div>)
                }
            </div>
        </main>
    )
}