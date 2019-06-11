import { createStore } from 'redux'
import rootReducer from './pages/reducers'

const configureStore = preloadedState => {
  return createStore(rootReducer, preloadedState)
}

export default configureStore
