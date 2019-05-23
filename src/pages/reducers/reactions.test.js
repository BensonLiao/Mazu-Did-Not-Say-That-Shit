import reactions from './reactions'

const byWho = '我是假的!'

describe('reactions reducer', () => {
  it('should handle initial state', () => {
    expect(reactions(undefined, {})).toEqual([])
  })

  it('should handle LIKE_TO_POST', () => {
    expect(
      reactions([], {
        type: 'LIKE_TO_POST',
        reaction: 'Like',
        name: byWho
      })
    ).toEqual([
      {
        reaction: 'Like',
        name: byWho
      }
    ])
  })

  it('should handle HAHA_TO_POST', () => {
    expect(
      reactions([], {
        type: 'HAHA_TO_POST',
        reaction: 'Haha',
        name: byWho
      })
    ).toEqual([
      {
        reaction: 'Haha',
        name: byWho
      }
    ])
  })

  it('should handle LOVE_TO_POST', () => {
    expect(
      reactions([], {
        type: 'LOVE_TO_POST',
        reaction: 'Love',
        name: byWho
      })
    ).toEqual([
      {
        reaction: 'Love',
        name: byWho
      }
    ])
  })

  it('should handle UNDO_REACTION_TO_POST', () => {
    expect(
      reactions(
        [
          {
            reaction: 'Love',
            name: byWho
          }
        ],
        {
          type: 'UNDO_REACTION_TO_POST',
          name: byWho
        }
      )
    ).toEqual([])
  })
})
