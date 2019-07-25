import appConst from '../utils/constants'
import { getNormalizedData, ShareSchema } from '../utils/dataSchema'
import shareReducer from './share'
import { feedbackShare, FEEDBACK } from '../actions'

const actionData = {
  id: appConst.fakeShareId,
  user: appConst.fakeUserId,
  postId: FEEDBACK.TARGET
}

const normalizedActionData = getNormalizedData(actionData, ShareSchema)

describe('test shareReducer', () => {
  it('should handle initial state', () => {
    expect(shareReducer(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle allIds', () => {
    expect(
      shareReducer(
        { byId: {}, allIds: [] },
        feedbackShare(normalizedActionData)
      ).allIds
    ).toEqual([actionData.id])
  })

  it('should handle byId', () => {
    expect(
      shareReducer(
        { byId: {}, allIds: [] },
        feedbackShare(normalizedActionData)
      ).byId
    ).toEqual({
      [actionData.id]: actionData
    })
  })
})
