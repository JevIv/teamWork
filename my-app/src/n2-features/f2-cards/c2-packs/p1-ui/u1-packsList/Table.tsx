import React from 'react';
import {TableComponentMui} from './TableComponentMUI';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {deletePack, setSort} from '../../p2-bll/packsList-reducer';
import {UserType} from '../../../../../API/ProfileAPI/profileAPI';
import {useSearchParams} from 'react-router-dom';

export const Table = () => {
    const dispatch = useDispatch()

    const sortPacks = useSelector<AppRootStateType, string | null>(state => state.packs.sortPacks);
    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType);
    const [searchParams] = useSearchParams()

    const deleteHandler = (packId: string) => {
        if(searchParams.get('user_id')){
            return dispatch(deletePack(packId, profile._id, 'profile'))
        }
        return dispatch(deletePack(packId, profile._id))
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
            <TableComponentMui
                sort={sortHandler}
                deleteHandler={deleteHandler}
                profileId={profile._id}/>
        </>
    );
};

