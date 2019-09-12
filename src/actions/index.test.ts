import appConst from '../utils/constants'
import { FEEDBACK, REACTIONS } from './types'
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
    feeling: REACTIONS.LIKE,
    user: userInfo,
    targetId: FEEDBACK.TARGET
  }
}

const actionDataHaha = {
  entities: {
    id: reactId,
    feeling: REACTIONS.HAHA,
    user: userInfo,
    targetId: FEEDBACK.TARGET
  }
}

const actionDataLove = {
  entities: {
    id: reactId,
    feeling: REACTIONS.LOVE,
    user: userInfo,
    targetId: FEEDBACK.TARGET
  }
}

describe('post reaction actions', () => {
  it('feedbackReact should create FEEDBACK.REACTIONS.LIKE action', () => {
    expect(actions.feedbackReact(actionDataLike)).toEqual({
      type: FEEDBACK.REACT,
      payload: actionDataLike.entities
    })
  })

  it('feedbackReact should create FEEDBACK.REACTIONS.HAHA action', () => {
    expect(actions.feedbackReact(actionDataHaha)).toEqual({
      type: FEEDBACK.REACT,
      payload: actionDataHaha.entities
    })
  })

  it('feedbackReact should create FEEDBACK.REACTIONS.LOVE action', () => {
    expect(actions.feedbackReact(actionDataLove)).toEqual({
      type: FEEDBACK.REACT,
      payload: actionDataLove.entities
    })
  })

  it('undoReact should create UNDO_REACT action', () => {
    expect(actions.undoReact(reactId)).toEqual({
      type: FEEDBACK.UNDO_REACT,
      payload: {
        id: reactId
      }
    })
  })
})
