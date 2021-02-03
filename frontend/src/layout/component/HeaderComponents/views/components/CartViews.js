import React, { Component } from "react";

import Counter from "./CartCounter";
import "../../../../css/CartCounter.css";

import logoImg from "../../../../img/logo.png";
import testImg1 from "../../../../img/product1.jpg";
import testImg2 from "../../../../img/product2.jpg";
import testImg3 from "../../../../img/product3.jpg";

class CartViews extends Component {

  render() {
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
            <Counter
              seq={1}
              name="헤드셋"
              price={3000}
              url={testImg1}
              max={10}
              updateOrder={this.props.updateOrder}
            />
            <Counter
              seq={2}
              name="시계"
              price={2000}
              url={testImg2}
              max={10}
              updateOrder={this.props.updateOrder}
            />
            <Counter
              seq={3}
              name="가방"
              price={1000}
              url={testImg3}
              max={10}
              updateOrder={this.props.updateOrder}
            />
            <br></br>
          </div>
          <div className="total-all">총 계 : {this.props.orderTotal}</div>
        </div>
      );
  }
}

export default CartViews;
