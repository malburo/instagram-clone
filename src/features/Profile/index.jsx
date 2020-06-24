import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import ProfilePage from './pages/ProfilePage';

Profile.propTypes = {};

function Profile(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={match.url} component={ProfilePage} />
      <Route component={NotFound} />
    </Switch>
  );
}
export default Profile;
