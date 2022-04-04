import React from 'react';
import s from '../../../n1-main/m1-ui/App.module.scss';
import style from './ProfileStyles.module.css'


export const Profile = () => {
    return (
        <div className={style.container}>
            <div className={style.optionsMenu}>
                <div className={style.userInfo}>

                </div>
            </div>
            <div className={style.packList}>
            <h3>My Pack List</h3>
            <input type="text"/>
            </div>
            <div>
                <span>Name</span>
                <span>Cards</span>
                <span>Last Updated</span>
                <span>Created by</span>
                <span>Actions</span>
            </div>
            <div>

                <div>
                    <span>Lorem</span>
                    <span>4</span>
                    <span>18.03.21</span>
                    <span>Ivanov Ivanov</span>
                    <span>Actions</span>
                </div>
            </div>
        </div>
    );
};


