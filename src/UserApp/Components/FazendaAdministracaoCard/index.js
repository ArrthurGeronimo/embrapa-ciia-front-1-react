import React from "react";
import DividerSimple from './../DividerSimple';

class FazendaAdministracaoCard extends React.Component {
  render(props) {
    return (
      <div className="ui card">
          <div className="content">
            <div className="header">
              <img src={this.props.img} alt=""/>
              <h2>{this.props.name}</h2>
            </div>
            <div className="meta">
              {this.props.quant} {this.props.name} cadastrados
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ultricies sem.
            </div>
            <DividerSimple />
            <button className="ui icon right labeled button">Gerenciar<i aria-hidden="true" className="right arrow icon"></i></button>
          </div>
      </div>
    );
  }
}

export default FazendaAdministracaoCard;
