import React from 'react';
import s from '../../../../n1-main/m1-ui/App.module.scss';
import {FormForProfile} from './FormForProfile';
import {useSelector} from 'react-redux';
import {UserType} from '../../../../API/ProfileAPI/profileAPI';
import style from './FormStyle.module.scss'
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
// import userAva from '../../../../Assets/rick_morty_PNG32.png'

export const EditProfile = () => {

    // const pic = userAva;

    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType)

    // const userAvatar = profile.avatar === null ? pic : profile.avatar


    return (
        <div className={`${s.block_sing}`}>
            <div className={style.editProfileContainer}>
                <h3>Personal Information</h3>
                <div>
                    <img
                        src={'https://static.wikia.nocookie.net/rickandmorty/images/e/ee/Morty501.png/revision/latest?cb=20210827150137'}
                        alt="oops"/>
                </div>
                <FormForProfile profile={profile} initialized={initialized}/>
            </div>
        </div>
    );
};




