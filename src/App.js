import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style/App.css';
import './style/Responsive.css';

import Header from './component/Header';
import Player from './component/Player';
import SearchBox from './component/Search/SearchBox';


const GetURLParameters = (param) => {
    const pageURL = window.location.hash.substring(1);

    const URLVariables = pageURL.split('&');
    for (let i = 0; i < URLVariables.length; i++) {
        const parameterName = URLVariables[i].split('=');
        if (parameterName[0] === param) {
            return parameterName[1];
        }
    }
} 

class App extends Component {
  
  state = {
    userToken: '',
    username : '',
    userInfo: {},
    loading: true
  }
  
  componentWillMount(){
        
    if (GetURLParameters('state') === 'logged'){
      const AUTH_TOKEN = GetURLParameters('access_token')
            
      this.setState({
        userToken: AUTH_TOKEN
      });
      
      const userLink = `https://api.twitch.tv/kraken/user?oauth_token=${AUTH_TOKEN}`;
      
      fetch(userLink)
        .then( response => { 
          return response.json(); 
        }).then(response => {
          this.setState({
            userInfo: response,
            username: response.name,
            loading: false
          });
          this.props.dispatch({ type: 'SET_USER', payload: this.state.userInfo })
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
    } 
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username}/>
        <Player token={this.state.userToken} />
        <SearchBox />
      </div>
    );
  }
}

export default connect(state => ({ connected : state.connected.online }))(App);
