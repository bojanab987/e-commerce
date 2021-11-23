import React, {useState} from 'react';
import FormInput from '../forms/FormInput';
import { Link, useNavigate } from 'react-router-dom';
import Modal from "react-modal";
import {Button} from '@mui/material';
import { useStyles } from '../Signup/styles';
import { isLoggedIn } from '../../utils'

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false); 
    const classes=useStyles(); 
    let navigate= useNavigate();
    const LOGIN_API='http://localhost:4000/login';

    const logIn = async (username,password) => {
        let response=null;
        try {
            response = await fetch(LOGIN_API, {
                method: 'POST',
                headers:{ 
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ 
                    username: username,
                    password: password
                })
            });
        }catch(err){
            console.error(err);
        }
        if(response.ok){ 
            const data=await response.json();
            console.log(data)
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            navigate('/', {replace:true})
            console.log(isLoggedIn())
        }else{
            setShowModal(true);
            resetForm();                      
        }
    }

    const resetForm = () =>{
        setUsername('');
        setPassword('');
    }

    const onClose=()=> setShowModal(false);

    return (
        <div className={classes.signupContainer}>
            <h2 className={classes.title}>Log in here</h2>
            <form className={classes.form}>                
                <FormInput 
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    handleChange={e=>setUsername(e.target.value)}                    
                />
                <FormInput  
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    handleChange={(e) => setPassword(e.target.value)}                    
                />     
                <Button 
                    type="button"        
                    variant="outlined"
                    className={classes.btn}
                    onClick={()=>logIn(username,password)}>
                    Log in
                </Button>           
            </form>
            <div className={classes.bottom}>               
                <h3>You don't have account?</h3>
                <Link to="/signup" className={classes.link}>
                    Sign up 
                </Link>
            </div>  
            <Modal 
                isOpen={showModal}
                onRequestClose={onClose}
                overlayClassName={classes.overlay}
                className={classes.modal}>
                <p className={classes.text}>Invalid username or password. Try again or sign up...</p>
                <Button onClick={onClose} variant="outlined" className={classes.btn}>OK</Button>            
            </Modal>   
        </div>
    )
}

export default SignIn
