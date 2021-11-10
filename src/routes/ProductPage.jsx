import {getProduct} from './../data';
import { useParams } from 'react-router';
import {makeStyles} from '@mui/styles';
import {Button, IconButton} from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

const useStyles=makeStyles({
    container:{
        paddingTop:"50px",   
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center",
        height:"100vh",
        gap:"10px"    
    },
    titleDiv:{
        padding:"10px"
    },
    title:{
        fontSize:"18px"
    },
    imageContainer:{
        maxWidth:"100%",        
        padding:0,
        margin:0
    },
    image:{
        width:"50%",        
        maxWidth:"100%",
        height:"auto",        
        display:"block",       
        margin:"auto"
    },
    desc:{
        width:"70%"
    },
    text:{
        fontSize:"15px"
    },
    bottom:{
        width:"25%",
        display:"flex",
        justifyContent:"space-between",
        paddingBottom:"15px"
    },
    sign:{
        color:"#5BA7B3"
    },
    addBtn:{
        border:"0.5px solid #5BA7B3"       
    },
    price:{
        fontSize:"1.8rem",       
        
    }
    
})

export default function ProductPage(){
    
    const params=useParams();
    const product=getProduct(parseInt(params.id,10));
    const classes= useStyles();

    return(
        <main className={classes.container}>
            <div className={classes.titleDiv}>
                <h2 className={classes.title}>{product.title}</h2>                
            </div>
            <div className={classes.imageContainer}>
                <img 
                    className={classes.image}
                    src={product.image} 
                    alt="" 
                />
            </div>
            <div className={classes.desc}>
                <p className={classes.text}>
                    {product.description}
                </p>
            </div>
            <div className={classes.bottom}>
                <div>                    
                    <div>
                        <IconButton >
                            <IndeterminateCheckBoxIcon className={classes.sign}/>
                        </IconButton>                    
                        <span>1</span>
                        <IconButton >
                            <AddBoxIcon className={classes.sign}/>
                        </IconButton>
                    </div>
                    <Button 
                        variant="outlined"
                        className={classes.addBtn}>Add To cart</Button>
                </div>
                <div>
                    <p
                        className={classes.price}>
                        <strong>$ {product.price}</strong>
                    </p>
                </div>  
            </div>
        </main>
    )
}