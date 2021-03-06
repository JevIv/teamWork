import React, {useEffect} from 'react';
import style from '../../../../f1-pages/Profile/ProfileStyles.module.css'
import {PacksInfo} from '../../../c1-cards/c1-ui/PacksInfo'
import {useDispatch, useSelector} from 'react-redux';
import {setPacksListTC, setUserId} from '../../p2-bll/packsList-reducer';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {Navigate, useSearchParams} from 'react-router-dom';
import {Range} from '../../../../../n0-common/c1-iu/Range/Range';
import {UserType} from '../../../../../API/ProfileAPI/profileAPI';

export const PacksList = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)
    const min = useSelector<AppRootStateType, number>(state => state.packs.min)
    const max = useSelector<AppRootStateType, number>(state => state.packs.max)
    const packName = useSelector<AppRootStateType, string>(state => state.packs.packName)
    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType);
    const userID = useSelector<AppRootStateType, string>(state => state.packs.user_id)
    const sortPacks = useSelector<AppRootStateType, string>(state => state.packs.sortPacks as string);

    const [searchParams, setSearchParams] = useSearchParams()

    const myAllButtons = ['My', 'All']

    useEffect(() => {
        dispatch(setPacksListTC())
    }, [currentPage, min, max, packName, userID, sortPacks])

    const setOptionHandler = (value: string) => {
        if (value === 'My') {
            setSearchParams({user_id: profile._id})
            dispatch(setUserId(profile._id))
        } else{
            const searchParamObj = Object.fromEntries(searchParams)
            delete searchParamObj.user_id
            setSearchParams({...searchParamObj})
            dispatch(setUserId(''))
        }

    }

    if (!initialized) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={style.container}>
            {/*?????????????????? ??????????*/}
            <div className={style.optionsMenu}>
                <h4>Show packs cards</h4>
                <span>
                        {myAllButtons
                            .map(b => <button key={b} onClick={() => setOptionHandler(b)}>{b}</button>)}
                    </span>

                <div>
                    <h4>Number of cards</h4>
                    <Range min={min} max={max}/>
                </div>
            </div>
            <div className={style.packList}>
                <h3>Packs list</h3>
                <PacksInfo hidden={false}/>
            </div>
        </div>
    );
};


