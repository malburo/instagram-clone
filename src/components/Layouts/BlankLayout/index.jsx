import React from 'react';

BlankLayout.propTypes = {};

function BlankLayout(props) {
  return <div className="blank-layout">{props.children}</div>;
}

export default BlankLayout;
