!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/Mazu-Did-Not-Say-That-Shit/",r(r.s=3)}([function(e,t,r){var n,i,o=r(1),a=r(2),u=0,s=0;e.exports=function(e,t,r){var c=t&&r||0,f=t||[],d=(e=e||{}).node||n,l=void 0!==e.clockseq?e.clockseq:i;if(null==d||null==l){var h=o();null==d&&(d=n=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==l&&(l=i=16383&(h[6]<<8|h[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),m=void 0!==e.nsecs?e.nsecs:s+1,g=p-u+(m-s)/1e4;if(g<0&&void 0===e.clockseq&&(l=l+1&16383),(g<0||p>u)&&void 0===e.nsecs&&(m=0),m>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=p,s=m,i=l;var y=(1e4*(268435455&(p+=122192928e5))+m)%4294967296;f[c++]=y>>>24&255,f[c++]=y>>>16&255,f[c++]=y>>>8&255,f[c++]=255&y;var v=p/4294967296*1e4&268435455;f[c++]=v>>>8&255,f[c++]=255&v,f[c++]=v>>>24&15|16,f[c++]=v>>>16&255,f[c++]=l>>>8|128,f[c++]=255&l;for(var b=0;b<6;++b)f[c+b]=d[b];return t||a(f)}},function(e,t){var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(r){var n=new Uint8Array(16);e.exports=function(){return r(n),n}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},function(e,t){for(var r=[],n=0;n<256;++n)r[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,i=r;return[i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],"-",i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]],i[e[n++]]].join("")}},function(e,t,r){"use strict";r.r(t);var n=r(0),i=r.n(n),o="POST",a="LIKE",u="HAHA",s="LOVE",c="WOW",f="SAD",d="ANGRY",l={goldXFive:{id:i()(),profileName:"\u91d1\u4e58\u4e94",profileLink:"https://www.facebook.com/takeshikaneshirofanspage/",profileImg:"goldxfive.png",isVerified:!1},theMazu:{id:i()(),profileName:"\u5abd\u7956",profileLink:"https://www.facebook.com/themazhou/",profileImg:"mazu.png",isVerified:!1},terryGoodTiming:{id:i()(),profileName:"\u934b\u82d4\u51a5",profileLink:"https://www.facebook.com/TerryGou1018/",profileImg:"terry.png",isVerified:!0},dingDing:{id:i()(),profileName:"\u53ee\u5b88\u9418",profileLink:"https://www.youtube.com/watch?v=_97bLScvHWs",profileImg:"dingding.png",isVerified:!1},toolMan:{id:i()(),profileName:"\u53f0\u7063\u5de5\u5177\u4f2f \u6c6a\u9032\u576a",profileLink:"https://www.facebook.com/jingping.tw/",profileImg:"toolman.png",isVerified:!0},english:{id:i()(),profileName:"\u83dc\u61c9\u868a",profileLink:"https://www.facebook.com/tsaiingwen/",profileImg:"english.png",isVerified:!0},koreanFish:{id:i()(),profileName:"\u97d3\u570b\u9b5a",profileLink:"https://www.facebook.com/twherohan/",profileImg:"korean-fish.png",isVerified:!0},careWheelEveryday:{id:i()(),profileName:"\u6bcf\u5929\u95dc\u5fc3\u611b\u60c5\u6469\u5929\u8f2a\u7684\u8208\u5efa\u72c0\u6cc1",profileLink:"https://www.facebook.com/CareLoveFerrisWheelEveryday/",profileImg:"wheel.png",isVerified:!1},universityFoundField:{id:i()(),profileName:"\u627e\u5230\u7530\u5927\u5b78",profileLink:"#",profileImg:"anonymous-university.png",isVerified:!1},sparkJoy:{id:i()(),profileName:"\u5c1b\u7406\u60e0\u7684\u6574\u7406\u9b54\u6cd5",profileLink:"#",profileImg:"sparkJoy.jpg",isVerified:!0}},h=[l.terryGoodTiming,l.koreanFish,l.universityFoundField,l.english,l.toolMan,l.dingDing],p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MALE";return e<h.length?h[e]:m(e,t)},m=function(e){var t="MALE"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MALE")?"anonymous-male.png":"anonymous-female.png";return{id:i()(),profileName:"\u5047\u5e33\u865f".concat(e),profileLink:"#",profileImg:t,isVerified:!1}},g=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[3,2,1];if("string"!==typeof e)throw new Error("Comment id must be string.");if(n.length>6||n.length<1)throw new Error("Ratio must be 1 to 6 numbers.");if(n.filter(function(e){return"number"!==typeof e}).length>0)throw new Error("Array of ratio must be type of number.");for(var o=n.reduce(function(e,t){return e+t}),l=r>=o,h=l?o/n[0]:1,p=l&&n[1]?o/n[1]:0,g=l&&n[2]?o/n[2]:0,y=l&&n[3]?o/n[3]:0,v=l&&n[4]?o/n[4]:0,b=l&&n[5]?o/n[5]:0,w=0===h?0:Math.ceil(r/h),k=0===p?0:Math.ceil(r/p),I=0===g?0:Math.ceil(r/g),E=0===y?0:Math.ceil(r/y),S=0===v?0:Math.ceil(r/v),O=0===b?0:Math.ceil(r/b),A=0;A<r;A++)A<w?t.push({id:i()(),user:m(A),feeling:a,targetId:e}):A<w+k?t.push({id:i()(),user:m(A),feeling:u,targetId:e}):A<w+k+I?t.push({id:i()(),user:m(A),feeling:s,targetId:e}):A<w+k+I+E?t.push({id:i()(),user:m(A),feeling:c,targetId:e}):A<w+k+I+E+S?t.push({id:i()(),user:m(A),feeling:f,targetId:e}):A<w+k+I+E+S+O&&t.push({id:i()(),user:m(A),feeling:d,targetId:e})},y=function(e){for(var t=[{id:i()(),user:l.terryGoodTiming},{id:i()(),user:l.koreanFish},{id:i()(),user:l.english},{id:i()(),user:l.toolMan},{id:i()(),user:l.dingDing},{id:i()(),user:l.universityFoundField},{id:i()(),user:l.careWheelEveryday},{id:i()(),user:l.sparkJoy}],r=0;r<e;r++)void 0===t[r]&&t.push({id:i()(),user:m(r)});return t.length>e&&t.splice(e),t};function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&v(e.prototype,t),r&&v(e,r),e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){w(e,t,r[t])})}return e}function I(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function E(e){return!(!e||"function"!==typeof e.hasOwnProperty||!(e.hasOwnProperty("__ownerID")||e._map&&e._map.hasOwnProperty("__ownerID")))}function S(e,t,r){return Object.keys(e).reduce(function(t,n){var i=""+n;return t.has(i)?t.set(i,r(t.get(i),e[i])):t},t)}var O=function(e){return function(t){return E(t)?t.get(e):t[e]}},A=function(){function e(e,t,r){if(void 0===t&&(t={}),void 0===r&&(r={}),!e||"string"!==typeof e)throw new Error("Expected a string key for Entity, but found "+e+".");var n=r,i=n.idAttribute,o=void 0===i?"id":i,a=n.mergeStrategy,u=void 0===a?function(e,t){return k({},e,t)}:a,s=n.processStrategy,c=void 0===s?function(e){return k({},e)}:s;this._key=e,this._getId="function"===typeof o?o:O(o),this._idAttribute=o,this._mergeStrategy=u,this._processStrategy=c,this.define(t)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return k({},t,((n={})[r]=i,n))},this.schema||{})},t.getId=function(e,t,r){return this._getId(e,t,r)},t.merge=function(e,t){return this._mergeStrategy(e,t)},t.normalize=function(e,t,r,n,i,o){var a=this;if(o.some(function(t){return t===e}))return this.getId(e,t,r);o.push(e);var u=this._processStrategy(e,t,r);return Object.keys(this.schema).forEach(function(e){if(u.hasOwnProperty(e)&&"object"===typeof u[e]){var t=a.schema[e];u[e]=n(u[e],u,e,t,i,o)}}),i(this,u,e,t,r),this.getId(e,t,r)},t.denormalize=function(e,t){var r=this;return E(e)?S(this.schema,e,t):(Object.keys(this.schema).forEach(function(n){if(e.hasOwnProperty(n)){var i=r.schema[n];e[n]=t(e[n],i)}}),e)},b(e,[{key:"key",get:function(){return this._key}},{key:"idAttribute",get:function(){return this._idAttribute}}]),e}(),j=function(){function e(e,t){t&&(this._schemaAttribute="string"===typeof t?function(e){return e[t]}:t),this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=e},t.getSchemaAttribute=function(e,t,r){return!this.isSingleSchema&&this._schemaAttribute(e,t,r)},t.inferSchema=function(e,t,r){if(this.isSingleSchema)return this.schema;var n=this.getSchemaAttribute(e,t,r);return this.schema[n]},t.normalizeValue=function(e,t,r,n,i,o){var a=this.inferSchema(e,t,r);if(!a)return e;var u=n(e,t,r,a,i,o);return this.isSingleSchema||void 0===u||null===u?u:{id:u,schema:this.getSchemaAttribute(e,t,r)}},t.denormalizeValue=function(e,t){var r=E(e)?e.get("schema"):e.schema;return this.isSingleSchema||r?t((E(e)?e.get("id"):e.id)||e,this.isSingleSchema?this.schema:this.schema[r]):e},b(e,[{key:"isSingleSchema",get:function(){return!this._schemaAttribute}}]),e}(),_=function(e){function t(t,r){if(!r)throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');return e.call(this,t,r)||this}I(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){return this.normalizeValue(e,t,r,n,i,o)},r.denormalize=function(e,t){return this.denormalizeValue(e,t)},t}(j),M=function(e){function t(){return e.apply(this,arguments)||this}I(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){var a=this;return Object.keys(e).reduce(function(t,r,u){var s,c=e[r];return void 0!==c&&null!==c?k({},t,((s={})[r]=a.normalizeValue(c,e,r,n,i,o),s)):t},{})},r.denormalize=function(e,t){var r=this;return Object.keys(e).reduce(function(n,i){var o,a=e[i];return k({},n,((o={})[i]=r.denormalizeValue(a,t),o))},{})},t}(j),z=function(e){if(Array.isArray(e)&&e.length>1)throw new Error("Expected schema definition to be a single schema, but found "+e.length+".");return e[0]},V=function(e){return Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t]})},L=function(e,t,r,n,i,o,a){return e=z(e),V(t).map(function(t,u){return i(t,r,n,e,o,a)})},P=function(e){function t(){return e.apply(this,arguments)||this}I(t,e);var r=t.prototype;return r.normalize=function(e,t,r,n,i,o){var a=this;return V(e).map(function(e,u){return a.normalizeValue(e,t,r,n,i,o)}).filter(function(e){return void 0!==e&&null!==e})},r.denormalize=function(e,t){var r=this;return e&&e.map?e.map(function(e){return r.denormalizeValue(e,t)}):e},t}(j),x=function(e,t,r,n,i,o,a){var u=k({},t);return Object.keys(e).forEach(function(r){var n=e[r],s=i(t[r],t,r,n,o,a);void 0===s||null===s?delete u[r]:u[r]=s}),u},F=function(e,t,r){if(E(t))return S(e,t,r);var n=k({},t);return Object.keys(e).forEach(function(t){null!=n[t]&&(n[t]=r(n[t],e[t]))}),n},N=function e(t,r,n,i,o,a){return"object"===typeof t&&t?"object"!==typeof i||i.normalize&&"function"===typeof i.normalize?i.normalize(t,r,n,e,o,a):(Array.isArray(i)?L:x)(i,t,r,n,e,o,a):t},D={Array:P,Entity:A,Object:function(){function e(e){this.define(e)}var t=e.prototype;return t.define=function(e){this.schema=Object.keys(e).reduce(function(t,r){var n,i=e[r];return k({},t,((n={})[r]=i,n))},this.schema||{})},t.normalize=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return x.apply(void 0,[this.schema].concat(t))},t.denormalize=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return F.apply(void 0,[this.schema].concat(t))},e}(),Union:_,Values:M},T=new D.Entity("reacts"),H=new D.Entity("commentReacts"),R=new D.Entity("comments"),W=new D.Entity("shares"),C=new D.Entity("post",{reacts:[T],commentReacts:[H],comments:[R],shares:[W]});const G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:17419,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1552,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2871,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[3,2,1];if(e<1)throw new Error("Number of total reactions at least to be 1.");if(t.length>6||t.length<1)throw new Error("Ratio must be 1 to 6 numbers.");if(t.filter(function(e){return"number"!==typeof e}).length>0)throw new Error("Array of ratio must be type of number.");for(var r=t.reduce(function(e,t){return e+t}),n=e>=r,l=n?r/t[0]:1,h=n&&t[1]?r/t[1]:0,m=n&&t[2]?r/t[2]:0,g=n&&t[3]?r/t[3]:0,y=n&&t[4]?r/t[4]:0,v=n&&t[5]?r/t[5]:0,b=0===l?0:Math.ceil(e/l),w=0===h?0:Math.ceil(e/h),k=0===m?0:Math.ceil(e/m),I=0===g?0:Math.ceil(e/g),E=0===y?0:Math.ceil(e/y),S=0===v?0:Math.ceil(e/v),O=[],A=0;A<e;A++)A<b?O.push({id:i()(),user:p(A),feeling:a,targetId:o}):A<b+w?O.push({id:i()(),user:p(A),feeling:u,targetId:o}):A<b+w+k?O.push({id:i()(),user:p(A),feeling:s,targetId:o}):A<b+w+k+I?O.push({id:i()(),user:p(A),feeling:c,targetId:o}):A<b+w+k+I+E?O.push({id:i()(),user:p(A),feeling:f,targetId:o}):A<b+w+k+I+E+S&&O.push({id:i()(),user:p(A),feeling:d,targetId:o});return O}(e),h=function(e){var t=[],r=[{id:i()(),user:l.dingDing,saying:"\u53ef\u4ee5\u6258\u5922\u8b93\u6211\u91cd\u9078\u53f0\u5317\u5e02\u9577\u55ce\uff1f",time:"4\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.toolMan,saying:"\u9019\u500b\u6211\u60f3\uff0c\u8981\u67e5\u8b49\u6bd4\u8f03\u96e3\u5566",time:"5\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.english,saying:"\u6211\u4e5f\u9019\u9ebc\u89ba\u5f97",time:"3\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.terryGoodTiming,saying:"\u8b1d\u8b1d\u6a13\u4e3b\u6258\u5922\uff0c\u4e09\u6a13\u7684\u6c11\u4e3b\u4e0d\u80fd\u7576\u98ef\u5403\uff01",time:"3\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.koreanFish,saying:"\u6a13\u4e0a\u70ba\u4ec0\u9ebc\u4e0d\u8003\u616e\u5403\u500b\u5305\u5b50\u5462\uff1f",time:"3\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.careWheelEveryday,saying:"\u4e94\u6a13\uff0c\u6211\u5feb\u7b49\u4e0d\u53ca\u4e86",time:"5\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.universityFoundField,saying:"\u4e94\u6a13\u8981\u4e0d\u8981\u85c9\u9019\u500b\u6a5f\u6703\u5728\u795e\u660e\u7684\u9762\u524d\u6f84\u6e05\u4e00\u4e0b\uff1f",attachMedia:"wvWFAMT.jpg",mediaType:"pic",time:"4\u5929",targetId:o,reactId:i()(),isHidden:!1},{id:i()(),user:l.sparkJoy,saying:"\u81fa\u7063\u7684\u78b0\u6709\u6253\u5bb6\u597d\uff5e\n      \u4eca\u5929\u8981\u4f86\u6559\u6253\u5bb6\u5e74\u5f8c\u6e05\u7406\u81c9\u66f8\u7248\u9762\u7684\u5c0f\u5999\u62db\u5206\u4eab\n      1. \u9ede\u9032\u53bb\u4e94\u6a13\u7684\u7c89\u7d72\u5718\n      2. \u554a\uff5e\u539f\u4f86\uff38\uff38\uff38\u548c\u5176\u4ed6 10 \u4f4d\u670b\u53cb\u90fd\u8aaa\u9019\u500b\u8b9a\n      3. \u679c\u65b7\u65b7\u958b\u597d\u53cb\u9023\u7d50\n      #\u6026\u7136\u5fc3\u52d5\u7684\u81c9\u66f8\u6574\u7406\u9b54\u6cd5\n      #\u7c21\u55ae\u4e09\u6b65\u9a5f\u6253\u5bb6\u5b78\u6703\u4e86\u55ce",time:"5\u5929",targetId:o,reactId:i()(),isHidden:!1}];g(r[0].id,t,452,[2,0,0,1]),g(r[1].id,t,582,[3,2,0,1]),g(r[2].id,t,3120,[2,1]),g(r[3].id,t,187,[0,0,0,0,0,1]),g(r[4].id,t,987,[2,0,0,0,0,1]),g(r[5].id,t,501,[2,3]),g(r[6].id,t,872,[2,1,0,1,2]),g(r[7].id,t,789,[2,1,0,1]);for(var n=0;n<e;n++)void 0===r[n]&&r.push({id:i()(),user:m(n),saying:"\u5047\u7559\u8a00",time:"".concat(n,"\u5929"),targetId:o,reactId:i()(),isHidden:!1});return r.length>e&&r.splice(e),{comments:r,commentReacts:t}}(t),v=h.comments;return{reacts:n,commentReacts:h.commentReacts,comments:v,shares:y(r)}}(),J=function(e,t){if(!e||"object"!==typeof e)throw new Error('Unexpected input given to normalize. Expected type to be "object", found "'+typeof e+'".');var r={},n=function(e){return function(t,r,n,i,o){var a=t.key,u=t.getId(n,i,o);a in e||(e[a]={});var s=e[a][u];e[a][u]=s?t.merge(s,r):r}}(r);return{entities:r,result:N(e,e,null,t,n,[])}}(G,C);self.addEventListener("message",e=>{console.log("event.data",e.data),postMessage(function(e){return{type:"ADD_DATA",payload:e.entities}}(J))})}]);
//# sourceMappingURL=76109db641415fd2f8fd.worker.js.map