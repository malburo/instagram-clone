import React from 'react';
import './style.css';
Loader.propTypes = {};

function Loader(props) {
  return (
    <div className="browser-screen-loading-content">
      <div className="loading-dots dark-gray">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}

export default Loader;
