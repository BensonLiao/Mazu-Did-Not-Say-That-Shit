import cssesc from 'cssesc'

export const privacyIconStyle = iconImg => `
  width: 12px;
  height: 12px;
  vertical-align: middle;
  background-position: -28px -499px;
  background-image: url(${cssesc(iconImg)});
  background-size: 73px 540px;
  background-repeat: no-repeat;
  display: inline-block;
  margin-left: 4px;
`

export const reactionIconStyle = `
  cursor: pointer;
  background: #fff;
  border-radius: 12px;
  -webkit-box-shadow: 2px 0 #fff;
  box-shadow: 2px 0 #fff;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 49px 660px;
  height: 16px;
  width: 16px;
  line-height: 16px;
  display: inline-block;
`

export const reactionLikeIconStyle = `
  background-position: 0 -526px !important;
`

export const reactionHahaIconStyle = `
  background-position: -17px -475px !important;
`

export const reactionLoveIconStyle = `
  background-position: -17px -492px !important;
`

export const reactionFirstIconStyle = iconImg => `
  ${reactionIconStyle}
  background-image: url(${cssesc(iconImg)});
  margin-left: -2px;
  margin-right: 2px;
`

export const reactionSecondIconStyle = iconImg => `
  ${reactionIconStyle}
  background-image: url(${cssesc(iconImg)});
  margin-left: -2px;
  margin-right: 2px;
`

export const reactionThirdIconStyle = iconImg => `
  ${reactionIconStyle}
  background-image: url(${cssesc(iconImg)});
  margin-left: -2px;
`
