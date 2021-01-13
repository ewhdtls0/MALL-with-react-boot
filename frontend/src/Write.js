import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Write() {
    return (
        <Route>
            <nav>
                <Link to="/"><button>뒤로가기</button></Link>
            </nav>
            <br/>
            <input></input>판매 제목
            <br/><br/>
            <input></input>판매 내용
            <br/><br/>
            <input></input>판매 글쓴이
            <br/><br/>
            <input></input>판매 폰번호
            <br/><br/>
            <input></input>판매 날짜
        </Route>
    )
}

export default Write;