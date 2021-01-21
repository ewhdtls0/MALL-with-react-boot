import React, {Component} from 'react';
import Header from './layout/Header';
import Body from './layout/Body';
import Grid from '@material-ui/core/Grid';


class App extends Component{
  render(){
    return(
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Header/>
            <Body/>
          </Grid>  
          <Grid item xs={2}></Grid> 
        </Grid>
      </div>
    );
  }
}

export default App;