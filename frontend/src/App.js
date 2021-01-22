import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Body from './Body';
import Head from './Head';

function App() {
  return (
    <div>
      <Head></Head>
      <Body></Body>
    </div>
  );
}

export default App;