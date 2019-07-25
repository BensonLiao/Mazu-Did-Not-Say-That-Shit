import appConst from '../utils/constants'
import { getNormalizedData, ShareSchema } from '../utils/dataSchema'
import userReducer from './user'
import { feedbackShare, FEEDBACK } from '../actions'

const userId = appConst.fakeUserId

const userInfo = {
  id: userId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const actionData = {
  id: appConst.fakeShareId,
  user: userInfo,
  postId: FEEDBACK.TARGET
}

const normalizedActionData = getNormalizedData(actionData, ShareSchema)

describe('test userReducer', () => {
  it('should handle initial state', () => {
    expect(userReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      userReducer({ byId: {}, allIds: [] }, feedbackShare(normalizedActionData))
        .allIds
    ).toEqual([actionData.user.id])
  })

  it('should handle byId', () => {
    expect(
      userReducer({ byId: {}, allIds: [] }, feedbackShare(normalizedActionData))
        .byId
    ).toEqual({
      [actionData.user.id]: actionData.user
    })
  })
})
