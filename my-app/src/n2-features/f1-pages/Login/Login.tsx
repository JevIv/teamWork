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
} from "@mui/material";
import { Input } from '../../../n0-common/c1-iu/input/Input';
import {AppRootStateType} from "../../../store/store";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {loginTC} from "../../../store/s1-reducer/login-reducer";

export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    // if(isLoggedIn) {
    //     return <Nav replace to={"/"}/>
    // }

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
            email: "",
            password: "",
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values));
        },
    })

    return (
//         <div>
//             <h1>Sign In</h1>
//             <TextField id="standard-basic" label="Email" variant="standard" /><br/>
//             <TextField id="standard-basic" label="Password" type="password" variant="standard" /><br/>
//             <Button style={{minWidth: '195px', margin: '10px'}}
//                     variant="outlined">Sign in</Button><br/>
//             <FormControlLabel value="true" control={<Radio />} label="Remember me" /><br/>
//             <Button style={{fontSize: 'x-small', color: '#BBBBBB'}} variant="text">Forgot Password</Button>
//         </div>
//     );
// };
        <Grid container={true}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <FormLabel>

                        </FormLabel>
                        <FormGroup>
                            <TextField
                                label={"Email"}
                                margin={"normal"}
                                {...formik.getFieldProps("email")}
                            />
                            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                            <TextField
                                label={"Password"}
                                margin={"normal"} type={"password"}
                                {...formik.getFieldProps("password")}
                            />
                            {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                            <FormControlLabel
                                label={"Remember me"}
                                control={<Checkbox
                                    {...formik.getFieldProps("rememberMe")}
                                    checked={formik.values.rememberMe}
                                />}
                            />
                            <Button type={"submit"} variant={"contained"} color={"primary"}>Login</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    );
};
