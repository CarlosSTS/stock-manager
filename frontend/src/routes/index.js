import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Read from '../pages/Read';
import Create from '../pages/Create';
import Edit from '../pages/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Dashboard} />
        <Route path="/list" component={List} />
        <Route path="/read/:id" component={Read} />
        <Route path="/create" component={Create} />
        <Route path="/edit/:id" component={Edit} />

      </Switch>
    </BrowserRouter>
  );
}