import React, {ChangeEvent, useCallback, useState} from 'react';
import {
    FormControl,
    FormGroup,
    Grid,
    InputAdornment,
    TextField
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


type SearchPropsType = {
    setSearchValue: (searchValue: string) => void
}

export const Search = (props: SearchPropsType) => {

    const [searchValue, setSearch] = useState("");

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value)
        props.setSearchValue(searchValue.trim())
    }


    return (
        <div>
            <Grid container={true} direction={"column"} alignItems={"center"}>
                    <form>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <FormGroup>
                                <TextField
                                    type="text"
                                    value={searchValue}
                                    onChange={onchangeHandler}
                                    placeholder="Search..."
                                    margin="normal"
                                    variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon/>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </FormGroup>
                        </FormControl>
                    </form>
            </Grid>
        </div>
    );
};
/*

const setSearchValue = useCallback((SearchPacksValue: string) => {
        dispatch(setSearchPacksValueAC(SearchPacksValue))
    }, [dispatch])
*/
