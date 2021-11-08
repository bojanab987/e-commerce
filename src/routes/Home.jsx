import { makeStyles } from '@mui/styles';
import ProductSlider from '../components/ProductSlider/ProductSlider';

const useStyles = makeStyles({
    container:{
        display:"flex",
        flexDirection:"column",        
        width:"100vw",
        padding:"10px",
        overflow:"hidden",        
    },     
});

export default function Home(){
const classes= useStyles();
    return(
        <div className={classes.container}>           
            <ProductSlider />
        </div>
    )
}