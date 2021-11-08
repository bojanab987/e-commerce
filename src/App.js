import './App.css';
import  Home  from './routes/Home';
import Products from './routes/Products';
import  Navbar from './components/Navbar/Navbar';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';

const useStyles = makeStyles({
 
  header:{
      backgroundColor: "white",
      height: '20px',
      display:"flex",
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      margin:"0 20px 10px 0",
      borderBottom:"solid 1px",      
      padding:"10px 10px 20px 0",
      position:"fixed",
      top:"0"       
  },
  bold:{        
      fontSize:"18px"
  },
  blue:{
      color:"#2116FF"
  },    
})
function App() {
  const classes= useStyles();
  return (
    <BrowserRouter>
      <div className="App">  
        <header className={classes.header}>        
          <Typography className={classes.bold}>
              <h2><em>fak</em>
                <span className={classes.blue}>E</span>-commerce
              </h2>
          </Typography>
          <SearchBar />
          <Navbar />                
        </header>             
        <Routes>
          <Route path="/" element={<Home /> }>
            
          </Route>
          <Route path="products" element={<Products />}></Route>
          
        </Routes>
       
      </div>
    </BrowserRouter>
    
  );
}

export default App;
