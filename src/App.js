import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';

//Reusables
import Navbar from '../src/components/Navbar/Navbar';
import Footer from '../src/components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Planner from './pages/Planner/Planner';

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
    </Switch>
    </div>  
    <Footer />
    </div>
  );
}

export default App;
