import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Context } from '../AuthContext/AuthContext';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';
import Read from '../pages/Read';
import Create from '../pages/Create';
import Edit from '../pages/Edit';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated, valUser } = useContext(Context);
  valUser();

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={SignIn} />

      <CustomRoute exact path="/dashboard" component={Dashboard} isPrivate />
      <CustomRoute exact path="/list" component={List} isPrivate />
      <CustomRoute exact path="/read/:id" component={Read} isPrivate />
      <CustomRoute exact path="/create" component={Create} isPrivate />
      <CustomRoute exact path="/edit/:id" component={Edit} isPrivate />
    </Switch>
  );
}