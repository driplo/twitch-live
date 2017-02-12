import React, { Component } from 'react';
import 'whatwg-fetch';

class StreamList extends Component {
  
  state = {
    streams: [],
    loading: true,
  }
  
  componentWillMount(){
    const AUTH_TOKEN = this.props.token;
    
    const followedStreams = `https://api.twitch.tv/kraken/streams/followed?oauth_token=${AUTH_TOKEN}`;
    
    fetch(followedStreams)
      .then( response => { 
        return response.json(); 
      }).then(({streams}) => {
        console.log(streams);
        this.setState({
          streams: streams,
          loading: false
        })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
  }
  
  render() {
    
    if (this.state.loading === false){
      return(
        <div>
          <ul>
          {this.state.streams.map(stream =>
            <li key={stream.channel._id}>{stream.channel.display_name}</li>
           )}
          </ul>
        </div>
      )
    } else {
      return(
        <div>
          <ul>
            <li>Loading...</li>
          </ul>
        </div>
      )
    }
          
  }
    
}

export default StreamList;