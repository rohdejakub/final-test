import React, { Component } from "react";

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
    return <div>
      {users ? users.map((user, i) => <div key={i} style={{display: 'flex', justifyContent: 'space-around'}}><img src={user.picture.medium} alt='avatar'/><span>NAME: {user.name.first}</span><span>LASTNAME: {user.name.last}</span> <span>EMAIL:{user.email}</span></div>): ''}
      </div>
    
  }
}

export default Users;
