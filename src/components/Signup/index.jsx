import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Modal from "react-modal";
import FormInput from '../forms/FormInput';
import FormControl from '@mui/material/FormControl';
import {Button} from '@mui/material';

Modal.setAppElement("#root");

const Signup = props=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false); 
    let navigate= useNavigate();   

    async function signUp(username,password){
        let response=null;
        try {
            response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers:{ 
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({ 
                    username: username,
                    password: password
                })
            });
        }catch(err)
        {
            console.error(err);
        }
        if(response.ok){
            alert("Success")
            navigate('/login', {replace:true})
        }else{
            setShowModal(true)            
        }
    }   
    
    const onClose=()=> setShowModal(false);

    return (
        <div >
            <h2>Sign Up</h2>
            <FormControl>                
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
                    onClick={()=>signUp(username,password)}>
                    Sign up
                </Button>           
            </FormControl>
            <div>
                <h3>Already have account?</h3>
                <Link to="/login">
                    Log in
                </Link>
            </div>   
            <Modal 
                isOpen={showModal}
                onRequestClose={onClose}
                overlayClassName={"overlay"}>
                <p>The username already exist... Please try another one</p>
                <Button onClick={onClose}>OK</Button>            
            </Modal>         
        </div>
    )
}

export default Signup;