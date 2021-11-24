import React from 'react';
import DashboardItem from '../../components/DashboardItem';
import { getAllPurchases, totalAmount,formatDate } from '../../utils/purchases';
import { useStyles } from './styles';

const Dashboard = () => {
    const classes=useStyles();
    const purchases=getAllPurchases();
    
    return (
        <main className={classes.container}>
            <h1 className={classes.title}>My purchases:</h1>
            <div className={classes.top}>
                <p>Id</p>
                <p>Date of purchasing</p>
                <p>Total paid</p>
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
