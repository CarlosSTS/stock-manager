import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Read from '../pages/Read';
import Create from '../pages/Create';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/list" component={List} />
        <Route path="/read/:id" component={Read} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />

      </Switch>
    </BrowserRouter>
  );
}