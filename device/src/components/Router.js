// import components
import { Market } from './index'
import {
  View,
} from 'react-native'
import Router from 'react-native-router'


// establish routes
const route = {
  name: 'market',
  component: Market
}

export default class RouterComponent extends Component {
  render() {
    return (
      <View />
    )
  }
}
