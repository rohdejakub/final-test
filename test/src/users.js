import React, { Component, Fragment } from "react";

const BASE_URL = "https://randomuser.me/api/";

class Users extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch(`${BASE_URL}/?results=10`)
      .then(r => r.json())
      .then(users => 
        
        this.setState({ users: users.results}));
  }

  render() {
      
    const { users } = this.state;
    console.log(users)
    return <div>
      {users ? users.map((user, i) => <div key={i}><img src={user.picture.medium}/>{user.name.first}  {user.name.last} {user.email}</div>): ''}
      </div>
    
  }
}

export default Users;
