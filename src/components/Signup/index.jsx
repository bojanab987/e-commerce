import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import FormInput from '../forms/FormInput';
import {Button} from '@mui/material';
import { useStyles } from './styles';

Modal.setAppElement("#root");

const Signup = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false); 
    const [showSuccessModal,setShowSuccessModal]=useState(false)
    let navigate= useNavigate();   
    const classes=useStyles();      

    async function signUp(username,password){
        let response=null;
        try {
            response = await fetch(`${process.env.REACT_APP_API}/users`, {
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
            console.log(response.json())
            setShowSuccessModal(true);
            resetForm(); 
            navigate('/login', {replace:true});            
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
    const onCloseSuccess=() =>setShowSuccessModal(false);

    return (
        <div className={classes.signupContainer}>
            <h2 className={classes.title}>Sign Up</h2>
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
                    onClick={()=>signUp(username,password)}>
                    Sign up
                </Button>           
            </form>
            <div className={classes.bottom}>               
                <h3>Already have account?</h3>
                <Link to="/login" className={classes.link}>
                    Log in
                </Link>
            </div>   
            <Modal 
                isOpen={showModal}
                onRequestClose={onClose}
                overlayClassName={classes.overlay}
                className={classes.modal}>
                <p className={classes.text}>The username already exist... Please try another one</p>
                <Button onClick={onClose} variant="outlined" className={classes.btn}>OK</Button>            
            </Modal>   
            <Modal 
                isOpen={showSuccessModal}
                onRequestClose={onCloseSuccess}
                overlayClassName={classes.overlay}
                className={classes.modal}>
                <p>You are successfully registered.</p>
                <Button onClick={onCloseSuccess} variant="outlined" className={classes.btn}>OK</Button>            
            </Modal>        
        </div>
    )
}

export default Signup;