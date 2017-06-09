import React, { Component } from 'react';
import { clientID, redirectURI } from '../../config';

const scope = 'user_read user_follows_edit';
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