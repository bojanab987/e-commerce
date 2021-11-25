import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    navBar:{
        display:"flex",
        flexDirection:"row",       
        justifyContent:"center",
        alignItems:"center",        
        gap:"8px",
        padding:"10px 20px 10px 10px",
        fontSize:"20px", 
        textTransform:"uppercase" 
    },   
    icon:{       
        heigth:"16px",
        marginTop:"8px",
    },
    link:{
        color:"#2116FF",
        textDecoration:"none",
        '&:visited':{
            color:"#2116FF"
        }
    }, 
   
});