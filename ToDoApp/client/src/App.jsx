import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';         // imports the CSS file (instead of link in html)
import ListsComponent from './components/Lists.jsx';
import LoginComponent from './components/Login.jsx';
import NavbarComponent from './components/Navbar.jsx';
import RegisterComponent from './components/Register.jsx';

function App() {

  // Array destructuring to create a state variable
  const [ authenticationJWT, changeAuthJWT ] = useState('');
  //      state variable      ^^^^^^^^^^^   is the state-change method

  // If the user had logged in already, get the previous token
  useEffect( () => {
    if(window.localStorage.getItem('authToken')) {
        changeAuthJWT(window.localStorage.getItem('authToken'));
    }
  }, []);               // without the '[]' empty array, there will be an infinite
  // ^^                 // and infinite loop as changeAuthJWT re-fires causing the
                        // useEffect to refire, refiring changeAuthJWT, etc...            


  // Helper function
  const authenticateUser = (token) => {
      // Purpose: save JWT locally
      // Purpose: save JWT in the browser
      window.localStorage.setItem("authToken", token);
      // Use the 'state change' function to set the new token in the state
      changeAuthJWT(token);
  };


  return (
      <BrowserRouter>

        <div className="App">
          <NavbarComponent isLoggedIn={authenticationJWT} />

          <Switch>
            <Route exact path="/login">
              <LoginComponent authenticateUser={authenticateUser} />
            </Route>
            <Route exact path="/register">
              <RegisterComponent authenticateUser={authenticateUser} />
            </Route>
            <Route exact path="/myLists">
            <ListsComponent token={authenticationJWT}/>
            </Route>
          </Switch>
          
        </div>
        
    
    </BrowserRouter>


    
  );
}

export default App;
