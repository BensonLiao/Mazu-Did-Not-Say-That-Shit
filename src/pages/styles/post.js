import cssesc from 'cssesc'
import { cssVar } from './variables'
import { displayFlex, alignCenter } from './page'
import privacyIconImg from '../../assets/img/global.png'
import reactionIconImg from '../../assets/img/fb-emojis.png'
import reactionButtonImg from '../../assets/img/thumbUp.png'
import commentAndShareButtonImg from '../../assets/img/responseShare.png'

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
  background-image: url(${cssesc(reactionIconImg)});
  background-position: 0 -526px !important;
`

export const reactionHahaIconStyle = `
  background-image: url(${cssesc(reactionIconImg)});
  background-position: -17px -475px !important;
`

export const reactionLoveIconStyle = `
  background-image: url(${cssesc(reactionIconImg)});
  background-position: -17px -492px !important;
`

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
