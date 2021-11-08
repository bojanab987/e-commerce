import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { getProducts } from '../../data'; 
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    sliderContainer:{
        width: "100%",  
        heigth:"80vh",      
        display: "flex",
        flexDirection:"row", 
        justifyContent:"space-between",
        alignItems:"center",       
        overflow: "hidden", 
    },
    wrapper:{    
        height:"100%",    
        display: "flex",
        transition: "all 1.5s ease",
        transform: `translateX(${(props) => props.slideIndex * -100}vw)`
    },
    slide:{
        width: "80vw",
        height: "80vh",
        display: "flex",
        alignItems: "center", 
        margin:"30px",
        padding:"30px"    
    },
    imgContainer:{
        height:"100%",
        flex:"1",
        padding:"10px"
    },
    image:{
        height:"70%",
        padding:"10px"
    },
    arrow:{
        width: "50px",
        height: "50px",
        backgroundColor: "#cbdaf2",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",  
        justfyContent:"center",    
        position: "absolute",
        top: "0",
        bottom: "0",        
        margin: "auto",
        cursor: "pointer",
        opacity: "0.5",
        zIndex: "2",        
    },
    left:{
        left:"20px"
    },
    right:{
        right:"40px"
    },
    info:{
        flex:"1",
        padding:"50px"
    }
});

export default function ProductSlider(){
    const classes=useStyles();
    const [slideIndex, setSlideIndex] = useState(0);    
    const products=getProducts();
    const getRandomProducts= (products)=>{        
        let random = products.sort(()=> 0.5-Math.random()).slice(0,3)
        return random;
    }
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }else {
            setSlideIndex(slideIndex< 2 ? slideIndex+1 : 0);
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
            <div slideIndex={slideIndex} className={classes.wrapper}>
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
                            <Button>Show Product</Button>
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