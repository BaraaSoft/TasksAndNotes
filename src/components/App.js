import React, { Component } from 'react';
import HeaderPost from './headerApp';
import '../style/app.css';
import ListPosts from './listPosts';


import { Route } from 'react-router-dom';
import createPost from './createPost';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPost />
        <Route path="/" exact component={ListPosts} />
        <Route path="/post" component={createPost} />
      </div>
    );
  }
}

export default App;
