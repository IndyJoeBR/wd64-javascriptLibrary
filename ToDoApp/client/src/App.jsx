import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';         // imports the CSS file (instead of link in html)
import LoginComponent from './components/Login.jsx';
import NavbarComponent from './components/Navbar.jsx';

function App() {

  // Array destructuring to create a state variable
  const [ authenticationJWT, changeAuthJWT ] = useState('');
  //                          ^^^^^^^^^^^   is the state-change function

  // Helper function
  const authenticateUser = (token) => {
      // Purpose: save JWT locally
      // Purpose: save JWT in the browser
      window.locatStorage.setItem("authToken", token);
      // Use the 'state change' function to set the new token in the state
      changeAuthJWT(token);
  };


  return (
      <BrowserRouter>

        <div className="App">
          <NavbarComponent />

          <Switch>
            <Route path="/login">
              <LoginComponent authenticateUser={authenticateUser} />
            </Route>
          </Switch>
          
        </div>
        
    
    </BrowserRouter>


    
  );
}

export default App;
