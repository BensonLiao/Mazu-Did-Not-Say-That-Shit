import React, { Component } from 'react'
import styled from 'styled-components'
import cssConst from '../styles/constants'
import { displayFlex } from '../styles/page'
import { relevantIconStyle } from '../styles/post'

interface StyledContainerProps {
  toggleOption: boolean
}

const RelevantIconWrapper = styled.div<StyledContainerProps>`
  ${displayFlex}
  font-size: ${cssConst.baseFontSize};
  margin: 8px 12px;
  color: ${({ toggleOption }) =>
    toggleOption ? cssConst.reactedButtonTextColor : '#444950'};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

const RelevantIcon = styled.i<StyledContainerProps>`
  ${({ toggleOption }) => relevantIconStyle(toggleOption)}
`

type State = {
  isToggleOptionOpen: boolean
  options: Array<string>
}

export default class RelevantCommentToggle extends Component<State> {
  static defaultProps = {
    isToggleOptionOpen: false,
    options: ['最相關', '從新到舊', '所有留言']
  }

  readonly state: State = { ...this.props }

  // constructor() {
  //   super()
  //   this.state = {
  //     isToggleOptionOpen: false,
  //     options: ['最相關', '從新到舊', '所有留言']
  //   }
  // }

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
