import React, { Component } from 'react';
import HeaderPost from './headerApp';
import '../style/app.css';
import ListPosts from './listPosts';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPost />
        <ListPosts />
      </div>
    );
  }
}

export default App;
