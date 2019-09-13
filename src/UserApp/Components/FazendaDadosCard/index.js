import React from "react";

class FazendaDadosCard extends React.Component {
  render(props) {
    return (
      <div className="column">
          <a className="ui card" href="#card-example-link-card">
            <div className="content">
              <div className="header">
                <img src={this.props.img} alt=""/>
              </div>
              <div className="title">{this.props.title}</div>
            </div>
          </a>
      </div>
    );
  }
}

export default FazendaDadosCard;
