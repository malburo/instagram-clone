import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import LoginPage from './pages/Login';

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
      <Route component={NotFound} />
    </Switch>
  );
}
export default Auth;
