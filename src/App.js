import React, { useEffect } from 'react';
import './App.scss';
import Routes from 'routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import API from 'utils/API';
import { useDispatch } from 'react-redux';
import { loginSuccess } from 'features/Auth/AuthSlice';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      if (localStorage.jwtToken) {
        API.setToken(localStorage.jwtToken);
      }
      const response = await API.call('get', 'auth');
      dispatch(loginSuccess(response.user));
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="app">
      <Routes />
    </div>
  );
}

export default App;
