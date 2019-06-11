import { combineReducers } from 'redux'
import reactReducer from './react'
import commentReducer from './comment'
import shareReducer from './share'

const rootReducer = combineReducers({
  reactReducer,
  commentReducer,
  shareReducer
})

export default rootReducer
