import * as actions from './index'

const userInfo = {
  id: 'fakeusertest',
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png'
}
const targetId = 'post1'

describe('post reaction actions', () => {
  it('feedbackLike should create FEEDBACK_LIKE action', () => {
    expect(actions.feedbackLike(userInfo, targetId)).toEqual({
      type: actions.FEEDBACK.REACT,
      reaction: actions.REACTIONS.LIKE,
      user: userInfo,
      commentOrPostId: targetId
    })
  })

  it('feedbackHaha should create FEEDBACK_HAHA action', () => {
    expect(actions.feedbackHaha(userInfo, targetId)).toEqual({
      type: actions.FEEDBACK.REACT,
      reaction: actions.REACTIONS.HAHA,
      user: userInfo,
      commentOrPostId: targetId
    })
  })

  it('feedbackLove should create FEEDBACK_LOVE action', () => {
    expect(actions.feedbackLove(userInfo, targetId)).toEqual({
      type: actions.FEEDBACK.REACT,
      reaction: actions.REACTIONS.LOVE,
      user: userInfo,
      commentOrPostId: targetId
    })
  })

  it('undoReact should create UNDO_REACT action', () => {
    expect(actions.undoReact(userInfo, targetId)).toEqual({
      type: actions.FEEDBACK.UNDO_REACT,
      user: userInfo,
      commentOrPostId: targetId
    })
  })
})
