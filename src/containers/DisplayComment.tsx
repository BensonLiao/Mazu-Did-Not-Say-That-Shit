import React, { useState } from 'react'
import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { getComment } from '../reducers/selector'
import { StateProvider } from './StateProvider'
import CommentWithFeedback from '../components/CommentWithFeedback'
import { CommentData } from '../actions/types'

interface CommentWithContextProps {
  comment: CommentData
}

const CommentWithContext = ({ comment }: CommentWithContextProps) => {
  const [inEditMode, setEditMode] = useState(false)
  const toggleEditMode = () => setEditMode(!inEditMode)
  return (
    <StateProvider initialState={{ inEditMode, toggleEditMode }}>
      <CommentWithFeedback comment={comment} />
    </StateProvider>
  )
}

interface DisplayComment {
  commentId: string
}

const mapStateToProps = (state: PostDataState, ownProps: DisplayComment) => {
  return {
    comment: getComment(state, ownProps.commentId)
  }
}

export default connect(mapStateToProps)(CommentWithContext)
