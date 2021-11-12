import { Outlet, useSearchParams } from "react-router-dom";
import { Grid } from "@mui/material";
import {makeStyles} from '@mui/styles';
import { getProducts} from "../../data";
import Product from '../../components/Product';
import SearchBar from '../../components/SearchBar';

const useStyles=makeStyles({
    mainContainer:{
        paddingTop:"50px",
        
    }, 
});

export default function Products({cartItems, addItemToCart}) {
    const classes=useStyles();
    const products = getProducts();
    const [searchParams] = useSearchParams();    
    
    return (
        <main             
            className={classes.mainContainer}>
            <SearchBar />
            <Grid 
                container 
                justify="center" 
                spacing={3}
                >
            {products
                .filter(product =>{
                    let filter = searchParams.get("filter");
                    if(!filter) return true;
                    let title=product.title.toLocaleLowerCase();
                    return title.startsWith(filter.toLowerCase());
                })
                .map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id} > 
                                                                
                        <Product 
                            cartItems={cartItems} 
                            product={product} 
                            handleClick={()=>addItemToCart(product.id)}
                        />                       
                    </Grid>
              ))}
            </Grid>
            <Outlet />
        </main>    
    )
}