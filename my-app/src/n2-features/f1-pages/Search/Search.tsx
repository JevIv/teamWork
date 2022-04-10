import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {useFormik} from "formik";
import {loginTC} from "../../../store/s1-reducer/login-reducer";
import {Navigate} from "react-router-dom";
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    InputAdornment, InputLabel,
    TextField
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {SearchResponseType} from "../../../API/SearchAPI/search-api";
import {searchTC} from "../../../store/s1-reducer/search-reducer";

export const Search = () => {
    const dispatch = useDispatch()
    const searchResults = useSelector<AppRootStateType, SearchResponseType>(state => state.search.searchResults)
    const [search, setSearch] = useState("");


    const formik = useFormik({
        initialValues: {
            packName: "",
            min?: number,
            max?: number,
            sortPacks?: string,
            page?: number,
            pageCount?: number,
            user_id: string,
        },
        onSubmit: values => {
            if(search.length >= 3){
                dispatch(searchTC(values));
            }
        },

    })


    return (
        <div>
            <Grid container={true} direction={"column"} alignItems={"center"}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <FormGroup>
                                <TextField
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
                                    {...formik.getFieldProps("searchQuery")}
                                />
                            </FormGroup>
                        </FormControl>
                    </form>
            </Grid>
        </div>
    );
};
