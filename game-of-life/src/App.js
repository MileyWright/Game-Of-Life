import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Grid from './Components/Grid/Grid';
import MainPage from './Components/MainPage/MainPage';
import Options from './Components/MainPage/options';
 import './index.css';
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={MainPage} />
      <Route exact path='/play' component={Grid} />
      <Route exact path='/options' component={Options} />
    </div>
  );
}

export default App;
