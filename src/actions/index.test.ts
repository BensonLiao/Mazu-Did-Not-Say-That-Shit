import appConst from '../utils/constants'
import * as actions from './index'

const userId = appConst.fakeUserId
const userInfo = {
  id: userId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png',
  isVerified: false
}
const reactId = appConst.fakeReactId
const actionDataLike = {
  entities: {
    id: reactId,
    feeling: actions.REACTIONS.LIKE,
    user: userInfo,
    targetId: actions.FEEDBACK.TARGET
  }
}

const actionDataHaha = {
  entities: {
    id: reactId,
    feeling: actions.REACTIONS.HAHA,
    user: userInfo,
    targetId: actions.FEEDBACK.TARGET
  }
}

const actionDataLove = {
  entities: {
    id: reactId,
    feeling: actions.REACTIONS.LOVE,
    user: userInfo,
    targetId: actions.FEEDBACK.TARGET
  }
}

describe('post reaction actions', () => {
  it('feedbackReact should create FEEDBACK.REACTIONS.LIKE action', () => {
    expect(actions.feedbackReact(actionDataLike)).toEqual({
      type: actions.FEEDBACK.REACT,
      payload: actionDataLike.entities
    })
  })

  it('feedbackReact should create FEEDBACK.REACTIONS.HAHA action', () => {
    expect(actions.feedbackReact(actionDataHaha)).toEqual({
      type: actions.FEEDBACK.REACT,
      payload: actionDataHaha.entities
    })
  })

  it('feedbackReact should create FEEDBACK.REACTIONS.LOVE action', () => {
    expect(actions.feedbackReact(actionDataLove)).toEqual({
      type: actions.FEEDBACK.REACT,
      payload: actionDataLove.entities
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
