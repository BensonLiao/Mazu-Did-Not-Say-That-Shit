import appConst from '../utils/constants'
import shareReducer from './share'
import { FEEDBACK } from '../actions/types'
import { feedbackShare } from '../actions'

const userInfo = {
  id: appConst.fakeUserId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png',
  isVerified: false
}
const actionData = {
  entities: {
    id: appConst.fakeShareId,
    user: userInfo,
    postId: FEEDBACK.TARGET
  }
}

const initialState = shareReducer(undefined, {} as any)
const state = {
  byId: {},
  allIds: {
    items: [] as Array<string>,
    isFetching: false
  }
}

describe('test shareReducer', () => {
  it('should handle initial state', () => {
    expect(shareReducer(state, {} as any)).toEqual(initialState)
  })

  it('should handle add share to post', () => {
    expect(shareReducer(state, feedbackShare(actionData))).toEqual({
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
