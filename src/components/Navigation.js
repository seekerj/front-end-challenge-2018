import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';
import 'font-awesome/css/font-awesome.min.css';
class Navigation extends Component {
  render(){
    return (
      <div>
      <nav id="navbar">
      <ul>
        <a className="nav-link" href="#">
          <li><i className="fa fa-home li-icon"></i>Home</li>
        </a>
        <a className="nav-link" href="#">
          <li><i className="fa fa-book li-icon"></i>My Bench</li>
        </a>
      </ul>
    </nav>
    </div>

    );
  }
}
export default Navigation;
