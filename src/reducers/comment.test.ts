import appConst from '../utils/constants'
import commentReducer from './comment'
import { FEEDBACK } from '../actions/types'
import { feedbackComment } from '../actions'

const userInfo = {
  id: appConst.fakeUserId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png',
  isVerified: false
}
const actionData = {
  entities: {
    id: appConst.fakeCommentId,
    saying: 'fakecomment',
    user: userInfo,
    targetId: FEEDBACK.TARGET,
    isHidden: false
  }
}

const initialState = commentReducer(undefined, {} as any)
const state = {
  byId: {},
  allIds: {
    items: [] as Array<string>,
    isFetching: false
  }
}

describe('test commentReducer', () => {
  it('should handle initial state', () => {
    expect(commentReducer(state, {} as any)).toEqual(initialState)
  })

  it('should handle add comment', () => {
    expect(commentReducer(state, feedbackComment(actionData))).toEqual({
      byId: {
        [actionData.entities.id]: actionData.entities
      },
      allIds: {
        items: [actionData.entities.id],
        isFetching: false
      }
    })
  })
})
