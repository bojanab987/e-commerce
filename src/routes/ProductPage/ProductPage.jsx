import {getProduct} from '../../data';
import { useParams } from 'react-router';
import { useStyles } from './styles';
import {Button} from '@mui/material';

export default function ProductPage({addItemToCart}){
    
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
                    alt={product.title} 
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
                        onClick={()=>addItemToCart(product.id)}>
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