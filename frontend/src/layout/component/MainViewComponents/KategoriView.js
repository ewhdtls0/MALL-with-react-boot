import React, { Component } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { List, ListItem } from "@material-ui/core";

import '../../css/KategoriView.css'
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
  color: 'black',
  margin: '8px'

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
              <List className="listWrap">
                <ListItem button onClick={ () => this.clickHandler(0)}><div style={vertical_M} ><BsFillGiftFill /> &nbsp; BEST 100</div></ListItem>
                <ListItem button onClick={ () => this.clickHandler(1)}><div style={vertical_M} ><GiClothes /> &nbsp; 의류</div></ListItem>
                <ListItem button onClick={ () => this.clickHandler(2)}><div style={vertical_M} ><BsBook /> &nbsp; 도서</div></ListItem>
                <ListItem button onClick={ () => this.clickHandler(3)}><div style={vertical_M} ><BsFillDisplayFill /> &nbsp; 전자제품</div></ListItem>
                <ListItem button onClick={ () => this.clickHandler(4)}><div style={vertical_M} ><GiHotSurface /> &nbsp; TODAY HOT</div></ListItem>
              </List>
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