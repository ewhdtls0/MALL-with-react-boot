import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login/login";
import SignUp from "./login/signup";
import Header from './layout/Header';
import Body from './layout/Body';

class App extends Component{
  render(){
    return(<Router>
      <div className="App">
        <div>
          <Header/>
          <Body/>
        </div>
        <div className="outer">
          <div className="inner">
            <Switch>
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default App;