import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
 
    header:{
        backgroundColor: "white",
        height: '30px',
        display:"flex",
        width:"95%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",        
        borderBottom:"solid 1px",      
        padding:"10px 45px 10px 20px",
        position:"fixed",
        top:0,
        right:0,
        left:0,
        zIndex:3       
    },
    bold:{        
        fontSize:"18px"
    },
    blue:{
        color:"#2116FF"
    },   
    link:{
        color:"#2116FF",        
        '&:visited':{
            color:"#0110FF"
        }
    }, 
    right:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        flexWrap:"nowrap",
        alignItems:"center"
    },
    signingOptions:{

    },
    wrap:{       
       paddingRight:'10px'
    },
    dashboard:{        
        textDecoration:"none",
        '&:hover':{
            textDecoration:"underline"
        }
    }
  })