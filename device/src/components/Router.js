// import components
import React, { PropTypes } from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import {
  View,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import { Market } from './index'
console.log('Market', Market)

export const Router = StackNavigator({
  Market: { screen: Market}
})

// const NavigationState = ({ dispatch, nav }) => (
//   <AppNavigator navigation={addNavigationHelpers({ dispatch, nav })} />
// )
//
// const mapStoreToProps = (store) => {
//   let mappedProps = new Object()
//   mappedProps.navigation = store.navigation
//   return mappedProps
// }
//
// const Router = connect(mapStoreToProps)(NavigationState)
//
// export default Router
