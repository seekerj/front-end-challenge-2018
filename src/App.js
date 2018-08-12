import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleNaveigation: true,
      requests: [],
      count: 0,
      memory: 0,
      activities: []
    }
    this.handleToggleNavigation = this.handleToggleNavigation.bind(this);
  }
  handleToggleNavigation(toggleNaveigation) {
     this.setState({
       toggleNaveigation:toggleNaveigation
     });
  }
  getRequests() {
    $.ajax({
          url: 'http://www.mocky.io/v2/5b4dae7431000013115ebd12',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({requests: data.reply});
          }.bind(this)});
  }

  getMemory() {
    $.ajax({
          url: 'http://www.mocky.io/v2/5b4dad7c31000055005ebd04',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({memory: data.memory});
          }.bind(this)});
  }

  getActivities() {
    $.ajax({
          url: 'http://www.mocky.io/v2/5b4daf3431000055005ebd18',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({activities: data.reply});
          }.bind(this)});
  }

  getInvocation() {
    $.ajax({
          url: 'http://www.mocky.io/v2/5b4dadc831000013115ebd05',
          dataType:'json',
          cache: false,
          success: function(data){
            this.setState({count: data.invocations});
          }.bind(this)});
  }

   componentDidMount() {
      this.getRequests();
      this.getMemory();
      this.getInvocation();
      this.getActivities();
   }

  render() {
    return (
      <div>
        <Header toggleNaveigation={this.handleToggleNavigation}/>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              {this.state.toggleNaveigation ? <Navigation /> : "" }
            </div>
            <div className="col-md-10">
               <Dashboard requests={this.state.requests}  memory={this.state.memory}  count={this.state.count} activities={this.state.activities}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
