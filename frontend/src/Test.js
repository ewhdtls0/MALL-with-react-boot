import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Profile from './Profile';

const Test = () => {
    const [loading, setLoading] = useState(true)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/boards")
          .then((response) => response.json())
          .then((users) => {
            setUsers(users)
            setLoading(false)
          })
    }, [])

    //if (loading) return <div>Loading...</div>
    return (
        <Router>
            <Route exact path="/">
                <ul>
                {users.map((user) => (
                    <Link to={`/test/${user.title}`}>
                        <li id={user.title} key={user.title}>
                            <h5>{user.title}</h5>
                        </li>
                    </Link>
                ))}
                </ul>
            </Route>
            <Route path="/test/:title" component={Profile} />
        </Router>
    )
}

export default Test;