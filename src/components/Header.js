import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
class Header extends Component {
  constructor(){
    super();
    this.state = {
      toggleNaveigation: true
    }
    this.handleToggleNavigation = this.handleToggleNavigation.bind(this);
  }
  handleToggleNavigation(){
    let toggleNaveigation = this.state.toggleNaveigation
      this.setState({
        toggleNaveigation: !toggleNaveigation
      }, function() {
        this.props.toggleNaveigation(this.state.toggleNaveigation);
      });
    }
  render(){

    return (
      <header className="bg-secondary text-white" id="header">
      <div className="icon">
        <a className="bar-link"><i onClick = {this.handleToggleNavigation} className="fa fa-bars"></i></a>
      </div>

    </header>

    );
  }
}
export default Header;
