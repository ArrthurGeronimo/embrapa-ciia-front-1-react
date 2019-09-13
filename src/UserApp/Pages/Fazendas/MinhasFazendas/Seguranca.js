import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';

import PopupSimple from './../../../Components/PopupSimple';
import DividerSimple from './../../../Components/DividerSimple';

import FazendaIcon from './../../../../assets/img/icons/fazenda.png';
import OlhoIcon from './../../../../assets/img/icons/olho.png';
import TalhaoIcon from './../../../../assets/img/icons/talhao.png';
import PiqueteIcon from './../../../../assets/img/icons/piquete.png';
import EstacaoIcon from './../../../../assets/img/icons/estacao.png';
import AnimalIcon from './../../../../assets/img/icons/animal.png';
import SensorIcon from './../../../../assets/img/icons/sensor.png';

class MinhasFazendas extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="row">
            <div className="ui breadcrumb">
              <div className="active section">Fazendas</div>
            </div>
          </div>
          <div className="row">
            <div className="ui center aligned container">
              <h1 className="title">MINHAS FAZENDAS</h1>
              <DividerSimple />
            </div>
          </div>
          <div className="ui stackable three column grid">
            <div className="column">
              <a className="ui card ciia-first-card" href="#card-example-link-card">
                <div className="content">
                  <i aria-hidden="true" className="add circle icon"></i>
                  <h5>Adicionar</h5>
                </div>
              </a>
            </div>
            <div className="column">
              <NavLink to="/fazendas/fazenda" className="ui card ciia-card" href="#card-example-link-card">
                <div className="content">
                  <div className="meta">
                    Fazenda
                  </div>
                  <div className="header">
                    Nova Esperança
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
                        O
                      </div>
                      <div className="column">
                        <PopupSimple texto="Quantidade de Piquetes" img={PiqueteIcon} />
                        O
                      </div>
                      <div className="column">
                        <PopupSimple texto="Quantidade de Estações" img={EstacaoIcon} />
                        O
                      </div>
                      <div className="column">
                        <PopupSimple texto="Quantidade de Animais" img={AnimalIcon} />
                        O
                      </div>
                      <div className="column">
                        <PopupSimple texto="Quantidade de Sensores" img={SensorIcon} />
                        O
                      </div>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MinhasFazendas;
