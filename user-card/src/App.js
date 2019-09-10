import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';

const StyledUser = styled.div`
display: flex;
background-color: white;
align-items: center;
width: 500px;
margin: 0 auto;
margin-top: 30px;
padding-top: 20px;
border-radius: 10px;
`
const StyledFollowers = styled.div`
flex-wrap: wrap;
display: flex;
justify-content: center;
`
const Follower = styled.div`
background-color: white;
padding: 20px;
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
`

const FollowersHeader = styled.h2`
text-align: center;
margin-top: 40px;
`


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
        <StyledUser>
          <div>
            <img border-radius="10px" width='200px' src={this.state.user.avatar_url} />
          </div>
          <div>
            <h2>{this.state.user.name}</h2>
            <p>GitHub Handle: {this.state.user.login}</p>
            <p>Bio: {this.state.user.bio}</p>
            <p>Followers: {this.state.user.followers}</p>
            <p>Following: {this.state.user.following}</p>
          </div>
        </StyledUser>
          <div>
            <FollowersHeader>Followers</FollowersHeader>
              <StyledFollowers>
                {this.state.followers.map(follower => ( 
                  <>
                    <Follower>
                      <img width="100" src={follower.avatar_url} key={follower.id} alt={follower} />
                      <h3>{follower.login}</h3>
                    </Follower>
                  </>
              ))}
              </StyledFollowers>
          </div>
      </>
    )
  }
}

export default App;