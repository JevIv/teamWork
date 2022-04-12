import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
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

export const Search = () => {
    const dispatch = useDispatch()
    //const searchQuery = useSelector<AppRootStateType, boolean>(state => state.login.searchQuery)


    const formik = useFormik({
        initialValues: {
            searchQuery: ""
        },
        onSubmit: values => {
            //dispatch(searchTC(searchQuery));
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