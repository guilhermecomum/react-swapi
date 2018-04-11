import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Children from './Children'

export default class Layout extends Component {
  render() {
    return (
      <Children>
        <Container style={{ paddingTop: 80, display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            {this.props.render(this.props)}
          </div>
        </Container>
      </Children>
    )
  }
}
