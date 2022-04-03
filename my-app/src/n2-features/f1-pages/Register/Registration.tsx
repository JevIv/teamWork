import React from 'react';
import { Button } from '../../../n0-common/c1-iu/button/Button';
import { Input } from '../../../n0-common/c1-iu/input/Input';
import style from './Registration.module.scss';
import s from '../../../n1-main/m1-ui/App.module.scss'
export const Registration = () => {
    return (
        <div className={`${s.block_sing}`}>
        <h1>Sign Up</h1>
        <Input inputRegistration ={'_registration'} value='Email'/>
        <Input inputRegistration ={'_registration'} value='Password'/>
        <Input inputRegistration ={'_registration'} value='Confirm password'/>
        <div className={s.block_btn}>
            <Button value='Cancel'>Cancel</Button>
            <Button value='Register'>Register</Button>
        </div>
    </div>
    );
};

