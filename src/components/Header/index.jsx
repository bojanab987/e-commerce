import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import Navbar from '../Navbar';
import { useStyles } from './styles';
import { isLoggedIn } from '../../utils'

const Header = () => {
    const classes= useStyles();
    const navigate = useNavigate();
    let dashboard;
    let login;
    let signup;
    const logout= <Button variant="outlined" onClick={()=>handleLogout()}>LOGOUT</Button>;  

    if(isLoggedIn===true){
        login=logout;
        signup='';
        dashboard=<Link to="/dashboard" className={`${classes.dashboard} ${classes.link}`}>DASHBOARD</Link>;
    }else{
        login=<Link to="/login" className={classes.link}>Login</Link>;
        signup=<Link to="/signup" className={classes.link}>SignUp</Link>;
        dashboard='';
    }

    const LOGOUT_API='http://localhost:4000/logout';

    const handleLogout = async () =>{
        let response=null
        try{
            response= await fetch(LOGOUT_API, {
                method:'DELETE',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({
                    token: localStorage.getItem("refreshToken")
                })                
            });
        }catch(err){
            console.log(err)
        }
        if(response.ok){
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/login', {replace:true})
            
        }else{
            alert(response.status);
        }
    }    

    return (
        <header className={classes.header}>        
            <div className={classes.bold}>
                <h2><em>fak</em>
                    <span className={classes.blue}>E</span>-commerce
                </h2>
            </div>  
            <div className={classes.right}>                  
                <Navbar /> 
                <div className={classes.signingOptions}>
                    <span className={classes.wrap}>{dashboard} </span> 
                    <span className={classes.wrap}>{signup}</span>
                    <span className={classes.wrap}>{login} </span> 
                </div>  
            </div>             
        </header>   
    )
}

export default Header
