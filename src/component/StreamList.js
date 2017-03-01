import React, { Component } from 'react';
import StreamEntry from './StreamEntry';

class StreamList extends Component {
  
  render() {

    if (this.props.streams){
      return(
        <div className="StreamList">
          {this.props.streams.map(stream =>
            <StreamEntry stream={stream} key={stream.channel._id} />
           )}
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