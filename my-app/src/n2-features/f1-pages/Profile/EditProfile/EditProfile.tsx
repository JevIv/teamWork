import React from 'react';
import s from '../../../../n1-main/m1-ui/App.module.scss';
import {FormForProfile} from './FormForProfile';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../store/store';
import {UserType} from '../../../../API/ProfileAPI/profileAPI';

export const EditProfile = () => {

    const profile = useSelector<AppRootStateType, UserType>(state=> state.profile.profileInfo as UserType)

    return (
        <div className={`${s.block_sing}`}>
            <h3>Personal Information</h3>
            <div>
                <img src="" alt="some img"/>
            </div>
            <FormForProfile profile={profile}/>
        </div>
    );
};




