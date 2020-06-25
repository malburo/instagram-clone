import React from 'react';
import './App.scss';
import Routes from 'routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from 'utils/API';
function App() {
  if (localStorage.jwtToken) {
    API.setToken(localStorage.jwtToken);
  }
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
