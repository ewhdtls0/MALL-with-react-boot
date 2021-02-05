import React, {Component, useState, useEffect} from 'react';
import styled from 'styled-components';
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

const ItemPages = ({match}) => {  
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const [count, setCount] = useState(0);

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
      axios.get(`/countimage/${match.params.id}`)
          .then(response => {
            setCount(response.data);
          })
  }, []);
  
  for (var i = 0; i < count; i++) {
    document.getElementById("imgdiv").innerHTML += "<img class='image' id='image-" + i + "' alt='' src='' />";
    document.getElementById("image-" + i).src = `/showimage/${match.params.id}/` + i;
  }

  if (isLoading) {
      return null;
  }

  return (
    <Wrapper>
      <div className="wrapper2">
        <p className="writer">{item.writer}</p>
        <div className="back">
          <b className="title">{item.id}</b>
        </div>
        <p className="title"><b>{item.title}</b></p>
        <Rule color="gray" />
        <p className="content">{item.content}</p>
        <div id="imgdiv">

        </div>
      </div>
    </Wrapper>
  )
}

export default ItemPages;
