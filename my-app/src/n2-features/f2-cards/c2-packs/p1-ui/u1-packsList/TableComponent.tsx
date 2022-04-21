import React from 'react';
import s from '../../../c1-cards/c1-ui/PacksInfo.module.css';
import dayjs from 'dayjs';
import {CardPacksType} from '../../p3-dal/packsListAPI';

type TableComponentType = {
    packs: CardPacksType[]
}

export const TableComponent = ({packs}:TableComponentType) => {

    const formatDate = (date: string): string => dayjs(date).format('DD.MM.YYYY')

    return (
        <table className={s.tableStyle}>
            <thead>
            <tr>
                <td>Name</td>
                <td>Cards</td>
                <td>Updated</td>
                <td>Created</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
            {packs.map(p => {
                return (
                    <tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{p.cardsCount}</td>
                        <td>{formatDate(p.updated)}</td>
                        <td>{p.user_name}</td>
                        <td><button>Delete</button><button>Edit</button><button>Learn</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
};

