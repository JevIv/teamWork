import React from 'react';

export const Profile = () => {

    const profile = useSelector<AppRootStateType, UserType>(state=> state.profile.profileInfo as UserType)
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    let navigate = useNavigate();

    if (!initialized) {
        return <Navigate to='/login'/>
    }

    return (
        <div className={style.container}>
            <div className={style.optionsMenu}>
                <div className={style.userInfo}>
                    <UserInfo profile={profile}/>
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


