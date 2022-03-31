import React from 'react';
import {Button, FormControlLabel, Radio, TextField} from "@mui/material";

export const Login = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <TextField id="standard-basic" label="Email" variant="standard" /><br/>
            <TextField id="standard-basic" label="Password" type="password" variant="standard" /><br/>
            <Button style={{minWidth: '195px', margin: '10px'}}
                    variant="outlined">Sign in</Button><br/>
            <FormControlLabel value="true" control={<Radio />} label="Remember me" /><br/>
            <Button style={{fontSize: 'x-small', color: '#BBBBBB'}} variant="text">Forgot Password</Button>
        </div>
    );
};
