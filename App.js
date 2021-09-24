import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/homePage" component={HomePage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
