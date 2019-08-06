!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Mason=e():t.Mason=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=["string","number","function","boolean","undefined"];function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(t){return t.style&&t.style.display},a=function(){var t,e,n;for(e=0,n=arguments.length;e<n;e+=1)if(((t=arguments[e])||!1===t||0===t)&&!isNaN(t=Number(t)))return t};function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(t){return+t.replace(/fr/,"")},h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:600;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clear(),this.set("tracks",e),this.set("items",n),this.set("containerSize",r),this}var e,n,r;return e=t,(n=[{key:"set",value:function(t,e){switch(this.props[t]=e,t){case"tracks":this._initTrackSize();break;case"items":this._initItems();break;case"containerSize":this.props[t]=isNaN(+e)?0:+e}return this}},{key:"get",value:function(t){return this.props[t]}},{key:"_initTrackSize",value:function(t){var e,n,r,i,o,a,s,c=t||this.props.tracks||[],u=this._config,h=[{}];for(u.frTracks=[],u.intrinsicTracks=[],e=1,n=c.length;e<n;e++)r=c[e].size,o=1,Array.isArray(r)?(a=+r[0]||0,r[1].indexOf("fr")>0||r[0].indexOf("fr")>0?(s=1/0,u.frTracks.push(e),i="minmax"):"auto"===r[1]||"auto"===r[0]?(s=1/0,u.intrinsicTracks.push(e),i="minmax"):isNaN(+r[0])||isNaN(+r[1])||(s=Math.max(+r[0],+r[1]),a=Math.min(+r[0],+r[1]),u.intrinsicTracks.push(e),i="minmax")):isNaN(+r)?r.indexOf("fr")>0?(a=0,s=1/0,u.frTracks.push(e),i="flex",o=f(r)):(a=0,s=1/0,i="intrinsic",u.intrinsicTracks.push(e)):(a=s=+r,i="fixed"),h.push(l({},c[e],{type:i,multiplier:o,baseSize:a,growthLimit:s}));return u.sanitizedTracks=h}},{key:"_initItems",value:function(t){var e,n,r,i,o=t||this.props.items||[],a=this._config,s=[],c=0;for(r=0,i=o.length;r<i;r++)isNaN(o[r].start)||isNaN(o[r].end)?a.autoFlow.push(o[r]):(s.push(l({},o[r])),n=s[c],c++,n.size=isNaN(n.size)?this._getParentSize(n):+n.size);for(s.sort(function(t,e){var n=t.end-t.start,r=e.end-e.start;return n===r?t.start-e.start:n-r}),r=0,e=i=s.length;r<i;r++)if(s[r].end-s[r].start>1){e=r;break}return this._config.nonSpanningItemStartIndex=e,this._config.sanitizedItems=s}},{key:"_getParentSize",value:function(t){var e=this._config.sanitizedTracks,n=0;return e.filter(function(e){return e.start>=t.start&&e.end<=t.end}).forEach(function(t){return n+=t.baseSize}),n||0}},{key:"resolveTracks",value:function(){return this._placeNonSpanningItems()._placeSpanningItems()._distributeFreeSpace(),this._config.sanitizedTracks}},{key:"_placeNonSpanningItems",value:function(){var t,e,n=this._config,r=n.sanitizedItems,i=n.sanitizedTracks,o=n.nonSpanningItemStartIndex;return r.slice(0,o).forEach(function(n){e=n.start,"fixed"!==(t=i[e]).type&&(t.baseSize=Math.max(t.baseSize,n.size),t.growthLimit=Math.max(t.growthLimit,t.baseSize))}),this}},{key:"_placeSpanningItems",value:function(){var t,e,n,r,i,o,a,s=this._config,l=s.sanitizedItems,c=s.sanitizedTracks,u=s.nonSpanningItemStartIndex,f=s.frTracks,h=l.slice(u),p=[0];if(!h.length)return this;for(o=1,a=c.length;o<a;o++)p[o]=p[o-1]+(c[o].baseSize||0);return h.forEach(function(a){if(t=p[a.end-1]-p[a.start-1],e=Math.max(0,a.size-t)){for(o=a.start,i=!1,r=0;o<a.end;o++)f.indexOf(o)>=0&&(i=!0),"fixed"!==c[o].type&&r++;if(r&&!i)for(n=e/r,o=a.start;o<a.end;o++)"fixed"!==c[o].type&&(c[o].baseSize+=n)}}),this}},{key:"_distributeFreeSpace",value:function(){var t=this._config,e=t.frTracks,n=t.intrinsicTracks,r=t.sanitizedTracks,i=this.props.containerSize,o=0;return r.forEach(function(t){return o+=t.baseSize||0}),o<i&&(e.length?(e.forEach(function(t,n){e[n]=r[t]}),e.forEach(function(t){return o-=t.baseSize}),function t(e,n,r){var i,o,a=0;if(e.length){if(e.forEach(function(t){return a+=t.multiplier}),i=(r-n)/a,(o=e.filter(function(t){return t.baseSize<=t.multiplier*i})).length<e.length)return e.filter(function(t){return t.baseSize>t.multiplier*i}).forEach(function(t){return n+=t.baseSize}),t(o,n,r);o.forEach(function(t){return t.baseSize=t.multiplier*i})}}(e,o,i)):n.length&&(n.forEach(function(t,e){n[e]=r[t]}),function(t,e,n){var r,i,o,a,s,l,c,u=0;if(t.length){for(r=n-e,(s=t.filter(function(t){return"minmax"===t.type&&t.growthLimit!==1/0})).sort(function(t,e){return t.growthLimit-t.baseSize-(e.growthLimit-e.baseSize)}),a=s.length;u<a&&r;)for(i=r/(s.length-u||1),o=0,a=s.length;o<a;o++)l=s[o].growthLimit,r-=(c=Math.min(i+s[o].baseSize,l))-s[o].baseSize,s[o].baseSize=c,l!==c||s[o].frozen||(s[o].frozen=!0,u++);t=t.filter(function(t){return"minmax"===t.type&&t.growthLimit===1/0||"minmax"!==t.type}),i=r/t.length,t.forEach(function(t){return t.baseSize+=i})}}(n,o,i))),this}},{key:"clear",value:function(){return this.props={},this._config={frTracks:[],intrinsicTracks:[],autoFlow:[]},this}}])&&u(e.prototype,n),r&&u(e,r),t}();function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach(function(e){g(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=["auto","none"],w=/minmax/,b=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},S=function(t){var e=t.style||{},n=e.gridTemplateColumns,r=e.gridTemplateRows;return!/repeat\(/g.test(n)&&!/repeat\(/g.test(r)},v=function(t){return t.split(/\(|\)/g)[1].split(",").map(function(t){return t&&t.trim()})},T=function(t){if("auto"===(t=t.trim()))return t;if(!isNaN(+t))return+t;if(w.test(t)){var e=t.split(/\(|\)/g)[1].split(",");return[e[0].trim(),e[1].trim()]}return t},k=function(t,e){var n,r,i=b(e),a="width"===e?"col":"row";return t.map(function(t){return n=t.style["gridTemplate"+b("col"===a?"columns":"rows")],r="grid"===o(t)&&/repeat\(/g.test(n)?v(n)[1]:t.style["min"+i+"Contribution"]||t.style[e]||"auto",{start:t[a+"Start"],end:t[a+"End"],size:r}})},z=function(t,e,n){var r,i;for(r=e.x;r<n.x;r++)for(i=e.y;i<n.y;i++)t[r][i]=!0},N=function(t){var e=1,n=1;return t.forEach(function(t){n=Math.max(isNaN(t.style.gridColumnStart)?0:t.style.gridColumnStart,n,isNaN(1*t.style.gridColumnEnd-1)?0:1*t.style.gridColumnEnd-1),e=Math.max(isNaN(t.style.gridRowStart)?0:t.style.gridRowStart,e,isNaN(1*t.style.gridRowEnd-1)?0:1*t.style.gridRowEnd-1)}),{maxRow:e,maxColumn:n}},E=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.setup()}var e,n,r;return e=t,(n=[{key:"setup",value:function(){return this._tsa=new h,this.props={},this._config={mapping:{}},this}},{key:"set",value:function(t,e){return this.props[t]=e,this}},{key:"getProps",value:function(t){return this.props[t]}},{key:"getConfig",value:function(t){return this._config[t]}},{key:"compute",value:function(t){var e=t||this.props.domTree;this._sanitizeTracks(e)._sanitizeItems(e)._inflateTracks()._assignCoordinatesToCells(e)}},{key:"_sanitizeTracks",value:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.style,r=n.gridTemplateRows,i=n.gridTemplateColumns,o=this._config,a=N(e.children),s=a.maxColumn,l=a.maxRow;return this.set("maxTracks",l),t=this._fetchTrackInformation(r),o.mapping.row={nameToLineMap:t.nameToLineMap,lineToNameMap:t.lineToNameMap},o.rowTracks=t.tracks,this.set("maxTracks",s),t=this._fetchTrackInformation(i),o.mapping.col={nameToLineMap:t.nameToLineMap,lineToNameMap:t.lineToNameMap},o.colTracks=t.tracks,this}},{key:"_fetchTrackInformation",value:function(){var t,e,n,r,i,o,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"none",s=a.split(" "),l=[{}],c={},u={};for(n=s.filter(function(t){return!t||"string"!=typeof t||!t.length||(e=t.length,"["===t[0]&&"]"===t[e-1])}),r=s.filter(function(t){return!!t&&(e=(t+"").toLowerCase().replace(/px|fr/,""),!(!(y.indexOf(e)>=0||w.test(e))&&isNaN(e)))}).map(function(t){return T(t)}),e=r.length,"none"===a&&(e=this.getProps("maxTracks")),t=0;t<e;t++)i=n[t]&&n[t].replace(/\[|\]/g,"").split(" ").filter(function(t){return t.length}).map(function(t){return t.trim()})||[t+1+""],o=n[t+1]&&n[t+1].replace(/\[|\]/g,"").split(" ").filter(function(t){return t.length}).map(function(t){return t.trim()})||[t+2+""],l.push({start:t+1,end:t+2,size:r[t]||"auto"}),u[t+1]=i,u[t+2]=o,i.forEach(function(e){return c[e]=t+1}),o.forEach(function(e){return c[e]=t+2}),c[t+1]=t+1,c[t+2]=t+2;return{tracks:l,nameToLineMap:c,lineToNameMap:u}}},{key:"_sanitizeItems",value:function(t){var e,n,r,i,o,a,s,l=t||this.props.domTree,c=l.children||[],u=this._config.mapping,f=l.style.gridAutoFlow||"row",h=Object.keys(u.row.lineToNameMap).length,p=Object.keys(u.col.lineToNameMap).length,g=[],m=[],y=[[]],w=[];for(o=1;o<=h;o++)y.push([]);for(o=0,s=c.length;o<s;o++)e=c[o].style,g.push(d({},c[o],{rowStart:u.row.nameToLineMap[e.gridRowStart],rowEnd:u.row.nameToLineMap[e.gridRowEnd],colStart:u.col.nameToLineMap[e.gridColumnStart],colEnd:u.col.nameToLineMap[e.gridColumnEnd]})),r=g[o],z(y,{x:r.colStart,y:r.rowStart},{x:r.colEnd,y:r.rowEnd});if((m=g.filter(function(t){return!t.colStart||!t.rowStart}))&&"row"===f){for(o=1;o<h;o++)for(a=1;a<p;a++)y[o][a]||w.push({row:o,col:a});for(;m.length&&w.length;)r=m.shift(),n=w.shift(),r.rowStart=n.row,r.colStart=n.col,r.rowEnd=n.row+1,r.colEnd=n.col+1;if(i=Math.ceil(m.length/p)){for(;i--;)l.style.gridTemplateRows+="auto ",u.row.nameToLineMap[h+1]=h+1,u.row.nameToLineMap[h+2]=h+2,h++,y.push([]);for(l.style.gridTemplateRows=l.style.gridTemplateRows.trim(),w=[],o=1;o<=h;o++)for(a=1;a<=p;a++)y[o][a]||w.push({row:o,col:a});for(;m.length;)r=m.shift(),n=w.shift(),r.rowStart=n.row,r.colStart=n.col,r.rowEnd=n.row+1,r.colEnd=n.col+1}}return this._config.sanitizedItems=g,this}},{key:"_inflateTracks",value:function(){var t,e=this._config,n=e.sanitizedItems,r=e.colTracks,i=e.rowTracks,o=0,a=0,s=this.props.domTree,l=s.style||{},c=l.paddingStart,u=l.paddingEnd,f=l.paddingTop,p=l.paddingBottom,d=l.width,g=l.height,m=new h;return isNaN(+d)||(d-=c+u),t=m.clear().set("tracks",r).set("items",k(n,"width")).set("containerSize",d||"auto").resolveTracks(),r.forEach(function(e,n){e.calculatedStyle=t[n],a+=t[n].baseSize||0}),this._solveUnresolvedChildren(),isNaN(+g)||(g-=f+p),t=m.clear().set("tracks",i).set("items",k(n,"height")).set("containerSize",g||"auto").resolveTracks(),i.forEach(function(e,n){e.calculatedStyle=t[n],o+=t[n].baseSize||0}),s.style.minHeightContribution=o,s.style.minWidthContribution=a,this}},{key:"_solveUnresolvedChildren",value:function(t){var e,n,r,i,o,a,s,l=((t||this.props.domTree).unResolvedChildren||[]).filter(function(t){return/repeat\(/g.test(t.style.gridTemplateColumns)||/repeat\(/g.test(t.style.gridTemplateRows)}),c=this._config,u=c.colTracks,f=c.mapping,h=this.getProps("parent"),p=[0];if(!l.length)return this;for(n=1,r=u.length;n<r;n++)p[n]=p[n-1]+u[n].calculatedStyle.baseSize;return l.forEach(function(t){o=v(t.style.gridTemplateColumns)[1],a=f.col.nameToLineMap[t.style.gridColumnStart],s=f.col.nameToLineMap[t.style.gridColumnEnd],i=p[s-1]-p[a-1],e=function(t,e){var n,r,i,o=t.children,a=0,s=0,l="",c="",u=0,f=e.itemWidth,h=e.width;for(h=isNaN(+h)?0:+h,o.forEach(function(t){return u=Math.max(u,+t.style.height||0)}),a+=f=+f,l+=f+" ",s=1,r=1,i=o.length;r<i&&!(a+f>h);r++)a+=f,l+=f+" ";for(s=r,n=Math.ceil(i/s);n--;)c+=u+" ";return{gridTemplateColumns:l.trim(),gridTemplateRows:c.trim()}}(t,{itemWidth:o,width:i}),t.style.gridTemplateColumns=e.gridTemplateColumns,t.style.gridTemplateRows=e.gridTemplateRows,h.gridLayoutEngine(t)}),this}},{key:"_assignCoordinatesToCells",value:function(t){var e,n,r,i,o,s,l,c,u,f=t||this.props.domTree,h=this._config,p=h.sanitizedItems,d=h.rowTracks,g=h.colTracks,m=f.style,y=m.justifyItems,w=m.alignItems,b=m.paddingStart,S=m.paddingTop,v=[b],T=[S];for(r=1,n=d.length;r<n;r++)v[r]=v[r-1]+d[r].calculatedStyle.baseSize;for(r=1,n=g.length;r<n;r++)T[r]=T[r-1]+g[r].calculatedStyle.baseSize;return f.layout={x:0,y:0,width:isNaN(f.style.width)?T[T.length-1]:f.style.width,height:isNaN(f.style.height)?v[v.length-1]:f.style.height},(f.children||[]).forEach(function(t,n){switch(e=p[n],i=T[e.colEnd-1]-T[e.colStart-1],o=v[e.rowEnd-1]-v[e.rowStart-1],s=isNaN(+t.style.width)?i:+t.style.width,l=isNaN(+t.style.height)?o:+t.style.height,y||t.style.justifySelf){case"center":c=T[e.colStart-1]+i/2-s/2;break;case"end":c=T[e.colEnd-1]-s;break;case"stretch":s=i,c=T[e.colStart-1];break;default:c=T[e.colStart-1]}switch(w||t.style.alignSelf){case"center":u=v[e.rowStart-1]+o/2-l/2;break;case"end":u=v[e.rowEnd-1]-l;break;case"stretch":l=o,u=v[e.rowStart-1];break;default:u=v[e.rowStart-1]}c+=a(e.style.paddingStart,e.style.padding,0),u+=a(e.style.paddingTop,e.style.padding,0),t.layout={x:c,y:u,x2:c+s,y2:u+l,width:s,height:l}}),this}}])&&m(e.prototype,n),r&&m(e,r),t}(),x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=t.split(" ").filter(function(t){return t&&!!t.trim()}),r="",i=1;return n.length&&!/repeat\(/.test(t)?n.forEach(function(t){y.indexOf(t)>-1||/[0-9]fr/.test(t)||w.test(t)||!isNaN(t)?(r+=e[i].calculatedStyle.baseSize+" ",i++):r+=t+" "}):e.forEach(function(t){isNaN(t.calculatedStyle.baseSize)||(r+=t.calculatedStyle.baseSize+" ")}),r.trim()},O=function(t,e){var n,r,i,a,s,l,c,u,f,h,p=t.style,d=e.getConfig("rowTracks"),g=e.getConfig("colTracks"),m=e.getConfig("mapping"),y=p.gridTemplateRows,w=p.gridTemplateColumns;for(t.style.gridTemplateRows=x(y,d),t.style.gridTemplateColumns=x(w,g),r=0,a=(t.children||[]).length;r<a;r++)if(n=t.children[r],o(n)){if(n.style.gridTemplateColumns=n.userGivenStyles.gridTemplateColumns,n.style.gridTemplateRows=n.userGivenStyles.gridTemplateRows,isNaN(n.userGivenStyles.width)){for(f=n.style.gridColumnStart,h=n.style.gridColumnEnd,f=m.col.nameToLineMap[f],h=m.col.nameToLineMap[h],i=f,l=0;i<h;i++)l+=g[i].calculatedStyle.baseSize;n.style.width=l}if(isNaN(n.userGivenStyles.height)){for(c=n.style.gridRowStart,u=n.style.gridRowEnd,c=m.row.nameToLineMap[c],u=m.row.nameToLineMap[u],i=c,s=0;i<u;i++)s+=d[i].calculatedStyle.baseSize;n.style.height=s}}return t};function _(t){var e,n,r,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=t.style;if(t&&t.style){for(t.userGivenStyles||(t.style.width=isNaN(t.style.width)?"auto":t.style.width,t.style.height=isNaN(t.style.height)?"auto":t.style.height,l.paddingStart=a(l.paddingStart,l.padding,0),l.paddingEnd=a(l.paddingEnd,l.padding,0),l.paddingTop=a(l.paddingTop,l.padding,0),l.paddingBottom=a(l.paddingBottom,l.padding,0),t.userGivenStyles={gridTemplateColumns:t.style.gridTemplateColumns,gridTemplateRows:t.style.gridTemplateRows,width:t.style.width,height:t.style.height}),t.unResolvedChildren=[],e=0,n=t.children&&t.children.length;e<n;e++)r=t.children[e],o(r)&&(S(r)?this.compute(r):t.unResolvedChildren.push(r));return(i=new E).set("domTree",t).set("parent",this).compute(),s<2&&this.gridLayoutEngine(O(t,i),2),t}}function C(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var M=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gridLayoutEngine=_}var e,n,r;return e=t,(n=[{key:"compute",value:function(t){switch(o(t)){case"grid":case"flex":default:return this.gridLayoutEngine(t)}}}])&&C(e.prototype,n),r&&C(e,r),t}(),j=function(t){var e=new M,n=function t(e){if(r.indexOf(i(e))>-1||null===e)return e;if(Array.isArray(e)){var n,o,a=[];for(n=0,o=e.length;n<o;n++)a.push(t(e[n]));return a}if("object"===i(e)){var s,l={};for(s in e)l[s]=t(e[s]);return l}}(t);return n.root=!0,function t(){var e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(r.layout=i.layout,e=0,n=(r.children||[]).length;e<n;e++)t(r.children[e],i.children[e])}(t,e.compute(n)),t};n.d(e,"computeLayout",function(){return j})}])});
//# sourceMappingURL=main.js.map