import { Card, CardMedia, CardContent, CardActions,IconButton, Typography} from '@mui/material';
// import { useParams} from 'react-router-dom';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    card:{
        maxWidth:'100%',
        height:'max-content'
    },
    image:{ 
        padding:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flex:"1"
    },
    actions:{
        display:"flex",
        justifyContent:"space-between"
    },
    price:{        
        color:"#D83122",
        paddingRight:"10px",
        fontSize:"20px"
    }
    
})
export default function Product({product, onAddToCart}){
    const handleAddToCart = () => onAddToCart(product.id, 1);
    const classes=useStyles();
    // const params=useParams();
    // const product = getProduct(parseInt(params.id,10))
    return(
       
       <Card className={classes.card}>
            <CardMedia                  
                component="img" 
                alt="" 
                height="300"
                width="auto"
                src={product.image}
                className={classes.image}
            />
            <CardContent >
                <Typography 
                    component="div" 
                    variant="h5" 
                    gutterBottom>
                        {product.title}
                </Typography>
                <Typography 
                    variant="body2">
                    {product.description}
                </Typography> 
            </CardContent>
            <CardActions className={classes.actions} >
                <IconButton onClick={handleAddToCart}>
                    <AddShoppingCartOutlinedIcon />                    
                </IconButton>
                <Typography 
                    className={classes.price} 
                    component="p">$ {product.price}
                </Typography>   
        </CardActions>
       </Card> 
    )
}