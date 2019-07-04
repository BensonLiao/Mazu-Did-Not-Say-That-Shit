import * as actions from './index'

const userInfo = {
  id: 'fakeusertest',
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}
const reactId = 'fakereactid'
const targetId = actions.FEEDBACK.TARGET

describe('post reaction actions', () => {
  it('feedbackLike should create FEEDBACK_LIKE action', () => {
    expect(actions.feedbackFeelLike(userInfo, reactId, targetId)).toEqual({
      type: actions.FEEDBACK.REACT,
      payload: {
        id: reactId,
        feeling: actions.REACTIONS.LIKE,
        user: userInfo,
        targetId
      }
    })
  })

  it('feedbackHaha should create FEEDBACK_HAHA action', () => {
    expect(actions.feedbackFeelHaha(userInfo, targetId)).toEqual({
      type: actions.FEEDBACK.REACT,
      payload: {
        id: expect.any(String),
        feeling: actions.REACTIONS.HAHA,
        user: userInfo,
        targetId
      }
    })
  })

  it('feedbackLove should create FEEDBACK_LOVE action', () => {
    expect(actions.feedbackFeelLove(userInfo, targetId)).toEqual({
      type: actions.FEEDBACK.REACT,
      payload: {
        id: expect.any(String),
        feeling: actions.REACTIONS.LOVE,
        user: userInfo,
        targetId
      }
    })
  })

  it('undoReact should create UNDO_REACT action', () => {
    expect(actions.undoReact(reactId)).toEqual({
      type: actions.FEEDBACK.UNDO_REACT,
      payload: {
        id: reactId
      }
    })
  })
})
