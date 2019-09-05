// Describing the shape of the post's feedback slice of state
export interface InitPostData {
  reacts: Array<string>
  commentReacts: Array<string>
  comments: Array<string>
  shares: Array<string>
}

declare function create(o: object | null): void

export interface PostData {
  entities: {
    reacts: Object
    commentReacts: Array<string>
    comments: Array<string>
    shares: Array<string>
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

// module.exports = {
//   REQUEST_LODA_DATA,
//   LOAD_DATA
// }
