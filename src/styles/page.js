import styled from 'styled-components'
import cssConst from './constants'

export const displayFlex = `
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`

export const alignCenter = `
  -webkit-box-pack: ${cssConst.alignItems};
  -ms-flex-pack: ${cssConst.alignItems};
  justify-content: ${cssConst.alignItems};
  -webkit-box-align: ${cssConst.alignItems};
  -ms-flex-align: ${cssConst.alignItems};
  align-items: ${cssConst.alignItems};
`

export const justifyContentSpaceBetween = `
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
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
