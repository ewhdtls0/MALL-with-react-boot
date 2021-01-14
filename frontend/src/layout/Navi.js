import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import './css/Navi.css';

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
    
    border-top: none;
    font-weight: bold;
    font-size: 15px;
`;

const width100 = {
    width: '100%',
}

const vertical_M = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    color: 'black'

}

const Navi = () => (
    <Wrapper>
        <div style={width100}>
            <Grid container spacing={1}>
                <Grid item xs={1}><div style={vertical_M}></div></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>BEST 100</div></a></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>의류</div></a></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>도서</div></a></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>전자제품</div></a></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>TODAY HOT</div></a></Grid>
                <Grid item xs={3}><div style={vertical_M}></div></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>로그인</div></a></Grid>
                <Grid item xs={1}><a className="navi_a_tag" href="/" style={{textDecoration: 'none'}}><div style={vertical_M}>회원가입</div></a></Grid>
                <Grid item xs={1}><div style={vertical_M}></div></Grid>
            </Grid>
        </div>

    </Wrapper>
)

export default Navi;