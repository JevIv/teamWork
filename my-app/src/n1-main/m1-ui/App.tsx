import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { store } from '../m2-bll/store/store';
import './App.scss';
import { Main } from './main/Main';


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Provider store = {store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </div>
    );
}

export default App;
