import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    wrapper:{
        width:"100%",
        paddingTop:"10px"
    },
    detailsWrapper:{
        display:'flex',
        width:"100%",        
        alignItems:"center",
        height:"30px",
        gap:"20px",
        
    },
    details:{
        display:'flex',
        justifyContent:'space-between', 
        textAlign:"left",    
        gap:"20px",    
        width:"80%"  ,
        alignItems:"center",
        borderBottom:"1px solid #dbdbd9",
    },
    shorten:{
        width:'20%',
        overflow:'hidden',
        whiteSpace:'nowrap',
    },
    date:{
        width:"60%"
    },
    amount:{
        width:'20%',
        textAlign:"right"
    },
    btn:{
        fontSize:"0.5rem"
    },
    link:{
        textDecoration:"none",
        '&:visited':{
            color:'#0288d1'
        }
    }

})