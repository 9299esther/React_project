import React from 'react';
import './App.css';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Leas from './Leas'
import Payment from './Payment'
import CarReturn from './CarReturn'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path='/' exact component={Home} />
        <Route path='/Leas' component={Leas} />
        <Route path='/Payment' component={Payment} />
        <Route path='/CarReturn' component={CarReturn} />


      </Switch>
    </div>
  );
}

export default App;
