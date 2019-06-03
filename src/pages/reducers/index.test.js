import reactionsOnTarget from './index'
import { FEEDBACK, REACTIONS, FEEDBACK_TARGET } from '../actions'

const byWho = '我是假的!'
const target = FEEDBACK_TARGET.POST

describe('reactionsOnTarget reducer', () => {
  it('should handle initial state', () => {
    expect(reactionsOnTarget(undefined, {})).toEqual([])
  })

  it(`should handle ${FEEDBACK.REACT} ${REACTIONS.LIKE}`, () => {
    expect(
      reactionsOnTarget(
        {
          reactions: [],
          comments: [],
          shares: []
        },
        {
          type: FEEDBACK.REACT,
          reaction: REACTIONS.LIKE,
          name: byWho,
          postOrCommentId: target
        }
      )
    ).toEqual({
      reactions: [
        {
          reaction: REACTIONS.LIKE,
          name: byWho
        }
      ],
      comments: [],
      shares: []
    })
  })

  it(`should handle ${FEEDBACK.REACT} ${REACTIONS.HAHA}`, () => {
    expect(
      reactionsOnTarget([], {
        type: FEEDBACK.REACT,
        reaction: REACTIONS.HAHA,
        name: byWho
      })
    ).toEqual([
      {
        reaction: REACTIONS.HAHA,
        name: byWho
      }
    ])
  })

  it(`should handle ${FEEDBACK.REACT} ${REACTIONS.LOVE}`, () => {
    expect(
      reactionsOnTarget([], {
        type: FEEDBACK.REACT,
        reaction: REACTIONS.LOVE,
        name: byWho
      })
    ).toEqual([
      {
        reaction: REACTIONS.LOVE,
        name: byWho
      }
    ])
  })

  it(`should handle ${FEEDBACK.UNDO_REACT}`, () => {
    expect(
      reactionsOnTarget(
        [
          {
            reaction: REACTIONS.LOVE,
            name: byWho
          }
        ],
        {
          type: FEEDBACK.UNDO_REACT,
          name: byWho
        }
      )
    ).toEqual([])
  })
})
