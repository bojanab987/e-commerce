import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { makeStyles,styled } from '@mui/styles';


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

const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `1px solid #000`,
      padding: '0 4px',
    },
  }));

export default function Navbar({totalCartAmount}) {
    const classes=useStyles();
    

    return (
        <nav className={classes.navBar}>
            <Link className={classes.link} to="/">HOME</Link> | {" "}
            <Link to="/products" className={classes.link}>ALL PRODUCTS</Link> | {" "}
            <Link to="/cart" className={classes.link}>
                <StyledBadge 
                    badgeContent={totalCartAmount} 
                    color="primary "
                    >
                    <ShoppingCartOutlinedIcon className={classes.icon}/>          
                </StyledBadge>
            </Link>
        </nav>
    )
}