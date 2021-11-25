import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({

    modal:{
        backgroundColor: '#FFF',
        borderRadius: "10px",
        margin: '5rem',        
        width:'80%',
        outline:'none',
        padding:'2rem',
        border:"1px solid #0288d1",
        overflowY:"scroll" ,
        height:"70vh",
        position:"relative"  
    },
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"column",        
    },
    top:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        gap:"1.5rem",
        borderBottom:"1px solid #dbdbd9",
        fontWeight:"700"
    },
    productDetails:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        gap:"1.5rem"
    },
    width10:{
        width:"10%"
    },
    width20:{
        width:"20%"
    },
    item:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"60%"
    },
    image:{
        height:"70px",
        width:"70px",
        padding:"15px"
    },
    btn:{
        justifySelf:"flex-end",
        textTransform:"uppercase"
    },
    bottom:{
        display:"flex",        
        gap:"2rem",
        fontWeight:"700",
        fontSize:"1.5rem",
        textTransform:"uppercase"
    }
})