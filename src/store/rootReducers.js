import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from '../reducer'

const reducers = {
  routing: routerReducer,
  app
}

const rootReducer = combineReducers(reducers)
export default rootReducer
