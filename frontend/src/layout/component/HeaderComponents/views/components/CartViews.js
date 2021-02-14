import React, {Component, useState, useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Counter from "./CartCounter";
import "../../../../css/CartCounter.css";

import logoImg from "../../../../img/logo.png";
import testImg1 from "../../../../img/product1.jpg";
import testImg2 from "../../../../img/product2.jpg";
import testImg3 from "../../../../img/product3.jpg";
import axios from "axios";


class CartViews extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Items: []
    };
  }

  getBasketData(){
    axios.get(`/basket/${this.props.id}`)
      .then(response => {
        const Items = response.data;
        this.setState({
          Items: Items
        })
      })
  }

  componentDidMount(){
    this.getBasketData();
  }
  render(){
    var rows = [];

    for(var i=0; i<this.state.Items.length; i++){
      rows.push(
        <Counter
          seq={i}
          name={this.state.Items[i].title}
          price={this.state.Items[i].cost}
          url={`/showimage/${this.state.Items[i].item_id}/0`}
          max={10}
          updateOrder={this.props.updateOrder}
        />
      )
    }
    return (
      <div>
        <img className="logoImg" src={logoImg}></img>
        <div className="wrap">
          <div className="prd-title">
            <span className="prd-img">이미지</span>
            <span className="prd-name">제품명</span>
            <span className="prd-price">가격</span>
            <span className="prd-quantity">수량</span>
            <span className="prd-price-total">총계</span>
          </div>
            {rows}
          <br></br>
        </div>
        <div className="total-all">총 계 : {this.props.orderTotal}원</div>
      </div>
    );
  }
}

export default CartViews;
