import React from "react";
import styled from "styled-components";
import { Paper, Grid, Box } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";

const Wrapper = styled.div`
  display: flex;
  position: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  height: 60%;
  width: 100%;
  z-index: 5;

  color: black;

  font-size: 2.5rem;
`;

const Kate_width = {
  width: "25%",
};

const Item_width = {
  width: "75%",
};


const Body = () => (
  <Wrapper>
    <div style={Kate_width}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ListItemText button primary="BEST 100"></ListItemText>
          <ListItemText button primary="의류"></ListItemText>
          <ListItemText button primary="도서"></ListItemText>
          <ListItemText button primary="전자제품"></ListItemText>
          <ListItemText button primary="TODAY HOT"></ListItemText>
        </Grid>
      </Grid>
    </div>
    <div style={Item_width}>
      <Grid container spacing={12}>
      </Grid>
    </div>
  </Wrapper>
);

export default Body;
