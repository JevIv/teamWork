import React from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CardPacksType} from '../../c2-packs/p3-dal/packsListAPI';
import {PaginationComponent} from '../../../../n0-common/c1-iu/Pagination/PaginationComponent';
import {Search} from '../../../f1-pages/Search/Search';
import {TableComponent} from '../../c2-packs/p1-ui/u1-packsList/TableComponent';


export const PacksInfo = () => {

    const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.cardPacks)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)

    const packsTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)

    return (
        <>
            <div style={{margin: '0px 48px 0 48px'}}>
                {/*Style у input и сам Input здесь временный*/}
                <Search/>
            </div>
            <TableComponent packs={packs}/>
            <div>
                <PaginationComponent packsTotalCount={packsTotalCount}
                                     pageCount={pageCount}
                                     currentPage={currentPage}/>
            </div>
        </>
    );
}
