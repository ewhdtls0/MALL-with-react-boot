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
    color: black;
    
    border: 1px solid black;
    font-weight: bold;
    font-size: 15px;
`;

const width100 = {
    width: '100%',
}

const workingPart = {
    backgroundColor: 'yellow',
}

const Navi = () => (
    <Wrapper>
        <div style={width100}>
            <Grid container spacing={1}>
                <Grid item xs={1}>space</Grid>
                <Grid item xs={1}>BEST 100</Grid>
                <Grid item xs={1}>의류</Grid>
                <Grid item xs={1}>도서</Grid>
                <Grid item xs={1}>전자제품</Grid>
                <Grid item xs={1}>TODAY HOT</Grid>
                <Grid item xs={3}>space</Grid>
                <Grid item xs={1}>로그인</Grid>
                <Grid item xs={1}>회원가입</Grid>
                <Grid item xs={1}>space</Grid>
            </Grid>
        </div>

    </Wrapper>
)

export default Navi;