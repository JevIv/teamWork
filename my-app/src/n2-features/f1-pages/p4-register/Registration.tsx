



import React from 'react';
import ReactDOM from 'react-dom';
import { Form, FormikProvider, useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, withStyles } from '@mui/material';
import style from './Registration.module.scss';
import s from '../../../n1-main/m1-ui/App.module.scss'


// type RegistrPropsType = {
//   email: string;
//   setEmail: (newEmail: string) => void;
//   pass: string;
//   setPass: (newPass: string) => void;
//   confirmPass: string;
//   setConfirmPass: (confirmNewPass: string) => void;
// }

type FormikErrorType = {
  email?: string,
  password?: string,
  confirmPassword?:string,
}
const validationSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .trim()
    .when("password", {
      is: (val: string) => (val && val.length > 1 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("password")],
        "Both password need to be the same"
      )
    })
    .required("Confirm Password Required"),
});

export const Registration = React.memo(() => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {},
  });

  return (
    <FormikProvider value={formik}>
      <Form onSubmit={formik.handleSubmit} className={s.block_sing}>
        <h1>Sign Up</h1>

        <TextField
          className={s.input}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <TextField
          className={s.input}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        
        <TextField
          className={s.input}
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <div className={s.block_btn}>
          <Button className={s.email} variant="outlined" type="reset">
            Cancel
          </Button>
          <Button color="primary" variant="contained" type="submit">
            Registration
          </Button>
        </div>   
      </Form>
    </FormikProvider>
  );
});

ReactDOM.render(<Registration />, document.getElementById('root'));


export default withStyles(s)