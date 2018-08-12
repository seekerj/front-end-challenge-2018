import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Dashboard />
      <Navigation />
      </div>
    );
  }
}

export default App;
