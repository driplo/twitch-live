import React, { Component } from 'react';
import logo_twitch from '../logo_twitch.svg';
import LoginBtn from './LoginBtn';

class Header extends Component {

  render() {

    return(
      <div className="App-header">
        {/* <img src={logo_twitch} className="App-logo" alt="logo" /> */}
        <div className="header-title">
          <h1>Twitch Switch</h1>
          <h3>Easily switch between your favorites Twitch channels</h3>
        </div>
        
        <div className="header-account">
          <LoginBtn />        
        </div>
      </div>
    )
  }

}
export default Header;