import React, { Component } from "react";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CartCounter from "./CartCounter";
import "../../../../css/CartCounter.css";

import logoImg from "../../../../img/logo.png";

import testImg1 from "../../../../img/product1.jpg";
import testImg2 from "../../../../img/product2.jpg";
import testImg3 from "../../../../img/product3.jpg";

// const Wrapper = styled.div`
//     height: 1020px;
//     width: 100%;
//     top: 60px;
//     z-index: 5;

//     color: black;

//     border-top: 3px solid black;
//     font-size: 25px;
//     min-width: 1300px;
// `;

// const Cart_Width100 = {
//   width: '100%',
// }

// const vertical_M = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '30px',
//   color: 'black',
// }

// const ImgScale = {
//   height: "200px",
//   width: "200px",
// }

class CartPages extends Component {
  _removeCartView = async function () {
    if (window.confirm("해당 상품을 장바구니에서 삭제하시겠습니까?")) {
    }
  };

  render() {
    return (
      <div className="wrap">
        <div>
          <img className="logoImg" src={logoImg}></img>
          <div className="prd-title">
            <span className="prd-img">이미지</span>
            <span className="prd-name">제품명</span>
            <span className="prd-price">가격</span>
            <span className="prd-quantity">수량</span>
            <span className="prd-price-total">총계</span>
          </div>
          <CartCounter
            seq={1}
            name="헤드셋"
            price={3000}
            url={testImg1}
            max={10}
            updateOrder={this.props.updateOrder}
          />
          <CartCounter
            seq={2}
            name="시계"
            price={3000}
            url={testImg2}
            max={10}
            updateOrder={this.props.updateOrder}
          />
          <CartCounter
            seq={3}
            name="가방"
            price={3000}
            url={testImg3}
            max={10}
            updateOrder={this.props.updateOrder}
          />
          <br></br>
          <div className="total-all">총 계 : {this.props.orderTotal}</div>
        </div>
      </div>
    );
  }
}

export default CartPages;

// <h3>장바구니</h3>
// <div style={Cart_Width100}>
//   <Grid container spacing={1} align="center">
//     <Grid item xs={2}><div style={vertical_M}>상품정보</div></Grid>
//     <Grid item xs={2}><div style={vertical_M}>판매자</div></Grid>
//     <Grid item xs={2}><div style={vertical_M}>가격</div></Grid>
//     <Grid item xs={2}><div style={vertical_M}>수량</div></Grid>
//     <Grid item xs={2}><div style={vertical_M}>합 계</div></Grid>
//   </Grid>
// </div>
// <div style={Cart_Width100}>
//   <CartCounter>
//     <Grid container spacing={1} align="center">
//       <Grid item xs={2}><img src={testImg1} style={ImgScale}></img><div style={vertical_M}>헤드셋</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>니키타</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>10000</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>1개</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>10000</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><Button onClick={() => this._removeCartView()}>삭제</Button></Grid>
//     </Grid>
//   </CartCounter>
// </div>
// <div style={Cart_Width100}>
//   <Grid container spacing={1} align="center">
//       <Grid item xs={2}><img src={testImg2} style={ImgScale}></img><div style={vertical_M}>헤드셋</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>니키타</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>10000</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>1개</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><div style={vertical_M}>10000</div></Grid>
//       <Grid container display="flex" justify="center" direction="column" item xs={2}><Button onClick={() => this._removeCartView()}>삭제</Button></Grid>
//   </Grid>
// </div>
