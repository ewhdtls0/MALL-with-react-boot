import React, {Component, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import styled from 'styled-components';
import axios from 'axios';
import '../../../../css/itemPages.css';
import ItemUpdate from './ItemUpdate';
import AuthenticationService from '../../../../../login/jwt/AuthenticationService'

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

const logined_user = AuthenticationService.getLoggedInUserName();

const ItemPages = ({match}, {props}) => {
  const [isLoading, setLoading] = useState(true);
  const [item, setItem] = useState();
  const [count, setCount] = useState();
  const [imgArray, setimgArray] = useState([]);
  const [loginUser, setLoginUser] = useState();
  const [UserID, setUserID] = useState();

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
          setimgArray(a);
        });
      axios.get(`/user/${logined_user}`)
        .then(response => {
          setLoginUser(response.data.userName);
          setUserID(response.data.userID);
        })
  }, [count])

  if (isLoading) {
      return null;
  }

  const imagesliderItem = imgArray.map((img) =>
    <Carousel.Item>
      <img
        className="d-block"
        src={`/showimage/${match.params.id}/${img}`}
        style={{display: "block", margin: "0px auto"}}
        width="1024px" height="768px"
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
        <div className="writer"><b>{item.cost}원</b></div>
        <Rule color="gray" />
        {item.content &&
            <TextareaAutosize className="content" value={item.content.replace(/<br\s?\/?>/g,"\n")} disabled style={{width: "100%"}}/>
        }
        {imgslider}
        {loginUser==item.writer &&
          <div style={{margin: "0 0 0 50%"}}>
            <Button variant="outline-secondary"><Link style={{textDecoration: "none", color: "black"}} to={`/updateItem/${item.id}/${item.category}/${item.title}/${item.content}`}>수정</Link></Button>{' '}
            <Button variant="outline-secondary"><Link style={{textDecoration: "none", color: "black"}} to={`/deleteItem/${item.id}`}>삭제</Link></Button>{' '}
          </div>
        }
        {loginUser!=item.writer && loginUser != null &&
          <div style={{margin: "0 0 0 50%"}}>
            <Button variant="outline-secondary"><Link style={{textDecoration: "none", color: "black"}} to={`/basket/${item.id}/${UserID}`}>담기</Link></Button>{' '}
          </div>
        }
      </div>
    </Wrapper>
  )
}

export default ItemPages;
