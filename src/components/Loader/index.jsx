import React from 'react';
import './style.css';
Loader.propTypes = {};

function Loader(props) {
  return (
    <div class="browser-screen-loading-content">
      <div class="loading-dots dark-gray">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  );
}

export default Loader;
