import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserType} from '../../../../API/ProfileAPI/profileAPI';

type UserInfoType = {
    profile: UserType
}

export const UserInfo = (props: UserInfoType) => {
    const {
        profile
    } = props

    let navigate = useNavigate();

    const editProfileHandler = ()=> {
        navigate('/userinfo')
    }

    return (
        <>
            <img src="" alt='Photo'/>
            <div>{profile.name}</div>
            <span>Front-end dev</span>
            <button onClick={editProfileHandler}>Edit Profile</button>
            {/*<Button>Edit Profile</Button>*/}
        </>
    );
};

