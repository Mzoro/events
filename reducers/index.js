import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import events from './events'
import event from './event'

export default combineReducers({
  events,
  event,
  routing: routerReducer
})