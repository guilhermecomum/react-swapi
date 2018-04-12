import { combineReducers } from 'redux'

import app from '../reducer'

const reducers = {
  app
}

const rootReducer = combineReducers(reducers)
export default rootReducer
