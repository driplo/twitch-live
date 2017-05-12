import React, { Component } from 'react';
import { connect } from 'react-redux'

import { toggleCinema } from '../../actions/playerActions';

class CinemaMode extends Component {
  
  handleOnClick() {
    toggleCinema(this.props)
  }

  render() {
    return(
      <div className="side-header" onClick={() => this.handleOnClick()}>
        <div className="side-header_icon"><i className="material-icons">view_compact</i> </div>
        <div className="side-header_text">Toggle Cinema Mode</div>
      </div>
    )
  }
}


export default connect()(CinemaMode);