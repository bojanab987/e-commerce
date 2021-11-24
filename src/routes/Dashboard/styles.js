import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        width:"100%",
        paddingTop:"50px",
        paddingLeft:"30px"
    },
    title:{
        fontSize:"1.5rem"
    },
    purchaseList:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"flex-start",              
    },
    top:{
        display:"flex",
        width:"80%",
        justifyContent:"space-between",
        borderBottom:"1px solid #d3cbcb",
        fontSize:"1rem"
    }
});