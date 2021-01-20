import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color';  
import Grid from '@material-ui/core/Grid';
import testImage from '../../../img/testImage.png';

const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    background: ${oc.gray[8]};
    color: white;
    
    border-top: 3px solid black;
    font-size: 25px;
    min-width: 1300px;
`;

const working = {
  background: 'black',
  color: 'white',
  width: '100%',
  height: '33%'
}

const grid = {
  border: '1px solid white',
}

const items = {
  display: 'block',
  placeItems: 'center',
  minHeight: '80%',
  margin: '30px 30px 30px 30px',
  background: 'blue',
}
class Best100 extends Component{
  render(){
    return(
      <Wrapper>
        <div style={working}>
          <Grid style={{height: '100%'}} container spacing={1}>
            <Grid style={grid} item xs={3}>
              <div style={items}>
                <div style={{width: '100%', height: '70%'}}>
                  <img src={testImage} width="100%" height="70%"></img>
                </div>
                <div style={{width: '100%', height: '30%'}}>card</div>
              </div>
            </Grid>
            <Grid style={grid} item xs={3}>
              <div style={items}>Center</div>
            </Grid>
            <Grid style={grid} item xs={3}>
              <div style={items}>Center</div>
            </Grid>
            <Grid style={grid} item xs={3}>
              <div style={items}>Center</div>
            </Grid>
          </Grid>
        </div>
        <div style={working}>
          <Grid style={{height: '100%'}} container spacing={1}>
            <Grid style={grid} item xs={3}>1</Grid>
            <Grid style={grid} item xs={3}>2</Grid>
            <Grid style={grid} item xs={3}>3</Grid>
            <Grid style={grid} item xs={3}>4</Grid>
          </Grid>
        </div>
        <div style={working}>
          <Grid style={{height: '100%'}} container spacing={1}>
            <Grid style={grid} item xs={3}>1</Grid>
            <Grid style={grid} item xs={3}>2</Grid>
            <Grid style={grid} item xs={3}>3</Grid>
            <Grid style={grid} item xs={3}>4</Grid>
          </Grid>
        </div>
      </Wrapper>
    );
  }
}

export default Best100;