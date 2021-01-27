import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

import ItemViews from '../MainViewComponents/views/components/ItemViews'

const Wrapper = styled.div`
  display: flex;
  position: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 60%;
  width: 100%;
  z-index: 5;

  background: white;
  color: black;

  font-size: 2.5rem;
`;

const Kate_width = {
  width: "25%",
};

const contents_Size = {
  width: "75%",
};

const Infinite = require('react-infinite');

const vertical_M = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  color: 'black'

}

const obj ={
  0 : <ItemViews />,
  1 : <ItemViews />,

}
class Body extends Component{
  state= {
    activTab : 0
  }
  
  clickHandler = (id) => {
    this.setState({activTab : id})
  }

  render(){
    return(
      <Wrapper>
        <div style={Kate_width}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <ListItem button onClick={ () => this.clickHandler(0)}><ListItemText style={vertical_M}>BEST100</ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(1)}><ListItemText style={vertical_M}>의류</ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(2)}><ListItemText style={vertical_M}>도서</ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(3)}><ListItemText style={vertical_M}>전자제품</ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(4)}><ListItemText style={vertical_M}>TODAY HOT</ListItemText></ListItem>
            </Grid>
          </Grid>
        </div>
        <div style={contents_Size}>
          <Infinite containerHeight={550} elementHeight={200}>
            {obj[this.state.activTab]}
          </Infinite>
        </div>
    </Wrapper>
    );
  }
}

export default Body;