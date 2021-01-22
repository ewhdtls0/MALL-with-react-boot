import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

    if (loading) return <div>Loading...</div>
    return (
        <Router>
                <ul>
                {users.map((user) => (
                    <Link to="/board"><li id={user.title} key={user.title}>{user.content}</li></Link>
                ))}
                </ul>
        </Router>
    )
}

export default Test;