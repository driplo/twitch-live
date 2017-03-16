import React, { Component } from 'react';
import './App.css';

import Header from './component/Header';
import Player from './component/Player';

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
      </div>
    );
  }
}

const GetURLParameters = (sParam) => {
    const sPageURL = window.location.hash.substring(1);

    const sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++) {
        const sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }
} 

export default App;
