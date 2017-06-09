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
  
  componentWillReceiveProps(nextProps) {
    const AUTH_TOKEN = nextProps.connected.token;
    const userId = nextProps.userInfo._id;
    const channelId = nextProps.currentStream.channel._id;
    
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
          if (response.channel){
            this.setState({
              following : true
            });
          } else {
            this.setState({
              following : false
            });
          }
      });
  }
  
  handleClick(event) {
    const AUTH_TOKEN = this.props.connected.token;
    const userId = this.props.userInfo._id;
    const channelId = this.props.currentStream.channel._id;
    const followLink = `https://api.twitch.tv/kraken/users/${userId}/follows/channels/${channelId}`;
    
    let methodFetch = '';
    
    this.state.following ? methodFetch = 'DELETE' : methodFetch = 'PUT';
    
    fetch( followLink, {
      method: methodFetch,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `OAuth ${AUTH_TOKEN}`,
        'Accept': 'application/vnd.twitchtv.v5+json'
      }
    })
    .then( response => {
        this.setState({
          following : !this.state.following
        });
        return response.json()
      });
  }

  render() {
    if (!this.state.following){
      return(
        <div className="follow-button follow-button--nofollow" id={this.props.currentStream.channel._id} onClick={this.handleClick}>
          <div className="follow-button__text">Follow {this.state.following}</div>
        </div>
      )
    } else {
      return(
        <div className="follow-button follow-button--followed" id={this.props.currentStream.channel._id} onClick={this.handleClick}>
          <div className="follow-button__text">Unfollow  {this.state.following}</div>
        </div>
      )
    }
  }
  
}

export default connect(state => ({ userInfo : state.userInfo, connected : state.connected, currentStream: state.currentStream }))(FollowButton);