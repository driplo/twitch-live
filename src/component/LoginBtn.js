import React, { Component } from 'react';

class LoginBtn extends Component {
  
  state = {
    userLogged: false,
    userInfo: {},
    loading: true
  }
  
  render() {
    
    if (GetURLParameter('state') === 'logged'){
      
      const AUTH_TOKEN = GetURLParameter('access_token')
      console.log('AUTH TOKEN', AUTH_TOKEN);
      
      const userLink = `https://api.twitch.tv/kraken/user?oauth_token=${AUTH_TOKEN}`;
      
      fetch(userLink)
        .then( response => { 
          return response.json(); 
        }).then(response => {
          console.log(response);
          this.setState({
            userLogged: true,
            userInfo: response,
            loading: false
          });
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });

      return (
        <div className="user-logged">
          <i className="material-icons">face</i>
          <span className="username">{this.state.userInfo.name}</span>
          <i className="material-icons">arrow_drop_down</i>
        </div>
        
      );
    } else {
      const clientID = '7dd5puit2sck0l3q4qs8uu8snyegsu';
      const redirectURI = 'http://localhost:3000';
      const scope = 'user_read';
      const state = 'logged';
      const apiURL = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token'
      const loginURL = apiURL + '&client_id=' + clientID + '&redirect_uri=' + redirectURI + '&scope=' + scope + '&state=' + state;
      
      return (
        <div>
          <a href={loginURL} className="btn-login"><img src="http://ttv-api.s3.amazonaws.com/assets/connect_light.png" /></a>
        </div>
        
      );
    }
    
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

export default LoginBtn;