import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

import { Link } from 'react-router-dom';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

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

const Base_width = {
  width: "100%",
};


const Kate_width = {
  width: "25%",
};

const Item_width = {
  width: "75%",
};

const vertical_M = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30px',
  color: 'black'

}
const Body = () => (
  <Wrapper>
    <div style={Base_width}>
      <div style={Kate_width}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ListItem button component={ Link } to="/Best100"><ListItemText style={vertical_M}>BEST100</ListItemText></ListItem>
            <ListItem button component={ Link } to="/Books"><ListItemText style={vertical_M}>의류</ListItemText></ListItem>
            <ListItem button component={ Link } to="/Clothes"><ListItemText style={vertical_M}>도서</ListItemText></ListItem>
            <ListItem button component={ Link } to="/Electronics"><ListItemText style={vertical_M}>전자제품</ListItemText></ListItem>
            <ListItem button component={ Link } to="/TodayHot"><ListItemText style={vertical_M}>TODAY HOT</ListItemText></ListItem>
          </Grid>
        </Grid>
      </div>
      <div style={Item_width}>
        <Grid container spacing={12}>
        </Grid>
      </div>
    </div>
  </Wrapper>
);

export default Body;