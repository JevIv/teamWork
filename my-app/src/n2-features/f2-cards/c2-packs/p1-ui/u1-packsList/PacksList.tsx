import React, {useEffect} from 'react';
import {MainBar} from '../../../../f1-pages/Profile/ProfileComponents/MainBar'
import style from '../../../../f1-pages/Profile/ProfileStyles.module.css'
        // './ProfileStyles.module.css';
import {CardsInfo} from '../../../c1-cards/c1-ui/CardsInfo'
import {useDispatch, useSelector} from 'react-redux';
import {setPacksListTC} from '../../p2-bll/packsList-reducer';
import {AppRootStateType} from '../../../../../n1-main/m2-bll/store';
import {CardPacksType} from '../../p3-dal/packsListAPI';
import {useLocation} from 'react-router-dom';

export const PacksList = () => {

// const packs = useSelector<AppRootStateType, CardPacksType[]>(state => state.packs.packsList as CardPacksType[])

const location = useLocation()
    console.log(location)

    return (
        <div className={style.container}>
            {/*поправить стили*/}
            <div className={style.optionsMenu}>
                    <h4>Show packs cards</h4>
                    <span>
                         <button>my</button>
                         <button>all</button>
                    </span>

                <div>
                    <h4>Number of cards</h4>
                </div>

                <div>
                    RANGE
                </div>
            </div>
            <div className={style.packList}>
                <h3>Packs list</h3>
                <div style={{margin: '0px 48px 0 48px'}}>
                    {/*Style у input здесь временный*/}
                    <input type="text" style={{width: '100%'}}/>
                    <span><button>Add new pack</button></span>
                </div>

                <div className={style.mainBar}>
                    <MainBar/>
                </div>
                {
                    // packs.map(p => <CardsInfo/>)
                }


                <div>
                    1 2 3 4 5
                </div>

            </div>
        </div>
    );
};


