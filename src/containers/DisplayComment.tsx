import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { PostDataState } from '../reducers/types'
import { getComment } from '../reducers/selector'
import { StateProvider } from './StateProvider'
import CommentWithFeedback from '../components/CommentWithFeedback'

const WithContext = ({ comment }: any) => {
  const [inEditMode, setEditMode] = useState(false)
  const toggleEditMode = () => setEditMode(!inEditMode)
  return (
    <StateProvider initialState={{ inEditMode, toggleEditMode }}>
      <CommentWithFeedback comment={comment} />
    </StateProvider>
  )
}

WithContext.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string,
    reactId: PropTypes.string,
    user: PropTypes.shape({
      profileName: PropTypes.string,
      profileLink: PropTypes.string,
      profileImg: PropTypes.string,
      isVerified: PropTypes.bool
    }),
    isHidden: PropTypes.bool,
    saying: PropTypes.string,
    attachMedia: PropTypes.string,
    time: PropTypes.string
  }).isRequired
}

interface DisplayComment {
  commentId: string
}

const mapStateToProps = (state: PostDataState, ownProps: DisplayComment) => {
  return {
    comment: getComment(state, ownProps.commentId)
  }
}

export default connect(mapStateToProps)(WithContext)
