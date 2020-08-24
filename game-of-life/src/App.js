import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Grid from './Components/Grid/Grid';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={MainPage} />
      <Route exact path='/play' component={Grid} />
    </div>
  );
}

export default App;
