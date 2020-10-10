import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import EditProfile from './pages/EditProfile';
import ChangePassword from './pages/ChangePassword';
import PrivateRoute from 'routes/privateRoute';
import EditAccountLayout from 'components/Layouts/EditAccountLayout';

Accounts.propTypes = {};

function Accounts(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <PrivateRoute
        exact
        path={`${match.path}/edit`}
        component={EditProfile}
        layout={EditAccountLayout}
      />
      <PrivateRoute
        exact
        path={`${match.path}/password/change`}
        component={ChangePassword}
        layout={EditAccountLayout}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
export default Accounts;
