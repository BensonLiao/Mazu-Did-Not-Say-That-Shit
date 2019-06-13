import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, cssVar, displayFlex, alignCenter } from '../styles'
import Header from '../components/Header'
import PostContent from '../components/PostContent'
import FeedbackSummary from '../components/FeedbackSummary'
import FeedbackAction from '../components/FeedbackAction'

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
  // handleFeedbackLike = () => {
  //   this.props.dispatch(feedbackLike())
  // }

  render() {
    const { user, time, content } = this.props.postData
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <GlobalStyle />
          <PostWrapper>
            <Header profileInfo={user} postTime={time} />
            <PostContent postContent={content} />
            <FeedbackSummary />
            <FeedbackAction />
          </PostWrapper>
        </Root>
      </ThemeProvider>
    )
  }
}

App.propTypes = {
  postData: PropTypes.shape({
    user: PropTypes.shape({
      profileImg: PropTypes.string.isRequired,
      profileLink: PropTypes.string.isRequired,
      profileName: PropTypes.string.isRequired
    }).isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }).isRequired
}

export default App
