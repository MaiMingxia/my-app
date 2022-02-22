import React from 'react'
import Loadable from "react-loadable";
import { createBrowserHistory } from "history";
import { Router, Route, Link } from 'react-router'
import { routes } from '../../routes.js'
const history = createBrowserHistory();
const App = () => {
return <Router history={history}>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          exact
          path={route.path}
          component={Loadable({
            loader: route.load,
            loading: () => null,
          })}
        />
      );
    })}
  </Router>
}
export default App