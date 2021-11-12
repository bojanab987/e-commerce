import CartItem from '../../components/CartItem';
import QueryNavLink from '../../components/QueryNavLink';
import {Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useStyles } from './styles'

export default function Cart({cartItems, removeItem, increaseItemQty,decreaseItemQty, emptyCart, confirmOrder}){
    const classes=useStyles();    

    const totalAmount=()=>{
        let total=0;
        cartItems.forEach(element => {
            total+=element.price*element.qty
        });
        return parseFloat(total).toFixed(2);
    } 
    
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