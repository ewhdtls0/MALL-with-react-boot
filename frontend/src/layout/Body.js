import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';  

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 1020px;
    width: 100%;

    background: ${oc.gray[8]};
    color: white;
    
    font-size: 2.5rem;
`;

const Second_Area = styled.div`    
    width: 100%;
    float: left;
    padding: 15px;
    align-items: center;
    border: 1px solid red;
`;

const Kategori = styled.div`    
    width: 25%;
    float: left;
    padding: 15px;
    border: 1px solid red;
`;

const Item_List = styled.div`
    padding: 15px;
    border: 1px solid red;
`;

const Body = () => (
    <Wrapper>
        <Second_Area>
            <Kategori>카테고리</Kategori>
            <Item_List>아이템리스트</Item_List>
        </Second_Area>
    </Wrapper>
)

export default Body;