import appConst from '../utils/constants'
import reactReducer from './react'
import { FEEDBACK, REACTIONS } from '../actions/types'
import { feedbackReact, undoReact } from '../actions'

const userInfo = {
  id: appConst.fakeUserId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png',
  isVerified: false
}

const actionData = {
  entities: {
    id: appConst.fakeReactId,
    feeling: REACTIONS.LIKE,
    user: userInfo,
    targetId: FEEDBACK.TARGET
  }
}

const userInfo2 = {
  id: `${appConst.fakeUserId}2`,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png',
  isVerified: false
}

const actionData2 = {
  entities: {
    id: `${appConst.fakeReactId}2`,
    feeling: REACTIONS.LIKE,
    user: userInfo2,
    targetId: FEEDBACK.TARGET
  }
}

const initialState = reactReducer(undefined, {} as any)
const state = {
  byId: {},
  allIds: {
    items: [] as Array<string>,
    isFetching: false
  }
}
const stateWithOneData = {
  byId: {
    [actionData.entities.id]: actionData.entities
  },
  allIds: {
    items: [actionData.entities.id],
    isFetching: false
  }
}
describe('test reactReducer', () => {
  it('should handle initial state', () => {
    expect(reactReducer(state, {} as any)).toEqual(initialState)
  })

  it('should handle add react to post', () => {
    expect(reactReducer(state, feedbackReact(actionData))).toEqual({
      byId: {
        [actionData.entities.id]: actionData.entities
      },
      allIds: {
        items: [actionData.entities.id],
        isFetching: false
      }
    })
  })

  it('should handle add more react to post', () => {
    expect(reactReducer(stateWithOneData, feedbackReact(actionData2))).toEqual({
      byId: {
        [actionData.entities.id]: actionData.entities,
        [actionData2.entities.id]: actionData2.entities
      },
      allIds: {
        items: [actionData2.entities.id, actionData.entities.id],
        isFetching: false
      }
    })
  })

  it('should handle remove react from post', () => {
    expect(
      reactReducer(stateWithOneData, undoReact(actionData.entities.id))
    ).toEqual(initialState)
  })
})
