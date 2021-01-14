import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Write() {
    return (
        <Route>
            <nav>
                <Link to="/"><button>뒤로가기</button></Link>
            </nav>
            <br/>
            <form action="/check" method="POST">
                <input name="title"/>판매 제목
                <br/><br/>
                <input name="content"/>판매 내용
                <br/><br/>
                <input name="writer"/>판매 글쓴이
                <br/><br/>
                <input type="submit"/>
            </form>
        </Route>
    )
}

export default Write;