import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import "../styles/Register.css";

const RegisterComponent = (props) => {

// Challenge: Create the state variables for the input fields
const [ registrationEmail, setRegistrationEmail ] = useState('');
const [ registrationPassword, setRegistrationPassword ] = useState('');
const [ registrationPasswordConfirm , setRegistrationPasswordConfirm] = useState('');

// Challenge: Create the helper functions for the input fields
const triggerRegistrationEmailInputChange = (event) => {
  setRegistrationEmail(event.target.value);
};

const triggerRegistrationPasswordInputChange = (event) => {
  setRegistrationPassword(event.target.value);
};

const triggerPasswordConfirmInputChange = (event) => {
  setRegistrationPasswordConfirm(event.target.value);
};


// Challenge: Create the submit event function that POSTS to the registration route,
//   -  consider how to handle a token
const handleUserRegistration = (event) => {
  event.preventDefault();
  console.log('Registration data submitted');

  // Procedure: verify there is an email and password
  if (registrationEmail && registrationPassword) {
      console.log("Has entered email and password.")
    // Password and confirm password must match
    if ( registrationPassword === registrationPasswordConfirm ) {
      console.log("Passwords match");
      console.log("Starting fetch");

      // Register the user using FETCH -> {server}/user/register
      fetch('http://localhost:8080/user/register', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: registrationEmail, password: registrationPassword })
      })
      .then( response => response.json() )      // jsonifies the success reponse
      .then( (json) => {                        // added 'json'
        console.log("User is registered");
        console.log(json.message);              // added line
        props.authenticateUser(json.token);     // added line
      })
      .catch((error) => console.log(error));
    } else {
      // TODO:  Tooltip instead of an alert  ********************
      alert("Passwords MUST match!")
    }
  }
};



  return (
    <Form className="authForm" id="registerForm" onSubmit={handleUserRegistration}>
        <h3>Register</h3>
      <FormGroup>
          <Label htmlFor="registrationEmailField">Email: </Label>
          <Input onChange={triggerRegistrationEmailInputChange} value={registrationEmail} type="registerEmail" name="registerEmail" id="registerEmailField" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="registrationPasswordField">Password: </Label>
          <Input onChange={triggerRegistrationPasswordInputChange} value={registrationPassword} type="password" name="registerPassword" id="registrationPasswordField" />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="registrationPasswordConfirmField">Password: </Label>
          <Input onChange={triggerPasswordConfirmInputChange} value={registrationPasswordConfirm} type="password" name="registerPasswordconfirm" id="registrationPasswordConfirmField" />
        </FormGroup>

        <Button>Register</Button>

      </Form>
  );
};

export default RegisterComponent;

