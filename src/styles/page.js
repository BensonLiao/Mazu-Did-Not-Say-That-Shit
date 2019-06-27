import styled from 'styled-components'
import { cssVar } from './variables'

export const displayFlex = `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

export const alignCenter = `
  -webkit-box-pack: ${cssVar.alignItems};
  -ms-flex-pack: ${cssVar.alignItems};
  justify-content: ${cssVar.alignItems};
  -webkit-box-align: ${cssVar.alignItems};
  -ms-flex-align: ${cssVar.alignItems};
  align-items: ${cssVar.alignItems};
`

export const justifyContentSpaceBetween = `
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const DotSeparator = styled.span`
  marging-left: 2px;
  &:before {
    content: '·';
  }
`

export const dataTooltip = (
  tooltipBackground = cssVar.tooltipBackgroundGray,
  tooltipTopPosition = cssVar.tooltipTopPostion
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
    color: ${cssVar.tooltipColorWhite};
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
