import React, { Component } from 'react';
import LoginBtn from './LoginBtn';

class Header extends Component {

  render() {

    return(
      <div className="App-header">
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