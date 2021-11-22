import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge/Badge';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const classes=useStyles();  
    const totalNumCartItems = useSelector(state=>state.cart.totalCartAmount);

    return (
        
        <nav className={classes.navBar}>
            <Link className={classes.link} to="/">HOME</Link> | {" "}
            <Link to="/products" className={classes.link}>ALL PRODUCTS</Link> | {" "}
            <Link to="/cart" className={classes.link}>            
                <Badge 
                    badgeContent={totalNumCartItems} 
                    color="primary">
                    <ShoppingCartOutlinedIcon className={classes.icon}/>          
                </Badge>
            </Link>
            <div>
                <Link to="/signup" className={classes.link}>Sign Up</Link>
            </div>
        </nav>
    )
}