import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar, privacyIconStyle } from '../styles'
import privacyIconImg from '../../assets/img/global.36b90f96.png'

const PrivacyIconWrapper = styled.i`
  ${privacyIconStyle(privacyIconImg)}
`

const PrivacyIcon = () => {
  const tooltipId = 'tip-for-post-privacy'
  return (
    <React.Fragment>
      <PrivacyIconWrapper data-for={tooltipId} data-tip="Public" />
      <StyledTooltip
        id={tooltipId}
        effect="solid"
        bg={cssVar.tooltipBackgroundBlack}
      />
    </React.Fragment>
  )
}

PrivacyIcon.displayName = 'PrivacyIcon'

export default PrivacyIcon
