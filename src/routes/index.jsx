import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from 'components/NotFound';
import BlankLayout from 'components/Layouts/BlankLayout';
import PublicRoute from './publicRoute';
import MainLayout from 'components/Layouts/MainLayout';

const Auth = React.lazy(() => import('features/Auth'));
const Post = React.lazy(() => import('features/Post'));
const Profile = React.lazy(() => import('features/Profile'));
function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <PublicRoute path="/auth" component={Auth} layout={BlankLayout} />
          <PublicRoute
            exact
            path="/:username"
            component={Profile}
            layout={MainLayout}
          />
          <PublicRoute exact path="/" component={Post} layout={MainLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
