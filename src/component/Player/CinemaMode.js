import React, { Component } from 'react';
import { connect } from 'react-redux'

import { toggleCinema } from '../../actions/playerActions';

class CinemaMode extends Component {
  
  handleOnClick() {
    toggleCinema(this.props)
  }

  render() {
    return(
      <div className="toggle-cinema" onClick={() => this.handleOnClick()}>
        <div className="toggle-cinema_icon"><i className="material-icons">view_compact</i> </div>
        <div className="toggle-cinema_text">Toggle Cinema Mode</div>
      </div>
    )
  }
}


export default connect()(CinemaMode);