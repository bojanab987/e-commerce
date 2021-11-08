import { Outlet, useSearchParams } from "react-router-dom";
import { getProducts } from "./../data";
import QueryNavLink from "./../components/QueryNavLink";
import { Grid } from "@mui/material";
import Product from './Product';
import {makeStyles} from '@mui/styles';

const useStyles=makeStyles({
    mainContainer:{
        paddingTop:"50px",
        
    },
    link:{
        textDecoration:"none",
        width:"100%"
    }
})

export default function Products({onAddToCart}) {
    const classes=useStyles();
    const products = getProducts();   
    const [searchParams] = useSearchParams();
    
    return (
        <main className={classes.mainContainer}>
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
                        <QueryNavLink                         
                            to={`/products/${product.id}`} 
                            className={classes.link}>                       
                                <Product product={product} onAddToCart={onAddToCart}/>                        
                        </QueryNavLink>
                    </Grid>
              ))}
            </Grid>
            <Outlet />
        </main>
    //    { <div style={{ display: "flex" }}>
    //     <nav
    //       style={{
    //         borderRight: "solid 1px",
    //         padding: "1rem"
    //       }}
    //     >          
    //       <input
    //         placeholder="Search books..."
    //         value={searchParams.get("filter") || ""}
    //         onChange={event => {
    //           let filter = event.target.value;
    //           if (filter) {
    //             setSearchParams({ filter });
    //           } else {
    //             setSearchParams({});
    //           }
    //         }}
    //       />
         
    //     </nav>}        
    
    )
}