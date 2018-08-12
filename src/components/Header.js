import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import 'font-awesome/css/font-awesome.min.css';
class Header extends Component {
  render(){
    return (
      <header className="bg-secondary text-white" id="header">
      <div className="icon">
        <a className="bar-link"><i className="fa fa-bars"></i></a>
      </div>
    </header>

    );
  }
}
export default Header;
