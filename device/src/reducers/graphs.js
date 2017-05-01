const INITIAL_STATE = {
  price_history: [],
}

export default function graphs(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_PRICE_HISTORY':
      console.log('hit reducer update price')
      return {
        ...state,
        price_history: state.price_history.concat(JSON.parse(action.result))
      }
      break
    default:
      return state
      break
  }
}
