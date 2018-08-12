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
      requests: []
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
          }.bind(this),
          error: function(xhr, status, err){
            console.log(err);
          }
        });
  }

  componentWillUpdate() {
    this.getRequests();
  }

   componentDidMount() {
      this.getRequests();
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
               <Dashboard requests={this.state.requests}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
