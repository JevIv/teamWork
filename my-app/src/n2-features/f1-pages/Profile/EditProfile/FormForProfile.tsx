import {useFormik} from 'formik';
import {Button, TextField} from '@mui/material';
import s from '../../../n1-main/m1-ui/App.module.scss';
import React from 'react';
import style from './FormStyle.module.scss';

type ErrorType = {
    nickname?: string;
    email?: string;
}
export const FormForProfile = () => {

    let formik = useFormik({
        initialValues: {
            nickname: '',
            email: '',
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
            console.log('click')
            setTimeout(() => {
                alert(JSON.stringify(values));
            }, 400);
        }
    })

    return (

        <form onSubmit={formik.handleSubmit}>
            <div className={style.form_texField}>
            <TextField
                size='small'
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
                size='small'
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
                <Button variant="outlined">Cancel</Button>
                <Button variant="contained"
                        type="submit">
                    Save</Button>
            </div>
        </form>
    );
};