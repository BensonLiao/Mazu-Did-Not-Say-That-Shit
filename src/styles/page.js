import styled from 'styled-components'
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
