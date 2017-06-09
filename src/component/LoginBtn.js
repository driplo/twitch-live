import React, { Component } from 'react';
import UserDropdown from './Header/UserDropdown';

class LoginBtn extends Component {

  render() {
    if (this.props.username) {
      return (
        <UserDropdown username={this.props.username}/>
      )
    } else {
      return (null);
    }
  }
}


export default LoginBtn;