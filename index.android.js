import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './App/reducers'
import AppContainer from './App/containers/AppContainer'
// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );

  const store =  createStore(reducer, initialState, enhancer);
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./App/reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('ReduxAppSeed', () => App);
