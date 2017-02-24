import React, { Component } from 'react';
import TwitchLoginBtn from './Header/TwitchLoginBtn';

class LoginBtn extends Component {
  
  state = {
    userLogged: false,
    userToken: true && localStorage.getItem('AUTH_TOKEN'),
    userName : true && localStorage.getItem('Username'),
    userInfo: {},
    loading: true
  }
  
  componentWillMount(){
    
    if (GetURLParameter('state') === 'logged'){
      const AUTH_TOKEN = GetURLParameter('access_token')
      
      localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN);
      
      this.setState({
        userLogged: true,
        userToken: AUTH_TOKEN
      });
      
      const userLink = `https://api.twitch.tv/kraken/user?oauth_token=${AUTH_TOKEN}`;
      
      fetch(userLink)
        .then( response => { 
          return response.json(); 
        }).then(response => {
                  
          this.setState({
            userLogged: true,
            userInfo: response,
            userName: response.name,
            loading: false
          });
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        });
    } 
    
  }
  
  render() {
          
      if (this.state.userLogged) {
        
        window.location.hash = '';
        
        return (
          <div className="user-logged">
            <i className="material-icons">face</i>
            <span className="username">{this.state.userInfo.name}</span>
            <i className="material-icons">arrow_drop_down</i>
          </div>
        )
      } else {
                
        return (
          <TwitchLoginBtn />
        );
        
      }    
  }
}

function GetURLParameter(sParam) {
    var sPageURL = window.location.hash.substring(1);

    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1];
        }
    }
} 

export default LoginBtn;