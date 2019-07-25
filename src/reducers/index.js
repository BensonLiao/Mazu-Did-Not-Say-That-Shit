import { combineReducers } from 'redux'
import reactReducer from './react'
import commentReactReducer from './commentReact'
import commentReducer from './comment'
import shareReducer from './share'
import userReducer from './user'

const rootReducer = combineReducers({
  reactReducer,
  commentReactReducer,
  commentReducer,
  shareReducer,
  userReducer
})

export default rootReducer
