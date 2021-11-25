import React, { useState} from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

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
            <h2 className={classes.title}>{t('signup')}</h2>
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
                    onClick={()=>signUp(username,password)}>
                    {t('signup')}
                </Button>           
            </form>
            <div className={classes.bottom}>               
                <h3>{t('question2')}</h3>
                <Link to="/login" className={classes.link}>
                    {t('login')}
                </Link>
            </div>   
            <Modal 
                isOpen={showModal}
                onRequestClose={onClose}
                overlayClassName={classes.overlay}
                className={classes.modal}>
                <p className={classes.text}>{t('signUpError')}</p>
                <Button onClick={onClose} variant="outlined" className={classes.btn}>OK</Button>            
            </Modal>   
            <Modal 
                isOpen={showSuccessModal}
                onRequestClose={onCloseSuccess}
                overlayClassName={classes.overlay}
                className={classes.modal}>
                <p>{t('signUpSuccess')}</p>
                <Button onClick={onCloseSuccess} variant="outlined" className={classes.btn}>OK</Button>            
            </Modal>        
        </div>
    )
}

export default Signup;