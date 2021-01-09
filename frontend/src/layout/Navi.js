import React from 'react';
import styled from 'styled-components';
//import oc from 'open-color';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 50px;
    width: 100%;
    z-index: 5;
    
    background: white;
    color: white;
    
    font-size: 40px;
`;

const width100 = {
    width: '100%',
}

const Navi = () => (
    <Wrapper>
        <div style={width100}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper>Navigation Part</Paper>
                </Grid>
            </Grid>
        </div>

    </Wrapper>
)

export default Navi;