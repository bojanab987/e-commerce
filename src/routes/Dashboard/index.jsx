import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardItem from '../../components/DashboardItem';
import { getAllPurchases, totalAmount,formatDate } from '../../utils/purchases';
import { useStyles } from './styles';

const Dashboard = () => {
    const classes=useStyles();    
    const purchases=getAllPurchases();
    const { t } = useTranslation();
    
    return (
        <main className={classes.container}>
            <h1 className={classes.title}>{t('purchases')}:</h1>
            <div className={classes.top}>
                <p>Id</p>
                <p>{t('date')}</p>
                <p>{t('totalPaid')}</p>
            </div>            
            <div className={classes.purchaseList}>
            {purchases.map( dashboardItem =>
                <DashboardItem 
                    key={dashboardItem.id} 
                    purchase={dashboardItem} 
                    totalPaid={totalAmount(dashboardItem.products)} 
                    createdAt={formatDate(dashboardItem.createdAt)}/>)}
            </div>
        </main>
    )
}

export default Dashboard;
