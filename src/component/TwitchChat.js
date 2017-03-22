import React, { Component } from 'react';
import '../style/Chat.css';

class TwitchChat extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      visibleChat: true
    };
  }
  
  handleOnClick(){
    this.setState({
      visibleChat: this.state.visibleChat ? false : true
    });
  }

  render() {
    const URL_STREAM = `https://www.twitch.tv/${this.props.livestream}/chat`;
    if (this.props.livestream !== false && this.props.livestream !== undefined){
      return(
        <div className={this.state.visibleChat? 'TwitchChat SidePlayer' : 'TwitchChat TwitchChat--collapsed SidePlayer'}>
          <div className="toggle-chat" onClick={() => this.handleOnClick()}><i className="material-icons">{this.state.visibleChat? 'fullscreen_exit' : 'fullscreen'}</i></div>
          <iframe 
            src={URL_STREAM}
            frameBorder="0" 
            scrolling="no" 
            id="chat_embed">
          </iframe>
        </div>
      )
    } else {
      return(
        <div className="TwitchChat SidePlayer"></div>
      )
    }
  }
}

export default TwitchChat;