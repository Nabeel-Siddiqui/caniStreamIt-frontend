import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Nav from './Components/Nav';
import axios from 'axios';


const App = () => {
  
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
};

export default App;