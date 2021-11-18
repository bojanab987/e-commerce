import { Card, CardContent, CardActions,IconButton, Typography} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import QueryNavLink from "../QueryNavLink";
import { useStyles } from './styles';
import { useDispatch} from 'react-redux';
import { addItemToCart } from '../../redux/actions/actions'

export default function Product({product}){ 
    const classes=useStyles();
    const dispatch = useDispatch();

    const handleAddItemToCart = (productId)=>{
        dispatch(addItemToCart(productId))
    }
    return(
       
       <Card className={classes.card}>
            <QueryNavLink                         
                to={`/products/${product.id}`}           
                className={classes.link}> 
                <div className={classes.imageCont}>
                    <img                 
                    component="img" 
                    alt=""                 
                    src={product.image}
                    className={classes.image}
                    />
                </div> 
                <CardContent >
                    <Typography 
                        component="div" 
                        variant="h5" 
                        gutterBottom>
                            {product.title}
                    </Typography>
                    <Typography                     
                        noWrap
                        variant="body2"
                        className={classes.text}>
                        {product.description}                        
                    </Typography> 
                </CardContent>
            </QueryNavLink>
            <CardActions className={classes.actions} >
                <IconButton onClick={()=>handleAddItemToCart(product.id)}>
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