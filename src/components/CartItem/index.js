import { IconButton } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useStyles} from './styles';
import { useDispatch} from 'react-redux';
import { removeCartItem, increaseItemQty,decreaseItemQty} from '../../redux/actions/actions'

export default function CartItem({cartItem}){
    const classes=useStyles();
    const total=parseFloat(cartItem.price * cartItem.qty).toFixed(2); 
    const dispatch = useDispatch();

    const handleRemoveCartItem =(id)=>{
        dispatch(removeCartItem(id))
    }

    const handleIncreaseItemQty = (id)=>{
        dispatch(increaseItemQty(id))
    }

    const handleDecreaseItemQty = (id) =>{
        dispatch(decreaseItemQty(id))
    }

    return(
        <div className={classes.cartItemWrapper}>
            <div className={classes.cartItem}>
                <img src={cartItem.image} alt={cartItem.title} className={classes.image}/>
                <p>{cartItem.title}</p>
            </div>            
            <div className={classes.qty}>
                <IconButton onClick={()=>handleDecreaseItemQty(cartItem.id)} disabled={cartItem.qty>1?false:true}>
                    <IndeterminateCheckBoxIcon className={classes.icon}/>
                </IconButton>                    
                <span>{cartItem.qty}</span>
                <IconButton onClick={()=>handleIncreaseItemQty(cartItem.id)}>
                    <AddBoxIcon className={classes.icon} />
                </IconButton>
            </div>
            <p className={classes.price}>$ {total}</p>
            <IconButton onClick={()=>handleRemoveCartItem(cartItem.id)}>
                <DeleteForeverIcon className={classes.iconEmpty}/>
            </IconButton>
        </div>
    )
}