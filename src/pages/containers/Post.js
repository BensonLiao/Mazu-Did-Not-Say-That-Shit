import * as React from 'react'
// import PropTypes from 'prop-types'
import FeedbackReactions from '../components/FeedbackReactions'

class Post extends React.Component {
  render() {
    return (
      <div>
        <FeedbackReactions value={reactions} />
      </div>
    )
  }
}

// Post.propTypes = {
//   reactions: PropTypes.string.isRequired
// }

export default Post
