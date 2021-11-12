import { useStyles} from './styles'
import ProductSlider from '../../components/ProductSlider';

export default function Home(){
const classes= useStyles();
    return(
        <div className={classes.container}>           
            <ProductSlider />
        </div>
    )
}