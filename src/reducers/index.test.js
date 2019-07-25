import appConst from '../utils/constants'
import {
  getNormalizedData,
  ReactSchema,
  CommentSchema,
  ShareSchema
} from '../utils/dataSchema'
import rootReducer from './index'
import {
  feedbackReact,
  feedbackComment,
  feedbackShare,
  FEEDBACK,
  REACTIONS
} from '../actions'

const userId = appConst.fakeUserId

const userInfo = {
  id: userId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const actionDataReact = {
  id: appConst.fakeReactId,
  feeling: REACTIONS.LIKE,
  user: userInfo,
  targetId: FEEDBACK.TARGET
}

const normalizedActionDataReact = getNormalizedData(
  actionDataReact,
  ReactSchema
)

const actionDataComment = {
  id: appConst.fakeCommentId,
  saying: 'fakecomment',
  user: userInfo,
  targetId: FEEDBACK.TARGET
}

const normalizedActionDataComment = getNormalizedData(
  actionDataComment,
  CommentSchema
)

const actionDataShare = {
  id: appConst.fakeShareId,
  user: userInfo,
  postId: FEEDBACK.TARGET
}

const normalizedActionDataShare = getNormalizedData(
  actionDataShare,
  ShareSchema
)

describe('test rootReducer', () => {
  it('should handle initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      reactReducer: { byId: {}, allIds: [] },
      commentReactReducer: { byId: {}, allIds: [] },
      commentReducer: { byId: {}, allIds: [] },
      shareReducer: { byId: {}, allIds: [] },
      userReducer: { byId: {}, allIds: [] }
    })
  })

  it('should handle rootReducer.reactReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackReact(normalizedActionDataReact)
      ).reactReducer.allIds
    ).toEqual([actionDataReact.id])
  })
  it('should handle rootReducer.reactReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackReact(normalizedActionDataReact)
      ).reactReducer.byId
    ).toEqual({
      [actionDataReact.id]:
        normalizedActionDataReact.entities.reacts[actionDataReact.id]
    })
  })

  it('should handle rootReducer.commentReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackComment(normalizedActionDataComment)
      ).commentReducer.allIds
    ).toEqual([actionDataComment.id])
  })
  it('should handle rootReducer.commentReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackComment(normalizedActionDataComment)
      ).commentReducer.byId
    ).toEqual({
      [actionDataComment.id]:
        normalizedActionDataComment.entities.comments[actionDataComment.id]
    })
  })

  it('should handle rootReducer.shareReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShare(normalizedActionDataShare)
      ).shareReducer.allIds
    ).toEqual([actionDataShare.id])
  })
  it('should handle rootReducer.shareReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShare(normalizedActionDataShare)
      ).shareReducer.byId
    ).toEqual({
      [actionDataShare.id]:
        normalizedActionDataShare.entities.shares[actionDataShare.id]
    })
  })

  it('should handle rootReducer.userReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShare(normalizedActionDataShare)
      ).userReducer.allIds
    ).toEqual([actionDataShare.user.id])
  })
  it('should handle rootReducer.userReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShare(normalizedActionDataShare)
      ).userReducer.byId
    ).toEqual({
      [actionDataShare.user.id]:
        normalizedActionDataShare.entities.users[actionDataShare.user.id]
    })
  })
})
