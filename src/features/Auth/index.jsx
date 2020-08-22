import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ResetPasswordPage from './pages/ResetPassword';
import NewPasswordPage from './pages/NewPasswordPage';
Auth.propTypes = {};

function Auth(props) {
  const match = useRouteMatch();
  const history = useHistory();
  const token = localStorage.jwtToken;
  if (token) {
    history.push('/');
  }
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={LoginPage} />
      <Route exact path={`${match.url}/register`} component={RegisterPage} />
      <Route exact path={`${match.url}/reset`} component={ResetPasswordPage} />
      <Route
        exact
        path={`${match.url}/reset/:token`}
        component={NewPasswordPage}
      />
      <Route component={NotFound} />
    </Switch>
  );
}
export default Auth;
