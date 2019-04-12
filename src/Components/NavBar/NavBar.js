import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import Favoris from './components/Favoris';
import Help from './components/help';

class NavBar extends Component {
  render() {
    return (
      <Navbar  brand={<a />}  alignLinks="right" className="orange darken-2">
        <NavItem href="get-started.html">
          <Favoris />
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>
            filtre
          </Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Icon>
            search
          </Icon>
        </NavItem>
        <NavItem href="get-started.html">
          <Help />
        </NavItem>
      </Navbar>
    );
  }
}
  
export default NavBar;