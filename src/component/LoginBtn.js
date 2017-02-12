import React, { Component } from 'react';
import StreamList from './StreamList';

class LoginBtn extends Component {
  render() {
    
    if (GetURLParameter('state') === 'logged'){
      
      const AUTH_TOKEN = GetURLParameter('access_token')
      console.log(AUTH_TOKEN);

      return (
        <StreamList token={AUTH_TOKEN}/>
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
          <a href={loginURL} className="btn">Login with twitch</a>
          <StreamList />
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