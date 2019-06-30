import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import cssConst from '../styles/constants'

// Quick fix to turn-off warning by adding
// .attrs({
//   suppressClassNameWarning: true
// })
// but it need fix, See https://github.com/wwayne/react-tooltip/issues/489
const StyledTooltip = styled(ReactTooltip).attrs({
  suppressClassNameWarning: true
})`
  background-color: ${props => props.bg} !important;
  &.place-top {
    &:after {
      border-top-color: ${props => props.bg} !important;
      border-top-style: solid;
      border-top-width: 6px;
    }
  }
  &.place-bottom {
    &:after {
      border-bottom-color: ${props => props.bg} !important;
      border-bottom-style: solid;
      border-bottom-width: 6px;
    }
  }
  &.place-left {
    &:after {
      border-left-color: ${props => props.bg} !important;
      border-left-style: solid;
      border-left-width: 6px;
    }
  }
  &.place-right {
    &:after {
      border-right-color: ${props => props.bg} !important;
      border-right-style: solid;
      border-right-width: 6px;
    }
  }
  border: 1px solid ${props => props.bg} !important;
  &.place-top {
    &:before {
      border-top: 8px solid ${props => props.bg} !important;
    }
  }
  &.place-bottom {
    &:before {
      border-bottom: 8px solid ${props => props.bg} !important;
    }
  }
  &.place-left {
    &:before {
      border-left: 8px solid ${props => props.bg} !important;
    }
  }
  &.place-right {
    &:before {
      border-right: 8px solid ${props => props.bg} !important;
    }
  }
  span.multi-line {
    text-align: left !important;
  }
`

StyledTooltip.defaultProps = { bg: cssConst.tooltipBackgroundGray }

export default StyledTooltip
