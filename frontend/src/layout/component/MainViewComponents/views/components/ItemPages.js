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
`;
/*
const ItemPages = ({match}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetch("/boardOne?title=" + match.params.title)
        .then((response) => response.json())
        .then((users) => {
          setUsers(users)
        })
  }, [])

  return (
    <Wrapper>
      {users.map((user) => (
        <div>
          <h5>{user.title}</h5>
          <h5>{user.content}</h5>
          <h5>{user.writer}</h5>
        </div>
      ))}
    </Wrapper>
  )
}

export default ItemPages;
*/
