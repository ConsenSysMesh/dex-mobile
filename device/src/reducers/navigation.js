const INITIAL_STATE = {
  grid_x: 4,
  grid_y: 4,
  x: 0,
  y: 0,
}

export default function navigation(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SWIPE_RIGHT':
      console.log('hit reducer')
      return {
        ...state,
        x: state.x + 1
      }
      break
    case 'SWIPE_LEFT':
      console.log('hit reducer')
      return {
        ...state,
        x: state.x - 1
      }
      break
    case 'SWIPE_UP':
      return {
        ...state,
        y: state.y + 1
      }
      break
    case 'SWIPE_DOWN':
      return {
        ...state,
        y: state.y - 1
      }
      break
    default:
      return state
      break
  }
}
