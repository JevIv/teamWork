import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {UserType} from '../../../API/ProfileAPI/profileAPI';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {UserInfo} from './ProfileComponents/UserInfo';
import {MainBar} from './ProfileComponents/MainBar';
import style from './ProfileStyles.module.css';
import {PacksInfo} from '../../f2-cards/c1-cards/c1-ui/PacksInfo';
import {setPacksListTC} from '../../f2-cards/c2-packs/p2-bll/packsList-reducer';
import {CardPacksType} from '../../f2-cards/c2-packs/p3-dal/packsListAPI';
import { PATH } from '../../../n1-main/m1-ui/routes/Pages';


export const Profile = () => {

    let navigate = useNavigate();
    const dispatch = useDispatch()
    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType)
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    useEffect(() => {
        dispatch(setPacksListTC({user_id: profile._id}))
    }, [])

    if (!initialized) {
        return <Navigate to="/login"/>
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
                <button onClick={() => {navigate('/packslist')}}>Packs list</button>
                <button onClick={()=>{navigate(PATH.PACK_NAME)}}>Packs Name</button>
                <h3>My Pack List</h3>
                <PacksInfo/>
            </div>
        </div>
    );
};


