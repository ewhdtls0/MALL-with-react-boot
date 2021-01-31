import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

import { BsFillGiftFill, BsBook, BsFillDisplayFill } from "react-icons/bs";
import { GiClothes, GiHotSurface } from "react-icons/gi"
 
import BestItemViews from '../MainViewComponents/views/components/BestItemViews'
import ClothesItemViews from '../MainViewComponents/views/components/ClothesItemViews'
import BooksItemViews from '../MainViewComponents/views/components/BooksItemViews'
import ElectroItemViews from '../MainViewComponents/views/components/ElectroItemViews'
import TodayItemViews from '../MainViewComponents/views/components/TodayItemViews'


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
  0 : <BestItemViews />,
  1 : <ClothesItemViews />,
  2 : <BooksItemViews />,
  3 : <ElectroItemViews />,
  4 : <TodayItemViews />,
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
              <ListItem button onClick={ () => this.clickHandler(0)}><ListItemText style={vertical_M}><div style={vertical_M} ><BsFillGiftFill /></div><div>BEST 100</div></ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(1)}><ListItemText style={vertical_M}><div style={vertical_M} ><GiClothes /></div><div>의류</div></ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(2)}><ListItemText style={vertical_M}><div style={vertical_M} ><BsBook /></div><div>도서</div></ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(3)}><ListItemText style={vertical_M}><div style={vertical_M} ><BsFillDisplayFill /></div><div>전자제품</div></ListItemText></ListItem>
              <ListItem button onClick={ () => this.clickHandler(4)}><ListItemText style={vertical_M}><div style={vertical_M} ><GiHotSurface /></div><div>TODAY HOT</div></ListItemText></ListItem>
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