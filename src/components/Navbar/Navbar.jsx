import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    navBar:{
        display:"flex",
        flexDirection:"row",       
        justifyContent:"center",
        alignItems:"center",        
        gap:"8px",
        padding:"10px 20px 10px 10px",
        fontSize:"20px", 
            
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

export default function Navbar() {
    const classes=useStyles();
    

    return (
        <nav className={classes.navBar}>
            <Link className={classes.link} to="/">HOME</Link> | {" "}
            <Link to="/products" className={classes.link}>ALL PRODUCTS</Link> | {" "}
            <Link to="/cart" className={classes.link}>
                <ShoppingCartOutlinedIcon className={classes.icon}/>
            </Link>
        </nav>
    )
}