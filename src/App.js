import React, { Component } from 'react';
import './App.css';

import LiveStream from './component/LiveStream';
import Header from './component/Header';
import Player from './component/Player';
import StreamList from './component/StreamList';

class App extends Component {
  
  state = {
    userToken: '',
    username : '',
    userInfo: {},
    loading: true
  }
  
  componentWillMount(){
    
    if (GetURLParameter('state') === 'logged'){
      const AUTH_TOKEN = GetURLParameter('access_token')
            
      this.setState({
        userLogged: true,
        userToken: AUTH_TOKEN
      });
      
      const userLink = `https://api.twitch.tv/kraken/user?oauth_token=${AUTH_TOKEN}`;
      
      fetch(userLink)
        .then( response => { 
          return response.json(); 
        }).then(response => {
                  
          this.setState({
            userLogged: true,
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
        <Player token={this.state.userToken}/>
      </div>
    );
  }
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.hash.substring(1);

    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }
} 

export default App;
