import {makeStyles} from '@mui/styles';

export const useStyles=makeStyles({
    cartItemWrapper:{
        width:"105%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    cartItem:{
        width:"70%",
        display:"flex", 
        alignItems:"center"       
    },
    image:{
        height:"100px",
        width:"100px",
        padding:"15px"
    },
    qty:{
        width:"20%"
    },
    price:{
        fontWeight:"700",
        fontSize:"1.1rem",
        width:"10%"
    },
    icon:{
        color:"#1976d2"
    },
    iconEmpty:{
        color:"#D92025"
    }
});