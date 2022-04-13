import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MainBar} from '../../../f1-pages/Profile/ProfileComponents/MainBar';
import style from '../../../f1-pages/Profile/ProfileStyles.module.css'
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CardPacksType} from '../../c2-packs/p3-dal/packsListAPI';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import {setCurrentPage} from '../../c2-packs/p2-bll/packsList-reducer';

export const PacksInfo = () => {

    const dispatch = useDispatch()

    const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.cardPacks)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const packsTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)

    const countOfPages = Math.ceil(packsTotalCount / pageCount)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
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
                    <span>{p.name}</span>
                    <span>{p.cardsCount}</span>
                    <span>{p.updated}</span>
                    <span>{p.user_name}</span>
                    <span>Actions</span>
                </div>
            )}

            <div>
                {/*{pages.map(p => (*/}
                {/*    <span key={p} className={currentPage === p ? paginationStyle.activePage : ''}>{p}</span>*/}
                {/*))}*/}
                <Stack spacing={2}>
                    <Pagination count={countOfPages} page={currentPage} onChange={handleChange}/>
                </Stack>
            </div>
        </>
    );
}
