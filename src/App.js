import React, { Component } from 'react';
import './App.css';
import Login from './components/login'
import { getUrlHash, parseHashParams } from './utils';
import Feed from './components/feed'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      accessToken: null
    }
  }

  componentDidMount() {
    const hashParams = parseHashParams(getUrlHash())
    if (hashParams.access_token) {
      this.setState({accessToken: hashParams.access_token})
    }
    console.log(hashParams)
  }

  render() {
    if (this.state.accessToken) {
      return (
      <Feed accessToken={this.state.accessToken}/>
      )
    } else {
      return (
        <Login />
      );
    }
  }
}

export default App;
