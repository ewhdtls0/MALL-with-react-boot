import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    display: flex;
    position: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
    
    background: ${oc.indigo[6]};
    color: white;
    border-bottom: 1px solid black;
    
    font-size: 2.5rem;
`;

const Header = () => (
    <Wrapper>
        [Header] = Home, search, navi, sign in, up
    </Wrapper>
)

export default Header;