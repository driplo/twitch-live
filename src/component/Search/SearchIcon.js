import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSearchBox } from '../../actions/playerActions';

class SearchIcon extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    toggleSearchBox(this.props);
  }
  
  render() {

    return(
      <div className="side-header_icon" onClick={this.handleClick}>
        <i className="material-icons">add_to_queue</i>
      </div>
    )

  }
}


export default connect()(SearchIcon);