import React, {useEffect} from 'react';
import style from './ProfileStyles.module.css'
import {UserInfo} from './ProfileComponents/UserInfo';
import {useDispatch, useSelector} from 'react-redux';
import {UserType} from '../../../API/ProfileAPI/profileAPI';
import {Navigate, useNavigate, useSearchParams} from 'react-router-dom';
import {Range} from '../../../n0-common/c1-iu/Range/Range';
import {AppRootStateType} from '../../../n1-main/m2-bll/store';
import {setPacksListTC} from '../../f2-cards/c2-packs/p2-bll/packsList-reducer';
import {PATH} from '../../../n1-main/m1-ui/routes/Pages';
import {PacksInfo} from '../../f2-cards/c1-cards/c1-ui/PacksInfo';

export const Profile = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType);
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth);
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page);
    const min = useSelector<AppRootStateType, number>(state => state.packs.min);

    const max = useSelector<AppRootStateType, number>(state => state.packs.max);
    const packName = useSelector<AppRootStateType, string>(state => state.packs.packName);
    const sortPacks = useSelector<AppRootStateType, string | null>(state => state.packs.sortPacks);

    const [searchParams, setSearchParams] = useSearchParams();


    useEffect(() => {
        setSearchParams({user_id: profile._id})
        dispatch(setPacksListTC({user_id: profile._id}, 'profile'))
    }, [currentPage, min, max, packName, sortPacks])


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
                    <Range min={min} max={max}/>
                </div>
            </div>
            <div className={style.packList}>
                <button onClick={() => {
                    navigate('/packslist')
                }}>Packs list
                </button>
                <button onClick={() => {
                    navigate(PATH.PACK_NAME)
                }}>Packs Name
                </button>
                <h3>My Pack List</h3>
                <PacksInfo hidden={true}/>

            </div>
        </div>
    );
};


