import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

//Reusables
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Planner from './pages/Planner/Planner';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import userService from './utils/userService';

function App() {
  return (
    <div className='App-outer-container'>
      <Navbar />
    <div className='App-inner-container'>
    <Switch>
      <Route exact path='/' render={props =>
      <Home />
      }/>
      <Route exact path='/planner' render={props =>
      <Planner />
      } />
      <Route exact path='/login' render={props => (
          <Login />
        )} />
        <Route exact path='/signup' render={props =>(
          <Signup />
        )} />
    </Switch>
    </div>  
    <Footer />
    </div>
  );
}

export default App;
