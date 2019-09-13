import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'

export default class DividerWithText extends Component {
  render(props){
    return(
      <Divider horizontal>{this.props.text}</Divider>
    )
  }
}