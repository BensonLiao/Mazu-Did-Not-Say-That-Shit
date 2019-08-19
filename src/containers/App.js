import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, cssConst, displayFlex, alignCenter } from '../styles'
import Header from '../components/Header'
import PostContent from '../components/PostContent'
import FeedbackAction from '../components/FeedbackAction'

const FeedbackSummary = lazy(() => import('../components/FeedbackSummary'))
const DisplayCommentSection = lazy(() => import('./DisplayCommentSection'))

const GlobalStyle = createGlobalStyle`
  body {
    background: ${cssConst.desktopBackgroundGray};
  }
  * { box-sizing: border-box; }
`

const Root = styled.div`
  ${displayFlex}
  ${alignCenter}
`

const PostWrapper = styled.div`
  width: 500px;
  @media screen and (max-width: 42em) {
    width: 100vw;
  }
  height: auto;
  border: 1px solid #dddfe2;
  border-radius: 4px;
  background: ${cssConst.postBackgroundWhite};
  font-family: ${cssConst.fontFamily};
  font-size: ${cssConst.baseFontSize};
  @media screen and (max-width: 42em) {
    font-size: ${cssConst.mobileFontSize};
  }
`

const App = ({ postData }) => {
  const { user, time, content, title } = postData
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <PostWrapper>
          <Header profileInfo={user} postTime={time} />
          <PostContent postContent={content} postTitle={title} />
          <Suspense fallback={<div>Loading...</div>}>
            <FeedbackSummary />
          </Suspense>
          <FeedbackAction />
          <Suspense fallback={<div>Loading...</div>}>
            <DisplayCommentSection />
          </Suspense>
        </PostWrapper>
      </Root>
    </ThemeProvider>
  )
}

App.propTypes = {
  postData: PropTypes.shape({
    user: PropTypes.shape({
      profileImg: PropTypes.string.isRequired,
      profileLink: PropTypes.string.isRequired,
      profileName: PropTypes.string.isRequired
    }).isRequired,
    time: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default App
