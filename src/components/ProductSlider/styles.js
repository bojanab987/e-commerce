import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
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
        padding:"20px"
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
        left:"20px",        
    },
    right:{
        right:"40px",
        justifyContent:"flex-end"
    },
    info:{
        flex:"1",
        padding:"50px"
    },
    link:{
        textDecoration:"none",
        width:"100%", 
        color:"#1976d2",
        '&:visited':{
            color:"#1976d2"
        }
    }

});