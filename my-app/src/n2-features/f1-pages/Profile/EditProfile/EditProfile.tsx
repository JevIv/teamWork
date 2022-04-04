import React from 'react';
import s from '../../../n1-main/m1-ui/App.module.scss';
import {FormForProfile} from './FormForProfile';

export const EditProfile = () => {
    return (
        <div className={`${s.block_sing}`}>
            <h3>Personal Information</h3>
            <div>
                <img src="" alt="some img"/>
            </div>
            <FormForProfile/>
        </div>
    );
};


