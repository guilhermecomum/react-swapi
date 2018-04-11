import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const reducers = {
  routing: routerReducer,
}

const rootReducer = combineReducers(reducers)
export default rootReducer
