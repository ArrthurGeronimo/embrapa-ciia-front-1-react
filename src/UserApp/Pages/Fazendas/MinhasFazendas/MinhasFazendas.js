import React from "react";
import './style.css';

import DividerSimple from './../../../Components/DividerSimple';
import FazendaCard from './../../../Components/FazendaCard';

class MinhasFazendas extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="row">
            <div className="ui breadcrumb">
              <div className="active section">Minhas Fazendas</div>
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
              <FazendaCard 
                nome="Nova Esperança"
                qTalhoes="2"
                qPiquetes="4"
                qEstacoes="3"
                qAnimais="16"
                qSensores="6"
              />
            </div>
            <div className="column">
              <FazendaCard 
                nome="Raio de Sol"
                qTalhoes="4"
                qPiquetes="8"
                qEstacoes="4"
                qAnimais="44"
                qSensores="18"
              />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MinhasFazendas;
