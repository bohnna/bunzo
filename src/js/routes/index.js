import { IndexRoute, Route }  from 'react-router';
import React                  from 'react';
import MainLayout             from '../layouts/main';

export default (
  <Route component={MainLayout}>
    <Route path="/">
    </Route>
  </Route>
);
