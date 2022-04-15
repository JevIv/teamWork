import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {UserType} from '../../../API/ProfileAPI/profileAPI';
import {Navigate, useNavigate} from 'react-router-dom';
import {UserInfo} from './ProfileComponents/UserInfo';
import {MainBar} from './ProfileComponents/MainBar';
import style from './ProfileStyles.module.css';
import {PacksInfo} from '../../f2-cards/c1-cards/c1-ui/PacksInfo';
import {setPacksListTC} from '../../f2-cards/c2-packs/p2-bll/packsList-reducer';
import {Range} from '../../../n0-common/c1-iu/Range/Range';
import {Search} from "../Search/Search";

export const Profile = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType);
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);
    const min = useSelector<AppRootStateType, number>(state => state.packs.min);
    const max = useSelector<AppRootStateType, number>(state => state.packs.max);

    useEffect(()=> {
        dispatch(setPacksListTC())
    },[])

    const setSearchValue = useCallback((SearchPacksValue: string) => {
        dispatch(setSearchAC(SearchPacksValue))
    }, [dispatch])

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
                    <Range min={min} max={max}/>
                </div>
            </div>
            <div className={style.packList}>
                <button onClick={()=>{navigate('/packslist')}}>Packs list</button>
                <h3>My Pack List</h3>
                <PacksInfo/>
                {/*<Search setSearchValue={setSearchValue}/>*/}
            </div>
        </div>
    );
};


