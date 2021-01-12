import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import test1 from './img/test1.png';
import test2 from './img/test2.png';
import test3 from './img/test3.png';


const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 30%;
    width: 100%;
    z-index: 5;
    
    color: black;
    
    font-size: 2.5rem;
`;

const fixImages = {
    marginTop: '10px',
}

const properties = {
    duration: 2000,
    transitionDuration: 300,
}

const HotProductV = () => (
    <Wrapper>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                <div className="slide-container">
                    <Fade {...properties}>
                        <div className="each-fade">
                            <div className="image-container">
                                <img style={fixImages} src={test1} width='100%' height='306px'/>
                            </div>
                         </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img style={fixImages} src={test2} width='100%' height='306px'/>
                             </div>
                        </div>
                        <div className="each-fade">
                            <div className="image-container">
                                <img style={fixImages} src={test3} width='100%' height='306px'/>
                            </div>
                        </div>
                    </Fade>
                </div>
                </Grid>
            </Grid>
    </Wrapper>
)

export default HotProductV;