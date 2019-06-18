import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { createPostData } from './utils/dataMock'
import { getNormalizedData, PostSchema } from './utils/dataSchema'
import { addData } from './actions'

const reacts = 100
const comments = 50
const shares = 20
const preloadedState = createPostData(reacts, comments, shares)
console.log('preloadedState', preloadedState)
const store = configureStore()
const normalizedData = getNormalizedData(preloadedState, PostSchema)
console.log('normalizedData', normalizedData)
store.dispatch(addData(normalizedData))
console.log('store.getState()', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App postData={preloadedState.post} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
