import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
    text-align: center;
    background: ${oc.indigo[6]};
    color: white;
    border-bottom: 1px solid black;
    
    font-size: 40px;
`;

const width100 = {
    width: '100%',
}

const workingPart = {
    backgroundColor: 'yellow',
}

const Header = () => (
    <Wrapper>
      <div style={width100}>
        <Grid container spacing={1}>
          <Grid container spacing={1} item xs={4}>
              <Grid item xs={3}>
                  <Paper>Space</Paper>
              </Grid>
              <Grid item xs={6}>
                  <Paper style={workingPart}>Home part</Paper>
              </Grid>
              <Grid item xs={3}>
                  <Paper>Space</Paper>
              </Grid>
          </Grid>
          <Grid item xs={4}>
            <Paper style={workingPart}>Search part</Paper>
          </Grid>
          <Grid container spacing={1} item xs={4}>
              <Grid item xs={3}>
                  <Paper>Space</Paper>
              </Grid>
              <Grid item xs={9}>
                  <Paper style={workingPart}>Login part</Paper>
              </Grid>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
)

export default Header;