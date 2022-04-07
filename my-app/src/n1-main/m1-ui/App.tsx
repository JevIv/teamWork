import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.scss';
import {Header} from './header/Header';
import {RoutesFunc} from './routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {authMe} from '../../store/s1-reducer/login-reducer';
import {AppRootStateType} from '../../store/store';

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    useEffect(() => {
        dispatch(authMe())
    }, [])

    return (
        <>{!isLoading
            ? <div className="App">
                <HashRouter>
                    <Header/>
                    <RoutesFunc/>
                </HashRouter>
            </div>
            : <h3 style={{color: 'red', textAlign: 'center', fontSize: '50px'}}>LOADING...</h3>}
        </>

    );
}

export default App;
