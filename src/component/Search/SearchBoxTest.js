import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleSearchBox } from '../../actions/playerActions';

import loading from '../../images/loading.svg';

class SearchBoxTest extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      gameList: [],
      streamList : [],
      loading: false,
      gameSelectImg: 'https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentWillMount(){
    const AUTH_TOKEN = this.props.connected.token;
    const gameListLink = `https://api.twitch.tv/kraken/games/top?oauth_token=${AUTH_TOKEN}&limit=15`;
    this.setState({
      loading : true
    });
    fetch(gameListLink)
      .then( response => {
        return response.json(); 
      }).then( (responseData) => {        
        this.setState({
          gameList : responseData.top,
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
      
    const streamListLink = `https://api.twitch.tv/kraken/streams/?oauth_token=${AUTH_TOKEN}&limit=10`
      
    fetch(streamListLink)
    .then( response => {
      return response.json();
    }).then(({streams}) => {
      this.setState({
        streamList : streams,
        loading: false
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });
  }
  
  handleClick(event){
    toggleSearchBox(this.props);
  }
  
  handleChange(event){
    this.setState({
      loading: true
    });
    const AUTH_TOKEN = this.props.connected.token;
    const gameImg = event.target[event.target.selectedIndex].getAttribute('data-img');
    
    const game = event.target.value;
    const gameNoSpace = game.replace(/ /g, "%20");
        
    this.setState({
      gameSelectImg: gameImg 
    });
    
    const streamListLinkGame = `https://api.twitch.tv/kraken/streams/?game=${gameNoSpace}&oauth_token=${AUTH_TOKEN}&limit=15`;
    
    fetch(streamListLinkGame)
    .then( response => {
      console.log('LOADING...');
      return response.json();
    }).then(({streams}) => {
      console.log('LOADED !');
      this.setState({
        streamList : streams,
        loading: false
      });
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    });
  }
  
  render() {
  
    if (this.props.searchBoxActive){
      return(
        <div className="SearchBox">
          <div className="SearchBox__content">
            <div onClick={this.handleClick} className="SearchBox__close">×</div>
            <div className="SearchBox__header">
              Search a live stream
            </div>
            <div className="SearchBox__dropdown">
              <div className="game-icon">
                <img height="50" src={this.state.gameSelectImg} />
              </div>
              <select onChange={this.handleChange} >
                <option data-img="https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png">All Games</option>
                {this.state.gameList.map((gameEntry, i) => 
                  <option data-img={gameEntry.game.box.small} value={gameEntry.game.name} key={gameEntry.game._id}>{gameEntry.game.name}</option>
                )}
              </select>
            </div>
            {/*
            <div className="SearchBox__search">
              <i className="material-icons">search</i>
              <input type="text" placeholder="Search a live stream" />
            </div>*/}
            <div className="SearchBox__list">
              {this.state.loading ?  (
                <div className="SearchBox__loading">
                  <img src={loading} alt="Loading" />
                </div>
              ) : (
                <div>
                  {this.state.streamList.map((stream, i) => 
                    <div className="SearchBox__entry" key={stream.channel._id}>
                      <div className="stream-entry" title={stream.channel.status}>
                        <div className="stream-img">
                          <img src={stream.channel.logo ? stream.channel.logo : ''} width="30" alt="stream-game" />
                        </div>
                        <div className="stream-column">
                          <div className="streamer-name">
                            {stream.channel.display_name}<span className="streamer-game">{stream.channel.game}</span>
                          </div>
                          <div className="streamer-title">{stream.channel.status}</div>
                          <div className="streamer-viewers"><i className="material-icons">visibility</i> &nbsp; {stream.viewers}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              
            </div>
          </div>
        </div>
      )
    }
     else {
       return (null)
     }
    
    

  }
}


export default connect(state => ({ connected : state.connected, searchBoxActive: state.searchBoxActive }))(SearchBoxTest);

