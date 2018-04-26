import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ImgUpload from '../components/ImgUpload';
import ImgGallery from '../components/ImgGallery';

import './App.css';

class App extends Component {
  render() {
    return (
      
<Router>
  <div className="App">
    <ul>
      <li>
        <Link to="/">input</Link>
      </li>
      <li>
        <Link to="/gallery">Topics</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={ImgUpload} />
      <Route path="/gallery" component={ImgGallery} />
    </Switch>
  </div>
</Router>


    );
  }
}

export default App;

