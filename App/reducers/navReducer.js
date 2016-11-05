import { PUSH_ROUTE, POP_ROUTE } from '../actions/types'
import { NavigationExperimental } from 'react-native'
import * as NavigationStateUtils from 'NavigationStateUtils'

const initialState = {
  index: 0,
  routes: [{
   key: 'home',
   scene: 'home',
   title: 'Home',
  }]
}

export default function navigationState (state = initialState, action) {
  switch (action.type) {
    case PUSH_ROUTE:
      // trying to push the route where we already are, no need to change a thing
      if (state.routes[state.index].key === (action.route && action.route.key)) return state;
      // ensure no duplicate keys
      const index = state.routes.findIndex((route) => {
        return action.route.key === route.key
      });
      if (index > -1) {
        const clonedState = Object.assign({}, state);
        clonedState.routes.splice(index, 1);
        clonedState = Object.assign({}, clonedState, {index: (parseInt(state.index)-1)})
        return NavigationStateUtils.push(clonedState, action.route);
      }
      // normal case for a push
      return NavigationStateUtils.push(state, action.route);

    case POP_ROUTE:
      if (state.index === 0) return state
      return NavigationStateUtils.pop(state)

    default:
      return state
  }
}

