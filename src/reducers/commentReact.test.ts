import appConst from '../utils/constants'
import commentReactReducer from './commentReact'
import { REACTIONS } from '../actions/types'
import { feedbackReactToComment, undoReactToComment } from '../actions'

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
    targetId: appConst.fakeCommentId
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
    id: appConst.fakeReactId,
    feeling: REACTIONS.LIKE,
    user: userInfo2,
    targetId: appConst.fakeCommentId
  }
}

const initialState = commentReactReducer(undefined, {} as any)
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
describe('test commentReactReducer', () => {
  it('should handle initial state', () => {
    expect(commentReactReducer(state, {} as any)).toEqual(initialState)
  })

  it('should handle add react to comment', () => {
    expect(
      commentReactReducer(state, feedbackReactToComment(actionData))
    ).toEqual({
      byId: {
        [actionData.entities.id]: actionData.entities
      },
      allIds: {
        items: [actionData.entities.id],
        isFetching: false
      }
    })
  })

  it('should handle add more react to comment', () => {
    expect(
      commentReactReducer(stateWithOneData, feedbackReactToComment(actionData2))
    ).toEqual({
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

  it('should handle remove react from comment', () => {
    expect(
      commentReactReducer(
        stateWithOneData,
        undoReactToComment(actionData.entities.id)
      )
    ).toEqual(initialState)
  })
})
