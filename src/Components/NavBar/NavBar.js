import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import Favoris from '../Favoris/Favoris';
import Help from '../Help/Help';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar brand={<a />} alignLinks="right">
        <NavItem>
          <Favoris />
        </NavItem>
        <NavItem>
          <Filter />
        </NavItem>
        <NavItem>
          <Search />
        </NavItem>
        <NavItem >
          <Help />
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;