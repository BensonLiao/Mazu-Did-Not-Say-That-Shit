// Enumerating the action type of the post's feedback
export enum FEEDBACK {
  REACT = 'REACT',
  UNDO_REACT = 'UNDO_REACT',
  COMMENT_REACT = 'COMMENT_REACT',
  UNDO_COMMENT_REACT = 'UNDO_COMMENT_REACT',
  COMMENT = 'COMMENT',
  UNDO_COMMENT = 'UNDO_COMMENT',
  UPDATE_COMMENT = 'UPDATE_COMMENT',
  COMMENT_VISIBILITY_TOGGLE = 'COMMECOMMENT_VISIBILITY_TOGGLENT_HIDE',
  SHARE = 'SHARE',
  TARGET = 'POST'
}

export enum REACTIONS {
  LIKE = 'LIKE',
  HAHA = 'HAHA',
  LOVE = 'LOVE',
  WOW = 'WOW',
  SAD = 'SAD',
  ANGRY = 'ANGRY'
}

// Describing the shape of the post's feedback slice of state
export interface InitPostData {
  reacts: Array<string>
  commentReacts: Array<string>
  comments: Array<string>
  shares: Array<string>
}

interface UserData {
  id: string
  profileName: string
  profileLink: string
  profileImg: string
  isVerified: boolean
}

export interface ReactData {
  id: string
  user: UserData
  feeling: REACTIONS
  targetId: string | 'POST'
}

export interface CommentReactData {
  id: string
  user: UserData
  feeling: REACTIONS
  targetId: string
}

export interface CommentData {
  id: string
  user: UserData
  saying: string
  targetId: string | 'POST'
}

export interface ShareData {
  id: string
  user: UserData
}

export interface PostDataReact {
  entities: ReactData
}

export interface PostDataCommentReact {
  entities: CommentReactData
}

export interface PostDataComment {
  entities: CommentData
}

export interface PostDataShare {
  entities: ShareData
}

export interface PostData {
  entities: {
    reacts: {
      [key: string]: ReactData
    }
    commentReacts: {
      [key: string]: CommentReactData
    }
    comments: {
      [key: string]: CommentData
    }
    shares: {
      [key: string]: ShareData
    }
  }
}

// Describing the different ACTION NAMES available
export const REQUEST_LODA_DATA = 'REQUEST_LODA_DATA'
export const LOAD_DATA = 'LOAD_DATA'

interface RequestLoadData {
  type: typeof REQUEST_LODA_DATA
  payload: InitPostData
}

interface LoadData {
  type: typeof LOAD_DATA
  payload: InitPostData
}

export type LoadDataActionTypes = RequestLoadData | LoadData
