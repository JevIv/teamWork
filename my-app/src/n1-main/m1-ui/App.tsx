import React, {useEffect} from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './header/Header';
import { RoutesFunc } from './routes/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {authMe, setProfileTC} from '../../store/s1-reducer/login-reducer';
import {AppRootStateType} from '../../store/store';
import {UserType} from '../../API/ProfileAPI/profileAPI';
import {CircularProgress} from '@mui/material';

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    useEffect(()=> {
        dispatch(authMe())
    }, [])

    if (!initialized) {
        return <h3 style={{color: 'red', textAlign: 'center', fontSize:'50px'}}>LOADING...</h3>
    }

    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <RoutesFunc/>
            </HashRouter>
        </div>
    );
}

export default App;
