/* eslint-disable indent */
import cssesc from 'cssesc'
import appConst from '../utils/constants'
import cssConst from './constants'
import { displayFlex, alignCenter } from './page'
import { REACTIONS } from '../actions'
import privacyIconImg from '../assets/img/global.png'
import reactionIconImg from '../assets/img/fb-emojis-new.png'
import reactionButtonImg from '../assets/img/thumbUp.png'
import commentAndShareButtonImg from '../assets/img/responseShare.png'
import relevantIconImg from '../assets/img/relevant.png'
import blueCheckIconImg from '../assets/img/blue-check.png'

const {
  component: { COMMENT }
} = appConst

export const imgBaseUrl = require.context('../assets/img/', true)

export const privacyIconStyle = `
  width: 12px;
  height: 12px;
  background-position: -28px -499px;
  background-image: url(${cssesc(privacyIconImg)});
  background-size: 73px 540px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 4px;
`

export const styledTooltipOverrideStyle = `
  div.__react_component_tooltip {
    padding: 4px 6px !important;
    font-size: ${cssConst.baseFontSize};
  }
`

export const reactionIconBaseStyle = `
  cursor: pointer;
  background: #fff;
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: 49px 660px;
  line-height: 16px;
  display: inline-block;
`

export const reactionIconSummaryStyle = `
  box-shadow: 2px 0 #fff;
  overflow: hidden;
`

export const reactionIconTipStyle = `
  margin-right: 4px;
`

export const reactionIconTipWrapperStyle = `
  ${displayFlex}
  line-height: 16px;
  margin-bottom: 4px;
`

const reactionIconImgMap = {
  default: {
    ...REACTIONS
  },
  comment: {
    ...REACTIONS
  }
}

reactionIconImgMap.default.LIKE =
  'background-position: -49px -1037px !important;'
reactionIconImgMap.default.HAHA =
  'background-position: -68px -1018px !important;'
reactionIconImgMap.default.LOVE =
  'background-position: -68px -1037px !important;'
reactionIconImgMap.default.WOW =
  'background-position: -49px -1075px !important;'
reactionIconImgMap.default.SAD =
  'background-position: -49px -1056px !important;'
reactionIconImgMap.default.ANGRY =
  'background-position: -70px -997px !important;'

reactionIconImgMap.comment.LIKE =
  'background-position: -49px -1145px !important;'
reactionIconImgMap.comment.HAHA =
  'background-position: -66px -1128px !important;'
reactionIconImgMap.comment.LOVE =
  'background-position: -66px -1145px !important;'
reactionIconImgMap.comment.WOW =
  'background-position: -34px -1168px !important;'
reactionIconImgMap.comment.SAD = 'background-position: -0px -1168px !important;'
reactionIconImgMap.comment.ANGRY =
  'background-position: -66px -1111px !important;'

export const getIconSize = withComponent => {
  switch (withComponent) {
    default:
      return `
        height: ${cssConst.reactionIconSize};
        width: ${cssConst.reactionIconSize};
      `
    case COMMENT:
      return `
        height: ${cssConst.commentReactionIconSize};
        width: ${cssConst.commentReactionIconSize};
      `
  }
}

export const reactionIconStyle = (reactionFeeling, withComponent) => {
  const iconImgStyle = reactionIconImgMap[withComponent][reactionFeeling]
  const iconBaseStyle = `
    background-image: url(${cssesc(reactionIconImg)});
    background-repeat: no-repeat !important;
    background-size: 97px 1200px !important;
    ${getIconSize(withComponent)}
    ${iconImgStyle}
  `
  return iconBaseStyle
}

export const feedbackActionWrapperStyle = `
  font-weight: 600;
  font-size: 14px;
  color: #606770;
  margin: 0 12px;
  min-height: 32px;
  padding: 4px 0;
  ${displayFlex}
  ${alignCenter}
`

export const feedbackActionButtonWrapperStyle = `
  width: 100%;
  min-height: 32px;
  cursor: pointer;
  &:hover {
    background-color: rgba(29,33,41,.04);
    border-radius: 2px;
    text-decoration: none;
  }
  ${displayFlex}
  ${alignCenter}
`

export const feedbackActionButtonBaseStyle = `
  width: ${cssConst.feedbackActionButtonIconSize};
  height: ${cssConst.feedbackActionButtonIconSize};
  display: inline-block;
  background-repeat: no-repeat;
  margin: 0 6px 0 0;
`

export const feedbackReactionButtonStyle = `
  background-image: url(${cssesc(reactionButtonImg)});
  background-size: 55px 237px !important;
  background-position: -19px -131px !important;
`

export const feedbackReactedStyle = `
  color: ${cssConst.reactedButtonTextColor} !important;
`

export const feedbackReactedButtonStyle = `
  background-image: url(${cssesc(reactionButtonImg)});
  background-size: 55px 237px !important;
  background-position: -21px -110px !important;
`

export const feedbackCommentButtonStyle = `
  background-image: url(${cssesc(commentAndShareButtonImg)});
  background-size: 161px 376px !important;
  background-position: -42px -249px !important;
`

export const feedbackShareButtonStyle = `
  background-image: url(${cssesc(commentAndShareButtonImg)});
  background-size: 161px 376px !important;
  background-position: -61px -249px !important;
`

export const relevantIconStyle = optionOpen => `
  background-image: url(${cssesc(relevantIconImg)});
  background-repeat: no-repeat !important;
  background-size: 500px 287px !important;
  ${
    optionOpen ?
      'background-position: -421px -270px !important;' :
      'background-position: -408px -270px !important;'
  }
  display: inline-block;
  height: 12px;
  margin-left: 2px;
  margin-top: 2px;
  vertical-align: top;
  width: 12px;
`

export const verifiedBadgeIconStyle = `
  background-image: url(${cssesc(blueCheckIconImg)});
  background-repeat: no-repeat;
  background-size: 28px 195px;
  background-position: 0 -165px;
  height: 15px;
  width: 15px;
  vertical-align: -2px;
  display: inline-block;
  margin-left: 4px;
`

export const commentPlaceholderWrapperStyle = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap !important;
  cursor: text;
  line-height: 16px;
  flex: 1 1 auto;
`

export const baseCommentInputStyle = `
  writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: textfield;
  background-color: white;
  rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 11px system-ui;
`

// Facebook's workround
export const yourCommentStyle = `
  &:before {
    background-color: ${cssConst.commentYoursBorderColor};
    bottom: 0;
    content: '';
    left: 0;
    position: absolute;
    top: 0;
    width: 2px;
  }
`

// border style workround
export const yourCommentBorderStyle = `
  border-left: 2px solid ${cssConst.commentYoursBorderColor};
  padding: 2px 12px 8px 12px !important;
`

export const wideCommentReactionSummaryStyle = `
  position: absolute;
  bottom: -11px;
  right: 2px;
  z-index: 0;
`

export const commentReactionSummaryStyle = `
  position: relative;
  align-self: flex-end;
  bottom: 0;
  margin-bottom: 4px;
  margin-left: -8px;
  right: 0;
`
