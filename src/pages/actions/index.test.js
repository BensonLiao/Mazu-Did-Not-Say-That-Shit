import * as actions from './index'

const byWho = '我是假的!'

describe('post reaction actions', () => {
  it('likeToPost should create LIKE_TO_POST action', () => {
    expect(actions.likeToPost(byWho)).toEqual({
      type: 'LIKE_TO_POST',
      reaction: 'Like',
      name: byWho
    })
  })

  it('hahaToPost should create HAHA_TO_POST action', () => {
    expect(actions.hahaToPost(byWho)).toEqual({
      type: 'HAHA_TO_POST',
      reaction: 'Haha',
      name: byWho
    })
  })

  it('loveToPost should create LOVE_TO_POST action', () => {
    expect(actions.loveToPost(byWho)).toEqual({
      type: 'LOVE_TO_POST',
      reaction: 'Love',
      name: byWho
    })
  })

  it('undoReactionToPost should create UNDO_REACTION_TO_POST action', () => {
    expect(actions.undoReactionToPost(byWho)).toEqual({
      type: 'UNDO_REACTION_TO_POST',
      name: byWho
    })
  })
})
