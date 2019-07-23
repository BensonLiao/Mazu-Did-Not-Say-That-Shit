import appConst from '../utils/constants'
import userReducer from './user'
import { FEEDBACK } from '../actions'

const userInfo = {
  id: appConst.fakeUserId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const feedbackShareAction = {
  type: FEEDBACK.SHARE,
  payload: {
    id: appConst.fakeUserId,
    user: userInfo,
    postId: FEEDBACK.TARGET
  }
}

describe('test userReducer', () => {
  it('should handle initial state', () => {
    expect(userReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      userReducer({ byId: {}, allIds: [] }, feedbackShareAction).allIds
    ).toEqual([feedbackShareAction.payload.user.id])
  })

  it('should handle byId', () => {
    expect(
      userReducer({ byId: {}, allIds: [] }, feedbackShareAction).byId
    ).toEqual({
      [feedbackShareAction.payload.user.id]: feedbackShareAction.payload.user
    })
  })
})
