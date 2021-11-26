import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { useStyles} from './styles';

const LanguageSwitch =() => {
    const {t, i18n}=useTranslation();
    const classes=useStyles();
    const [language,setLanguage]=useState('')

    const selectLanguage = (lng) => {        
        i18n.changeLanguage(lng);
        setLanguage(lng)        
    }  
  return (
    <Box sx={{ m:1, minWidth: 80 }}
        className={classes.box}>
      <FormControl fullWidth variant="standard">
        <InputLabel id="select-label">{t('lang')}</InputLabel>
        <Select          
          labelId="select-label"          
          value={language}
          label="language"
          onChange={(e)=>selectLanguage(e.target.value)}
        >
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"srb"}>SRB</MenuItem>          
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanguageSwitch;
