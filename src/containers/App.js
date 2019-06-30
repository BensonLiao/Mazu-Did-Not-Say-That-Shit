import React from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid/v1'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme, cssConst, displayFlex, alignCenter } from '../styles'
import Header from '../components/Header'
import PostContent from '../components/PostContent'
import FeedbackSummary from '../components/FeedbackSummary'
import FeedbackAction from '../components/FeedbackAction'
import DisplayCommentSection from './DisplayCommentSection'
import { definedUsers } from '../utils/dataMock'
import { StateProvider } from './StateProvider'

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
  height: auto;
  border: 1px solid #dddfe2;
  border-radius: 4px;
  background: ${cssConst.postBackgroundWhite};
  font-family: ${cssConst.fontFamily};
`

const initialState = {
  you: definedUsers.goldXFive,
  reactId: uuidv1(),
  shareMenuOpened: false
}

const appReducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

class App extends React.Component {
  render() {
    const {
      postData: { user, time, content }
    } = this.props
    return (
      <StateProvider initialState={initialState} reducer={appReducer}>
        <ThemeProvider theme={theme}>
          <Root>
            <GlobalStyle />
            <PostWrapper>
              <Header profileInfo={user} postTime={time} />
              <PostContent postContent={content} />
              <FeedbackSummary />
              <FeedbackAction />
              <DisplayCommentSection />
            </PostWrapper>
          </Root>
        </ThemeProvider>
      </StateProvider>
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
