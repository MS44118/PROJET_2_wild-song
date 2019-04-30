import React, { Component } from "react";
import { Navbar, NavItem } from "react-materialize";
import Favori from '../Favoris/Favoris';
import Help from '../Help/Help';
// import Filter from '../Filter/Filter';
import Search from '../Search/Search';
// import SearchEvent from '../Search/SearchEvent';
import './NavBar.css';
import logo from '../../Images/LivinSoundTransp.png';

class NavBar extends Component {
  render() {
    return (
      <Navbar  alignLinks="right" className="orange darken-2">
        <NavItem>
          <img className="logo" src={logo} alt="Logo livinsound" />
        </NavItem>
        <NavItem>
          <Favori />
        </NavItem>
        {/* <NavItem>
          <Filter />
        </NavItem> */}
        <NavItem>
          <Search  />
        </NavItem>
        {/* <NavItem>
          <SearchEvent  />
        </NavItem> */}
        <NavItem >
          <Help />
        </NavItem>
      </Navbar>
    );
  }
}

export default NavBar;