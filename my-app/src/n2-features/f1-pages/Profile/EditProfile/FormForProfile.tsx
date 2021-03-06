import {useFormik} from 'formik';
import {Button, TextField} from '@mui/material';
import s from '../../../../n1-main/m1-ui/App.module.scss';
import React from 'react';
import style from './FormStyle.module.scss';
import {UserType} from '../../../../API/ProfileAPI/profileAPI';
import {useDispatch} from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
import {updateProfile} from '../../../../n1-main/m2-bll/s1-reducer/profile-reducer';

type ErrorType = {
    nickname?: string;
    email?: string;
}

type FormForProfileType = {
    profile: UserType
    initialized: boolean
}

export const FormForProfile = (props: FormForProfileType) => {

    const redirect = useNavigate()

    const dispatch = useDispatch()

    const {
        profile,
        initialized
    } = props

    let formik = useFormik({
        initialValues: {
            nickname: profile.name,
            email: profile.email,
        },
        validate: (value) => {
            const errors: ErrorType = {};

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
                errors.email = 'Invalid email address'
            } else if (!value.email) {
                errors.email = 'Required Email';
            }
            if (!value.nickname) {
                errors.nickname = 'Required Nickname';
            }

            return errors
        },
        onSubmit: (values) => {
            //не забыть поправить avatar
            dispatch(updateProfile({name: values.nickname}))
        }
    })

    const cancelButtonHandler = () => {
        redirect('/profile')
    }

    if (!initialized) {
        return <Navigate to="/login"/>
    }

    return (

        <form onSubmit={formik.handleSubmit}>
            <div className={style.form_texField}>
                <TextField
                    size="small"
                    id="nickname"
                    name="nickname"
                    label="Nickname"
                    variant="standard"
                    value={formik.values.nickname}
                    onChange={formik.handleChange}
                    error={formik.touched.nickname && Boolean(formik.errors.nickname)}
                    helperText={formik.touched.nickname && formik.errors.nickname}
                    onBlur={formik.handleBlur}
                />

                <TextField
                    size="small"
                    id="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}
                />
            </div>

            <div className={s.block_btn}>
                <Button onClick={cancelButtonHandler} variant="outlined">Cancel</Button>
                <Button variant="contained"
                        type="submit">
                    Save</Button>
            </div>
        </form>
    );
};