import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge/Badge';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

export default function Navbar() {
    const { t } = useTranslation();
    const classes=useStyles();  
    const totalNumCartItems = useSelector(state=>state.cart.totalCartAmount);

    return (
        
        <nav className={classes.navBar}>
            <Link className={classes.link} to="/">{t('home')}</Link> | {" "}
            <Link to="/products" className={classes.link}>{t('allProducts')}</Link> | {" "}
            <Link to="/cart" className={classes.link}>            
                <Badge 
                    badgeContent={totalNumCartItems} 
                    color="primary">
                    <ShoppingCartOutlinedIcon className={classes.icon}/>          
                </Badge>
            </Link>            
        </nav>
    )
}