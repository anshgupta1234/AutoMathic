import React from 'react';
import './App.css';
import {
  Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import history from './history';
import Dashboard from './pages/Dashboard';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Home from './pages/Home';

export default function App() {
  return (
    <Router history={history}>

      <div>
        {/* A <Switch> looks through its children <Route>s and  
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}