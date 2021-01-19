import React, {Component} from 'react';
import Header from './layout/Header';
import Grid from '@material-ui/core/Grid';
import NaviRoutes from './layout/component/Routes/NaviRoutes';


class App extends Component{
  render(){
    return(
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Header/>
            <NaviRoutes/>
          </Grid>  
          <Grid item xs={2}></Grid> 
        </Grid>
      </div>
    );
  }
}

export default App;