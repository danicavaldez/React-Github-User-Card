import React from 'react';
import axios from 'axios';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/danicavaldez')
      .then(res => {
        console.log(res.data)
        this.setState(({userInfo: res}))
      })
      .catch(err => console.error(err))
  } 

  render() {
    return(
      <div></div>
    )
  }

}

export default App;
