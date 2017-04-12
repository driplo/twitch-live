import React, { Component } from 'react';
import { clientID, redirectURI } from '../../config';

import '../../style/LoginButton.css';
import TwitchLogo from '../../images/logo-twitch.svg';

const scope = 'user_read';
const state = 'logged';
const apiURL = 'https://api.twitch.tv/kraken/oauth2/authorize?response_type=token'
const loginURL = apiURL + '&client_id=' + clientID + '&redirect_uri=' + redirectURI + '&scope=' + scope + '&state=' + state;

class LoginBtn extends Component {
  
  render() {
    
    return (
      <div className="login-form">
        <img width="70" src={TwitchLogo} alt="Logo" />
        <a className="login-btn" href={loginURL} >
          Connect with Twitch
        </a>
        <p>Log in to Twitch Switch<br/> using your Twitch Account</p>
      </div>
      
      
    );
    
  }
    
    
}

export default LoginBtn;