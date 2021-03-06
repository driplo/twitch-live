import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

import { toggleSearchBox } from '../../actions/playerActions';
import StreamEntry from '../StreamEntry';
import loading from '../../images/loading.svg';

class SearchBox extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      gameList: [],
      streamList : [],
      gameSelectImg: 'https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentWillMount(){
    this.setState({
      loading: false
    });
  }
  
  handleClick(event){
    this.setState({
      gameSelectImg: 'https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png'
    });
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
    
    if (event.target[event.target.selectedIndex].getAttribute('data-game') !== 'All'){
      const streamListLinkGame = `https://api.twitch.tv/kraken/streams/?game=${gameNoSpace}&oauth_token=${AUTH_TOKEN}&limit=25`;
      
      fetch(streamListLinkGame)
      .then( response => {
        return response.json();
      }).then(({streams}) => {
        this.props.dispatch({ type: 'SET_SEARCHBOX_LIST', payload: streams });
        this.setState({
          loading: false
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
    } else {
      const streamListLink = `https://api.twitch.tv/kraken/streams/?oauth_token=${AUTH_TOKEN}&limit=25`
        
      fetch(streamListLink)
      .then( response => {
        return response.json();
      }).then(({streams}) => {
        this.props.dispatch({ type: 'SET_SEARCHBOX_LIST', payload: streams });
        this.setState({
          loading: false
        });
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      });
    }
    
  }
  
  handleItemClick = (index) => {
    this.setState({
      activeIndex: index,
      gameSelectImg: 'https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png'
    });
    
    this.props.dispatch({ type: 'SWITCH_STREAM', payload: this.props.searchBoxList[index] });
    toggleSearchBox(this.props);
  }
  
  render() {    
    const gameList = this.props.searchBoxGames;
    const streamList = this.props.searchBoxList;
    
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
                <img width="36" src={this.state.gameSelectImg} alt="game img"/>
              </div>
              <select onChange={this.handleChange} >
                <option data-img="https://cdn-images-1.medium.com/fit/c/50/50/1*JpEvZD1Wfo5GvUzdTWsJzQ.png" data-game="All">All Games</option>
                {gameList.map((gameEntry, i) => 
                  <option data-img={gameEntry.game.box.small} value={gameEntry.game.name} key={gameEntry.game._id}>{gameEntry.game.name}</option>
                )}
              </select>
            </div>

            <div className="SearchBox__list">
              {this.state.loading ?  (
                <div className="SearchBox__loading">
                  <img src={loading} alt="Loading" />
                </div>
              ) : (
                <Scrollbars style={{height: 320}} autoHide autoHideTimeout={500}>
                  {streamList.map((stream, i) => 
                    <StreamEntry 
                      stream={stream} 
                      index={i}
                      onClick={this.handleItemClick}
                      key={stream.channel._id} />
                  )}
                </Scrollbars>
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


export default connect(state => ({ connected : state.connected, searchBoxActive: state.searchBoxActive, searchBoxGames : state.searchBoxGames, searchBoxList : state.searchBoxList }))(SearchBox);

