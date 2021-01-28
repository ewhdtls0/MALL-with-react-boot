import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Body from '../../Body';
import Navi from '../../Navi';
import Best100 from '../MainViewComponents/views/Best100';
import Books from '../MainViewComponents/views/Books';
import Clothes from '../MainViewComponents/views/Clothes';
import Electronics from '../MainViewComponents/views/Electronics';
import TodayHot from '../MainViewComponents/views/TodayHot';
import itemWriter from '../MainViewComponents/views/components/itemWrite';

export default() => (
    <Router>
        <Navi/>
        <Route exact path="/" component={Body}></Route>
        <Route path="/Best100" component={Best100}></Route>
        <Route path="/Books" component={Books}></Route>
        <Route path="/Clothes" component={Clothes}></Route>
        <Route path="/Electronics" component={Electronics}></Route>
        <Route path="/TodayHot" component={TodayHot}></Route>

        <Route path="/Write" component={itemWriter}></Route>

    </Router>

)