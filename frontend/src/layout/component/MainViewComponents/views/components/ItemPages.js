import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
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

const ItemPages = ({match}) => {  
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState();

  useEffect(() => {
      axios.get(`/item/${match.params.id}`)
          .then(response => {
              setItem(response.data);
              setLoading(false);
              axios.put(`/item/${match.params.id}`, {
                "id" : match.params.id,
                "lookup": response.data.lookup + 1,
                "todaylookup": response.data.todaylookup + 1,
              }).then()
          });
  }, []);

  if (isLoading) {
      return null;
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
