import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ResetPasswordPage from './pages/ResetPassword';

Auth.propTypes = {};

function Auth(props) {
  const match = useRouteMatch();
  const history = useHistory();
  // const token = localStorage.getItem('jwtToken');
  // if (token) {
  //   history.push('/');
  // }
  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={LoginPage} />
      <Route exact path={`${match.url}/register`} component={RegisterPage} />
      <Route exact path={`${match.url}/reset`} component={ResetPasswordPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
export default Auth;
