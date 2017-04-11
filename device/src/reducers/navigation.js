const INITIAL_STATE = {
  grid_x: 4,
  grid_y: 4,
  x: 0,
  y: 0,
}

export default function navigation(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SWIPE_RIGHT':
      return {
        ...state,
        x: state.x++
      }
      break
    case 'SWIPE_LEFT':
      return {
        ...state,
        x: state.x--
      }
      break
    case 'SWIPE_UP':
      console.log('hit reducer')
      return {
        ...state,
        y: state.y++
      }
      break
    case 'SWIPE_DOWN':
      return {
        ...state,
        y: state.y--
      }
      break
    default:
      return state
      break
  }
}
