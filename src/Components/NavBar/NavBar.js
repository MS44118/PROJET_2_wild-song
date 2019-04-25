import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import Favoris from '../Favoris/Favoris';
import Help from '../Help/Help';
import Filter from '../Filter/Filter';

class NavBar extends Component {
  render() {
    return (
      <Navbar alignLinks="right" className="orange darken-2">
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