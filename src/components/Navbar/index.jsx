import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge/Badge';
import { useStyles } from './styles';

export default function Navbar({totalCartAmount}) {
    const classes=useStyles();    

    return (
        <nav className={classes.navBar}>
            <Link className={classes.link} to="/">HOME</Link> | {" "}
            <Link to="/products" className={classes.link}>ALL PRODUCTS</Link> | {" "}
            <Link to="/cart" className={classes.link}>
                <Badge 
                    badgeContent={totalCartAmount} 
                    color="primary">
                    <ShoppingCartOutlinedIcon className={classes.icon}/>          
                </Badge>
            </Link>
        </nav>
    )
}