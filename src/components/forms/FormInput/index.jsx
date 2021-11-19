import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (
        <div className="">
            {label && (
                <InputLabel>{label}</InputLabel>                
            )}
            <OutlinedInput onChange={handleChange} {...otherProps}/>        
        </div>
    )
}

export default FormInput;