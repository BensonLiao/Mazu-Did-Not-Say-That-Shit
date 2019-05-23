import * as React from 'react'
// import PropTypes from 'prop-types'
import FeedbackReactions from '../components/FeedbackReactions'

class Post extends React.Component {
  render() {
    // const reactions = '鍋苔冥、憨摑娛和其他1.6 萬人'
    const reactions = () => {
      const reactor = ['鍋苔冥', '憨摑娛']
      for (let i = 0; i < 16419; i++) {
        reactor.push('Fake User')
      }
      return reactor
    }
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
