import { createStore } from 'redux'
import rootReducer from './reducers'

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}

export default configureStore
