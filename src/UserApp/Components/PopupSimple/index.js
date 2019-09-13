import React, { Component } from 'react'
import { Image, Popup } from 'semantic-ui-react'

export default class PopupSimple extends Component {
  render(props){
    return(
      <Popup
        key={this.props.texto}
        trigger={<Image className="icon" src={this.props.img}/>}
        header={this.props.texto}
      />
    )
  }
}