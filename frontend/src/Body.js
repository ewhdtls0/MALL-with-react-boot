import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Write from './Write';

function Body() {
    return(
        <Router>
            <nav>
                <Route exact path="/">
                    <Link to="/Write"><button>판매등록</button></Link>
                </Route>
                <Route path="/Write" component={Write}></Route>
            </nav>
        </Router>
    )
}

export default Body;