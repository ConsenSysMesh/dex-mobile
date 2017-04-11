import * as reducers from './reducers/index'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers } from 'redux'

const reducer = combineReducers({...reducers})
const store = createStore(reducer, applyMiddleware(thunk))

export default store
