import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Sidebar from './Sidebar/Sidebar.js';
import Header from './Header/Header.js';
//import Footer from './Footer/Footer.js';

import DashboardRoutes from "./../../Routes/DashboardRoutes";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={DashboardRoutes} />
        <div className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
            {DashboardRoutes.map((prop, key) => {
              if (prop.collapse) {
                return prop.views.map((prop2, key2) => {
                  return (
                    <Route
                      path={prop2.path}
                      component={prop2.component}
                      key={key2}
                    />
                  );
                });
              }
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </div>     
      </div>
    );
  }
}

export default Dashboard;
