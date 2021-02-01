import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/itemWriter.css';
import axios from 'axios';


const Imageview = () => {
    const [isLoading, setLoading] = useState(true);
    const [image, setItem] = useState();
  
    useEffect(() => {
        axios.get(`/getimage/1`)
            .then(response => {
                setItem(response.data);
                setLoading(false);
            });
    }, []);
    if (isLoading) {
        return "준비중";
    }
    return (
        <Router>
            이미징<img alt="" src="/getimage/1" width="100px" height="200px"></img>         
        </Router>
        )
}

export default Imageview;
