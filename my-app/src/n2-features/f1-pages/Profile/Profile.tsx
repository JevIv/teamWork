import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {UserType} from '../../../API/ProfileAPI/profileAPI';
import {useNavigate} from 'react-router-dom';
import {UserInfo} from './ProfileComponents/UserInfo';
import {MainBar} from './ProfileComponents/MainBar';
import style from './ProfileStyles.module.css';
import {CardsInfo} from '../../f2-cards/c1-cards/c1-ui/CardsInfo';

function Navigate(props: { to: string }) {
    return null;
}

export const Profile = () => {

    const profile = useSelector<AppRootStateType, UserType>(state=> state.profile.profileInfo as UserType)
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    let navigate = useNavigate();

    if (!initialized) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={style.container}>
            <div className={style.optionsMenu}>
                <div className={style.userInfo}>
                    <UserInfo profile={profile}/>
                </div>

                <div>
                    <h4>Number of cards</h4>
                </div>

                <div>
                    RANGE
                </div>
            </div>
            <div className={style.packList}>
                <h3>My Pack List</h3>
                <div style={{margin: '0px 48px 0 48px'}}>
                    {/*Style у input здесь временный*/}
                    <input type="text" style={{width: '100%'}}/>
                </div>

                <div className={style.mainBar}>
                    <MainBar/>
                </div>

                <CardsInfo/>
                <CardsInfo/>
                <CardsInfo/>

                <div>
                    1 2 3 4 5
                </div>

            </div>
        </div>
    );
};


