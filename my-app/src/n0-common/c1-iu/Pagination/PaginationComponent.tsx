import React from 'react';
import Stack from '@mui/material/Stack';
import {setCurrentPage} from '../../../n2-features/f2-cards/c2-packs/p2-bll/packsList-reducer';
import {useDispatch} from 'react-redux';
import Pagination from '@mui/material/Pagination';
import style from './PaginationStyle.module.css'

type PaginationType = {
    //отдаем от родителя общее кол-во
    packsTotalCount: number
    //отдаем текующую страницу
    currentPage: number
    //отдаем кол-во отображаемой информации на странице
    pageCount: number
}

export const PaginationComponent = ({packsTotalCount,currentPage, pageCount }:PaginationType) => {

    const dispatch = useDispatch()

    const countOfPages = Math.ceil(packsTotalCount / pageCount)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setCurrentPage(value));
    }

    return (
        <div className={style.pagination}  >
            <Stack spacing={2}>
                <Pagination count={countOfPages}
                            page={currentPage}
                            onChange={handleChange}
                shape='rounded'
                size='small'/>
            </Stack>
        </div>
    );
};

