import { IconButton } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {makeStyles} from '@mui/styles';

const useStyles=makeStyles({
    itemWrapper:{
        width:"105%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    item:{
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

export default function CartItem({item}){
    const classes=useStyles();

    const total=item.price * item.qty; 

    return(
        <div className={classes.itemWrapper}>
            <div className={classes.item}>
                <img src={item.image} alt={item.title} className={classes.image}/>
                <p>{item.title}</p>
            </div>            
            <div className={classes.qty}>
                <IconButton onClick={()=>{}} >
                    <IndeterminateCheckBoxIcon className={classes.icon}/>
                </IconButton>                    
                <span>{item.qty}</span>
                <IconButton >
                    <AddBoxIcon className={classes.icon} />
                </IconButton>
            </div>
            <p className={classes.price}>$ {total}</p>
            <IconButton >
                <DeleteForeverIcon className={classes.iconEmpty}/>
            </IconButton>
        </div>
    )
}