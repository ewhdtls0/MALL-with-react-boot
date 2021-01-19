import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login/login";
import SignUp from "./login/signup";

class App extends Component{
  render(){
    return(<Router>
      <div className="App">
        <div className="outer">
          <div className="body">
            <div className="inner">
              <Login buttonLabel={"로그인"}></Login>
              <SignUp buttonLabel={"회원가입"}></SignUp>
            </div>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default App;