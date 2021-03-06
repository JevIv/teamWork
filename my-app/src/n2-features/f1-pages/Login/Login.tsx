import React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    Radio,
    TextField
} from '@mui/material';
import { Input } from '../../../n0-common/c1-iu/input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {useFormik} from 'formik';
import {loginTC} from '../../../n1-main/m2-bll/s1-reducer/login-reducer';
import { Navigate } from 'react-router-dom';

export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)



    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: "Email is required"
                }
            }
            if (!values.password) {
                return {
                    password: "Password is required"
                }
            }
        },
        initialValues: {
            email: "testforcardproject@list.ru",
            password: "1q2a3z3e",
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values));
        },
    })

    if(isLoggedIn) {
        return <Navigate replace to={"/profile"}/>
    }
    return (
        <div>
        <h1>Sign In</h1>
        <Grid container={true} direction={"column"} alignItems={"center"}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>

                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label={"Email"}
                                margin={"normal"}
                                variant="standard"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <TextField
                                label={"Password"}
                                margin={"normal"} type={"password"}
                                variant="standard"
                                {...formik.getFieldProps("password")}
                            />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            <Button type={"submit"} variant="outlined" color={"primary"}>Login</Button>
                            <FormControlLabel
                                label={"Remember me"}
                                control={<Checkbox
                                    {...formik.getFieldProps("rememberMe")}
                                    checked={formik.values.rememberMe}
                                />}
                            />
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
        </div>
    );
};
