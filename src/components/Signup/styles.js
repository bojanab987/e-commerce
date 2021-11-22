import { makeStyles} from '@mui/styles';

export const useStyles= makeStyles({
    signupContainer:{
        paddingTop:"50px",   
        display:"flex",
        flexDirection:"column",        
        alignItems:"center",
        height:"100vh",
        gap:"10px"  
    },
    title:{
        textTransform:'uppercase'
    },
    form:{
        width:'300px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        gap:'5px',
        border:'1px solid #A4B29F',
        borderRadius:'7px',
        padding:'1rem'
    },
    btn:{
        width:'90%',                           
    },
    bottom:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
    },
    link:{
        color:"#2116FF",
        '&:visited':{
            color:"#2116FF"
        }
    },
    modal:{
        backgroundColor: '#FFF',
        borderRadius: "10px",
        margin: '55px 0 80px',        
        width:'30%',
        outline:'none',
        padding:'2rem',
        height:'15vh'
    },
    overlay:{
        display:'flex',
        justifyContent:'center',
        position:'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
})
  
