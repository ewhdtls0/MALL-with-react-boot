import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Body22 from './Body22';
import Header from './layout/Header';
import Grid from '@material-ui/core/Grid';
import NaviRoutes from './layout/component/Routes/NaviRoutes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App(){

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

    return(
      <div>
        <Grid container spacing={1}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Header/>
            <NaviRoutes/>
            {message}
          </Grid>  
          <Grid item xs={2}></Grid> 
        </Grid>
        <Body22></Body22>
      </div>
    );
}

export default App;