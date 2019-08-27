import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

export type AppState = ReturnType<typeof rootReducer>

const configureStore = (preloadedState?: any) => {
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
