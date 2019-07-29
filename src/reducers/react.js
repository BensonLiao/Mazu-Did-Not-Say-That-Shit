/* eslint-disable default-case */
import { combineReducers } from 'redux'
import produce from 'immer'
// import pickBy from 'lodash/pickBy'
// import merge from 'lodash/merge'
import { ADD_DATA, FEEDBACK } from '../actions'

// const addReact = (state, action) => {
//   const {
//     payload: { reacts }
//   } = action
//   // return { ...state, ...reacts }
//   return merge({}, state, reacts)
//   // Note. with spread operator will keep denormalized state consistent
//   // but with merge() it will miss the none primitive property.
//   // Maybe it's not because of merge(), will investigate this issue later.
// }

// const removeReact = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Remove the new React object from the updated lookup table
//   return pickBy(state, (value, key) => {
//     return key !== id
//   })
// }

// const reactsById = (state = {}, action) => {
//   switch (action.type) {
//     case ADD_DATA:
//     case FEEDBACK.REACT:
//       return addReact(state, action)
//     case FEEDBACK.UNDO_REACT:
//       return removeReact(state, action)
//     default:
//       return state
//   }
// }

const reactsById = produce((draft, action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.REACT:
      {
        const {
          payload: { reacts }
        } = action
        Object.keys(reacts).forEach(reactId => {
          draft[reactId] = reacts[reactId]
        })
      }
      break
    case FEEDBACK.UNDO_REACT:
      {
        const {
          payload: { id }
        } = action
        delete draft[id]
      }
      break
  }
}, {})

// const addReactIdByNormalizr = (state, action) => {
//   const {
//     payload: { reacts }
//   } = action
//   // Just append the new react's ID to the list of all IDs
//   return [...Object.keys(reacts), ...state]
// }

// const addReactId = (state, action) => {
//   console.log('action', action)
//   const {
//     payload: { id }
//   } = action
//   // Just append the new react's ID to the list of all IDs
//   return [id, ...state]
// }

// const removeReactId = (state, action) => {
//   const {
//     payload: { id }
//   } = action
//   // Just remove the react's ID from the list of all IDs
//   return state.filter(reactId => reactId !== id)
// }

// const allReact = (state = [], action) => {
//   switch (action.type) {
//     case ADD_DATA:
//     case FEEDBACK.REACT:
//       return addReactIdByNormalizr(state, action)
//     case FEEDBACK.UNDO_REACT:
//       return removeReactId(state, action)
//     default:
//       return state
//   }
// }

const allReact = produce((draft, action) => {
  switch (action.type) {
    case ADD_DATA:
    case FEEDBACK.REACT:
      {
        const {
          payload: { reacts }
        } = action
        draft.unshift(...Object.keys(reacts))
      }
      break
    case FEEDBACK.UNDO_REACT:
      {
        const {
          payload: { id }
        } = action
        draft.shift(id)
      }
      break
  }
}, [])

const reactReducer = combineReducers({
  byId: reactsById,
  allIds: allReact
})

export default reactReducer
