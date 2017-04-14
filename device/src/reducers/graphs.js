const INITIAL_STATE = {
  price_data: [],
}

export default function graphs(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_PRICE_DATA':
      return {
        ...state,
        price_data: [...state[price_data], action.result]
      }
      break
    default:
      return state
      break
  }
}
