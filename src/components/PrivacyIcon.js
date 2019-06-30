import React from 'react'
import styled from 'styled-components'
import StyledTooltip from './StyledTooltip'
import cssConst from '../styles/constants'
import { privacyIconStyle } from '../styles/post'

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
        bg={cssConst.tooltipBackgroundBlack}
      />
    </React.Fragment>
  )
}

PrivacyIcon.displayName = 'PrivacyIcon'

export default PrivacyIcon
