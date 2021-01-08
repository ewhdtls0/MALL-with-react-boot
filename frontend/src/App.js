import React, {Component} from 'react';
import Header from './layout/Header';
import Body from './layout/Body';

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;