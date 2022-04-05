import React from 'react';
import {useNavigate} from 'react-router-dom';

export const UserInfo = () => {

    let navigate = useNavigate();

    const editProfileHandler = ()=> {
        navigate('/userinfo')
    }

    return (
        <>
            <img src="" alt='Photo'/>
            <div>Name Name</div>
            <span>Front-end dev</span>
            <button onClick={editProfileHandler}>Edit Profile</button>
            {/*<Button>Edit Profile</Button>*/}
        </>
    );
};

