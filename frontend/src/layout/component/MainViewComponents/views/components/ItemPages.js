import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    color: black;
    border-top: 3px solid black;
    font-size: 25px;
    min-width: 1300px;

    padding: 20px;
`;
const Rule = ({ color }) => (
  <hr
    style={{
      borderColor: color,
    }}
  />
);

const ItemPages = ({match}) => {
  return (
    <Wrapper>
        <h5>제목</h5>
        <h5 className="float-right">작성자</h5>
        <br/>
        <Rule color="blue" />
        <h5>내용</h5>
        <img src="https://w.namu.la/s/52cdde81ca492970bebd8d422bd57f3a0733fec9a9051948d23776e01956265d7a1c10974012343675e4809474a9e2fd4ca6da10adb882eebecbd81f4576635a49e66b76d794a8fb882fadff3554698faa7f95ae6d49048fd775e9daaf61adee" width="400"></img>
    </Wrapper>
  )
}

export default ItemPages;
