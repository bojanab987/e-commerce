import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from '@mui/styles';

const useStyles=makeStyles({
    formInput:{
        width:'90%',        
    }
})
const FormInput = ({handleChange, label, ...otherProps}) => {
    const classes=useStyles();

    return (
        <div className={classes.formInput}>
            {label && (
                <InputLabel>{label}</InputLabel>                
            )}
            <OutlinedInput 
                onChange={handleChange} 
                {...otherProps}
                fullWidth
            />        
        </div>
    )
}

export default FormInput;