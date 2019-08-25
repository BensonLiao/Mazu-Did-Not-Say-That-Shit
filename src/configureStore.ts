import { createStore } from 'redux'
import rootReducer from './reducers'

export type AppState = ReturnType<typeof rootReducer>

const configureStore = (preloadedState?: any) => {
  return createStore(
    rootReducer,
    preloadedState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default configureStore
