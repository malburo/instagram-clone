import React from 'react';
import './App.scss';
import Routes from 'routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from 'utils/API';
import { useDispatch } from 'react-redux';
import { loginSuccess } from 'features/Auth/AuthSlice';
import { parseJwt } from 'utils/parseJWT';
function App() {
  const dispatch = useDispatch();
  if (localStorage.jwtToken) {
    API.setToken(localStorage.jwtToken);
    const user = parseJwt(localStorage.jwtToken);
    dispatch(loginSuccess(user));
  }
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
