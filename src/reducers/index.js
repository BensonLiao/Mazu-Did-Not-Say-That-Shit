import { combineReducers } from 'redux'
import reactReducer from './react'
import commentReducer from './comment'
import shareReducer from './share'
import userReducer from './user'

const rootReducer = combineReducers({
  reactReducer,
  commentReducer,
  shareReducer,
  userReducer
})

export default rootReducer
