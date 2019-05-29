import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, cssVar, displayFlex, alignCenter } from './pages/styles'
import { createReactions, createComments, createShares } from './utils/dataMock'
import Header from './pages/components/Header'
import PostContent from './pages/components/PostContent'
import FeedbackSummary from './pages/components/FeedbackSummary'

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

const PostContainer = styled.div`
  min-width: 500px;
  height: 1200px;
  border: 1px solid #dddfe2;
  border-radius: 4px;
  background: ${cssVar.postBackgroundWhite};
  font-family: ${cssVar.fontFamily};
`

const poster = {
  profileName: '媽祖',
  profileUrl: 'https://www.facebook.com/themazhou/posts/307433766601772',
  postTime: '4月17日下午6:12 ·',
  postContent: '我根本沒說。',
  feedback: {
    reactions: createReactions(200),
    comments: createComments(),
    shares: createShares()
  }
}

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Root>
          <GlobalStyle />
          <PostContainer>
            <Header
              profileName={poster.profileName}
              profileUrl={poster.profileUrl}
              postTime={poster.postTime}
            />
            <PostContent postContent={poster.postContent} />
            <FeedbackSummary feedback={poster.feedback} />
          </PostContainer>
        </Root>
      </ThemeProvider>
    )
  }
}

export default App
