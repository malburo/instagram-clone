import authApi from 'api/authApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loginSuccess } from 'features/Auth/AuthSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from 'routes';
import './App.scss';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const response = await authApi.auth();
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
