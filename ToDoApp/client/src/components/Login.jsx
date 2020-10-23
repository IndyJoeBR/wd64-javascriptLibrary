import React, { useState } from 'react';     // same as   const React = require('react');
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginComponent= (props) => {

  // State variable
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  //                ^^^^^^^^^^^   is the state-change function

  const triggerEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const triggerPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // of both the email and password are present,
    //   send them off to the api to verify if user=true
    // if true, take the token and call props.authenticateUser function
    //     authenticateUser function with that token
    // if false, display error message, but nothing further
    if (email && password) {              // 'falsey' if empty
      fetch('http://localhost:8080/user/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password })
      })
      .then( response => response.json())
      .then( data => {                      // 'data' is the object sent back
        console.log(data)
        props.authenticateUser(data.token)  // we give it just the token from body
      })
      .catch((error) => console.log(error));
    }             
  };


  return (
    <div>
      <Form onSubmit={handleLoginSubmit}>
        <h3>Login</h3>
      <FormGroup>
          <Label htmlFor="emailField">Email: </Label>
          <Input onChange={triggerEmailInputChange} value={email} type="email" name="email" id="emailField" />

        </FormGroup>

        <FormGroup>
          <Label htmlFor="passwordField">Password: </Label>
          <Input onChange={triggerPasswordInputChange} value={password} type="password" name="password" id="passwordField" />

        </FormGroup>

        <Button>Login</Button>

      </Form>



    </div>
  )
};

export default LoginComponent;  // same as    module.export = LoginComponent;