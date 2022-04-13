import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {UserType} from '../../../API/ProfileAPI/profileAPI';
import {Navigate, useLocation, useNavigate} from 'react-router-dom';
import {UserInfo} from './ProfileComponents/UserInfo';
import {MainBar} from './ProfileComponents/MainBar';
import style from './ProfileStyles.module.css';
import {CardsInfo} from '../../f2-cards/c1-cards/c1-ui/CardsInfo';
import {setPacksListTC, setSearchAC} from '../../f2-cards/c2-packs/p2-bll/packsList-reducer';
import {CardPacksType} from '../../f2-cards/c2-packs/p3-dal/packsListAPI';
import {Search} from "../Search/Search";


export const Profile = () => {

    const location = useLocation()
    console.log(location)
    const dispatch = useDispatch()

    const setSearchValue = useCallback((SearchPacksValue: string) => {
        dispatch(setSearchAC(SearchPacksValue))
    }, [dispatch])


    useEffect(()=> {
        dispatch(setPacksListTC())
    },[])

    let navigate = useNavigate();

    const profile = useSelector<AppRootStateType, UserType>(state=> state.profile.profileInfo as UserType)
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    // const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.packsList)

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
                <button onClick={()=>{navigate('/packslist')}}>Packs list</button>
                <h3>My Pack List</h3>
                <div style={{margin: '0px 48px 0 48px'}}>
                    {/*Style у input здесь временный*/}
                    {/*<input type="text" style={{width: '100%'}}/>*/}
                    <Search setSearchValue={setSearchValue}/>
                </div>

                <div className={style.mainBar}>
                    <MainBar/>
                </div>

                {/*{packs.map(p => <CardsInfo/>)}*/}

                <div>
                    1 2 3 4 5
                </div>

            </div>
        </div>
    );
};


