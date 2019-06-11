import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'
import { feedbackLike } from './pages/actions'
import { theme, cssVar, displayFlex, alignCenter } from './pages/styles'
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

class App extends Component {
  handleFeedbackLike = () => {
    this.props.dispatch(feedbackLike())
  }

  render() {
    const {
      poster,
      postTime,
      postContent,
      reacts,
      comments,
      shares
    } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <GlobalStyle />
          <PostWrapper>
            <Header profileInfo={poster} postTime={postTime} />
            <PostContent postContent={postContent} />
            <FeedbackSummary
              reactions={reacts}
              comments={comments}
              shares={shares}
            />
            <FeedbackAction handleFeedbackLike={this.handleFeedbackLike} />
          </PostWrapper>
        </Root>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => {
  const { poster, postTime, postContent, reacts, comments, shares } = state

  return {
    poster,
    postTime,
    postContent,
    reacts,
    comments,
    shares
  }
}

App.propTypes = {
  poster: PropTypes.array,
  postTime: PropTypes.string,
  postContent: PropTypes.string,
  reacts: PropTypes.array,
  comments: PropTypes.array,
  shares: PropTypes.array
}

export default connect(mapStateToProps)(App)
