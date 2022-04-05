import React from 'react';
import s from '../../../n1-main/m1-ui/App.module.scss';
import style from './ProfileStyles.module.css'
import {CardsInfo} from './ProfileComponents/CardsInfo';
import {UserInfo} from './ProfileComponents/UserInfo';
import {MainBar} from './ProfileComponents/MainBar';


export const Profile = () => {
    return (
        <div className={style.container}>
            <div className={style.optionsMenu}>
                <div className={style.userInfo}>
                    <UserInfo/>
                </div>

                <div>
                    <h4>Number of cards</h4>
                </div>

                <div>
                    RANGE
                </div>
            </div>
            <div className={style.packList}>
                <h3>My Pack List</h3>
                <div style={{margin: '0px 48px 0 48px'}}>
                    {/*Style у input здесь временный*/}
                    <input type="text" style={{width: '100%'}}/>
                </div>

                <div className={style.mainBar}>
                    <MainBar/>
                </div>

                <CardsInfo/>
                <CardsInfo/>
                <CardsInfo/>

                <div>
                    1 2 3 4 5
                </div>

            </div>
        </div>
    );
};


