import React, { Component } from 'react';
import './App.css';

import LoginBtn from './component/LoginBtn';
import LiveStream from './component/LiveStream';
import Header from './component/Header';
import Player from './component/Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Player />
        <LoginBtn />
        <LiveStream />
      </div>
    );
  }
}

export default App;
