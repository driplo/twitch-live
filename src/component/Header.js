import React, { Component } from 'react';
import LoginBtn from './LoginBtn';

class Header extends Component {

  render() {
    
    return(
      <header className="App-header">
        <div className="header-title">
          <h1>Twitch Switch</h1>
          <h3>Easily switch between your favorites Twitch channels</h3>
        </div>
        
        <div className="header-account">
          <LoginBtn username={this.props.username} />
        </div>
      </header>
    )
  }

}
export default Header;