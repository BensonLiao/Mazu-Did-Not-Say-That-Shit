(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"f",function(){return c}),n.d(t,"j",function(){return d}),n.d(t,"g",function(){return s}),n.d(t,"k",function(){return u}),n.d(t,"e",function(){return l}),n.d(t,"i",function(){return f}),n.d(t,"l",function(){return p}),n.d(t,"h",function(){return g});var i="ADD_DATA",r=function(e){var t=e.entities;return{type:i,payload:t}},a={REACT:"REACT",UNDO_REACT:"UNDO_REACT",COMMENT_REACT:"COMMENT_REACT",UNDO_COMMENT_REACT:"UNDO_COMMENT_REACT",COMMENT:"COMMENT",UNDO_COMMENT:"UNDO_COMMENT",UPDATE_COMMENT:"UPDATE_COMMENT",COMMENT_VISIBILITY_TOGGLE:"COMMECOMMENT_VISIBILITY_TOGGLENT_HIDE",SHARE:"SHARE",TARGET:"POST"},o={LIKE:"LIKE",HAHA:"HAHA",LOVE:"LOVE",WOW:"WOW",SAD:"SAD",ANGRY:"ANGRY"},c=function(e){var t=e.entities;return{type:a.REACT,payload:t}},d=function(e){return{type:a.UNDO_REACT,payload:{id:e}}},s=function(e){var t=e.entities;return{type:a.COMMENT_REACT,payload:t}},u=function(e){return{type:a.UNDO_COMMENT_REACT,payload:{id:e}}},l=function(e){var t=e.entities;return{type:a.COMMENT,payload:t}},f=function(e){return{type:a.UNDO_COMMENT,payload:{id:e}}},p=function(e){var t=e.id,n=e.saying;return{type:a.UPDATE_COMMENT,payload:{id:t,saying:n}}},g=function(e){return{type:a.COMMENT_VISIBILITY_TOGGLE,payload:{id:e}}}},108:function(e,t,n){"use strict";n.r(t);n(60),n(80),n(82),n(83),n(85),n(86),n(89),n(91),n(92),n(95),n(97);var i=n(2),r=n.n(i),a=n(25),o=n.n(a),c=n(36),d=n(4),s=n(3),u=n(10),l=n(0),f=Object(u.a)(function(e,t){switch(t.type){case l.a:!function(e,t){var n=t.payload.reacts;Object.keys(n).forEach(function(t){e[t]=n[t]})}(e,t);break;case l.b.REACT:!function(e,t){var n=t.payload;e[n.id]=n}(e,t);break;case l.b.UNDO_REACT:!function(e,t){delete e[t.payload.id]}(e,t)}},{}),p=Object(d.b)({byId:f,allIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return function(e,t){var n=t.payload.reacts;return[].concat(Object(s.a)(Object.keys(n)),Object(s.a)(e))}(e,t);case l.b.REACT:return function(e,t){return[t.payload.id].concat(Object(s.a)(e))}(e,t);case l.b.UNDO_REACT:return function(e,t){var n=t.payload.id;return e.filter(function(e){return e!==n})}(e,t);default:return e}}}),g=Object(u.a)(function(e,t){switch(t.type){case l.a:!function(e,t){var n=t.payload.commentReacts;Object.keys(n).forEach(function(t){e[t]=n[t]})}(e,t);break;case l.b.COMMENT_REACT:!function(e,t){var n=t.payload;e[n.id]=n}(e,t);break;case l.b.UNDO_COMMENT_REACT:!function(e,t){delete e[t.payload.id]}(e,t)}},{}),h=Object(d.b)({byId:g,allIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return function(e,t){var n=t.payload.commentReacts;return[].concat(Object(s.a)(Object.keys(n)),Object(s.a)(e))}(e,t);case l.b.COMMENT_REACT:return function(e,t){return[t.payload.id].concat(Object(s.a)(e))}(e,t);case l.b.UNDO_COMMENT_REACT:return function(e,t){var n=t.payload.id;return e.filter(function(e){return e!==n})}(e,t);default:return e}}}),E=Object(u.a)(function(e,t){switch(t.type){case l.a:!function(e,t){var n=t.payload.comments;Object.keys(n).forEach(function(t){e[t]=n[t]})}(e,t);break;case l.b.COMMENT:!function(e,t){var n=t.payload;e[n.id]=n}(e,t);break;case l.b.UNDO_COMMENT:!function(e,t){delete e[t.payload.id]}(e,t);break;case l.b.UPDATE_COMMENT:!function(e,t){var n=t.payload,i=n.id,r=n.saying;e[i].saying=r}(e,t);break;case l.b.COMMENT_VISIBILITY_TOGGLE:!function(e,t){var n=t.payload.id,i=e[n].isHidden;e[n].isHidden=!i}(e,t)}},{}),y=Object(d.b)({byId:E,allIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return function(e,t){var n=t.payload.comments;return[].concat(Object(s.a)(Object.keys(n)),Object(s.a)(e))}(e,t);case l.b.COMMENT:return function(e,t){return[t.payload.id].concat(Object(s.a)(e))}(e,t);case l.b.UNDO_COMMENT:return function(e,t){var n=t.payload.id;return e.filter(function(e){return e!==n})}(e,t);default:return e}}}),b=Object(u.a)(function(e,t){switch(t.type){case l.a:case l.b.SHARE:!function(e,t){var n=t.payload.shares;Object.keys(n).forEach(function(t){e[t]=n[t]})}(e,t)}},{}),m=Object(d.b)({byId:b,allIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:case l.b.SHARE:return function(e,t){var n=t.payload.shares;return[].concat(Object(s.a)(Object.keys(n)),Object(s.a)(e))}(e,t);default:return e}}}),T=Object(d.b)({reactReducer:p,commentReactReducer:h,commentReducer:y,shareReducer:m}),O=function(e){return Object(d.c)(T,e,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var M,I,A=n(37),N=n(12),R=new N.b.Entity("reacts"),k=new N.b.Entity("commentReacts"),C=new N.b.Entity("comments"),_=new N.b.Entity("shares"),j=new N.b.Entity("post",{reacts:[R],commentReacts:[k],comments:[C],shares:[_]}),D=Object(A.a)(),L=O(),G=(M=D,I=j,Object(N.a)(M,I));L.dispatch(Object(l.d)(G));var H=r.a.lazy(function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,165))});o.a.render(r.a.createElement(c.a,{store:L},r.a.createElement(i.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(H,{postData:D.post}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Mazu-Did-Not-Say-That-Shit",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Mazu-Did-Not-Say-That-Shit","/service-worker.js");v?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):w(e)})}}()},37:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"c",function(){return s}),n.d(t,"a",function(){return f});var i=n(1),r=n.n(i),a=n(0),o={goldXFive:{id:r()(),profileName:"\u91d1\u4e58\u4e94",profileLink:"https://www.facebook.com/takeshikaneshirofanspage/",profileImg:"goldxfive.png",isVerified:!1},theMazu:{id:r()(),profileName:"\u5abd\u7956",profileLink:"https://www.facebook.com/themazhou/",profileImg:"mazu.png",isVerified:!1},terryGoodTiming:{id:r()(),profileName:"\u934b\u82d4\u51a5",profileLink:"https://www.facebook.com/TerryGou1018/",profileImg:"terry.png",isVerified:!0},dingDing:{id:r()(),profileName:"\u53ee\u5b88\u9418",profileLink:"https://www.youtube.com/watch?v=_97bLScvHWs",profileImg:"dingding.png",isVerified:!1},toolMan:{id:r()(),profileName:"\u53f0\u7063\u5de5\u5177\u4f2f \u6c6a\u9032\u576a",profileLink:"https://www.facebook.com/jingping.tw/",profileImg:"toolman.png",isVerified:!0},english:{id:r()(),profileName:"\u83dc\u61c9\u868a",profileLink:"https://www.facebook.com/tsaiingwen/",profileImg:"english.png",isVerified:!0},koreanFish:{id:r()(),profileName:"\u61a8\u6451\u5a1b",profileLink:"https://www.facebook.com/twherohan/",profileImg:"korean-fish.png",isVerified:!0},careWheelEveryday:{id:r()(),profileName:"\u6bcf\u5929\u95dc\u5fc3\u611b\u60c5\u6469\u5929\u8f2a\u7684\u8208\u5efa\u72c0\u6cc1",profileLink:"https://www.facebook.com/CareLoveFerrisWheelEveryday/",profileImg:"wheel.png",isVerified:!1},universityFoundField:{id:r()(),profileName:"\u627e\u5230\u7530\u5927\u5b78",profileLink:"#",profileImg:"anonymous-university.png",isVerified:!1},sparkJoy:{id:r()(),profileName:"\u5c1b\u7406\u60e0\u7684\u6574\u7406\u9b54\u6cd5",profileLink:"#",profileImg:"sparkJoy.jpg",isVerified:!0}},c=[o.terryGoodTiming,o.koreanFish,o.universityFoundField,o.english,o.toolMan,o.dingDing],d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MALE";return e<c.length?c[e]:s(e,t)},s=function(e){var t="MALE"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MALE")?"anonymous-male.png":"anonymous-female.png";return{id:r()(),profileName:"\u5047\u5e33\u865f".concat(e),profileLink:"#",profileImg:t,isVerified:!1}},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[3,2,1];if("string"!==typeof e)throw new Error("Comment id must be string.");if(i.length>6||i.length<1)throw new Error("Ratio must be 1 to 6 numbers.");if(i.filter(function(e){return"number"!==typeof e}).length>0)throw new Error("Array of ratio must be type of number.");for(var o=i.reduce(function(e,t){return e+t}),c=n>=o,d=c?o/i[0]:1,u=c&&i[1]?o/i[1]:0,l=c&&i[2]?o/i[2]:0,f=c&&i[3]?o/i[3]:0,p=c&&i[4]?o/i[4]:0,g=c&&i[5]?o/i[5]:0,h=0===d?0:Math.ceil(n/d),E=0===u?0:Math.ceil(n/u),y=0===l?0:Math.ceil(n/l),b=0===f?0:Math.ceil(n/f),m=0===p?0:Math.ceil(n/p),T=0===g?0:Math.ceil(n/g),O=0;O<n;O++)O<h?t.push({id:r()(),user:s(O),feeling:a.c.LIKE,targetId:e}):O<h+E?t.push({id:r()(),user:s(O),feeling:a.c.HAHA,targetId:e}):O<h+E+y?t.push({id:r()(),user:s(O),feeling:a.c.LOVE,targetId:e}):O<h+E+y+b?t.push({id:r()(),user:s(O),feeling:a.c.WOW,targetId:e}):O<h+E+y+b+m?t.push({id:r()(),user:s(O),feeling:a.c.SAD,targetId:e}):O<h+E+y+b+m+T&&t.push({id:r()(),user:s(O),feeling:a.c.ANGRY,targetId:e})},l=function(e){for(var t=[{id:r()(),user:o.terryGoodTiming},{id:r()(),user:o.koreanFish},{id:r()(),user:o.english},{id:r()(),user:o.toolMan},{id:r()(),user:o.dingDing},{id:r()(),user:o.universityFoundField},{id:r()(),user:o.careWheelEveryday},{id:r()(),user:o.sparkJoy}],n=0;n<e;n++)void 0===t[n]&&t.push({id:r()(),user:s(n)});return t.length>e&&t.splice(e),t},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12419,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:262,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2123,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[3,2,1];if(e<1)throw new Error("Number of total reactions at least to be 1.");if(t.length>6||t.length<1)throw new Error("Ratio must be 1 to 6 numbers.");if(t.filter(function(e){return"number"!==typeof e}).length>0)throw new Error("Array of ratio must be type of number.");for(var n=t.reduce(function(e,t){return e+t}),i=e>=n,o=i?n/t[0]:1,c=i&&t[1]?n/t[1]:0,s=i&&t[2]?n/t[2]:0,u=i&&t[3]?n/t[3]:0,l=i&&t[4]?n/t[4]:0,f=i&&t[5]?n/t[5]:0,p=0===o?0:Math.ceil(e/o),g=0===c?0:Math.ceil(e/c),h=0===s?0:Math.ceil(e/s),E=0===u?0:Math.ceil(e/u),y=0===l?0:Math.ceil(e/l),b=0===f?0:Math.ceil(e/f),m=[],T=0;T<e;T++)T<p?m.push({id:r()(),user:d(T),feeling:a.c.LIKE,targetId:a.b.TARGET}):T<p+g?m.push({id:r()(),user:d(T),feeling:a.c.HAHA,targetId:a.b.TARGET}):T<p+g+h?m.push({id:r()(),user:d(T),feeling:a.c.LOVE,targetId:a.b.TARGET}):T<p+g+h+E?m.push({id:r()(),user:d(T),feeling:a.c.WOW,targetId:a.b.TARGET}):T<p+g+h+E+y?m.push({id:r()(),user:d(T),feeling:a.c.SAD,targetId:a.b.TARGET}):T<p+g+h+E+y+b&&m.push({id:r()(),user:d(T),feeling:a.c.ANGRY,targetId:a.b.TARGET});return m}(e),c=function(e){var t=[],n=[{id:r()(),user:o.terryGoodTiming,saying:"\u8b1d\u8b1d\u6a13\u4e3b\u6258\u5922\uff0c\u4e09\u6a13\u7684\u6c11\u4e3b\u4e0d\u80fd\u7576\u98ef\u5403\uff01",time:"3\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.koreanFish,saying:"\u6a13\u4e0a\u70ba\u4ec0\u9ebc\u4e0d\u8003\u616e\u5403\u500b\u5305\u5b50\u5462\uff1f",time:"3\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.english,saying:"\u6211\u4e5f\u9019\u9ebc\u89ba\u5f97",time:"4\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.toolMan,saying:"\u9019\u500b\u6211\u60f3\uff0c\u8981\u67e5\u8b49\u6bd4\u8f03\u96e3\u5566",time:"5\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.dingDing,saying:"\u53ef\u4ee5\u6258\u5922\u8b93\u6211\u91cd\u9078\u53f0\u5317\u5e02\u9577\u55ce\uff1f",time:"4\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.universityFoundField,saying:"\u4e94\u6a13\u8981\u4e0d\u8981\u85c9\u9019\u500b\u6a5f\u6703\u5728\u795e\u660e\u7684\u9762\u524d\u6f84\u6e05\u4e00\u4e0b\uff1f",attachMedia:"wvWFAMT.jpg",mediaType:"pic",time:"3\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.careWheelEveryday,saying:"\u4e94\u6a13\uff0c\u6211\u5feb\u7b49\u4e0d\u53ca\u4e86",time:"5\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1},{id:r()(),user:o.sparkJoy,saying:"\u81fa\u7063\u7684\u78b0\u6709\u6253\u5bb6\u597d\uff5e\n      \u4eca\u5929\u8981\u4f86\u6559\u6253\u5bb6\u5e74\u5f8c\u6e05\u7406\u81c9\u66f8\u7248\u9762\u7684\u5c0f\u5999\u62db\u5206\u4eab\n      1. \u9ede\u9032\u53bb\u4e94\u6a13\u7684\u7c89\u7d72\u5718\n      2. \u554a\uff5e\u539f\u4f86\uff38\uff38\uff38\u548c\u5176\u4ed6 10 \u4f4d\u670b\u53cb\u90fd\u8aaa\u9019\u500b\u8b9a\n      3. \u679c\u65b7\u65b7\u958b\u597d\u53cb\u9023\u7d50\n      #\u6026\u7136\u5fc3\u52d5\u7684\u81c9\u66f8\u6574\u7406\u9b54\u6cd5\n      #\u7c21\u55ae\u4e09\u6b65\u9a5f\u6253\u5bb6\u5b78\u6703\u4e86\u55ce",time:"5\u5929",targetId:a.b.TARGET,reactId:r()(),isHidden:!1}];u(n[0].id,t,240,[0,0,0,0,0,1]),u(n[1].id,t,124,[2,0,0,0,0,1]),u(n[2].id,t,112,[2,1]),u(n[3].id,t,88,[3,2,0,1]),u(n[4].id,t,116,[2,0,0,1]),u(n[5].id,t,125,[2,3]),u(n[6].id,t,244,[2,1,0,1,2]),u(n[7].id,t,160,[2,1,0,1]);for(var i=0;i<e;i++)void 0===n[i]&&n.push({id:r()(),user:s(i),saying:"\u5047\u7559\u8a00",time:"".concat(i,"\u5929"),targetId:a.b.TARGET,reactId:r()(),isHidden:!1});return n.length>e&&n.splice(e),{comments:n,commentReacts:t}}(t),f=c.comments,p=c.commentReacts;return{post:{id:"POST",user:o.theMazu,time:155549592e4,content:"\u6211\u6839\u672c\u6c92\u8aaa\u3002",title:"I did not say that shit."},reacts:i,commentReacts:p,comments:f,shares:l(n)}}},59:function(e,t,n){e.exports=n(108)}},[[59,1,2]]]);
//# sourceMappingURL=main.f0d6586c.chunk.js.map