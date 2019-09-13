import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PanelHeader from '../../Components/Layout/PanelHeader/PanelHeader.js';

import MinhasFazendas from './MinhasFazendas/MinhasFazendas';
import Fazenda from './Fazenda/Fazenda';

class Fazendas extends React.Component {
  render() {
    return (
      <div>
      	<PanelHeader size="ciia-menor" />
        <Switch>
          <Route exact path="/fazendas" component={MinhasFazendas} />
          <Route exact path="/fazendas/fazenda" component={Fazenda} />
        </Switch>
      </div>
    );
  }
}

export default Fazendas;
