import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//Semantic-UI-CSS
import 'semantic-ui-css/semantic.min.css';
//Creative Tim
import './assets/css/now-ui-dashboard.css';
//Bootstrap
import './assets/css/bootstrap.css';

import UserIndexRoutes from "./UserApp/Routes/IndexRoutes";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {UserIndexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </Router>,
  document.getElementById("root")
);
