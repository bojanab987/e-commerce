import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom'
import CartItem from '../../components/CartItem';
import QueryNavLink from '../../components/QueryNavLink';
import {Button} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useStyles } from './styles'
import { emptyCart, confirmOrder} from '../../redux/actions/actions';
import { doRefreshToken, getPurchases } from '../../utils';

export default function Cart(){
    const { t } = useTranslation();
    const classes=useStyles();    
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems)
    const navigate=useNavigate();
    const callback=useCallback(()=>{
        getPurchases()},[])

    const totalAmount=()=>{
        let total=0;
        cartItems.forEach(element => {
            total+=element.price*element.qty
        });
        return parseFloat(total).toFixed(2);
    } 

    const handleEmptyCart = ()=>{
        dispatch(emptyCart())
    };

    const handleConfirmOrder = async () =>{
        let response;
        try{
            response = await fetch(`${process.env.REACT_APP_API}/purchases`, {
                method:'POST',
                headers: {
                    "Content-Type" : 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem('accessToken')}`                    
                },
                body:JSON.stringify({ products: cartItems})
            })            
        }catch(err){
            console.log(err)
        }
        if(response.ok){
            dispatch(confirmOrder())
            getPurchases();            
        }else{
            doRefreshToken(navigate,callback);
            handleConfirmOrder();
        }        
    }   
    
    return(
        <main className={classes.container}>
            <h1>{t('cart')}</h1>
            <div className={classes.cartWrapper}>
                <div className={classes.top}>
                    <p className={classes.item}>{t('item')}</p>
                    <p className={classes.qty}>{t('qty')}</p>
                    <p className={classes.price}>{t('price')}</p>                    
                </div>
                <div className={classes.middle}>
                {console.log(cartItems)}
                    {(cartItems.length===0)
                        ? <p>{t('emptyInfo')}</p>
                        : cartItems.map( item => (
                            <CartItem key={item.id} 
                                cartItem={item} 
                            /> 
                        )
                    )}                    
                </div>
                <div className={classes.bottom}>
                    <div className={classes.btnGroup}>
                        <Button variant="outlined" >
                            <QueryNavLink to={'/products'} className={classes.link}>
                                <KeyboardBackspaceIcon/>
                                {t('back')}
                            </QueryNavLink>                
                        </Button>
                    </div> 
                    <div className={classes.total}>                   
                        <p>{t('total')}:</p>
                        <p>$ {totalAmount()}</p>
                    </div>
                </div>
                {cartItems.length !== 0 &&
                    (<div className={classes.finalBtns}>
                        <Button 
                            variant="contained" 
                            onClick={()=>handleEmptyCart()}
                            style={{backgroundColor:"#D92025"}}>
                            {t('emptyCart')}
                        </Button>
                        <Button 
                            variant="contained"
                            style={{backgroundColor:"#4CD652"}}
                            onClick={()=>handleConfirmOrder()}>{t('confirm')}</Button>
                    </div>)
                }
            </div>
        </main>
    )
}