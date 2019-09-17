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

export interface FEELINGS {
  LIKE: string
  HAHA: string
  LOVE: string
  WOW: string
  SAD: string
  ANGRY: string
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
export interface UserData {
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
  isHidden: boolean
  attachMedia: string
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

export interface RequestLoadData {
  type: typeof REQUEST_LODA_DATA
  payload: PostData
}

export interface LoadData {
  type: typeof LOAD_DATA
  payload: PostData
}

export type LoadDataActionTypes = RequestLoadData | LoadData

export interface GetByIdPayload {
  id: string
}

export interface React {
  type: typeof FEEDBACK.REACT
  payload: ReactData
}

export interface ReactId {
  type: typeof FEEDBACK.REACT
  payload: GetByIdPayload
}

export interface UndoReact {
  type: typeof FEEDBACK.UNDO_REACT
  payload: GetByIdPayload
}

export type ReactActionTypes = React | ReactId | UndoReact

export interface CommentReact {
  type: typeof FEEDBACK.COMMENT_REACT
  payload: CommentReactData
}

export interface CommentReactId {
  type: typeof FEEDBACK.COMMENT_REACT
  payload: GetByIdPayload
}

export interface UndoCommentReact {
  type: typeof FEEDBACK.UNDO_COMMENT_REACT
  payload: GetByIdPayload
}

export type CommentReactActionTypes =
  | CommentReact
  | CommentReactId
  | UndoCommentReact

export interface UpdateCommentPayload {
  id: string
  saying: string
}

export interface Comment {
  type: typeof FEEDBACK.COMMENT
  payload: CommentData
}

export interface CommentId {
  type: typeof FEEDBACK.COMMENT
  payload: GetByIdPayload
}

export interface UndoComment {
  type: typeof FEEDBACK.UNDO_COMMENT
  payload: GetByIdPayload
}

export interface UpdateComment {
  type: typeof FEEDBACK.UPDATE_COMMENT
  payload: UpdateCommentPayload
}

export type CommentActionTypes =
  | Comment
  | CommentId
  | UndoComment
  | UpdateComment

export interface Share {
  type: typeof FEEDBACK.SHARE
  payload: ShareData
}

export interface ShareId {
  type: typeof FEEDBACK.SHARE
  payload: GetByIdPayload
}

export type ShareActionTypes = Share | ShareId
