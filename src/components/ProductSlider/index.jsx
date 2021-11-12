import { useState } from 'react';
import { getProducts } from '../../data'; 
import QueryNavLink from "../QueryNavLink";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import {useStyles} from './styles'

export default function ProductSlider(){
    const classes=useStyles();
    const [slideindex, setSlideIndex] = useState(0);    
    const products=getProducts();
    const getRandomProducts= (products)=>{        
        let random = products.sort(()=> 0.5-Math.random()).slice(0,3)
        return random;
    }
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideindex > 0 ? slideindex-1 : 2);
        }else {
            setSlideIndex(slideindex< 2 ? slideindex+1 : 0);
        }
    }
    const randomProducts= getRandomProducts(products);
       
    return (
        
        <div className={classes.sliderContainer}>
            <div 
                direction="left" 
                onClick={()=>handleClick("left")}
                className={`${classes.arrow} ${classes.left}`}>
                <ArrowLeftOutlined />
            </div>
            <div slideindex={slideindex} className={classes.wrapper}>
                {randomProducts.map((prod)=>(
                    <div key={prod.title} className={classes.slide}>
                        <div className={classes.imgContainer}>
                            <img 
                                src={prod.image} 
                                alt="" 
                                className={classes.image}/>
                        </div>
                        <div className={classes.info}>
                            <h3>{prod.title}</h3>
                            <p>{prod.description}</p>
                            <Button variant="outlined">
                                <QueryNavLink 
                                    to={`/products/${prod.id}`}
                                    className={classes.link}>
                                Show Product
                                </QueryNavLink>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div 
                direction="right" 
                onClick={()=>handleClick("right")}
                className={`${classes.arrow} ${classes.right}`}>
                <ArrowRightOutlined />
            </div>
        </div>
    )
}