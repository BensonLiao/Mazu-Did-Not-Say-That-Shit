import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, cssConst, displayFlex, alignCenter } from '../styles'
import Header from './Header'
import PostContent from './PostContent'
import FeedbackAction from './FeedbackAction'
import DisplayCommentSection from '../containers/DisplayCommentSection'
import { UserData } from '../actions/types'

const FeedbackSummary = lazy(() => import('./FeedbackSummary'))
// const DisplayCommentSection = lazy(() => import('../containers/DisplayCommentSection'))

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
`

export interface PostDataProps {
  /**
   * @type {UserData} Posted by who
   */
  user: UserData
  /**
   * @type {string} Post content
   */
  content: string
  /**
   * @type {string} Post title, used on HTML's title attribute
   */
  title: string
  /**
   * @type {string | number | Date} UNIX timestamp,
   * ref: https://en.wikipedia.org/wiki/Unix_time
   */
  time: string | number | Date
}

const App = ({ user, time, content, title }: PostDataProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <GlobalStyle />
        <PostWrapper>
          <Header user={user} time={time} />
          <PostContent postContent={content} postTitle={title} />
          <FeedbackSummary />
          <FeedbackAction />
          <DisplayCommentSection />
        </PostWrapper>
      </Root>
    </ThemeProvider>
  )
}

App.propTypes = {
  user: PropTypes.shape({
    profileImg: PropTypes.string.isRequired,
    profileLink: PropTypes.string.isRequired,
    profileName: PropTypes.string.isRequired
  }).isRequired,
  time: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default App
