import rootReducer from './index'
import { FEEDBACK, REACTIONS } from '../actions'

const userInfo = {
  id: 'fakeuserid',
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}

const feedbackReactAction = {
  type: FEEDBACK.REACT,
  payload: {
    id: 'fakereactid',
    reaction: REACTIONS.LIKE,
    user: userInfo,
    postOrCommentId: FEEDBACK.TARGET
  }
}

const feedbackCommentAction = {
  type: FEEDBACK.COMMENT,
  payload: {
    id: 'fakecommentid',
    comment: 'fakecomment',
    user: userInfo,
    postOrCommentId: FEEDBACK.TARGET
  }
}

const feedbackShareAction = {
  type: FEEDBACK.SHARE,
  payload: {
    id: 'fakeshareid',
    user: userInfo,
    postId: FEEDBACK.TARGET
  }
}

describe('test rootReducer', () => {
  it('should handle initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
      reactReducer: { byId: {}, allIds: [] },
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
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackReactAction
      ).reactReducer.allIds
    ).toEqual([feedbackReactAction.payload.id])
  })
  it('should handle rootReducer.reactReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackReactAction
      ).reactReducer.byId
    ).toEqual({
      [feedbackReactAction.payload.id]: feedbackReactAction.payload
    })
  })

  it('should handle rootReducer.commentReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackCommentAction
      ).commentReducer.allIds
    ).toEqual([feedbackCommentAction.payload.id])
  })
  it('should handle rootReducer.commentReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackCommentAction
      ).commentReducer.byId
    ).toEqual({
      [feedbackCommentAction.payload.id]: feedbackCommentAction.payload
    })
  })

  it('should handle rootReducer.shareReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShareAction
      ).shareReducer.allIds
    ).toEqual([feedbackShareAction.payload.id])
  })
  it('should handle rootReducer.shareReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShareAction
      ).shareReducer.byId
    ).toEqual({
      [feedbackShareAction.payload.id]: feedbackShareAction.payload
    })
  })

  it('should handle rootReducer.userReducer allIds', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShareAction
      ).userReducer.allIds
    ).toEqual([feedbackShareAction.payload.user.id])
  })
  it('should handle rootReducer.userReducer byId', () => {
    expect(
      rootReducer(
        {
          reactReducer: { byId: {}, allIds: [] },
          commentReducer: { byId: {}, allIds: [] },
          shareReducer: { byId: {}, allIds: [] },
          userReducer: { byId: {}, allIds: [] }
        },
        feedbackShareAction
      ).userReducer.byId
    ).toEqual({
      [feedbackShareAction.payload.user.id]: feedbackShareAction.payload.user
    })
  })
})
