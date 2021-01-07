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
    position: flex;
    align-items: center;
    border: 1px solid red;
`;

const Kategori = styled.div`    
    width: 25%;
    float: left;
    padding: 15px;
    position: flex;
    border: 1px solid blue;
`;

const Item_List = styled.div`
    width: 75%
    left: 25%;
    float: left;
    padding: 15px;
    position: flex;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid yellow;
`;

const Kate_List = styled.li`
    color: white;
`;

const Body = () => (
    <Wrapper>
        <Second_Area>
            <Kategori>
                <Kate_List>카테고리 내용 1</Kate_List>
                <Kate_List>카테고리 내용 2</Kate_List>
                <Kate_List>카테고리 내용 3</Kate_List>
                <Kate_List>카테고리 내용 4</Kate_List>
                <Kate_List>카테고리 내용 5</Kate_List>
            </Kategori>

            <Item_List>상품 1</Item_List>
            <Item_List>상품 2</Item_List>
            <Item_List>상품 3</Item_List>
            <Item_List>상품 4</Item_List>
            <Item_List>상품 5</Item_List>
            <Item_List>상품 6</Item_List>
            <Item_List>상품 7</Item_List>
            <Item_List>상품 8</Item_List>
        </Second_Area>
    </Wrapper>
)

export default Body;