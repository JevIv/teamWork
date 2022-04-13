import React, {useEffect} from 'react';
import style from '../../../../n2-features/f1-pages/Profile/ProfileStyles.module.css';
import {useDispatch} from 'react-redux';
import {setPacksListTC} from '../../c2-packs/p2-bll/packsList-reducer';

export const CardsInfo = () => {


    return (
        <div className={style.packsBar}>
            <span>Lorem</span>
            <span>4</span>
            <span>18.03.21</span>
            <span>Ivanov Ivanov</span>
            <span>Actions</span>
        </div>
    );
};

