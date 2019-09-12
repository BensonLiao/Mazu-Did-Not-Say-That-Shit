import appConst from '../utils/constants'
import rootReducer from './index'
import { FEEDBACK, REACTIONS } from '../actions/types'
import { feedbackReact, feedbackComment, feedbackShare } from '../actions'

const userInfo = {
  id: appConst.fakeUserId,
  profileName: '我是假的!',
  profileLink: 'https://www.facebook.com/test/',
  profileImg: 'test.png',
  isVerified: false
}

const actionDataReact = {
  entities: {
    id: appConst.fakeReactId,
    feeling: REACTIONS.LIKE,
    user: userInfo,
    targetId: FEEDBACK.TARGET
  }
}

const actionDataComment = {
  entities: {
    id: appConst.fakeCommentId,
    saying: 'fakecomment',
    user: userInfo,
    targetId: FEEDBACK.TARGET,
    isHidden: false
  }
}

const actionDataShare = {
  entities: {
    id: appConst.fakeShareId,
    user: userInfo,
    postId: FEEDBACK.TARGET
  }
}

const initialState = rootReducer(undefined, {} as any)
const state = {
  reacts: {
    byId: {},
    allIds: {
      items: [] as Array<string>,
      isFetching: false
    }
  },
  commentReacts: {
    byId: {},
    allIds: {
      items: [] as Array<string>,
      isFetching: false
    }
  },
  comments: {
    byId: {},
    allIds: {
      items: [] as Array<string>,
      isFetching: false
    }
  },
  shares: {
    byId: {},
    allIds: {
      items: [] as Array<string>,
      isFetching: false
    }
  }
}

describe('test rootReducer', () => {
  it('should handle initial state', () => {
    expect(rootReducer(state, {} as any)).toEqual(initialState)
  })

  it('should handle add react to post', () => {
    expect(rootReducer(state, feedbackReact(actionDataReact))).toEqual({
      reacts: {
        byId: {
          [actionDataReact.entities.id]: actionDataReact.entities
        },
        allIds: {
          items: [actionDataReact.entities.id],
          isFetching: false
        }
      },
      commentReacts: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      comments: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      shares: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      }
    })
  })

  it('should handle add comment to post', () => {
    expect(rootReducer(state, feedbackComment(actionDataComment))).toEqual({
      reacts: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      commentReacts: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      comments: {
        byId: {
          [actionDataComment.entities.id]: actionDataComment.entities
        },
        allIds: {
          items: [actionDataComment.entities.id],
          isFetching: false
        }
      },
      shares: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      }
    })
  })

  it('should handle add share to post', () => {
    expect(rootReducer(state, feedbackShare(actionDataShare))).toEqual({
      reacts: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      commentReacts: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      comments: {
        byId: {},
        allIds: {
          items: [] as Array<string>,
          isFetching: false
        }
      },
      shares: {
        byId: {
          [actionDataShare.entities.id]: actionDataShare.entities
        },
        allIds: {
          items: [actionDataShare.entities.id],
          isFetching: false
        }
      }
    })
  })
})
