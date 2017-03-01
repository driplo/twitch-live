import React, { Component } from 'react';
import TwitchLoginBtn from './Header/TwitchLoginBtn';

class LoginBtn extends Component {

  render() {
    if (this.props.username) {
      return (
        <div className="user-logged">
          <i className="material-icons">face</i>
          <span className="username">{this.props.username}</span>
          <i className="material-icons">arrow_drop_down</i>
        </div>
      )
    } else {
      return (
        <TwitchLoginBtn />
      );
    }
  }
}


export default LoginBtn;