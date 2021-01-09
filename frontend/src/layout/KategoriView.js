import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { Paper, Grid, Box } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
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
  background: red;

  font-size: 2.5rem;
`;

const Kate_width = {
  width: "25%",
};

const Kate_Sty = {
  background: "aqua",
};

const Item_width = {
  width: "75%",
};

const ItemsBox_Sty = {
  background: "yellow",
};

const Body = () => (
  <Wrapper>
    <div style={Kate_width}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <ListItem>
            <ListItemText style={Kate_Sty} primary="카테고리"></ListItemText>
          </ListItem>
        </Grid>
      </Grid>
    </div>
    <div style={Item_width}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>1</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>2</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>3</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>4</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>5</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>6</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>7</Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box style={ItemsBox_Sty}>8</Box>
        </Grid>
      </Grid>
    </div>
  </Wrapper>
);

export default Body;
