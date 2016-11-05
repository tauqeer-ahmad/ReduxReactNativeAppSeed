import React, { Component } from 'react'

import {
  BackAndroid,
  NavigationExperimental
} from 'react-native'

import Home from './Home'
import Second from './Second'

const {
  StateUtils: NavigationStateUtils,
  Transitioner: NavigationTransitioner,
  Card: NavigationCard,
  CardStack: NavigationCardStack,
  Header: NavigationHeader
} = NavigationExperimental

class NavRoot extends Component {
  constructor (props) {
    super(props)
    this._renderScene = this._renderScene.bind(this)
    this._handleBackAction = this._handleBackAction.bind(this)
  }

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
  }

  componentWillUnmount () {
    BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
  }

  _renderScene (props) {
     const { route } = props.scene
    if (route.scene === 'home') {
      return <Home {...this.props} route={route} _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
    }

    if (route.scene === 'second') {
      return <Second {...this.props} route={route} _handleNavigate={this._handleNavigate.bind(this)} _goBack={this._handleBackAction.bind(this)}/>
    }
  }

  _handleBackAction () {
    if (this.props.navigation.index === 0) {
      return false
    }
    this.props.popRoute()
    return true
  }

  _handleNavigate (action) {
    switch (action && action.type) {
      case 'push':
        this.props.pushRoute(action.route)
        return true
      case 'back':
      case 'pop':
        return this._handleBackAction()
      default:
        return false
    }
  }

  render () {
    return (
      <NavigationTransitioner
        navigationState={this.props.navigation}
        onNavigate={this._handleNavigate.bind(this)}
        render={this._renderScene} />
    )
  }
}

export default NavRoot
