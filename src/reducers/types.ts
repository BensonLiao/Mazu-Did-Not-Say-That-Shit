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

export interface ReactDataState {
  [index: string]: ReactData
}

export interface CommentReactDataState {
  [index: string]: CommentReactData
}

export interface CommentDataState {
  [index: string]: CommentData
}

export interface ShareDataState {
  [index: string]: ShareData
}

export interface AllIdsDataState {
  items: Array<string>
  isFetching: boolean
}

export interface PostDataState {
  reacts: {
    byId: ReactDataState
    allIds: AllIdsDataState
  }
  commentReacts: {
    byId: CommentReactDataState
    allIds: AllIdsDataState
  }
  comments: {
    byId: CommentDataState
    allIds: AllIdsDataState
  }
  shares: {
    byId: ShareDataState
    allIds: AllIdsDataState
  }
}
