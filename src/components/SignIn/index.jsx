import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();   

    const logIn = async (username,password) => {
        let response=null;
        try {
            response = await fetch(`${process.env.REACT_APP_AUTH_API}/login`, {
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
            localStorage.setItem('username', username)
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('refreshToken', data.refreshToken);
            navigate('/', {replace:true})
            window.location.reload();
            console.log(isLoggedIn)
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
            <h2 className={classes.title}>{t('login')} {t('here')}</h2>
            <form className={classes.form}>                
                <FormInput 
                    type="text"
                    name="username"
                    value={username}
                    placeholder={t('username')}
                    handleChange={e=>setUsername(e.target.value)}                    
                />
                <FormInput  
                    type="password"
                    name="password"
                    value={password}
                    placeholder={t('password')}
                    handleChange={(e) => setPassword(e.target.value)}                    
                />     
                <Button 
                    type="button"        
                    variant="outlined"
                    className={classes.btn}
                    onClick={()=>logIn(username,password)}>
                    {t('login')}
                </Button>           
            </form>
            <div className={classes.bottom}>               
                <h3>{t('question1')}</h3>
                <Link to="/signup" className={classes.link}>
                    {t('signup')}
                </Link>
            </div>  
            <Modal 
                isOpen={showModal}
                onRequestClose={onClose}
                overlayClassName={classes.overlay}
                className={classes.modal}>
                <p className={classes.text}>{t('signInError')}</p>
                <Button onClick={onClose} variant="outlined" className={classes.btn}>OK</Button>            
            </Modal>   
        </div>
    )
}

export default SignIn
