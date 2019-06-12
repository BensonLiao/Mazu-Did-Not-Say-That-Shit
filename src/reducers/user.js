import { combineReducers } from 'redux'
import { ADD_DATA, FEEDBACK } from '../actions'

const addUser = (state, action) => {
  const { payload } = action
  const { user } = payload

  // Insert the new User object into the updated lookup table
  return {
    ...state,
    [user.id]: user
  }
}

const usersById = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK.REACT:
    case FEEDBACK.COMMENT:
    case FEEDBACK.SHARE:
      return addUser(state, action)
    case ADD_DATA:
      return { ...state, ...action.payload.users }
    default:
      return state
  }
}

const addUserId = (state, action) => {
  const { payload } = action
  const {
    user: { id }
  } = payload
  // Just append the new user's ID to the list of all IDs
  return state.concat(id)
}

const allUser = (state = [], action) => {
  switch (action.type) {
    case FEEDBACK.REACT:
    case FEEDBACK.COMMENT:
    case FEEDBACK.SHARE:
      return addUserId(state, action)
    case ADD_DATA:
      return [...state, ...Object.keys(action.payload.users)]
    default:
      return state
  }
}

const userReducer = combineReducers({
  byId: usersById,
  allIds: allUser
})

export default userReducer
