import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled,
{
  ThemeProvider,
  createGlobalStyle
} from 'styled-components'
import { connect } from 'react-redux'
import { normalize, schema } from 'normalizr'
import { feedbackLike } from './pages/actions'
import {
  theme,
  cssVar,
  displayFlex,
  alignCenter
} from './pages/styles'
import { createPostData } from './utils/dataMock'
import Header from './pages/components/Header'
import PostContent from './pages/components/PostContent'
import FeedbackSummary from './pages/components/FeedbackSummary'
import FeedbackAction from './pages/components/FeedbackAction'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${cssVar.desktopBackgroundGray};
  }
  * { box-sizing: border-box; }
`

const Root = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const PostWrapper = styled.div`
  min-width: 500px;
  height: 1200px;
  border: 1px solid #dddfe2;
  border-radius: 4px;
  background: ${cssVar.postBackgroundWhite};
  font-family: ${cssVar.fontFamily};
`

const postData = createPostData(2000)

// Define a users schema
const userSchema = new schema.Entity('users')

// Define your reactions schema
const reactSchema = new schema.Entity('reacts', {
  reactor: userSchema
})

// Define your comments schema
const commentSchema = new schema.Entity('comments', {
  commenter: userSchema
})

// Define your shares schema
const shareSchema = new schema.Entity('shares', {
  sharer: userSchema
})

// Define your feedback schema
const feedbackSchema = new schema.Entity('feedback', {
  reacts: [reactSchema],
  comments: [commentSchema],
  shares: [shareSchema]
})

// Define your post schema
const postSchema = new schema.Entity('post', {
  poster: userSchema,
  feedback: feedbackSchema
})

const normalizedFeedbackData = normalize(postData, postSchema)
console.log('normalizedFeedbackData', normalizedFeedbackData)

class App extends Component {
  handleFeedbackLike = () => {
    this.props.dispatch(feedbackLike())
  }

  render() {
    const {
      feedback: {
        reactions,
        comments,
        shares
      }
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <GlobalStyle />
          <PostWrapper>
            <Header
              profileInfo={postData.poster}
              postTime={postData.postTime}
            />
            <PostContent postContent={postData.postContent} />
            <FeedbackSummary
              reactions={reactions}
              comments={comments}
              shares={shares}
            />
            <FeedbackAction
              handleFeedbackLike={this.handleFeedbackLike}
            />
          </PostWrapper>
        </Root>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  const {
    feedback: {
      reactions,
      comments,
      shares
    }
  } = state

  return {
    reactions,
    comments,
    shares
  }
}

App.propTypes = {
  feedback: PropTypes.shape({
    reactions: PropTypes.array,
    comments: PropTypes.array,
    shares: PropTypes.array
  })
}

export default connect(mapStateToProps)(App)
