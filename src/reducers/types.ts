import {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  ReactData,
  CommentReactData,
  CommentData,
  ShareData
} from '../actions/types'

export interface PostData {
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

export interface RequestLoadData {
  type: typeof REQUEST_LODA_DATA
  payload: PostData
}

export interface LoadData {
  type: typeof LOAD_DATA
  payload: PostData
}

export type LoadDataActionTypes = RequestLoadData | LoadData

export interface FetchDataReact {
  [index: string]: ReactData
}

export interface FetchDataCommentReact {
  [index: string]: CommentReactData
}

export interface FetchDataComment {
  [index: string]: CommentData
}

export interface FetchDataShare {
  [index: string]: ShareData
}

export interface FetchDataAllIds {
  items: Array<string>
  isFetching: boolean
}
