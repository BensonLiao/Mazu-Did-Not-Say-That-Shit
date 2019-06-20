import cssesc from 'cssesc'
import { cssVar } from './variables'
import { displayFlex, alignCenter } from './page'
import { REACTIONS } from '../actions'
import privacyIconImg from '../assets/img/global.png'
// import reactionIconImg from '../assets/img/fb-emojis.png'
import reactionIconImg from '../assets/img/fb-emojis-new.png'
import reactionButtonImg from '../assets/img/thumbUp.png'
import commentAndShareButtonImg from '../assets/img/responseShare.png'
import relevantIconImg from '../assets/img/relevant.png'

export const imgBaseUrl = require.context('../assets/img/', true)

export const privacyIconStyle = `
  width: 12px;
  height: 12px;
  vertical-align: middle;
  background-position: -28px -499px;
  background-image: url(${cssesc(privacyIconImg)});
  background-size: 73px 540px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 4px;
`

export const styledTooltipOverrideStyle = `
  div.__react_component_tooltip {
    padding: 8px 12px !important;
  }
`

export const reactionIconWrapperStyle = `
  height: ${cssVar.reactionIconSize};
  width: ${cssVar.reactionIconSize};
  ${styledTooltipOverrideStyle}
`

export const reactionIconBaseStyle = `
  cursor: pointer;
  background: #fff;
  border-radius: 12px;
  -webkit-box-shadow: 2px 0 #fff;
  box-shadow: 2px 0 #fff;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 49px 660px;
  height: ${cssVar.reactionIconSize};
  width: ${cssVar.reactionIconSize};
  line-height: 16px;
  display: inline-block;
`

export const reactionLikeIconStyle = `
  background-position: -49px -1037px !important;
`

export const reactionHahaIconStyle = `
  background-position: -68px -1018px !important;
`

export const reactionLoveIconStyle = `
  background-position: -68px -1037px !important;
`

export const reactionWowIconStyle = `
  background-position: -49px -1075px !important;
`

export const reactionSadIconStyle = `
  background-position: -49px -1056px !important;
`

export const reactionAngryIconStyle = `
  background-position: -70px -997px !important;
`

export const reactionIconStyle = reactionFeeling => {
  let iconStyle = ''
  switch (reactionFeeling) {
    default:
      iconStyle = reactionLikeIconStyle
      break
    case REACTIONS.HAHA:
      iconStyle = reactionHahaIconStyle
      break
    case REACTIONS.LOVE:
      iconStyle = reactionLoveIconStyle
      break
    case REACTIONS.WOW:
      iconStyle = reactionWowIconStyle
      break
    case REACTIONS.SAD:
      iconStyle = reactionSadIconStyle
      break
    case REACTIONS.ANGRY:
      iconStyle = reactionAngryIconStyle
  }
  const iconBaseStyle = `
    background-image: url(${cssesc(reactionIconImg)});
    background-repeat: no-repeat !important;
    background-size: 97px 1200px !important;
    ${iconStyle}
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
  width: ${cssVar.feedbackActionButtonIconSize};
  height: ${cssVar.feedbackActionButtonIconSize};
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
  color: ${cssVar.reactedButtonTextColor} !important;
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

export const relevantIconStyle = `
  background-image: url(${cssesc(relevantIconImg)});
  background-repeat: no-repeat !important;
  background-size: 500px 287px !important;
  background-position: -408px -270px !important;
  display: inline-block;
  height: 12px;
  margin-left: 2px;
  margin-top: 2px;
  vertical-align: top;
  width: 12px;
`

export const baseCommemtInputStyle = `
  webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 11px system-ui;
`
