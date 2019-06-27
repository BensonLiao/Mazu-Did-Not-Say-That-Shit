import React, { Component } from 'react'
import styled from 'styled-components'
import { cssVar } from '../styles/variables'
import { displayFlex } from '../styles/page'
import { relevantIconStyle } from '../styles/post'

const RelevantIconWrapper = styled.div`
  ${displayFlex}
  font-size: ${cssVar.baseFontSize};
  margin: 8px 0;
  color: #444950;
  cursor: pointer;
`

const RelevantIcon = styled.i`
  ${relevantIconStyle}
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
    const text = isToggleOptionOpen ? 'close' : 'open'

    return (
      <RelevantIconWrapper onClick={this.toggleOptionMenu}>
        {options[0]}
        {text}
        <RelevantIcon />
      </RelevantIconWrapper>
    )
  }
}
