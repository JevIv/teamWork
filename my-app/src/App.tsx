import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import {PageNotFound} from "./components/404page/Login";

function App() {
  return (
    <div className="App">
        <Login/>
      <PageNotFound/>
    </div>
  );
}

export default App;
