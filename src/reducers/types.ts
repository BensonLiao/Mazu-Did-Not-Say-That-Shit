import {
  REQUEST_LODA_DATA,
  LOAD_DATA,
  ReactData,
  CommentReactData,
  CommentData,
  ShareData
} from '../actions/types'

export interface PostDataPayLoad {
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
  payload: PostDataPayLoad
}

export interface LoadData {
  type: typeof LOAD_DATA
  payload: PostDataPayLoad
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

export interface PostDataState {
  reacts: {
    byId: FetchDataReact
    allIds: FetchDataAllIds
  }
  commentReacts: {
    byId: FetchDataCommentReact
    allIds: FetchDataAllIds
  }
  comments: {
    byId: FetchDataComment
    allIds: FetchDataAllIds
  }
  shares: {
    byId: FetchDataShare
    allIds: FetchDataAllIds
  }
}
