import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

PublicRoute.propTypes = {};

function PublicRoute({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default PublicRoute;
