import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import testImage from '../../../../img/testImage.png';
import '../../../../css/items.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ItemPages from './ItemPages';

const ItemViews = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("/user/all")
            .then((response) => response.json())
            .then((users) => {
            setUsers(users)
            })
    }, [])

    return(
        <div>
            <div className="row">
                <Grid style={{height: '100%'}} container spacing={1}>
                {users.map((user) => (
                    <Grid item xs={3}>
                        <Link to={`/ItemPages/${user.userID}`} className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">{user.userName}</p>
                            </div>
                        </div></Link>
                    </Grid>
                ))}
                    <Grid item xs={3}>
                        <a href="/ItemPages" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                </Grid>
            </div>
            <div className="row">
                <Grid style={{height: '100%'}} container spacing={1}>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                </Grid>
            </div>
            <div className="row">
                <Grid style={{height: '100%'}} container spacing={1}>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                    <Grid item xs={3}>
                        <a href="/" className="linkEffect"><div className="items">
                            <div className="imgWrapper">
                                <img src={testImage} width="80%" height="60%"></img>
                            </div>
                            <div className="cardWrapper">
                                <p className="card">this is a card for items</p>
                            </div>
                        </div></a>
                    </Grid>
                </Grid>
            </div>
      </div>
    )

}

export default ItemViews;
