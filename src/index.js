import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createPostData } from './utils/dataMock'
import { getNormalizedData } from './utils/dataSchema'
import { addData } from './pages/actions'

const preloadedState = createPostData(2000)
console.log('preloadedState', preloadedState)
const store = configureStore()
store.dispatch(addData(getNormalizedData(preloadedState)))
console.log('store.getState()', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
