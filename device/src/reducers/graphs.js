const INITIAL_STATE = {
  price_history: [],
  volume_history: [],
  market_depth: []
}

export default function graphs(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_PRICE_HISTORY':
      return {
        ...state,
        price_history: state.price_history.concat(JSON.parse(action.result))
      }
      break
    case 'UPDATE_VOLUME_HISTORY':
      return {
        ...state,
        volume_history: state.volume_history.concat(JSON.parse(action.result))
      }
    case 'UPDATE_MARKET_DEPTH':
      return {
        ...state,
        market_depth: state.market_depth.concat(JSON.parse(action.result))
      }
    default:
      return state
      break
  }
}
