// Challenge:  Scaffold out of the Navbar component
//    Use reactstrap to create the navbar
//    Brand should say: ToDo
//    2 links: Lists, Login

import React, { useState } from 'react';     // same as   const React = require('react');

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const NavbarComponent = () => {

  
//         var      function
  const [ isOpen, changeIsOpen ] = useState(false); //'false' is the initial state of both isOpen and changeIsOpen, they get it from useState

//      sets the toggler    using  function   invert-of-isOpen       
  const toggleNavbarMenu = () => changeIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand>ToDo</NavbarBrand>
      <NavbarToggler onClick={ toggleNavbarMenu } />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <p>Lists</p>
          </NavItem>
          <NavItem>
            <p>Login</p>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};



export default NavbarComponent;