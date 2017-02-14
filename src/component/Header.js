import React, { Component } from 'react';
import logo_twitch from '../logo_twitch.svg';

class Header extends Component {

  render() {

    return(
      <div className="App-header">
        {/* <img src={logo_twitch} className="App-logo" alt="logo" /> */}
        <h1>Twitch Switch</h1>
        <h3>Easily switch between your favorite Twitch channels</h3>
      </div>
    )
  }

}
export default Header;