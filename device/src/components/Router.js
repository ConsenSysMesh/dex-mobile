import Router from 'react-native-router'

const route = {
  name: 'market',
  component: Market
}

export default class Router extends Component {
  render() {
    return (
      <Router firstRoute={route}>
    )
  }
}
