import React, {useState} from 'react';
import {TableComponentMui} from './TableComponentMUI';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {deletePack, setSort} from '../../p2-bll/packsList-reducer';
import {UserType} from '../../../../../API/ProfileAPI/profileAPI';
import {useSearchParams} from 'react-router-dom';
import {Modal} from '../../../../f2-modals/ModalWindow/Modal';


let tempId: string = ''

export const Table = () => {
    const dispatch = useDispatch()

    const sortPacks = useSelector<AppRootStateType, string | null>(state => state.packs.sortPacks);
    const profile = useSelector<AppRootStateType, UserType>(state => state.profile.profileInfo as UserType);
    const [searchParams] = useSearchParams()

    const [modal, setModal] = useState('close');

    const helperFunc = (pId: string, modal: string) => {
        tempId = pId;
        return setModal(modal);
    }

    const deleteHandler = (packId: string) => {
        if (searchParams.get('user_id')) {
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
                profileId={profile._id}
                helperFunc={helperFunc}
            />
            <Modal
                open={modal === 'edit'}
                setModal={setModal}
                title={'Some Text'}
                buttonTitle={'Edit'}
                onClick={()=>{}}
            >
                Some text

            </Modal>

            <Modal
                setModal={setModal}
                open={modal === 'delete'}
                title={'Delete Pack'}
                buttonTitle={'Delete'}
                onClick={()=>deleteHandler(tempId)}
            >
                Do you really want to remove pack?
                All cards will be excluded from this course.
            </Modal>
        </>
    );
};

