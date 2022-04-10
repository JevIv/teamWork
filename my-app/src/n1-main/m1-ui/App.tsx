import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './header/Header';
import { RoutesFunc } from './routes/Routes';
import {AppRootStateType} from '../m2-bll/store';
import { authMe } from '../m2-bll/s1-reducer/login-reducer';

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    useEffect(() => {
        dispatch(authMe())
    }, [])

    if (!initialized) {
        return <h3 style={{color: 'red', textAlign: 'center', fontSize:'50px'}}>LOADING...</h3>
    }

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
