import React, { Component } from 'react';

class UserDropdown extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  
  handleClick(){
    this.setState({
      active: this.state.active ? false : true
    });
  }

  render() {
    
    return (
      <div className="user-menu" className={this.state.active? 'user-menu user-menu--active' : 'user-menu'} onClick={() => this.handleClick() }>
        <div className="user-logged">
          <i className="material-icons">face</i>
          <span className="username">{this.props.username}</span>
          <i className="material-icons">arrow_drop_down</i>
        </div>
        <div className="dropdown-menu">
          <ul>
            <a href="/"><li>Disconnect</li></a>
          </ul>
        </div>
      </div>
      
    );
    
  }
    
    
}

export default UserDropdown;