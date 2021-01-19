import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import './css/Navi.css';
import { Link } from 'react-router-dom';

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
                <Grid item xs={1}><Link className="navi_a_tag" to="/Best100" style={{textDecoration: 'none'}}><div style={vertical_M}>BEST 100</div></Link></Grid>
                <Grid item xs={1}><Link className="navi_a_tag" to="/Books" style={{textDecoration: 'none'}}><div style={vertical_M}>의류</div></Link></Grid>
                <Grid item xs={1}><Link className="navi_a_tag" to="/Clothes" style={{textDecoration: 'none'}}><div style={vertical_M}>도서</div></Link></Grid>
                <Grid item xs={1}><Link className="navi_a_tag" to="/Electronics" style={{textDecoration: 'none'}}><div style={vertical_M}>전자제품</div></Link></Grid>
                <Grid item xs={1}><Link className="navi_a_tag" to="/TodayHot" style={{textDecoration: 'none'}}><div style={vertical_M}>TODAY HOT</div></Link></Grid>
                <Grid item xs={3}><div style={vertical_M}></div></Grid>
                <Grid item xs={1}><Link className="navi_a_tag" to="/" style={{textDecoration: 'none'}}><div style={vertical_M}>로그인</div></Link></Grid>
                <Grid item xs={1}><Link className="navi_a_tag" to="/" style={{textDecoration: 'none'}}><div style={vertical_M}>회원가입</div></Link></Grid>
                <Grid item xs={1}><div style={vertical_M}></div></Grid>
            </Grid>
        </div>

    </Wrapper>
)

export default Navi;