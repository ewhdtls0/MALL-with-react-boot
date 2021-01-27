import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Write from './Write';
import Test from './Test'
import './Body22.css'
<script src = "https://unpkg.com/react/umd/react.production.min.js" crossorigin ></script>

function Body22() {
    return(
        <div>
            <Router>
                <nav id="test">
                    <Route exact path="/">
                        <Link to="/Write"><Button variant="secondary">판매 등록</Button>{' '}</Link>
                    </Route>
                    <Route path="/Write" component={Write}></Route>
                </nav>
            </Router>
        </div>
    )
}

export default Body22;