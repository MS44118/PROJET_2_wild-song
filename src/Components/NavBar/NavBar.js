import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import Favoris from './components/Favoris';
import Help from './components/Help';
import Filter from './components/Filter';


class NavBar extends Component {
  render() {
    return (
      <Navbar  brand={<a />}  alignLinks="right" className="orange darken-2">
        <NavItem>
          <Favoris />
        </NavItem>
        <NavItem>
          <Icon>
            <Filter />
          </Icon>
        </NavItem>
        <NavItem>
          <Icon>
            search
          </Icon>
        </NavItem>
        <NavItem >
          <Help />
        </NavItem>
      </Navbar>
    );
  }
}
  
export default NavBar;