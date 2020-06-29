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
import Loader from 'components/Loader';
import PrivateRoute from './privateRoute';

const Auth = React.lazy(() => import('features/Auth'));
const Post = React.lazy(() => import('features/Post'));
const Profile = React.lazy(() => import('features/Profile'));
function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/404" component={NotFound} />
          <PublicRoute path="/auth" component={Auth} layout={BlankLayout} />
          <PrivateRoute
            exact
            path="/:username"
            component={Profile}
            layout={MainLayout}
          />
          <PrivateRoute exact path="/" component={Post} layout={MainLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
