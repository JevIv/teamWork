import React, {ChangeEvent, useEffect, useState} from 'react';
import {FormControl, FormGroup, Grid, InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import {useDispatch} from 'react-redux';
import {setSearchAC} from '../../f2-cards/c2-packs/p2-bll/packsList-reducer';


export const Search = () => {
    const dispatch = useDispatch()

    const [searchValue, setSearch] = useState('');

    useEffect(()=> {
        let time = setTimeout(()=> {
            dispatch(setSearchAC(searchValue))}, 1000)
        return ()=> {
            clearTimeout(time)
        }
    },[searchValue])


    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const targetValue = (e.currentTarget.value).trim()
        setSearch(targetValue)

    }

    return (
        <>
            <Grid container={true} direction={'column'} alignItems={'center'}>
                <form>
                    <FormControl>
                        <FormGroup>
                            <TextField
                                size="small"
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
