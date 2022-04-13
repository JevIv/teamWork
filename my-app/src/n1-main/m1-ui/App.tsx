import React, {useEffect} from 'react';
import {HashRouter} from 'react-router-dom';
import './App.scss';
import { Header } from './header/Header';
import { RoutesFunc } from './routes/Routes';
import {AppRootStateType, store} from '../m2-bll/store';
import { authMe } from '../m2-bll/s1-reducer/login-reducer';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../n2-features/f1-pages/Register/r2-bll/registrationThunk';

function App() {
    const dispatch = useDispatch()
    const initialized = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    useEffect(()=> {
        dispatch(authMe())
        dispatch(signUp)

    }, [])

    if (!initialized) {
        return <h3 style={{color: 'red', textAlign: 'center', fontSize:'50px'}}>LOADING...</h3>
    }
    return (
        <>{!isLoading
            ? <div className="App">
                <HashRouter>
                    <Provider store={store}>
                        <Header/>
                        <RoutesFunc/>
                    </Provider>
                   
                </HashRouter>
            </div>
            : <h3 style={{color: 'red', textAlign: 'center', fontSize: '50px'}}>LOADING...</h3>}
        </>

    );
}

export default App;
