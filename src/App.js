import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import Routes from 'routes';
import './App.scss';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { getMe } from 'app/userSlice';
import 'antd/dist/antd.css';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const getMeResult = await dispatch(getMe());
        unwrapResult(getMeResult);
      } catch (err) {
        console.log(err);
      }
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
