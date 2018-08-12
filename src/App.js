import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleNaveigation: true
    }
    this.handleToggleNavigation = this.handleToggleNavigation.bind(this);
  }
  handleToggleNavigation(toggleNaveigation) {
     this.setState({
       toggleNaveigation:toggleNaveigation
     });
  }
  render() {
    return (
      <div>
      <Header toggleNaveigation={this.handleToggleNavigation}/>
      <Dashboard />
      {this.state.toggleNaveigation ? <Navigation /> : "" }
      </div>
    );
  }
}

export default App;
