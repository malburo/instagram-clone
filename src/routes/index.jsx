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
import NewFeedLayout from 'components/Layouts/NewFeedLayout';

const Auth = React.lazy(() => import('features/Auth'));
const Post = React.lazy(() => import('features/Post'));
const Profile = React.lazy(() => import('features/Profile'));
const Accounts = React.lazy(() => import('features/Accounts'));
function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Post}
            layout={NewFeedLayout}
          />
          <PublicRoute
            exact
            path="/404"
            component={NotFound}
            layout={MainLayout}
          />
          <PublicRoute path="/auth" component={Auth} layout={BlankLayout} />
          <PrivateRoute
            path="/accounts"
            component={Accounts}
            layout={MainLayout}
          />
          <PrivateRoute
            path="/:username"
            component={Profile}
            layout={MainLayout}
          />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
