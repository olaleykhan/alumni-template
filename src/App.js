import React, { Component } from 'react';
// import Card from './components/card'
import Main from './layout/main/Main'
import Header from './layout/header/Header'

import './App.css'


class App extends Component {
  render () {
    return (
      <div className="app">
        <Header/>
       <Main/>
      </div>
    );
  }
}

export default App;
