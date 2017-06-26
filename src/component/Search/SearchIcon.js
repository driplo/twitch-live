import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSearchBox } from '../../actions/playerActions';

class SearchIcon extends Component {
  
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    const AUTH_TOKEN = this.props.connected.token;
    const gameListLink = `https://api.twitch.tv/kraken/games/top?oauth_token=${AUTH_TOKEN}&limit=25`;

    
    fetch(gameListLink)
      .then( response => {
        return response.json(); 
      }).then( (responseData) => {
        this.props.dispatch({ type: 'SET_SEARCHBOX_GAMES', payload: responseData.top });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
      
    const streamListLink = `https://api.twitch.tv/kraken/streams/?oauth_token=${AUTH_TOKEN}&limit=25`
      
    fetch(streamListLink)
    .then( response => {
      return response.json();
    }).then(({streams}) => {
      this.props.dispatch({ type: 'SET_SEARCHBOX_LIST', payload: streams });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });
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


export default connect(state => ({ connected : state.connected}))(SearchIcon);