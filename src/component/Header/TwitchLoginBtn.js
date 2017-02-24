import React, { Component } from 'react';

const clientID = '7dd5puit2sck0l3q4qs8uu8snyegsu';
const redirectURI = 'http://localhost:3000';
const scope = 'user_read';
const state = 'logged';
const apiURL = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token'
const loginURL = apiURL + '&client_id=' + clientID + '&redirect_uri=' + redirectURI + '&scope=' + scope + '&state=' + state;

class TwitchLoginBtn extends Component {

  render() {
    
    return (
      <div>
        <a href={loginURL} className="btn-login"><img alt="Twitch Login Button" src="http://ttv-api.s3.amazonaws.com/assets/connect_light.png" /></a>
      </div>
    );
    
  }
    
    
}

export default TwitchLoginBtn;