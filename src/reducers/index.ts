import { combineReducers } from 'redux'
import reactReducer from './react'
import commentReactReducer from './commentReact'
import commentReducer from './comment'
import shareReducer from './share'

const rootReducer = combineReducers({
  reacts: reactReducer,
  commentReacts: commentReactReducer,
  comments: commentReducer,
  shares: shareReducer
})

export default rootReducer
