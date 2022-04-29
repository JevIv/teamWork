import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import './App.scss';
import {Header} from './header/Header';
import {RoutesFunc} from './routes/Routes';
import {AppRootStateType} from '../m2-bll/store';
import {authMe, logOut} from '../m2-bll/s1-reducer/login-reducer';
import CircularProgress from '@mui/material/CircularProgress';
import {Modal} from '../../n2-features/f2-modals/ModalWindow/Modal';


function App() {
    const dispatch = useDispatch()
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)

    useEffect(() => {
        dispatch(authMe())
    }, [])

    // if (!initialized) {
    //     return <h3 style={{color: 'red', textAlign: 'center', fontSize:'50px'}}>LOADING...</h3>
    // }

    return (
        <div>{!isLoading
            ? <div className="App">
                <HashRouter>
                    {/*не забыть убрать кнопку выхода*/}
                    <button onClick={() => {
                        dispatch(logOut())
                    }}>Log Out
                    </button>
                    <Header/>
                    <RoutesFunc/>
                </HashRouter>
            </div>
            :
            <div style={{position:'absolute', left: '50%', top: '50%'}}>
                <CircularProgress/>
            </div>
        }
        </div>

    );
}

export default App;




//style={{color: 'red', textAlign: 'center', fontSize: '50px'}}
