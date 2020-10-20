import React from 'react';
/*  import logo from './logo.svg';   */
import './App.css';         // imports the CSS file (instead of link in html)
import LoginComponent from './components/Login.jsx';
import NavbarComponent from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <NavbarComponent />

    <div id="wrapper">
      <LoginComponent />
    </div>

    </div>
  );
}

export default App;
