import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../../../../css/itemEnroll.css';
import itemWriter from './itemWrite';
<script src = "https://unpkg.com/react/umd/react.production.min.js" crossorigin ></script>

function itemEnroll() {
    return(
        <div>
            <Router>
                <nav id="test">
                    <Route exact path="/">
                        <Link to="/Write"><Button variant="secondary">판매 등록</Button>{' '}</Link>
                    </Route>
                    <Route path="/Write" component={itemWriter}></Route>
                </nav>
            </Router>
        </div>
    )
}

export default itemEnroll;