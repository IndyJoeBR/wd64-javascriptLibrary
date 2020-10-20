import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="header">
        <NavbarBrand href="/">React Library</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Navlink href="https://github.com/yourhandle/yourrepoforthisapp">
              Github
            </Navlink>
          </NavItem>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;