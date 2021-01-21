import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';  
import Navi from './Navi';
import HotProductV from './HotProductV';
import KategoriV from './KategoriView'

const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    background: ${oc.gray[8]};
    color: white;
    
    font-size: 2.5rem;
    min-width: 1300px;
`;


const Body = () => (
    <Wrapper>
        <Navi/>
        <HotProductV/>
        <KategoriV/>
    </Wrapper>
)

export default Body;