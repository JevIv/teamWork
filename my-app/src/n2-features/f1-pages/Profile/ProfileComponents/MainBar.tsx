import React from 'react';
import s from '../../../f2-cards/c1-cards/c1-ui/PacksInfo.module.css';

export const MainBar = () => {
    return (
        <>
            <span className={s.tableName}>Name</span>
            <span className={s.tableCardsCount}>Cards</span>
            <span className={s.tableUpdate}>Updated</span>
            <span className={s.tableUserName}>Created by</span>
            <span className={s.tableActions}>Actions</span>
        </>
    );
};

