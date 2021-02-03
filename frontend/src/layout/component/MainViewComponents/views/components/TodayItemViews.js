import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import testImage from '../../../../img/testImage.png';
import '../../../../css/items.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

const TodayItemViews = () => {
    const [isLoading, setLoading] = useState(true);
    const [items, setItems] = useState();

    useEffect(() => {
        axios.get("/item/today")
            .then(response => {
                setItems(response.data);
                setLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="App">상품을 불러오는중...</div>;
    }
    
    var rows = [];
    var count = 0;
    for(var i=0; i < items.length; i++){
        count++;
        rows.push(
            <Grid item xs={3}>
                <Link to={`/ItemPages/${items[i].id}`} style={{textDecoration: 'none'}} className="linkEffect"><div className="items">
                    <div className="imgWrapper">
                        <img src={testImage} width="80%" height="60%"></img>
                    </div>
                    <div className="cardWrapper">
                        <p className="card">{items[i].title}</p>
                    </div>
                </div></Link>
            </Grid>
         )
    }

    return(
        <div>
            <Grid style={{height: '100%'}} container spacing={1}>
                <div className="row">
                    {rows}
                </div>
            </Grid>
        </div>
    )

}

export default TodayItemViews;
