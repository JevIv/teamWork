import React from 'react';
import {useNavigate} from 'react-router-dom';
import {UserType} from '../../../../API/ProfileAPI/profileAPI';
import userAva from '../../../../Assets/rick_morty_PNG32.png'

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
            {/*картинка-заглушка*/}
            <img src={userAva} alt='Photo' style={{width: '50px', height: '60px', borderRadius: '50px'}}/>
            <div>{profile.name}</div>
            <span>Front-end dev</span>
            <button onClick={editProfileHandler}>Edit Profile</button>
            {/*<Button>Edit Profile</Button>*/}
        </>
    );
};

