import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
import queryString from "query-string";
import axios from 'axios';
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
      <h5>{item.title}</h5>
      
      <h5 className="float-right">{item.writer}</h5>
      
      <br/>
      <Rule color="blue" />
      <h5>{item.content}</h5>
    </Wrapper>
  )
}

export default ItemPages;
