import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Wrapper from '../components/Wrapper'

import * as actionCreators from '../actions/actionCreators'

function mapStateToProps(state) {
  return {
    events: state.events,
    event: state.event
  }
}

function mapDispatchToProps(dispatch) {
  return {
    eventActions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)