import React from 'react';

MainLayout.propTypes = {};

function MainLayout(props) {
  return <div className="main-layout">{props.children}</div>;
}

export default MainLayout;
