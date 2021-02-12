import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import Carousel from 'react-bootstrap/Carousel'

import styled from 'styled-components';
import axios from 'axios';
import '../../../../css/itemPages.css';
import ItemUpdate from './ItemUpdate';

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

const ItemPages = ({match}, {props}) => {
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const [count, setCount] = useState(0);
  const [abc, setAbc] = useState([]);

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
          var a = [];
          for (var i = 0; i < count; i++) {
            a.push(i);
          }
          setAbc(a);
        })
  }, [count])

  if (isLoading) {
      return null;
  }

  const imagesliderItem = abc.map((a) =>
    <Carousel.Item>
      <img
        className="d-block"
        src={`/showimage/${match.params.id}/${a}`}
        style={{display: "block", margin: "0px auto"}}
      />
    </Carousel.Item>
  )

  const imgslider = (
    <Carousel fade={true} wrap={false}>
        {imagesliderItem}
    </Carousel>
  )

  return (
    <Wrapper>
      <div className="wrapper2">
        <p className="writer">{item.writer}</p>
        <div className="back">
          <b className="title">{item.id}</b>
        </div>
        <p className="title"><b>{item.title}</b></p>
        <Rule color="gray" />
        <TextareaAutosize cols="110" className="content" value={item.content} disabled/>
        {imgslider}
        <div>
          <button style={{float:"right"}}><Link style={{textDecoration: "none", color: "black"}} to={`/updateItem/${item.id}/${item.category}/${item.title}/${item.content}`}>수정</Link></button>
          <button style={{float:"right"}}><Link style={{textDecoration: "none", color: "black"}} to={`/deleteItem/${item.id}`}>삭제</Link></button>
        </div>
      </div>
    </Wrapper>
  )
}

export default ItemPages;
