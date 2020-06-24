import NotFound from 'components/NotFound';
import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import NewfeedPage from './pages/NewFeed';

Post.propTypes = {};

function Post(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={NewfeedPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
export default Post;
