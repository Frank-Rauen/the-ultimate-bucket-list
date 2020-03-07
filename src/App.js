import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

//Reusable Components
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

//Page Components
import Home from './pages/Home/Home';
import Planner from './pages/Planner/Planner';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup'
import userService from './utils/userService';
import Ingredients from './pages/Ingredients/Ingredients'
import Randomizer from './pages/Randomizer/Randomizer'

class App extends Component {

  state = {
    user: userService.getUser()
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }

  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  render() {

    return (
      <div className="App-outer-container">
      <Navbar handleLogout={this.handleLogout}/>
    
    <div className="App-inner-container">
      <Switch>
        <Route exact path='/' render={props =>
        <Home />
      } />
      <Route exact path ='/ingredients' render={props =>
      <Ingredients /> 
      } />
      <Route exact path ='/randomizer' render={props =>
      <Randomizer />
      } />
        <Route exact path='/planner' render={props => (
          userService.getUser()
          ?
          <Planner />
          : <Redirect to='/login' />
          )} />
        <Route exact path='/login' render={props => (
          <Login 
          {...props}
          handleSignupOrLogin={this.handleSignupOrLogin}/>
          )} />
        <Route exact path='/signup' render={props =>(
          <Signup 
          {...props}
          handleSignupOrLogin={this.handleSignupOrLogin}/>
          )} />
      </Switch>
    </div>
    <Footer /> 
    </div>
  );
  }
}

export default App;