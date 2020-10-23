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

import { Link  } from 'react-router-dom';


const NavbarComponent = (props) => {

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
          { props.isLoggedIn ? (
                  <>
                    <NavItem className="roomToBreathe">
                      <p>Lists</p>
                    </NavItem>

                    <NavItem className="roomToBreathe">
                      <p>Logout</p>
                    </NavItem>

                  </>
              ) : (
                  <>
                    <NavItem className="roomToBreathe">
                      <Link to="/login">Login</Link>
                    </NavItem>
                    <NavItem className="roomToBreathe">
                      <Link to="/register">Register</Link>
                    </NavItem>
                  </>
              )
          }
        </Nav>
      </Collapse>
    </Navbar>
  );
};



export default NavbarComponent;