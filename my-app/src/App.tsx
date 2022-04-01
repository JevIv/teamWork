import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import {PageNotFound} from "./components/404page/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile/Login";
import {PasswordReset} from "./components/Password/PasswordReset";
import {NewPassword} from "./components/Password/NewPassword";

function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <Routes>
                    <Route path="/reset-pass/" element={<PasswordReset/>}/>
                    <Route path="/new-pass/" element={<NewPassword/>}/>
                    <Route path="/404/" element={<PageNotFound/>}/>
                    <Route path="/profile/" element={<Profile/>}/>
                    <Route path="/login/" element={<Login/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
