import React from 'react';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Leas from './Leas'
import Payment from './Payment'
import CarReturn from './CarReturn'
import Add from './Add'
import thankYou from './thankYou'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path='/' exact component={Home} />
        <Route path='/Leas' component={Leas} />
        <Route path='/Payment' component={Payment} />
        <Route path='/CarReturn' component={CarReturn} />
        <Route path='/Add' component={Add} />
        <Route path='/thankYou' component={thankYou} />


      </Switch>
    </div>
  );
}

export default App;
