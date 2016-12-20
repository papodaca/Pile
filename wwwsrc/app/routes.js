import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Auth from './api/auth';
import App from './components/App';
import Main from './components/Main';
import About from './components/About';
import Login from './components/Login';
import UserList from './components/users/userList';
import NewUser from './components/users/newUser';
import EditUser from './components/users/editUser';
import NoMatch from './components/404';

const checkAuth = (nextState, replace, callback) => {
  Auth.test().then(callback).catch(() => {
    replace("/login");
    callback();
  });
};

const checkLogin = (nextState, replace, callback) => {
  Auth.test().then(() => {
    replace("/");
    callback();
  }).catch(callback);
};

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} onEnter={checkAuth} />
    <Route path="about" component={About} onEnter={checkAuth} />
    <Route path="users" component={UserList} onEnter={checkAuth} >
      <Route path="new" component={NewUser} />
      <Route path=":id" component={EditUser} />
    </Route>
    <Route path="login" component={Login} onEnter={checkLogin} />
    <Route path="*" component={NoMatch} />
  </Route>
);

export default routes;
