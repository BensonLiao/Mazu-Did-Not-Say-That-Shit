import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { createPostData } from './utils/dataMock'
import { getNormalizedData } from './utils/dataSchema'
import { addData } from './actions'

const preloadedState = createPostData(2000)
console.log('preloadedState', preloadedState)
const store = configureStore()
const normalizedData = getNormalizedData(preloadedState)
// console.log('normalizedData', normalizedData)
store.dispatch(addData(normalizedData))
console.log('store.getState()', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App postData={preloadedState.post} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
