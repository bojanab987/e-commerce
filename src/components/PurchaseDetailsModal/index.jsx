import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import Modal from "react-modal";
import { useParams,useNavigate } from 'react-router';
import {Button} from '@mui/material';
import { useStyles } from './styles';
import { getPurchaseItem, totalAmount } from '../../utils/purchases';
 
const PurchaseDetailsModal = () => {
    const [showModal, setShowModal] = useState(true);
    const classes=useStyles();
    const params=useParams();   
    const purchaseItem=getPurchaseItem(params.id);
    const navigate=useNavigate();
    const { t } = useTranslation();

    const onClose = () =>{
        setShowModal(false)
        navigate('/dashboard', {replace:true})
    }    

    return (
        <Modal            
            isOpen={showModal}
            onRequestClose={onClose}
            overlayClassName={classes.overlay}
            className={classes.modal}>
        
            <div className={classes.container}>
                <div className={classes.top}>
                    <p className={classes.width10}>Id</p>
                    <p className={classes.item}>{t('item')}</p>
                    <p className={classes.width10}>{t('qty')}</p>
                    <p className={classes.width20}>{t('price')}</p>                    
                </div>
            {purchaseItem.map(item => 
                <div key={item.id}
                    className={classes.productDetails}>
                    <p className={classes.width10}>{item.id}</p>
                    <div className={classes.item}>
                        <p>{item.title}</p>
                        <img src={item.image} alt=""
                        className={classes.image}/>
                    </div>
                    <p className={classes.width10}>{item.qty}</p>
                    <p className={classes.width20}>$ {item.price}</p>
                </div>
            )}
            </div>
            <div className={classes.bottom}>
                <p>{t('totalPaid')}:</p>
                <p>$ {totalAmount(purchaseItem)}</p>
            </div>
            
            <Button onClick={onClose} variant="outlined" className={classes.btn}>{t('close')}</Button>            
        </Modal>   
    )
}

export default PurchaseDetailsModal
