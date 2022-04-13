import React, {useEffect} from 'react';
import {MainBar} from '../../../../f1-pages/Profile/ProfileComponents/MainBar'
import style from '../../../../f1-pages/Profile/ProfileStyles.module.css'
        // './ProfileStyles.module.css';
import {PacksInfo} from '../../../c1-cards/c1-ui/PacksInfo'
import {useDispatch, useSelector} from 'react-redux';
import {setPacksListTC} from '../../p2-bll/packsList-reducer';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {CardPacksType} from '../../p3-dal/packsListAPI';
import {Navigate, useLocation} from 'react-router-dom';

export const PacksList = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    useEffect(() => {
        dispatch(setPacksListTC())
    }, [])

    if (!initialized) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={style.container}>
            {/*поправить стили*/}
            <div className={style.optionsMenu}>
                    <h4>Show packs cards</h4>
                    <span>
                         <button>my</button>
                         <button>all</button>
                    </span>

                <div>
                    <h4>Number of cards</h4>
                </div>

                <div>
                    RANGE
                </div>
            </div>
            <div className={style.packList}>
                <h3>Packs list</h3>
                    <PacksInfo />
            </div>
        </div>
    );
};


