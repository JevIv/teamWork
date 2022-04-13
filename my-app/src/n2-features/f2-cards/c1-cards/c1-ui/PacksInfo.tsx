import React from 'react';
import {useSelector} from 'react-redux';
import {MainBar} from '../../../f1-pages/Profile/ProfileComponents/MainBar';
import style from '../../../f1-pages/Profile/ProfileStyles.module.css'
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CardPacksType} from '../../c2-packs/p3-dal/packsListAPI';
import paginationStyle from './PacksInfo.module.css'

export const PacksInfo = () => {

    const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.cardPacks)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const packsTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)

    const countOfPages = Math.ceil(packsTotalCount / pageCount)

    const pages = []

    for (let i = 1; i <= countOfPages; i++){
        pages.push(i)
    }

    return (
        <>
            <div style={{margin: '0px 48px 0 48px'}}>
                {/*Style у input здесь временный*/}
                <input type="text" style={{width: '100%'}}/>
            </div>

            <div className={style.mainBar}>
                <MainBar/>
            </div>

            {packs.map(p =>
                <div key={p._id} className={style.packsBar}>
                    <span >{p.name}</span>
                    <span>{p.cardsCount}</span>
                    <span>{p.updated}</span>
                    <span>{p.user_name}</span>
                    <span>Actions</span>
                </div>
            )}

            <div>
                {pages.map(p => (
                    <span key={p} className={currentPage === p ? paginationStyle.activePage : ''}>{p}</span>
                ))}
            </div>
        </>
    );
};

