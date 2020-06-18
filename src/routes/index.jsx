import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from 'components/NotFound';
import BlankLayout from 'components/Layouts/BlankLayout';
import PublicRoute from './publicRoute';

const Auth = React.lazy(() => import('features/Auth'));

function Routes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <PublicRoute path="/auth" component={Auth} layout={BlankLayout} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default Routes;
