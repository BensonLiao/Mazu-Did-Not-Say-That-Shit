import React, { Component } from 'react'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex } from '../styles/page'
import { relevantIconStyle } from '../styles/post'

const RelevantIconWrapper = styled.div`
  ${displayFlex}
  font-size: ${cssConst.baseFontSize};
  margin: 8px 12px;
  color: ${props =>
    props.toggleOption ? cssConst.reactedButtonTextColor : '#444950'};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const RelevantIcon = styled.i`
  ${props => relevantIconStyle(props.toggleOption)}
`

export default class RelevantCommentToggle extends Component {
  constructor() {
    super()
    this.state = {
      isToggleOptionOpen: false,
      options: ['最相關', '從新到舊', '所有留言']
    }
  }

  toggleOptionMenu = () => {
    const { isToggleOptionOpen } = this.state
    this.setState({ isToggleOptionOpen: !isToggleOptionOpen })
  }

  render() {
    const { isToggleOptionOpen, options } = this.state

    return (
      <RelevantIconWrapper
        toggleOption={isToggleOptionOpen}
        onClick={this.toggleOptionMenu}
      >
        {options[0]}
        <RelevantIcon toggleOption={isToggleOptionOpen} />
      </RelevantIconWrapper>
    )
  }
}
