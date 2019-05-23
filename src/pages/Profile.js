import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { borderRadius, width } from 'styled-system'
import man from '../assets/img/man.png'
import LiffHelper from '../utils/liffHelper'
import { page, PageContainer } from './styles/page'
import { FormGroup, FormControl, FormLabel } from './components'

const liffHelper = new LiffHelper()

const Avatar = styled.img`
  ${borderRadius}
  ${width}
`
Avatar.defaultProps = {
  borderRadius: '50%',
  width: '130px'
}

export default class Profile extends Component {
  state = { ...this.props }

  componentDidMount() {
    liffHelper.getProfile().then(profile => this.setState({ profile }))
  }

  render() {
    // destructing assignment
    const {profile: { pictureUrl, userId, displayName, statusMessage }} = this.state
    return (
      <ThemeProvider theme={page}>
        <PageContainer>
          <div>
            <Avatar alt="profile" src={pictureUrl} />
          </div>
          <hr />
          <FormGroup controlId="user-id">
            <FormLabel>User ID:</FormLabel>
            <FormControl type="text" value={userId} disabled />
          </FormGroup>
          <FormGroup controlId="name">
            <FormLabel>Display Name:</FormLabel>
            <FormControl type="text" value={displayName} disabled />
          </FormGroup>
          <FormGroup controlId="status">
            <FormLabel>Display Name:</FormLabel>
            <FormControl type="text" value={statusMessage} disabled />
          </FormGroup>
          <FormGroup controlId="liff-info">
            <FormLabel>LIFF Info:</FormLabel>
            <FormControl
              type="textarea"
              rows="10"
              disabled
              value={JSON.stringify(liffHelper.getLIFFInfo(), '', 2)}
            />
          </FormGroup>
          <hr />
          <button
            type="button"
            className="btn btn-default"
            onClick={() => {
              LiffHelper.closeWindow()
            }}
          >
            Close LIFF
          </button>
        </PageContainer>
      </ThemeProvider>
    )
  }
}

Profile.propTypes = {
  profile: PropTypes.shape({
    pictureUrl: PropTypes.string,
    userId: PropTypes.string,
    displayName: PropTypes.string,
    statusMessage: PropTypes.string
  })
}

Profile.defaultProps = {
  profile: {
    pictureUrl: man,
    userId: '',
    displayName: '',
    statusMessage: ''
  }
}
