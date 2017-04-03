import React, { Component } from 'react';
import { connect } from 'react-redux'

class CinemaMode extends Component {
  
  handleOnClick() {
    this.props.dispatch({ type: 'TOGGLE_CINEMA' });
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