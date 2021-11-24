import './App.css';
import Header from './components/Header'
import  Home  from './routes/Home/Home';
import Products from './routes/Products/Products';
import Cart from './routes/Cart/Cart';
import Registration from './routes/Registration'
import ProductPage from './routes/ProductPage/ProductPage';
import Login from './routes/Login';
import Dashboard from './routes/Dashboard';
import DashboardItem from './routes/DashboardItem'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { isLoggedIn } from './utils'
 
function App() {
  return (
    <div className="App">  
      <BrowserRouter>      
        <Header />            
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/signup" element={<Registration />}/>    
          <Route path="/login" element={<Login/>}/>      
          <Route path="/products" element={isLoggedIn===true  ? <Products /> : <Navigate to="/login" />}/>       
          <Route path="/products/:id" element={isLoggedIn===true ? <ProductPage /> : <Navigate to="/login" />}/> 
          <Route path="/cart" element={isLoggedIn===true ? <Cart /> : <Navigate to="/login" />}/> 
          <Route path="/dashboard" element={isLoggedIn===true ? <Dashboard/> : <Navigate to="/login" />}/>
          <Route path="/dashboard/:id" element={isLoggedIn===true ? <DashboardItem/> : <Navigate to="/login" />}/>
        </Routes> 
      </BrowserRouter>
    </div>
    
  );
}

export default App;
