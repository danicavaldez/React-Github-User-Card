import React, { Component } from 'react';
import axios from "axios";


class App extends Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/danicavaldez')
      .then(res => {
        console.log(res.data)
        this.setState({user: res.data})
      })
      .catch(err => console.error("BROKEN:", err))

    axios
    .get('https://api.github.com/users/danicavaldez/followers')  
    .then(res => {
      console.log(res.data)
      this.setState({followers: res.data})
    })
    .catch(err => console.error("BROKEN:", err))
  }

  render() {
    return(
      <>
        <div>
          <img src={this.state.user.avatar_url} /> 
          <h2>{this.state.user.name}</h2>
          <p>{this.state.user.login}</p>
          <p>Followers: {this.state.user.followers}</p>
          <p>Following: {this.state.user.following}</p>
        </div>

        <div>
          <h1>Followers</h1>
          {this.state.followers.map(follower => (
            <><img width="100" src={follower.avatar_url} key={follower.id} alt={follower} />
            <h3>{follower.login}</h3></>
          ))}
        </div>
      </>
    )
  }
}

export default App;