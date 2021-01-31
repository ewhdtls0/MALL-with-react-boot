import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import queryString from "query-string";
import axios from 'axios';
import '../../../../css/itemPages.css';

const Wrapper = styled.div`
    height: 1020px;
    width: 100%;
    top: 60px;
    z-index: 5;

    color: black;
    border-top: 3px solid black;
    font-size: 25px;
    min-width: 1300px;

    padding: 10px 60px;
`;


const Rule = ({ color }) => (
  <hr
    style={{
      borderColor: color,
    }}
  />
);

const ItemPages = ({match, location}) => {
  console.log(match.params);
  
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState();

  useEffect(() => {
      axios.get(`/item/${match.params.id}`)
          .then(response => {
              setItem(response.data);
              setLoading(false);
          });
  }, []);

  if (isLoading) {
      return <div className="App">상품을 불러오는중...</div>;
  }

  return (
    <Wrapper>
      <div className="wrapper2">
        <p className="writer">{item.writer}</p>
        <p className="title"><b>{item.title}</b></p>
        <Rule color="gray" />
        <p className="content">{item.content}</p>
        <img width="500px" src="https://w.namu.la/s/52cdde81ca492970bebd8d422bd57f3a0733fec9a9051948d23776e01956265d7a1c10974012343675e4809474a9e2fd4ca6da10adb882eebecbd81f4576635a49e66b76d794a8fb882fadff3554698faa7f95ae6d49048fd775e9daaf61adee"></img>
      </div>
    </Wrapper>
  )
}

export default ItemPages;
