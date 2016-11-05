import * as Types from './types'

export function pushRoute (route) {
  return {
    type: Types.PUSH_ROUTE,
    route
  }
}

export function popRoute () {
  return {
    type: Types.POP_ROUTE
  }
}
