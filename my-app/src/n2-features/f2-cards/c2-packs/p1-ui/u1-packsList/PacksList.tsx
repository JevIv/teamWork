import React, {useCallback, useEffect} from 'react';
import style from '../../../../f1-pages/Profile/ProfileStyles.module.css'
import {PacksInfo} from '../../../c1-cards/c1-ui/PacksInfo'
import {useDispatch, useSelector} from 'react-redux';
import {setPacksListTC, setSearchAC} from '../../p2-bll/packsList-reducer';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {Navigate} from 'react-router-dom';
import {Range} from '../../../../../n0-common/c1-iu/Range/Range';

export const PacksList = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)
    const min = useSelector<AppRootStateType, number>(state => state.packs.min)
    const max = useSelector<AppRootStateType, number>(state => state.packs.max)

    useEffect(() => {
        dispatch(setPacksListTC())
    }, [currentPage, min, max])


const setSearchValue = useCallback((SearchPacksValue: string) => {
        dispatch(setSearchAC(SearchPacksValue))
    }, [dispatch])


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
                    <Range min={min} max={max}/>
                </div>
            </div>
            <div className={style.packList}>
                <h3>Packs list</h3>
                <PacksInfo setSearchValue={setSearchValue}/>
            </div>
        </div>
    );
};


