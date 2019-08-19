/* eslint-disable no-restricted-globals */
import { createPostData } from './utils/dataMock'
import { getNormalizedData, PostSchema } from './utils/dataSchema'
import { addData } from './actions'

const preloadedState = createPostData()
const normalizedData = getNormalizedData(preloadedState, PostSchema)

self.addEventListener('message', event => {
  console.log('event.data', event.data)
  postMessage(addData(normalizedData))
})
