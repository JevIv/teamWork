import React from 'react';
import {TableComponentMui} from './TableComponentMUI';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {setSort} from '../../p2-bll/packsList-reducer';

export const Table = () => {
    const dispatch = useDispatch()

    const sortPacks = useSelector<AppRootStateType, string | null>(state => state.packs.sortPacks);

    const deleteHandler = () => {

    }

    const sortHandler = (value: string) => {
        if (sortPacks === null) {
            return dispatch(setSort(`0${value}`))
        }
        if (sortPacks === `0${value}`) {
            return dispatch(setSort(`1${value}`))
        }
        if (sortPacks === `1${value}`) {
            return dispatch(setSort(`0${value}`))
        }
        return dispatch(setSort(`0${value}`))
    }

    return (
        <>
            <TableComponentMui sort={sortHandler}/>
        </>
    );
};

