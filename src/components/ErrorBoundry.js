import React, { Component } from 'react'

class ErrorBoundry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError : false
    }
  }

  componentDidCatch() {
    this.setState({hasError:true})
  }

  render() {
    const {hasError} = this.state
    return hasError? <h1>Ooops.An error occurred</h1>
    : this.props.children
  }
}

export default ErrorBoundry