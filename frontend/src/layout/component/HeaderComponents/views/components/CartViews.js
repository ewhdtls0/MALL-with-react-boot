import { Button } from '@material-ui/core';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import testImg1 from '../../../../img/product1.jpg'
import testImg2 from '../../../../img/product2.jpg'
import testImg3 from '../../../../img/product3.jpg'

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

const ImgScale = {
  height: "200px",
  width: "200px",
}
class CartPages extends Component{
  _removeCartView = async function() {
    if(window.confirm('해당 상품을 장바구니에서 삭제하시겠습니까?')){
    }
  }
    render(){
      return(
        <Wrapper>
          <h3>장바구니</h3>
            <table className="CartList_Table" align="center">
            <div>  
              <tr>
                <th width="350">상품정보</th>
                <th width="200">판매자</th>
                <th width="200">가격</th>
                <th width="200">수량</th>
                <th width="200">합 계</th>
              </tr>
              <tr className="Item1">
                <td><a href = "/"><img src={testImg1} style={ImgScale}></img></a><td>헤드셋</td></td>
                <td>니키타</td>
                <td>110000</td>
                <td>1 개</td>
                <td>110000</td>
                <Button onClick={() => this._removeCartView()}>삭제</Button>
              </tr>
              <tr className="Item2">
                <td><a href = "/"><img src={testImg2} style={ImgScale}></img></a><td>헤드셋</td></td>
                <td>니키타</td>
                <td>110000</td>
                <td>1 개</td>
                <td>110000</td>
                <Button onClick={() => this._removeCartView()}>삭제</Button>
              </tr>
              <tr className="Item3">
                <td><a href = "/"><img src={testImg3} style={ImgScale}></img></a><td>헤드셋</td></td>
                <td>니키타</td>
                <td>110000</td>
                <td>1 개</td>
                <td>110000</td>
                <Button onClick={() => this._removeCartView()}>삭제</Button>
              </tr>
          </div>
          </table>
        </Wrapper>
      );
    }
  }

export default CartPages;