import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../n1-main/m2-bll/store';
import {CardPacksType} from '../../c2-packs/p3-dal/packsListAPI';
import {PaginationComponent} from '../../../../n0-common/c1-iu/Pagination/PaginationComponent';
import {Search} from '../../../f1-pages/Search/Search';
// import {TableComponent} from '../../c2-packs/p1-ui/u1-packsList/TableComponent';
import {Button} from '../../../../n0-common/c1-iu/button/Button';
import {StatusType} from '../../../../n1-main/m2-bll/s1-reducer/app-reducer';
import {ProgressBar} from '../../../../n0-common/c1-iu/PrgressBar/ProgressBar';
import {Table} from '../../c2-packs/p1-ui/u1-packsList/Table';
import {addNewPackTC, setPageAC} from '../../c2-packs/p2-bll/packsList-reducer';
import {Modal} from '../../../f2-modals/ModalWindow/Modal';

type PacksInfoType = {
    hidden?: boolean
}

export const PacksInfo = ({hidden}: PacksInfoType) => {
    const dispatch = useDispatch()

    const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.cardPacks)
    const pageCount = useSelector<AppRootStateType, number>(state => state.packs.pageCount)

    const packsTotalCount = useSelector<AppRootStateType, number>(state => state.packs.cardPacksTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)
    const status = useSelector<AppRootStateType, StatusType>(state => state.app.status);

    const [activeModal, setActiveModal] = useState(false)

    const addNewPack = () => {
        dispatch(addNewPackTC('namename2'))
        dispatch(setPageAC(1))
    }

    return (
        <>

            <Button onClick={addNewPack} name={'Add new pack'} hidden={hidden}/>
            <div>
                <Search/>
            </div>
            {/*<TableComponent packs={packs}/>*/}
            {status === 'loading'
                ?
                <ProgressBar/>

                : <>

                    <Table/>
                    <PaginationComponent packsTotalCount={packsTotalCount}
                                         pageCount={pageCount}
                                         currentPage={currentPage}/>
                </>

            }

        </>
    );
}
