import { combineReducers } from 'redux'
import { ADD_DATA, FEEDBACK } from '../actions'

const addUser = (state, action) => {
  const {
    payload: { users }
  } = action
  return { ...state, ...users }
}

const usersById = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.REACT:
    case FEEDBACK.COMMENT:
    case FEEDBACK.SHARE:
      return addUser(state, action)
    default:
      return state
  }
}

const addUserIdByNormalizr = (state, action) => {
  const {
    payload: { users }
  } = action
  // Just append the new user's ID to the list of all IDs
  return [...Object.keys(users), ...state]
}

// const addUserId = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Just append the new user's ID to the list of all IDs
//   return [id, ...state]
// }

const allUser = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.REACT:
    case FEEDBACK.COMMENT:
    case FEEDBACK.SHARE:
      return addUserIdByNormalizr(state, action)
    default:
      return state
  }
}

const userReducer = combineReducers({
  byId: usersById,
  allIds: allUser
})

export default userReducer
