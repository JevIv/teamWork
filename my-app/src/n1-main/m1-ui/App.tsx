import React from 'react';
import { HashRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './header/Header';
import { RoutesFunc } from './routes/Routes';

function App() {
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
