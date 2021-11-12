import { IconButton } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {makeStyles} from '@mui/styles';

const useStyles=makeStyles({
    cartItemWrapper:{
        width:"105%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    cartItem:{
        width:"70%",
        display:"flex", 
        alignItems:"center"       
    },
    image:{
        height:"100px",
        width:"100px",
        padding:"15px"
    },
    qty:{
        width:"20%"
    },
    price:{
        fontWeight:"700",
        fontSize:"1.1rem",
        width:"10%"
    },
    icon:{
        color:"#1976d2"
    },
    iconEmpty:{
        color:"#D92025"
    }
})

export default function CartcartItem({cartItem,handleClick, increaseItemQty,decreaseItemQty}){
    const classes=useStyles();

    const total=cartItem.price * cartItem.qty; 

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