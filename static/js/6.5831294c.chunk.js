(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{124:function(n,e,t){"use strict";var r=t(3),o=t(0),i=t(120);e.a={getRankingReactions:function(n){if(0===n.length)return[];var e=Object.keys(o.c).map(function(e){var t=n.filter(function(n){return n.feeling===e}).length;return{feeling:e,total:t}}).sort(function(n,e){return e.total-n.total});return Object(r.a)(e)},getReactionSummary:function(n){if(0===n.length)return"";var e=this.getRankingReactions(n),t={all:{forText:"",forTip:""},topMost:e[0],secondMost:e[1],thirdMost:e[2],topMostTip:"",secondMostTip:"",thirdMostTip:""},r=n.filter(function(n){return n.feeling===e[0].feeling}),o=n.filter(function(n){return n.feeling===e[1].feeling}),a=n.filter(function(n){return n.feeling===e[2].feeling});return t.all.forText=i.a.getReactionsCount(n),t.all.forTip=i.a.getFeedbacksCountTip(n,18),t.topMostTip=i.a.getFeedbacksCountTip(r,18),t.secondMostTip=i.a.getFeedbacksCountTip(o,18),t.thirdMostTip=i.a.getFeedbacksCountTip(a,18),t},getCommentReactionSummary:function(n){if(0===n.length)return"";var e=this.getRankingReactions(n),t={forText:"",forTip:"",topMost:e[0],secondMost:e[1],thirdMost:e[2]};return t.forText=i.a.getCommentReactionsCount(n),t.forTip=i.a.getCommentReactionsCountTip(n,e),t}}},125:function(n,e,t){"use strict";var r=t(109),o=t(2),i=t.n(o),a=t(110),c=t(0),u=t(115),l=t(114),d=t(111),m=t(112),p=t(113);function f(){var n=Object(r.a)(["\n  ","\n  ","\n  ","\n"]);return f=function(){return n},n}function s(){var n=Object(r.a)(["\n  ","\n  ","\n  ","\n  ","\n  position: relative;\n  margin-left: -2px;\n  z-index: 3;\n  vertical-align: top;\n"]);return s=function(){return n},n}var g=l.a.component.COMMENT,b=a.c.div(s(),p.u,function(n){return Object(p.l)(n.withComponent)},function(n){return n.withComponent===g&&m.f},function(n){return n.withComponent===g&&"border-right: 2px solid #fff;"}),v=a.c.i(f(),p.o,p.q,function(n){return Object(p.p)(n.reactFeeling,n.withComponent)}),h="tip-for-post-first-most-reaction",x=function(n){var e=n.reactFeeling,t=n.withComponent,r=n.countSummary;return i.a.createElement(b,{"data-for":h,"data-tip":r,withComponent:t},i.a.createElement(v,{reactFeeling:e,withComponent:t}),r.length>0&&i.a.createElement(u.a,{id:h,effect:"solid",multiline:!0,bg:d.a.tooltipBackgroundBlack}))};x.defaultProps={reactFeeling:c.c.LIKE,countSummary:""},x.displayName="ReactionTopMostIcon",e.a=x},126:function(n,e,t){"use strict";var r=t(109),o=t(2),i=t.n(o),a=t(110),c=t(0),u=t(115),l=t(114),d=t(111),m=t(112),p=t(113);function f(){var n=Object(r.a)(["\n  ","\n  ","\n  ","\n"]);return f=function(){return n},n}function s(){var n=Object(r.a)(["\n  ","\n  ","\n  ","\n  ","\n  position: relative;\n  margin-left: -2px;\n  z-index: 2;\n  vertical-align: top;\n"]);return s=function(){return n},n}var g=l.a.component.COMMENT,b=a.c.div(s(),p.u,function(n){return Object(p.l)(n.withComponent)},function(n){return n.withComponent===g&&m.f},function(n){return n.withComponent===g&&"border-right: 2px solid #fff;"}),v=a.c.i(f(),p.o,p.q,function(n){return Object(p.p)(n.reactFeeling,n.withComponent)}),h="tip-for-post-second-most-reaction",x=function(n){var e=n.reactFeeling,t=n.withComponent,r=n.countSummary;return i.a.createElement(b,{"data-for":h,"data-tip":r,withComponent:t},i.a.createElement(v,{reactFeeling:e,withComponent:t}),r.length>0&&i.a.createElement(u.a,{id:h,effect:"solid",multiline:!0,bg:d.a.tooltipBackgroundBlack}))};x.defaultProps={reactFeeling:c.c.HAHA,countSummary:""},x.displayName="ReactionSecondMostIcon",e.a=x},127:function(n,e,t){"use strict";var r=t(109),o=t(2),i=t.n(o),a=t(110),c=t(0),u=t(115),l=t(114),d=t(111),m=t(112),p=t(113);function f(){var n=Object(r.a)(["\n  ","\n  ","\n  ","\n"]);return f=function(){return n},n}function s(){var n=Object(r.a)(["\n  ","\n  ","\n  ","\n  ","\n  position: relative;\n  margin-left: -2px;\n  margin-right: 2px;\n  z-index: 1;\n  vertical-align: top;\n"]);return s=function(){return n},n}var g=l.a.component.COMMENT,b=a.c.div(s(),p.u,function(n){return Object(p.l)(n.withComponent)},function(n){return n.withComponent===g&&m.f},function(n){return n.withComponent===g&&"border-right: 2px solid #fff;"}),v=a.c.i(f(),p.o,p.q,function(n){return Object(p.p)(n.reactFeeling,n.withComponent)}),h="tip-for-post-third-most-reaction",x=function(n){var e=n.reactFeeling,t=n.withComponent,r=n.countSummary;return i.a.createElement(b,{"data-for":h,"data-tip":r,withComponent:t},i.a.createElement(v,{reactFeeling:e,withComponent:t}),r.length>0&&i.a.createElement(u.a,{id:h,effect:"solid",multiline:!0,bg:d.a.tooltipBackgroundBlack}))};x.defaultProps={reactFeeling:c.c.LOVE,countSummary:""},x.displayName="ReactionThirdMostIcon",e.a=x},173:function(n,e,t){"use strict";t.r(e);var r=t(35),o=t(117),i=t(109),a=t(2),c=t.n(a),u=t(110),l=t(111);function d(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function m(n){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function p(n){return(p="function"===typeof Symbol&&"symbol"===m(Symbol.iterator)?function(n){return m(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":m(n)})(n)}function f(n,e){return!e||"object"!==p(e)&&"function"!==typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n,e){return(g=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}var b=t(112),v=t(113);function h(){var n=Object(i.a)(["\n  ","\n"]);return h=function(){return n},n}function x(){var n=Object(i.a)(["\n  ","\n  font-size: ",";\n  margin: 8px 12px;\n  color: ",";\n  cursor: pointer;\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return x=function(){return n},n}var E=u.c.div(x(),b.e,l.a.baseFontSize,function(n){return n.toggleOption?l.a.reactedButtonTextColor:"#444950"}),k=u.c.i(h(),function(n){return Object(v.t)(n.toggleOption)}),y=function(n){function e(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=f(this,s(e).call(this))).toggleOptionMenu=function(){var e=n.state.isToggleOptionOpen;n.setState({isToggleOptionOpen:!e})},n.state={isToggleOptionOpen:!1,options:["\u6700\u76f8\u95dc","\u5f9e\u65b0\u5230\u820a","\u6240\u6709\u7559\u8a00"]},n}var t,r,o;return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&g(n,e)}(e,a["Component"]),t=e,(r=[{key:"render",value:function(){var n=this.state,e=n.isToggleOptionOpen,t=n.options;return c.a.createElement(E,{toggleOption:e,onClick:this.toggleOptionMenu},t[0],c.a.createElement(k,{toggleOption:e}))}}])&&d(t.prototype,r),o&&d(t,o),e}(),O=t(114);function I(){var n=Object(i.a)(["\n  display: block;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  margin-right: 6px;\n  overflow: hidden;\n"]);return I=function(){return n},n}function j(){var n=Object(i.a)(["\n  position: relative;\n  display: block;\n"]);return j=function(){return n},n}function C(){var n=Object(i.a)(["\n  float: left;\n  ","\n"]);return C=function(){return n},n}var w=u.c.div(C(),function(n){return n.isHidden&&"opacity: 0.5;"}),M=u.c.div(j()),T=u.c.img(I()),H=function(n){var e=n.profileName,t=n.profileLink,r=n.profileImg,o=n.withComponent,i=n.isHidden,a=Object(v.m)("./".concat(r)),u=o===O.a.component.COMMENT?"a":"span";return c.a.createElement(w,{isHidden:i},c.a.createElement(M,{href:t,as:u},c.a.createElement(T,{src:a,alt:e})))};H.defaultProps={profileName:"\u91d1\u4e58\u4e94",profileLink:"https://www.facebook.com/takeshikaneshirofanspage/",profileImg:"goldxfive.png",withComponent:O.a.component.COMMENT,isHidden:!1};var S=H,F=t(1),N=t.n(F),P=t(0);function z(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var B=t(116);function L(){var n=Object(i.a)(["\n  ","\n  width: 300px;\n  appearance: none;\n  border-radius: 0;\n  outline: none;\n  padding: 0;\n  border: 0 solid transparent;\n  background: transparent;\n  font-size: ",";\n"]);return L=function(){return n},n}function R(){var n=Object(i.a)(["\n  color: ",";\n  font-size: ",";\n  ","\n"]);return R=function(){return n},n}var V=u.c.div(R(),l.a.commentPlaceholderColor,l.a.baseFontSize,v.b),A=u.c.input(L(),v.a,l.a.baseFontSize),Y=!1,_=function(n){var e=n.doCommentAction,t=n.doDeleteComment,r=n.inputId,o=n.saying,i=z(n,["doCommentAction","doDeleteComment","inputId","saying"]),a=Object(B.b)()||null,u=function(n){if("compositionstart"===n.type&&(Y=!0),"compositionend"===n.type&&(Y=!1),"Enter"===n.key&&Y)Y=!1;else if("Enter"!==n.key||Y){if("Escape"===n.key){if(a)(0,a.toggleEditMode)()}}else{if(n.shiftKey)console.log("doExpandNewLine");else if(function(n,e,t){var r=document.getElementById(n);""===r.value?t():(e(),r.value="")}(r,e,t),a)(0,a.toggleEditMode)()}};return c.a.createElement(V,null,c.a.createElement(A,Object.assign({onKeyDown:u,onCompositionStart:u,onCompositionEnd:u,id:r,defaultValue:o},i)))};_.displayName="MyCommentPlaceholder",_.defaultProps={saying:"",doDeleteComment:function(){}};var D=_,K=Object(r.b)(function(n,e){return{reactId:e.reactId,inputId:e.myCommentInputCompId}},function(n,e){return{doCommentAction:function(){var t=document.getElementById(e.myCommentInputCompId).value,r={entities:{id:N()(),saying:t,time:"1\u5206\u9418",attachMedia:"",mediaType:"",user:e.you,targetId:P.b.TARGET,reactId:N()(),isHidden:!1}};return n(Object(P.e)(r))}}})(D),W=Object(r.b)(function(n,e){return{inputId:e.commentId,saying:e.saying}},function(n,e){return{doCommentAction:function(){var t=document.getElementById(e.commentId).value,r={id:e.commentId,saying:t};return n(Object(P.l)(r))},doDeleteComment:function(){return n(Object(P.i)(e.commentId))}}})(D),q=t(121),J=t.n(q),G=t(135),U=t.n(G);function Q(){var n=Object(i.a)(["\n  ","\n  background-position: -34px -203px;\n"]);return Q=function(){return n},n}function X(){var n=Object(i.a)(["\n  ","\n  background-position: -34px -186px;\n"]);return X=function(){return n},n}function Z(){var n=Object(i.a)(["\n  ","\n  background-position: -36px -150px;\n"]);return Z=function(){return n},n}function $(){var n=Object(i.a)(["\n  ","\n  background-position: -34px -169px;\n"]);return $=function(){return n},n}function nn(){var n=Object(i.a)(["\n  display: block;\n"]);return nn=function(){return n},n}var en=u.c.div(nn()),tn="\n  display: inline-block;\n  height: ".concat(l.a.commentAttachIconSize,";\n  width: ").concat(l.a.commentAttachIconSize,";\n  margin-left: 10px;\n  cursor: pointer;\n  background-image: url(").concat(J()(U.a),");\n  background-repeat: no-repeat;\n  background-size: 55px 237px;\n"),rn=u.c.span($(),tn),on=u.c.span(Z(),tn),an=u.c.span(X(),tn),cn=u.c.span(Q(),tn),un=function(){return c.a.createElement(en,null,c.a.createElement(rn,null),c.a.createElement(on,null),c.a.createElement(an,null),c.a.createElement(cn,null))};function ln(){var n=Object(i.a)(["\n  background-color: ",";\n  border: 1px solid #ccd0d5;\n  border-radius: 16px;\n  ","\n  ","\n  ","\n  cursor: text;\n  flex: 1 1 auto;\n  line-height: 16px;\n  overflow: hidden;\n  padding: 7px 12px;\n"]);return ln=function(){return n},n}var dn=u.c.div(ln(),l.a.commentTextBackground,b.e,b.b,b.h),mn=O.a.you,pn=function(n){var e=n.commentId,t=n.saying,r=n.myCommentInputCompId;return c.a.createElement(dn,null,""===e&&""!==r&&c.a.createElement(K,{type:"text",placeholder:"\u7559\u8a00......",you:mn,myCommentInputCompId:r}),""!==e&&""===r&&c.a.createElement(W,{type:"text",commentId:e,saying:t}),c.a.createElement(un,null))};pn.defaultProps={commentId:"",saying:"",myCommentInputCompId:""};var fn=pn;function sn(){var n=Object(i.a)(["\n  ","\n  ","\n  padding: 4px 12px 8px 12px;\n"]);return sn=function(){return n},n}var gn=u.c.div(sn(),b.e,b.b),bn=O.a.myCommentInputCompId,vn=O.a.component,hn=function(n){var e=n.inEditMode,t=n.commentId,r=n.saying;return c.a.createElement(gn,null,c.a.createElement(S,{withComponent:vn.DEFAULT}),e?c.a.createElement(fn,{commentId:t,saying:r}):c.a.createElement(fn,{myCommentInputCompId:bn}))};hn.defaultProps={inEditMode:!1,commentId:"",saying:""};var xn=hn,En=t(118),kn=t(136);function yn(){var n=Object(i.a)(["\n  ","\n"]);return yn=function(){return n},n}function On(){var n=Object(i.a)(["\n  width: 360px;\n  height: 204px;\n  object-fit: contain;\n"]);return On=function(){return n},n}function In(){var n=Object(i.a)(["\n  ","\n  width: 360px;\n  height: 204px;\n"]);return In=function(){return n},n}function jn(){var n=Object(i.a)(["\n  ","\n  font-size: ",";\n  margin-left: 4px;\n  color: ",";\n  cursor: ",";\n"]);return jn=function(){return n},n}function Cn(){var n=Object(i.a)(["\n  font-size: ",";\n  ","\n  flex: 1 1 auto;\n  min-width: 0;\n  width: 100%;\n  white-space: normal;\n  word-break: break-word;\n  word-wrap: break-word;\n"]);return Cn=function(){return n},n}function wn(){var n=Object(i.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 18px;\n  padding: 8px 12px;\n"]);return wn=function(){return n},n}var Mn=u.c.div(wn(),l.a.commentTextBackground,l.a.commentPlaceholderColorBlack),Tn=u.c.div(Cn(),l.a.baseFontSize,v.b),Hn=u.c.span(jn(),b.f,l.a.baseFontSize,function(n){return n.isHashTag?l.a.commentFeedbackButtonTextColor:"inherit"},function(n){return n.isHashTag?"pointer":"text"}),Sn=u.c.div(In(),b.f),Fn=u.c.img(On()),Nn=u.c.i(yn(),v.v),Pn=function(n){var e=n.profileName,t=n.profileLink,r=n.isVerified,o=n.separatedContent;return c.a.createElement(Mn,null,function(n,e,t,r){return n.map(function(n,o){return c.a.createElement(Tn,{key:n.id},0===o&&c.a.createElement(kn.a,{profileName:e,profileLink:t}),0===o&&r&&c.a.createElement(Nn,null),""!==n.content&&c.a.createElement(Hn,{isHashTag:n.isHashTag},n.content),""!==n.attachMedia&&c.a.createElement(Sn,null,c.a.createElement(Fn,{src:Object(v.m)("./".concat(n.attachMedia)),alt:n.attachMedia})))})}(o,e,t,r))};Pn.defaultProps={profileName:"\u53f0\u7063\u5de5\u5177\u4f2f \u6c6a\u9032\u576a",profileLink:"https://www.facebook.com/jingping.tw/",isVerified:!0,separatedContent:{}};var zn=Pn,Bn=t(124),Ln=t(115),Rn=t(125),Vn=t(126),An=t(127);function Yn(){var n=Object(i.a)(["\n  ","\n  color: #777d88;\n  padding: 0 3px 0 2px;\n  white-space: nowrap;\n  font-family: Microsoft JhengHei;\n"]);return Yn=function(){return n},n}function _n(){var n=Object(i.a)(["\n  ","\n  position: relative;\n  z-index: 0;\n"]);return _n=function(){return n},n}function Dn(){var n=Object(i.a)(["\n  ","\n  ","\n  background: ",";\n  color: ",";\n  ","\n  ","\n  z-index: 4;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2);\n  font-size: 12px;\n  font-weight: 400;\n  padding: 2px 1px 2px 4px;\n  cursor: pointer;\n"]);return Dn=function(){return n},n}var Kn=u.c.div(Dn(),b.f,v.u,l.a.postBackgroundWhite,l.a.commentPlaceholderColor,function(n){return!n.isNarrowComp&&v.w},function(n){return n.isNarrowComp&&v.c}),Wn=u.c.span(_n(),b.d),qn=u.c.span(Yn(),b.f),Jn=function(n){var e=n.commentId,t=n.reactionIds,r=n.reactions,o=function(n){var e=Object(a.useState)(!1),t=Object(En.a)(e,2),r=t[0],o=t[1];return Object(a.useEffect)(function(){var e=document.getElementById(n);e&&e.clientWidth<140&&o(!0)},[n]),r}(e),i=t.map(function(n){return r[n]}).filter(function(n){return n.targetId===e}),u=Bn.a.getCommentReactionSummary(i),d=O.a.component.COMMENT;return""===u?null:c.a.createElement(Kn,{"data-for":"tip-for-comment-reaction","data-tip":u.forTip,isNarrowComp:o},c.a.createElement(Wn,null,c.a.createElement(Rn.a,{reactFeeling:u.topMost.feeling,withComponent:d}),u.secondMost.total>0&&c.a.createElement(Vn.a,{reactFeeling:u.secondMost.feeling,withComponent:d}),u.thirdMost.total>0&&c.a.createElement(An.a,{reactFeeling:u.thirdMost.feeling,withComponent:d}),c.a.createElement(qn,null,u.forText)),c.a.createElement(Ln.a,{id:"tip-for-comment-reaction",effect:"solid",html:!0,bg:l.a.tooltipBackgroundBlack}))};Jn.defaultProps={commentId:"commentId",reactionIds:[],reactions:{}};var Gn=Jn,Un=Object(r.b)(function(n,e){return{commentId:e.commentId,reactionIds:Object(o.c)(n),reactions:Object(o.d)(n)}})(Gn),Qn=t(122),Xn=t.n(Qn),Zn=t(133),$n=t.n(Zn),ne=t(132),ee=t.n(ne),te="\n  &:before {\n    background-image: url(".concat(J()($n.a),");\n    background-repeat: no-repeat;\n    background-size: 17px 34px;\n    background-position: 0 0;\n    content: '';\n    display: inline-block;\n    height: 16px;\n    margin-right: 5px;\n    width: 16px;\n  }\n"),re="\n  &:before {\n    background-image: url(".concat(J()(ee.a),");\n    background-repeat: no-repeat;\n    background-size: 49px 262px;\n    background-position: 0 -228px;\n    content: '';\n    display: inline-block;\n    height: 16px;\n    margin-right: 5px;\n    width: 16px;\n  }\n"),oe="\n  &:before {\n    background-image: url(".concat(J()($n.a),");\n    background-repeat: no-repeat;\n    background-size: 17px 34px;\n    background-position: 0 -17px;\n    content: '';\n    display: inline-block;\n    height: 16px;\n    margin-right: 5px;\n    width: 16px;\n  }\n"),ie=t(134),ae=t.n(ie);function ce(){var n=Object(i.a)(["\n  font-size: 13px;\n  -webkit-font-smoothing: antialiased;\n  font-weight: normal;\n  line-height: 22px;\n"]);return ce=function(){return n},n}function ue(){var n=Object(i.a)(["\n  ","\n  ","\n  ","\n  border: solid ",";\n  border-width: 1px 0;\n  color: ",";\n  &:hover {\n    background-color: ",";\n    border-color: ",";\n    color: ",";\n  }\n  outline: none;\n  text-decoration: none;\n  padding: 0 12px;\n  max-width: 300px;\n  cursor: pointer;\n"]);return ue=function(){return n},n}var le=u.c.div(ue(),b.e,b.c,function(n){return n.btnIcon},l.a.toggleMenuItemBorderColor,l.a.toggleMenuItemTextColor,l.a.toggleMenuItemHoverBackground,l.a.toggleMenuItemBorderHoverColor,l.a.toggleMenuItemTextHoverColor),de=u.c.span(ce()),me=function(n){var e=n.btnIcon,t=n.btnText,r=n.onClick;return c.a.createElement(le,{btnIcon:e,onClick:r},c.a.createElement(de,null,t))};me.defaultProps={btnIcon:"",btnText:"\u9078\u55ae\u6309\u9215",onClick:function(){console.log("clicked!")}};var pe=me,fe=Object(r.b)(null,function(n,e){return{onClick:function(){return n(Object(P.h)(e.commentId))}}})(pe),se=Object(r.b)(null,function(n,e){return{onClick:function(){return n(Object(P.i)(e.commentId))}}})(pe);function ge(){var n=Object(i.a)(["\n  list-style-type: none;\n  overflow: hidden;\n  white-space: nowrap;\n  display: list-item;\n  text-align: -webkit-match-parent;\n"]);return ge=function(){return n},n}function be(){var n=Object(i.a)(["\n  padding: 5px 0;\n  margin: 0;\n  list-style-type: disc;\n"]);return be=function(){return n},n}function ve(){var n=Object(i.a)(["\n  border-radius: 3px;\n  background-clip: padding-box;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);\n"]);return ve=function(){return n},n}function he(){var n=Object(i.a)(["\n  padding-top: 10px;\n  margin: -1px 0 30px;\n  font-size: 13px;\n"]);return he=function(){return n},n}function xe(){var n=Object(i.a)(["\n  position: absolute;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 500px 296px;\n  background-position: -400px -245px;\n  height: 8px;\n  top: 2px;\n  width: 16px;\n  left: 100%;\n  margin-left: -28px;\n  overflow: hidden;\n"]);return xe=function(){return n},n}function Ee(){var n=Object(i.a)(["\n  position: absolute;\n  right: -14px;\n  z-index: 5;\n"]);return Ee=function(){return n},n}var ke=u.c.div(Ee()),ye=u.c.i(xe(),ae.a),Oe=u.c.div(he()),Ie=u.c.div(ve()),je=u.c.ul(be()),Ce=u.c.li(ge()),we=function(n){var e=n.commentId,t=n.isHidden,r=n.isYour,o=n.onClick,i=Object(B.b)().toggleEditMode;return c.a.createElement(ke,null,c.a.createElement(Oe,null,c.a.createElement(Ie,null,c.a.createElement(je,null,r&&c.a.createElement(Ce,null,c.a.createElement(pe,{btnIcon:re,btnText:"\u7de8\u8f2f......",onClick:i}),c.a.createElement(se,{commentId:e,btnIcon:oe,btnText:"\u522a\u9664......",onClick:o})),!r&&!t&&c.a.createElement(Ce,null,c.a.createElement(fe,{commentId:e,btnIcon:te,btnText:"\u96b1\u85cf\u7559\u8a00",onClick:o})),!r&&c.a.createElement(Ce,null,c.a.createElement(pe,{btnText:"\u5c0b\u6c42\u652f\u63f4\u6216\u6aa2\u8209\u7559\u8a00"}))))),c.a.createElement(ye,null))};we.defaultProps={commentId:"fakecommentid",isHidden:!1,isYour:!1,onClick:function(){}};var Me=we;function Te(){var n=Object(i.a)(["\n  vertical-align: middle;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: 97px 1200px;\n  background-position: -83px -1120px;\n  width: 12px;\n  height: 12px;\n  cursor: pointer;\n  &:hover {\n    background-position: -83px -1094px;\n  }\n  &:active {\n    background-position: -83px -1107px;\n  }\n"]);return Te=function(){return n},n}function He(){var n=Object(i.a)(["\n  ","\n  position: absolute;\n  vertical-align: middle;\n  width: 22px;\n  line-height: 16px;\n  padding: 8px 12px;\n"]);return He=function(){return n},n}var Se=u.c.div(He(),b.f),Fe=u.c.div(Te(),Xn.a),Ne=function(n){var e=n.commentId,t=n.isHover,r=n.isHidden,o=n.isYour,i=function(n){var e=Object(a.useState)(n),t=Object(En.a)(e,2),r=t[0],o=t[1],i=Object(a.useRef)(null),c=function(n){"Escape"===n.key&&o(!1)},u=function(n){if(i.current){var e=i.current.contains(n.target);o(e)}};return Object(a.useEffect)(function(){return document.addEventListener("keydown",c,!1),document.addEventListener("click",u,!1),function(){document.removeEventListener("keydown",c,!1),document.removeEventListener("click",u,!1)}},[]),{ref:i,isCompVisible:r,setIsCompVisible:o}}(!1),u=i.ref,d=i.isCompVisible,m=o?"\u7de8\u8f2f\u6216\u522a\u9664":"\u96b1\u85cf\u6216\u6aa2\u8209\u9019\u7bc7\u7559\u8a00";return t||d?c.a.createElement(Se,null,c.a.createElement(Fe,{ref:u,"data-for":"tip-for-comment-menu-toggle","data-tip":m}),c.a.createElement(Ln.a,{id:"tip-for-comment-menu-toggle",effect:"solid",bg:l.a.tooltipBackgroundBlack}),d&&c.a.createElement(Me,{commentId:e,isHidden:r,isYour:o})):null};Ne.defaultProps={commentId:"fakecommentid",isHover:!0,isHidden:!1,isYour:!1};var Pe=Ne;function ze(){var n=Object(i.a)(["\n  ","\n  ","\n  line-height: 16px;\n  position: relative;\n  max-width: 100%;\n"]);return ze=function(){return n},n}function Be(){var n=Object(i.a)(["\n  ","\n  vertical-align: middle;\n"]);return Be=function(){return n},n}var Le=u.c.div(Be(),b.d),Re=u.c.div(ze(),function(n){return n.contentSeparated?b.f:b.g},function(n){return n.isHidden&&"opacity: 0.5;"}),Ve=function(n){var e=n.commentId,t=n.profileName,r=n.profileLink,o=n.isVerified,i=n.saying,a=n.attachMedia,u=n.isHidden,l=n.isHover,d=n.isYour,m=function(n){return n.replace(/\s{2,}/g,"<breaker>").split("<breaker>").map(function(n){var e=n.startsWith("#");return{id:N()(),content:n,attachMedia:"",isHashTag:e}})}(i);""!==a&&m.push({id:N()(),content:"",attachMedia:a,isHashTag:!1});var p=m.length>1;return c.a.createElement(Le,null,c.a.createElement(Re,{isHidden:u,contentSeparated:p},c.a.createElement(zn,{commentId:e,profileName:t,profileLink:r,isVerified:o,separatedContent:m}),c.a.createElement(Un,{commentId:e})),c.a.createElement(Pe,{commentId:e,isHover:l,isHidden:u,isYour:d}))};Ve.defaultProps={commentId:"commentId",profileName:"\u53f0\u7063\u5de5\u5177\u4f2f \u6c6a\u9032\u576a",profileLink:"https://www.facebook.com/jingping.tw/",isVerified:!0,saying:"\u9019\u500b\u6211\u60f3\uff0c\u8981\u67e5\u8b49\u6bd4\u8f03\u96e3\u5566",attachMedia:"",isHidden:!1,isHover:!1,isYour:!1};var Ae=Ve;function Ye(){var n=Object(i.a)(["\n  ","\n  vertical-align: middle;\n  max-width: calc(100% - 22px);\n  word-wrap: break-word;\n"]);return Ye=function(){return n},n}var _e=u.c.div(Ye(),b.f),De=function(n){var e=n.commentId,t=n.profileName,r=n.profileLink,o=n.isHidden,i=n.isVerified,a=n.saying,u=n.attachMedia,l=n.isHover,d=n.isYour;return c.a.createElement(_e,{id:e},c.a.createElement(Ae,{commentId:e,profileName:t,profileLink:r,isVerified:i,saying:a,attachMedia:u,isHidden:o,isHover:l,isYour:d}))};De.defaultProps={commentId:"fakecommentid",saying:"\u9019\u500b\u6211\u60f3\uff0c\u8981\u67e5\u8b49\u6bd4\u8f03\u96e3\u5566",profileName:"\u53f0\u7063\u5de5\u5177\u4f2f \u6c6a\u9032\u576a",profileLink:"https://www.facebook.com/jingping.tw/",isVerified:!0,isHidden:!1,attachMedia:"",isHover:!1,isYour:!1};var Ke=De;function We(){var n=Object(i.a)(["\n  color: ",";\n  cursor: pointer;\n  margin-right: 2px;\n"]);return We=function(){return n},n}var qe=u.c.div(We(),function(n){return n.color}),Je=function(n){var e=n.displayText,t=n.reacted,r=n.onClick,o=t?l.a.reactedButtonTextColor:l.a.commentFeedbackButtonTextColor;return c.a.createElement(qe,{onClick:r,color:o},c.a.createElement("span",null,e))};Je.defaultProps={displayText:"\u8b9a",reacted:!1},Je.displayName="CommentFeedbackButton";var Ge=Je,Ue=Object(r.b)(function(n,e){var t=e.reactId===O.a.fakeReactId?e.reacted:Object(o.k)(n,e.reactId);return{reactId:e.reactId,reacted:t}},function(n,e){return{doReactAction:function(t){var r={entities:{id:t,user:e.you,feeling:P.c.LIKE,targetId:e.targetId}};return n(Object(P.g)(r))},undoReactAction:function(e){return n(Object(P.k)(e))}}})(function(n){var e=n.reactId,t=n.reacted,r=n.doReactAction,o=n.undoReactAction;return c.a.createElement(Ge,{reacted:t,onClick:function(){t?o(e):r(e)}})}),Qe=Object(r.b)(null,function(n,e){return{onClick:function(){return n(Object(P.h)(e.commentId))}}})(Ge);function Xe(){var n=Object(i.a)(["\n  ","\n  color: ",";\n  ","\n  font-size: 13px;\n  line-height: 13px;\n  margin-top: 5px;\n  margin-left: 50px;\n"]);return Xe=function(){return n},n}var Ze=u.c.div(Xe(),b.e,l.a.commentFeedbackTextColor,function(n){return n.isHidden&&"opacity: 0.5;"}),$e=function(){},nt=O.a.you,et=function(n){var e=n.time,t=n.targetId,r=n.reactId,o=n.reacted,i=n.isHidden,a=n.inEditMode,u=Object(B.b)().toggleEditMode;return c.a.createElement(Ze,{isHidden:i},a?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"\u6309Esc\u9375\u53ef"),c.a.createElement(Ge,{onClick:u,displayText:"\u53d6\u6d88"}),c.a.createElement("span",null,"\u3002")):c.a.createElement(c.a.Fragment,null,function(n,e,t,r){return n?c.a.createElement(Qe,{displayText:"\u53d6\u6d88\u96b1\u85cf",commentId:e}):c.a.createElement(Ue,{you:nt,targetId:e,reactId:t,reacted:r})}(i,t,r,o),c.a.createElement(b.a,null),c.a.createElement(Ge,{displayText:"\u56de\u8986",onClick:$e}),c.a.createElement(b.a,null),c.a.createElement("span",null,e)))};et.defaultProps={time:"1\u5929",targetId:"",reactId:"",reacted:!1,isHidden:!1,inEditMode:!1},et.displayName="CommentFeedback";var tt=et;function rt(){var n=Object(i.a)(["\n  position: relative;\n  padding: 4px 12px 8px 12px;\n  ","\n"]);return rt=function(){return n},n}var ot=u.c.div(rt(),function(n){return n.isYour&&v.x}),it=function(n){var e=n.comment,t=Object(B.b)(),r=t.inEditMode,o=t.toggleEditMode,i=function(){var n=Object(a.useState)(!1),e=Object(En.a)(n,2);return[e[0],e[1]]}(),u=Object(En.a)(i,2),l=u[0],d=u[1],m=e.id,p=e.reactId,f=e.user,s=f.profileName,g=f.profileLink,b=f.profileImg,v=f.isVerified,h=e.isHidden,x=e.saying,E=e.attachMedia,k=e.time,y=O.a.you.profileName===s;return s.startsWith("\u5047\u5e33\u865f")?null:r?c.a.createElement(c.a.Fragment,null,c.a.createElement(xn,{inEditMode:r,toggleEditMode:o,commentId:m,saying:x}),c.a.createElement(tt,{inEditMode:r})):c.a.createElement(ot,{key:m,isYour:y,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)}},c.a.createElement(S,{profileName:s,profileImg:b,isHidden:h}),c.a.createElement(Ke,{commentId:m,profileName:s,profileLink:g,profileImg:b,isVerified:v,saying:x,attachMedia:E,isHidden:h,isHover:l,isYour:y}),c.a.createElement(tt,{time:k,targetId:m,reactId:p,isHidden:h}))};it.defaultProps={comment:{id:"fakecommentid",reactId:"POST",user:{profileName:"\u53f0\u7063\u5de5\u5177\u4f2f \u6c6a\u9032\u576a",profileLink:"https://www.facebook.com/jingping.tw/",profileImg:"toolman.png",isVerified:!0},isHidden:!1,saying:"\u9019\u500b\u6211\u60f3\uff0c\u8981\u67e5\u8b49\u6bd4\u8f03\u96e3\u5566",attachMedia:"",time:"1\u5929"}};var at=it,ct=Object(r.b)(function(n,e){return{comment:Object(o.a)(n,e.commentId)}})(function(n){var e=n.comment,t=Object(a.useState)(!1),r=Object(En.a)(t,2),o=r[0],i=r[1];return c.a.createElement(B.a,{initialState:{inEditMode:o,toggleEditMode:function(){return i(!o)}}},c.a.createElement(at,{comment:e}))});function ut(){var n=Object(i.a)(["\n  border-top: ",";\n"]);return ut=function(){return n},n}var lt=u.c.div(ut(),l.a.postSectionBorder),dt=function(n){var e=n.commentIds;return c.a.createElement(lt,null,c.a.createElement(y,null),c.a.createElement(xn,null),e.map(function(n){return c.a.createElement(ct,{key:n,commentId:n})}))};dt.defaultProps={commentIds:[]};var mt=dt;e.default=Object(r.b)(function(n){return{commentIds:Object(o.b)(n)}})(mt)}}]);
//# sourceMappingURL=6.5831294c.chunk.js.map