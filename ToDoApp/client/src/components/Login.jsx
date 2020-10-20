import React, { useState } from 'react';     // same as   const React = require('react');
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const LoginComponent= () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const triggerEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const triggerPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Form>
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

        <p>{email}</p>
        <p>{password}</p>
      </Form>



    </div>
  )
};

export default LoginComponent;  // same as    module.export = LoginComponent;