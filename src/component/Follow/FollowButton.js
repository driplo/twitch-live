import React, { Component } from 'react';
import { connect } from 'react-redux'

import '../../style/Follow.css';



class FollowButton extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      following: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){
    const AUTH_TOKEN = this.props.connected.token;
    const userId = this.props.userInfo._id;
    const channelId = this.props.currentStream.channel._id;
    
    const isFollowingChannelLink = `https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}/?oauth_token=${AUTH_TOKEN}`;
    
    fetch(isFollowingChannelLink, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `OAuth ${AUTH_TOKEN}`,
        'Accept': 'application/vnd.twitchtv.v5+json'
      }
    })
    .then( response => {
        return response.json()
      }).then( (response) => {
        console.log('SALUUUUUUUT', response);
        if (response.channel){
          this.setState({
            following : true
          })
        } else {
          this.setState({
            following: false
          })
        }  
        console.log('ICI', this.state.following);
      });
  }
  
  handleClick() {
          
    /*
    fetch(`https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/vnd.twitchtv.v5+json',
        'Authorization': `OAuth 3b7pn277dpsemp5hk9i90bm33630sl`
      },
    }).then((response) => {
      console.log(response)
    });
    */
  }

  render() {
    console.log(this.state.following);
    if (!this.state.following){
      return(
        <div className="follow-button follow-button--nofollow" id={this.props.currentStream.channel._id} onClick={this.handleClick}>
          <div className="follow-button__text">Follow</div>
        </div>
      )
    } else {
      return(
        <div className="follow-button follow-button--followed" id={this.props.currentStream.channel._id} onClick={this.handleClick}>
          <div className="follow-button__text">Unfollow</div>
        </div>
      )
    }
  }
}

export default connect(state => ({ userInfo : state.userInfo, connected : state.connected, currentStream: state.currentStream }))(FollowButton);