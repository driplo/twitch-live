import React, { Component } from 'react';
import { connect } from 'react-redux'

import StreamList from './StreamList';
import TwitchPlayer from './TwitchPlayer';
import TwitchChat from './TwitchChat';

import { refreshPlayer } from '../actions/playerActions';
import '../style/Player.css';
import '../style/Searchbox.css';

class Player extends Component {
  
  componentWillMount(){

    if (this.props.token !== ''){

      this.props.dispatch({ type: 'CONNECT', payload: { online: true, token: this.props.token } })
      
      const AUTH_TOKEN = this.props.token;
      
      const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${AUTH_TOKEN}`;
      
      fetch(followedStreams)
        .then( response => { 
          return response.json(); 
        }).then(({streams}) => {
          if (streams.length > 0){
            this.props.dispatch({ type: 'UPDATE_PLAYER', payload: streams })
            this.props.dispatch({ type: 'SWITCH_STREAM', payload: streams[0] })
          } else {
            this.props.dispatch({ type: 'UPDATE_PLAYER', payload: [] })
            this.props.dispatch({ type: 'SWITCH_STREAM', payload: false });
          }
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
        
        

    } else {
      this.props.dispatch({ type: 'CONNECT', payload: { online: false, token: '' } })
    }
  }
  
  componentDidMount(){
    if (this.props.token !== ''){
      this.interval = setInterval(function(props){
        const currentStreamer = props.currentStream.channel.name;
        refreshPlayer(props, currentStreamer);
      }, 5000, this.props)
    }
  }
  
  componentWillUnMount(){
    clearInterval(this.interval);
  }

  render() {
    return(
      <section className={this.props.cinemaMode? 'Player Player--cinema' : 'Player'}>
        <div className="player-shadow"></div>
        <div className="player-background"></div>
        <div className="player-content">
          <div className="StreamList-container SidePlayer">
            <div className="side-header">  
              <div className="side-header_text">Followed Channels</div>
              <div className="side-header_icon"><i className="material-icons">add_to_queue</i></div>
              
              <div className="search-box">
                <input type="text" className="search-box__input" placeholder="Search a live stream..." />
              </div>
            </div>
            <StreamList streams={this.props.streamList}/>
          </div>
          <TwitchPlayer />
          <TwitchChat />
        </div>
      </section>
    )
  }
}

export default connect(state => ({ streamList: state.streamList, cinemaMode: state.cinemaMode, currentStream: state.currentStream }))(Player);