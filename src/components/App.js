import React, { lazy, Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, cssConst, displayFlex, alignCenter } from '../styles'
import Header from './Header'
import PostContent from './PostContent'
import FeedbackAction from './FeedbackAction'
import { StateProvider } from '../containers/StateProvider'

const FeedbackSummary = lazy(() => import('./FeedbackSummary'))
const DisplayCommentSection = lazy(() => import('../containers/DisplayCommentSection'))

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
  const [isDataInit, setIsDataInit] = useState(false)
  const setDataInit = isInit => setIsDataInit(isInit)
  const { user, time, content, title } = postData
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <PostWrapper>
          <Header profileInfo={user} postTime={time} />
          <PostContent postContent={content} postTitle={title} />
          <StateProvider initialState={{ isDataInit, setDataInit }}>
            <FeedbackSummary />
            <FeedbackAction />
            <Suspense fallback={<div>Loading...</div>}>
              <DisplayCommentSection />
            </Suspense>
          </StateProvider>
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
