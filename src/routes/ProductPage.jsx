import {getProduct,cart} from './../data';
import { useParams } from 'react-router';
import {makeStyles} from '@mui/styles';
import {Button} from '@mui/material';

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
        alignItems:"center",
        paddingBottom:"15px"
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

    const handleClick=(productId)=>{        
         if(product.id===productId){ 
            if(cart.some(cartItem=>cartItem["id"]=== productId)) {
                const item=cart.find(cartItem=>cartItem["id"]=== productId)
                item.qty+=1
                console.log(item.qty)
                console.log("just increace capacity")
            } else{
                cart.push(product)
                console.log("product added")
                 console.log(cart)
            }                  
        } 
    }    

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
                    <Button 
                        variant="outlined"
                        className={classes.addBtn}
                        onClick={()=>handleClick(product.id)}>
                        Add To cart
                    </Button>
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