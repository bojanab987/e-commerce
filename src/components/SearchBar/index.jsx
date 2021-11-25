import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const useStyles=makeStyles({
    input:{
        height:"30px",
        width:"250px",
        '&:focus':{
            outline:"none"
        } ,
        '&:active':{
            outline:"none"
        }
    }
})

export default function SearchBar(){    
    const [searchParams, setSearchParams] = useSearchParams();
    const classes=useStyles();
    const { t } = useTranslation();
    
    return(
        <FormControl variant="standard" style={{paddingBottom:"20px"}}>
            <InputLabel htmlFor="input-search"/>
                <OutlinedInput
                    className={classes.input}
                    placeholder={`${t("search")}...`}
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                    id="input-search"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                />
      </FormControl>
    )
}