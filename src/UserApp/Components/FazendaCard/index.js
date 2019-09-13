import React from "react";
import { NavLink } from "react-router-dom";

import PopupSimple from './../PopupSimple';

import FazendaIcon from './../../../assets/img/icons/fazenda.png';
import OlhoIcon from './../../../assets/img/icons/olho.png';
import TalhaoIcon from './../../../assets/img/icons/talhao.png';
import PiqueteIcon from './../../../assets/img/icons/piquete.png';
import EstacaoIcon from './../../../assets/img/icons/estacao.png';
import AnimalIcon from './../../../assets/img/icons/animal.png';
import SensorIcon from './../../../assets/img/icons/sensor.png';

class FazendaCard extends React.Component {
  render(props) {
    return (
      <NavLink to="/fazendas/fazenda" className="ui card ciia-card" href="#card-example-link-card">
        <div className="content">
          <div className="meta">
            Fazenda
          </div>
          <div className="header">
            {this.props.nome}
          </div>
          <div className="description">
            <h2 className="ui icon header btn-visualizar">
              <img src={OlhoIcon} alt="Imagem de um Olho"/>
              <p>Visualizar</p>
            </h2>
          </div>
          <div className="info">
            <div className="ui divided five column grid">
              <div className="column">
                <PopupSimple texto="Quantidade de Talhões" img={TalhaoIcon} />
                {this.props.qTalhoes}
              </div>
              <div className="column">
                <PopupSimple texto="Quantidade de Piquetes" img={PiqueteIcon} />
                {this.props.qPiquetes}
              </div>
              <div className="column">
                <PopupSimple texto="Quantidade de Estações" img={EstacaoIcon} />
                {this.props.qEstacoes}
              </div>
              <div className="column">
                <PopupSimple texto="Quantidade de Animais" img={AnimalIcon} />
                {this.props.qAnimais}
              </div>
              <div className="column">
                <PopupSimple texto="Quantidade de Sensores" img={SensorIcon} />
                {this.props.qSensores}
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default FazendaCard;
