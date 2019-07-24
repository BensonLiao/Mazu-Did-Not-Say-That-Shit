// As of Babel 7.4.0, this package has been deprecated in favor of directly
// including core-js/stable (to polyfill ECMAScript features)
// and regenerator-runtime/runtime (needed to use transpiled generator functions):
// import "core-js/stable";
// import "regenerator-runtime/runtime";
// ref: https://babeljs.io/docs/en/babel-polyfill
import 'core-js/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { createPostData } from './utils/dataMock'
import { getNormalizedData, PostSchema } from './utils/dataSchema'
import { addData } from './actions'

const preloadedState = createPostData()
const store = configureStore()
const normalizedData = getNormalizedData(preloadedState, PostSchema)
store.dispatch(addData(normalizedData))

ReactDOM.render(
  <Provider store={store}>
    <App postData={preloadedState.post} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
