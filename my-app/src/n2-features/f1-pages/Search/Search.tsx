import React, {ChangeEvent, useState} from 'react';
import {FormControl, FormGroup, Grid, InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// export const Search = () => {
//     const dispatch = useDispatch()
    //const searchQuery = useSelector<AppRootStateType, boolean>(state => state.login.searchQuery)

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
        <>
            <Grid container={true} direction={"column"} alignItems={"center"}>
                    <form >
                        <FormControl >
                            <FormGroup>
                                <TextField
                                    size='small'
                                    sx={{ width: '52vh' }}
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
        </>
    );
};
/*

const setSearchValue = useCallback((SearchPacksValue: string) => {
        dispatch(setSearchPacksValueAC(SearchPacksValue))
    }, [dispatch])
*/
