// import components
import { Market } from './index'

import R from 'react-native-router'


// establish routes
const route = {
  name: 'market',
  component: Market
}

export default class Router extends Component {
  render() {
    return (
      <R firstRoute={route} />
    )
  }
}
