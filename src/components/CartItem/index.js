import { IconButton } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useStyles} from './styles';

export default function CartcartItem({cartItem,handleClick, increaseItemQty,decreaseItemQty}){
    const classes=useStyles();

    const total=parseFloat(cartItem.price * cartItem.qty).toFixed(2); 

    return(
        <div className={classes.cartItemWrapper}>
            <div className={classes.cartItem}>
                <img src={cartItem.image} alt={cartItem.title} className={classes.image}/>
                <p>{cartItem.title}</p>
            </div>            
            <div className={classes.qty}>
                <IconButton onClick={()=>decreaseItemQty()} disabled={cartItem.qty>1?false:true}>
                    <IndeterminateCheckBoxIcon className={classes.icon}/>
                </IconButton>                    
                <span>{cartItem.qty}</span>
                <IconButton onClick={()=>increaseItemQty()}>
                    <AddBoxIcon className={classes.icon} />
                </IconButton>
            </div>
            <p className={classes.price}>$ {total}</p>
            <IconButton onClick={()=>handleClick()}>
                <DeleteForeverIcon className={classes.iconEmpty}/>
            </IconButton>
        </div>
    )
}