import {getProduct} from '../../utils/products';
import { useParams } from 'react-router';
import { useStyles } from './styles';
import {Button} from '@mui/material';
import { addItemToCart } from '../../redux/actions/actions';
import { useDispatch} from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function ProductPage(){
    const dispatch = useDispatch();
    const params=useParams();
    const product=getProduct(parseInt(params.id,10));
    const classes= useStyles();    
    const { t } = useTranslation();
    
    const handleAddItemToCart = (productId)=>{
        dispatch(addItemToCart(productId))
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
                        onClick={()=>handleAddItemToCart(product.id)}>
                        {t('cartAdd')}
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