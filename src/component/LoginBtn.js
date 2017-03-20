import React, { Component } from 'react';
import TwitchLoginBtn from './Header/TwitchLoginBtn';
import UserDropdown from './Header/UserDropdown';

class LoginBtn extends Component {

  render() {
    if (this.props.username) {
      return (
        <UserDropdown username={this.props.username}/>
      )
    } else {
      return (
        <TwitchLoginBtn />
      );
    }
  }
}


export default LoginBtn;