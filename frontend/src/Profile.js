import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Profile = ({match}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
      fetch("http://localhost:8080/boardOne?title=" + match.params.title)
        .then((response) => response.json())
        .then((users) => {
          setUsers(users)
        })
  }, [])

  return (
    <ul>
      {users.map((user) => (
        <div>
          <h5>{user.title}</h5>
          <h5>{user.content}</h5>
          <h5>{user.writer}</h5>
        </div>
      ))}
    </ul>
  );
};

export default Profile;