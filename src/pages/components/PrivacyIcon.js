import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { cssVar, privacyIconStyle } from '../styles'

const PrivacyIconWrapper = styled.i`
  ${privacyIconStyle}
`

const PrivacyIcon = () => {
  const tooltipId = 'tip-for-post-privacy'
  return (
    <React.Fragment>
      <PrivacyIconWrapper data-for={tooltipId} data-tip="公開" />
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
