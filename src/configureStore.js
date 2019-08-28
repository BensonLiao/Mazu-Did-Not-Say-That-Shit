import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(sagaMiddleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
    runSaga: sagaMiddleware.run
  }
}

export default configureStore
