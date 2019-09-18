import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import { styledTooltipOverrideStyle, privacyIconStyle } from '../styles/post'

const PrivacyIconWrapper = styled.div`
  ${styledTooltipOverrideStyle}
`

const Icon = styled.i`
  ${privacyIconStyle}
`

const PrivacyIcon = () => {
  const tooltipId = 'tip-for-post-privacy'
  return (
    <PrivacyIconWrapper>
      <Icon data-for={tooltipId} data-tip="公開" />
      <StyledTooltip id={tooltipId} effect="solid" />
    </PrivacyIconWrapper>
  )
}

PrivacyIcon.displayName = 'PrivacyIcon'

export default PrivacyIcon
