import styled, { css, keyframes } from 'styled-components'
import cssConst from './constants'

export const displayBlock = `
  display: block;
`

export const displayInlineBlock = `
  display: inline-block;
`

export const displayFlex = `
  display: flex;
`

export const displayInlineFlex = `
  display: inline-flex;
`

export const alignCenter = `
  justify-content: ${cssConst.alignItems};
  align-items: ${cssConst.alignItems};
`

export const alignYAxisCenter = `
  align-items: ${cssConst.alignItems};
`

export const alignXAxisCenter = `
  justify-content: ${cssConst.alignItems};
`

export const alignXAxisEnd = `
  justify-content: flex-end;
`

export const alignYAxisEnd = `
  align-items: flex-end;
`

export const alignBottomEnd = `
  justify-content: flex-end;
  align-items: flex-end;
`

export const justifyContentSpaceBetween = `
  justify-content: space-between;
`

export const DotSeparator = styled.span`
  font-size: 13px; !important;
  marging-left: 2px;
  &:before {
    content: '·';
  }
`

export const keyframesFullView = keyframes`
  100% {
    width: 100%;
  }
`

export const keyframesShimmer = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`

export const shimmerAnimation = css`
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 500px 100%;
  animation: ${keyframesShimmer} 2s infinite linear;
`

export const dataTooltip = (
  tooltipBackground = cssConst.tooltipBackgroundGray,
  tooltipTopPosition = cssConst.tooltipTopPostion
) => `
  [data-tooltip] {
    position: relative;
  }
  &:before {
    content: attr(data-tooltip);
    z-index: 1;
    width: auto;
    position: absolute;
    top: ${tooltipTopPosition};
    padding: 1px 5px;
    border-radius: 4px;
    display: inline-block !important;
    color: ${cssConst.tooltipColorWhite};
    background: ${tooltipBackground};
  }
  &:after {
    content: ' ';
    position: absolute;
    top: ${tooltipTopPosition};
    width: 0px;
    height: 0px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid ${tooltipBackground};
  }
`
