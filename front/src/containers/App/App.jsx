import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";


import SideLinks from '../../components/SideLinks';
import Header from '../Header';
import MainComponent from '../MainContent';


import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <Header />
          <SideLinks />
          <MainComponent />
        </div>
      </Router>

    );
  }
}

export default App;

