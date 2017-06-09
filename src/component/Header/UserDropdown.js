import React, { Component } from 'react';

class UserDropdown extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClickDisconnect = this.handleClickDisconnect.bind(this);
  }
  
  handleClick(){
    this.setState({
      active: this.state.active ? false : true
    });
  }
  
  handleClickDisconnect(){
    localStorage.setItem('AUTH_CONNECTED', false);
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('USER_INFO');
    window.location.reload();
  }

  render() {
    
    return (
      <div className={this.state.active? 'user-menu user-menu--active' : 'user-menu'} onClick={() => this.handleClick() }>
        <div className="user-logged">
          <i className="material-icons">face</i>
          <span className="username">{this.props.username}</span>
          <i className="material-icons">arrow_drop_down</i>
        </div>
        <div className="dropdown-menu">
          <ul>
            <a onClick={this.handleClickDisconnect}><li>Disconnect</li></a>
          </ul>
        </div>
      </div>
      
    );
    
  }
    
    
}

export default UserDropdown;