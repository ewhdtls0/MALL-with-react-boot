import React, { useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/itemWriter.css';
import axios from 'axios';


class Imagetest extends Component{

    render(){
        return (
            <Router>
                <br/>
                <form encType="multipart/form-data" action="/image" method="post">
                    <input name="imgFile" type="file"></input>
                    <Button type="submit" variant="secondary">이미지 등록</Button>
                </form>
                
            </Router>
        )
    }
}

export default Imagetest;
