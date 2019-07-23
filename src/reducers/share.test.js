import appConst from '../utils/constants'
import shareReducer from './share'
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
    id: appConst.fakeShareId,
    user: userInfo,
    postId: FEEDBACK.TARGET
  }
}

describe('test shareReducer', () => {
  it('should handle initial state', () => {
    expect(shareReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      shareReducer({ byId: {}, allIds: [] }, feedbackShareAction).allIds
    ).toEqual([feedbackShareAction.payload.id])
  })

  it('should handle byId', () => {
    expect(
      shareReducer({ byId: {}, allIds: [] }, feedbackShareAction).byId
    ).toEqual({
      [feedbackShareAction.payload.id]: feedbackShareAction.payload
    })
  })
})
