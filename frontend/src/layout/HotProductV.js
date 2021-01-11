import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import oc from 'open-color';  

const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 30%;
    width: 100%;
    z-index: 5;
    
    background: aqua;
    color: black;
    
    font-size: 2.5rem;
`;

const width100 = {
    width: '100%',

}
const workingPart = {
    backgroundColor: 'yellow',
}

const HotProductV = () => (
    <Wrapper>
        <div style={width100}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper style={workingPart}>Product View</Paper>
                </Grid>
            </Grid>
        </div>
    </Wrapper>
)

export default HotProductV;