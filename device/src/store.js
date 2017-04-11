import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
// import navigation from 'reducers/index'
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
