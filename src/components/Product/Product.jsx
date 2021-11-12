import { Card, CardContent, CardActions,IconButton, Typography} from '@mui/material';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { makeStyles } from '@mui/styles';
import QueryNavLink from "./../QueryNavLink";

const useStyles = makeStyles({
    card:{
        maxWidth:'100%',
        height:'max-content',        
    },
    imageCont:{
        maxWidth:"100%",
        height:"330px",  
        position:"relative"      
    },
    image:{
        width:"50%", 
        maxWidth:"100%",
        height:"auto",        
        display:"block",
        top:"50%",
        left:"50%",   
        position:"absolute",
        transform:"translate(-50%,-50%)"
    },
    actions:{
        display:"flex",
        justifyContent:"space-between"
    },
    price:{        
        color:"#D83122",
        paddingRight:"10px",
        fontSize:"20px"
    },
    text:{
        height:"100px",
        textOverflow:"ellipsis"
    },
    link:{
        textDecoration:"none",
        width:"100%",
        color:"#000",
        '&:visited':{
            color:"#000"
        }        
    }
    
})
export default function Product({product, handleClick}){   

    const classes=useStyles();
    
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
                <IconButton onClick={handleClick}>
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