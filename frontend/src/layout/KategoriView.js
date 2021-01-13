import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Paper";
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

const Items_Sty = {
  background: "yellow",
};

const Body = () => (
  <Wrapper>
    <div style={Kate_width}>
      <Grid container spacing={1}>
          <Grid item xs={1}>
              <Paper>여백의 미</Paper>
          </Grid>
          <Grid item xs={10}>
              <ListItem>
                  <ListItemText style={Kate_Sty} primary="카테고리"></ListItemText>
              </ListItem>
          </Grid>
          <Grid item xs={1}>
              <Paper>여백의 미</Paper>
          </Grid>
      </Grid>
    </div>
    <div style={Item_width}>
        <Grid container spacing={1}>
            <Grid item xs={1}>
              <Paper>여백의 미</Paper>
            </Grid>
            <Grid item xs={10}>
                <ListItem>
                    <ListItemText style={Items_Sty} primary="상품"></ListItemText>
                </ListItem>
            </Grid>
            <Grid item xs={1}>
              <Paper>여백의 미</Paper>
          </Grid>
        </Grid>
    </div>
  </Wrapper>
);

export default Body;