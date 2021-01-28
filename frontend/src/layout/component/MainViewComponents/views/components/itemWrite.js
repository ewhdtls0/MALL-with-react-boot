import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/itemWriter.css'
import axios from 'axios';
import $ from "jquery";


function itemWrite(){

    return (
        <Route>
            <br/>
            <form action="/item" method="POST">
                <table id="abc">
                    <tbody>
                        <tr>
                            <td>판매 제목</td>
                            <td><input name="title" placeholder="제목" /></td>
                        </tr>
                        <tr>
                            <td>판매 내용</td>
                            <td><input name="content" placeholder="내용" /></td>
                        </tr>
                        <tr>
                            <td>판매 글쓴이</td>
                            <td><input name="writer" placeholder="글쓴이"/></td>
                        </tr>
                    </tbody>
                </table>
                <br/>
                <Button type="submit" variant="secondary">판매 등록</Button>
            </form>
        </Route>
    )

}

export default itemWrite;
