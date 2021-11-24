import React from 'react';
import { IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useStyles } from './styles';
import QueryNavLink from '../QueryNavLink'

const DashboardItem = ({purchase, totalPaid}) => {    
    const classes=useStyles();
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.detailsWrapper}>
                <div className={classes.details}>
                    <p className={classes.shorten}>{purchase.id}</p>
                    <p className={classes.date}>{purchase.createdAt}</p>
                    <p className={classes.amount}>$ {totalPaid}</p>            
                </div>                
                    <IconButton
                        color='info'
                        size='small'                    
                        className={classes.btn}>
                            <QueryNavLink
                                className={classes.link}
                                to={`/dashboard/${purchase.id}`}>
                                See details
                            </QueryNavLink>
                        <MoreHorizIcon />
                    </IconButton>                
            </div> 
        </div>
    )
}

export default DashboardItem
