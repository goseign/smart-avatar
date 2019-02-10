module.exports=function(t){var r={};function e(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=t,e.c=r,e.d=function(t,r,a){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)e.d(a,n,function(r){return t[r]}.bind(null,n));return a},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=1)}([function(t,r){function e(t){var r,e=parseInt(t,10);switch(!0){case!isNaN(e):r=e.toString();break;default:r="80"}return r}t.exports.parseColor=function(t){return t},t.exports.parseColorScheme=function(t){return t},t.exports.parseEmail=function(t){return-1!=t.indexOf("@")?t.trim().toLowerCase():null},t.exports.parseGravatarURIRes=function(t){return"s="+e(t.toString())},t.exports.parseImgFormat=function(t){var r;switch(!0){case-1!=t.toLowerCase().indexOf("png"):r="png";break;case-1!=t.toLowerCase().indexOf("jpg")||-1!=t.toLowerCase().indexOf("jpeg"):r="jpg";break;case-1!=t.toLowerCase().indexOf("tiff"):r="tiff";break;default:r="jpg"}return r},t.exports.parseImgRes=e,t.exports.parseInitials=function(t){var r;if(t.length>1&&-1!=t.indexOf(" ")){var e=t.split(" ");r=e[0][0]+e[1][0]}else r=t.length>1?t[0]+t[1]:t;return r.toUpperCase()},t.exports.parsePriority=function(t){var r=["gravatar","src","smart"],e={};for(let a=0;a<t.length;a++)-1!=r.indexOf(t[a].toString())&&-1===Object.values(e).indexOf(t[a].toString())&&(e["src"+(a+1)]=t[a].toString());return e},t.exports.parseProtocol=function(t){var r;switch(t){case"agnostic":r="//";break;case"secure":r="https://";break;case"unsecure":r="http://";break;default:r="https://"}return r}},function(t,r,e){t.exports=e(2)},function(t,r,e){var{md5:a}=e(3),{parseColor:n,parseColorScheme:o,parseEmail:i,parseImgFormat:s,parseImgRes:l,parseInitials:c,parsePriority:p,parseProtocol:u}=e(0),{generateGravatarUrl:f}=e(4),{renderSA:h}=e(5);function d(t,r){var e={};if(!arguments.length)throw new Error("SmartAvatar ERROR: missing 'element' argument.");if("dispose"!==arguments[1]){if("object"!=typeof arguments[1])throw new Error("SmartAvatar ERROR: 'options' argument must be an object.");if(!function(t){return t instanceof Element||t instanceof HTMLDocument})throw new Error("SmartAvatar ERROR: cannot append asset to"+typeof t+".");e.parent=t,e.priority=r.priority?p(r.priority):{src1:"gravatar",src2:"src",src3:"smart"},e.timestamp="boolean"==typeof r.timestamp&&r.timestamp,e.alt=r.alt?r.alt.toString():null,e.icon=r.icon?r.icon.toString():"smartfox",e.size=r.size?l(r.size.toString()):"48",e.round=!0===r.round,e.initials=r.initials?c(r.initials.toString()):null,e.color=r.color?n(r.color.toString()):"#777",e.textColor=r.textColor?n(r.textColor.toString()):"#FFF",e.colorScheme=r.colorScheme?o(r.colorScheme):null,e.cssClass=r.cssClass?r.cssClass.toString():null,e.email=r.email?i(r.email.toString()):null,e.hash=!!r.hash&&r.hash.toString()||(e.email?a(e.email):null),e.protocol=r.protocol?u(r.protocol.toString()):"secure",e.format=r.format?s(r.format.toString()):"jpg",e.resolution=r.resolution?l(r.resolution.toString()):1.5*e.size,e.src=r.src?r.src.toString():null,e.gravatarUrl=e.hash?f(e):"";var d=h(t,e);t.appendChild(d)}else{const r=t.querySelectorAll(".smart-avatar");for(let e=0;e<r.length;e++)t.removeChild(r[e]);if(t.querySelectorAll(".smart-avatar").length>0)throw new Error("SmartAvatar ERROR: could not dispose SmartAvatar nodes."+t.querySelectorAll(".smart-avatar").length+"left.")}}t.exports=d,t.exports.default=d},function(t,r){function e(t,r){var e=t[0],a=t[1],l=t[2],c=t[3];e=n(e,a,l,c,r[0],7,-680876936),c=n(c,e,a,l,r[1],12,-389564586),l=n(l,c,e,a,r[2],17,606105819),a=n(a,l,c,e,r[3],22,-1044525330),e=n(e,a,l,c,r[4],7,-176418897),c=n(c,e,a,l,r[5],12,1200080426),l=n(l,c,e,a,r[6],17,-1473231341),a=n(a,l,c,e,r[7],22,-45705983),e=n(e,a,l,c,r[8],7,1770035416),c=n(c,e,a,l,r[9],12,-1958414417),l=n(l,c,e,a,r[10],17,-42063),a=n(a,l,c,e,r[11],22,-1990404162),e=n(e,a,l,c,r[12],7,1804603682),c=n(c,e,a,l,r[13],12,-40341101),l=n(l,c,e,a,r[14],17,-1502002290),e=o(e,a=n(a,l,c,e,r[15],22,1236535329),l,c,r[1],5,-165796510),c=o(c,e,a,l,r[6],9,-1069501632),l=o(l,c,e,a,r[11],14,643717713),a=o(a,l,c,e,r[0],20,-373897302),e=o(e,a,l,c,r[5],5,-701558691),c=o(c,e,a,l,r[10],9,38016083),l=o(l,c,e,a,r[15],14,-660478335),a=o(a,l,c,e,r[4],20,-405537848),e=o(e,a,l,c,r[9],5,568446438),c=o(c,e,a,l,r[14],9,-1019803690),l=o(l,c,e,a,r[3],14,-187363961),a=o(a,l,c,e,r[8],20,1163531501),e=o(e,a,l,c,r[13],5,-1444681467),c=o(c,e,a,l,r[2],9,-51403784),l=o(l,c,e,a,r[7],14,1735328473),e=i(e,a=o(a,l,c,e,r[12],20,-1926607734),l,c,r[5],4,-378558),c=i(c,e,a,l,r[8],11,-2022574463),l=i(l,c,e,a,r[11],16,1839030562),a=i(a,l,c,e,r[14],23,-35309556),e=i(e,a,l,c,r[1],4,-1530992060),c=i(c,e,a,l,r[4],11,1272893353),l=i(l,c,e,a,r[7],16,-155497632),a=i(a,l,c,e,r[10],23,-1094730640),e=i(e,a,l,c,r[13],4,681279174),c=i(c,e,a,l,r[0],11,-358537222),l=i(l,c,e,a,r[3],16,-722521979),a=i(a,l,c,e,r[6],23,76029189),e=i(e,a,l,c,r[9],4,-640364487),c=i(c,e,a,l,r[12],11,-421815835),l=i(l,c,e,a,r[15],16,530742520),e=s(e,a=i(a,l,c,e,r[2],23,-995338651),l,c,r[0],6,-198630844),c=s(c,e,a,l,r[7],10,1126891415),l=s(l,c,e,a,r[14],15,-1416354905),a=s(a,l,c,e,r[5],21,-57434055),e=s(e,a,l,c,r[12],6,1700485571),c=s(c,e,a,l,r[3],10,-1894986606),l=s(l,c,e,a,r[10],15,-1051523),a=s(a,l,c,e,r[1],21,-2054922799),e=s(e,a,l,c,r[8],6,1873313359),c=s(c,e,a,l,r[15],10,-30611744),l=s(l,c,e,a,r[6],15,-1560198380),a=s(a,l,c,e,r[13],21,1309151649),e=s(e,a,l,c,r[4],6,-145523070),c=s(c,e,a,l,r[11],10,-1120210379),l=s(l,c,e,a,r[2],15,718787259),a=s(a,l,c,e,r[9],21,-343485551),t[0]=u(e,t[0]),t[1]=u(a,t[1]),t[2]=u(l,t[2]),t[3]=u(c,t[3])}function a(t,r,e,a,n,o){return r=u(u(r,t),u(a,o)),u(r<<n|r>>>32-n,e)}function n(t,r,e,n,o,i,s){return a(r&e|~r&n,t,r,o,i,s)}function o(t,r,e,n,o,i,s){return a(r&n|e&~n,t,r,o,i,s)}function i(t,r,e,n,o,i,s){return a(r^e^n,t,r,o,i,s)}function s(t,r,e,n,o,i,s){return a(e^(r|~n),t,r,o,i,s)}function l(t){var r,e=[];for(r=0;r<64;r+=4)e[r>>2]=t.charCodeAt(r)+(t.charCodeAt(r+1)<<8)+(t.charCodeAt(r+2)<<16)+(t.charCodeAt(r+3)<<24);return e}var c="0123456789abcdef".split("");function p(t){for(var r="",e=0;e<4;e++)r+=c[t>>8*e+4&15]+c[t>>8*e&15];return r}function u(t,r){return t+r&4294967295}t.exports.md5=function(t){return function(t){for(var r=0;r<t.length;r++)t[r]=p(t[r]);return t.join("")}(function(t){var r,a=t.length,n=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=t.length;r+=64)e(n,l(t.substring(r-64,r)));t=t.substring(r-64);var o=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<t.length;r++)o[r>>2]|=t.charCodeAt(r)<<(r%4<<3);if(o[r>>2]|=128<<(r%4<<3),r>55)for(e(n,o),r=0;r<16;r++)o[r]=0;return o[14]=8*a,e(n,o),n}(t))}},function(t,r,e){var{parseProtocol:a,parseImgFormat:n,parseGravatarURIRes:o}=e(0);t.exports.generateGravatarUrl=function(t){var r=a(t.protocol),e=n(t.format),i="?d=404&"+o(t.resolution);return r+"www.gravatar.com/avatar/"+t.hash+"."+e+i}},function(t,r){function e(t,r){switch(t){case"iconImg":return function(t){var r=new Image,e=a(t.icon);r.src=e,r.style.cssText=(t.round?"border-radius: 50%;":"")+"height:"+t.size+"px;width:"+t.size+"px;",t.cssClass?r.classList.add("smart-avatar",t.cssClass):r.classList.add("smart-avatar");t.timestamp&&r.setAttribute("sa_timestamp",Date.now());t.alt&&(r.alt=t.alt);return r}(r);case"initEl":return function(t){return n("initEl",t)}(r);case"iconEl":return function(t){return n("iconEl",t)}(r)}}function a(t){return"https://www.gravatar.com/avatar?d="+t+"&f=y"}function n(t,r){var e;"initEl"===t?e=r.initials:"iconEl"===t&&(e=function(t){return'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+.75*t.size+'" height="'+.75*t.size+'" viewBox="0 0 640 640"><path d="M482.82 372.91c0 104.04-73.14 188.5-163.22 188.5s-163.22-84.46-163.22-188.5S229.52 184.4 319.6 184.4s163.22 84.47 163.22 188.51z" fill="#222"></path><path d="M257 313.26L452.53 101l-.26 212.5-195.27-.24z" fill="#222"></path><path d="M382.53 313.26L187 101l.26 212.5 195.27-.24z" fill="#222"></path><path d="M194.79 119.68c0 14.23-11.55 25.78-25.79 25.78-14.23 0-25.78-11.55-25.78-25.78S154.77 93.89 169 93.89c14.24 0 25.79 11.56 25.79 25.79z" fill="#222"></path><path d="M495.69 119.68c0 14.23-11.55 25.78-25.78 25.78s-25.79-11.55-25.79-25.78 11.56-25.79 25.79-25.79c14.23 0 25.78 11.56 25.78 25.79z" fill="#222"></path><path d="M143.22 114.92h57.31v314.79h-57.31V114.92z" fill="#222"></path><path d="M438.38 119.68h57.31v314.78h-57.31V119.68z" fill="#222"></path><path d="M319.6 216.7l275.67 275.68H319.6V216.7z" fill="#222"></path><path d="M319.6 272.32l275.67 275.67H319.6V272.32z" fill="#222"></path><path d="M319.6 272.32L43.92 547.99H319.6V272.32z" fill="#222"></path><path d="M319.6 216.7L43.92 492.38H319.6V216.7z" fill="#222"></path><path d="M384.87 189.61L109.19 465.28h275.68V189.61z" fill="#e4e4e4"></path><path d="M254.03 246.36l275.68 275.68H254.03V246.36z" fill="#e4e4e4"></path><path d="M254.03 189.61l275.68 275.67H254.03V189.61z" fill="#e4e4e4"></path><path d="M170.85 126.78l275.68 275.68H170.85V126.78z" fill="#de7f27"></path><path d="M467.82 126.78L192.14 402.46h275.68V126.78z" fill="#de7f27"></path><path d="M297.46 277.07L125.05 449.48h172.41V277.07z" fill="#e4e4e4"></path><path d="M384.87 246.36L109.19 522.04h275.68V246.36z" fill="#e4e4e4"></path><path d="M341.37 277.07l172.41 172.41H341.37V277.07z" fill="#e4e4e4"></path><path d="M173.57 124.8l17.92-17.19 133.42 139.08-17.92 17.19L173.57 124.8z" fill="#222"></path><path d="M466.34 124.8l-17.92-17.19L315 246.69l17.92 17.19L466.34 124.8z" fill="#222"></path><path d="M451.53 355.79c0 82.04-59.49 148.65-132.77 148.65-73.27 0-132.76-66.61-132.76-148.65s59.49-148.64 132.76-148.64c73.28 0 132.77 66.6 132.77 148.64z" fill="#de7f27"></path><path d="M452.53 386.62c0 82.04-59.49 148.64-132.77 148.64-73.27 0-132.76-66.6-132.76-148.64 0-82.04 59.49-148.65 132.76-148.65 73.28 0 132.77 66.61 132.77 148.65z" fill="#e4e4e4"></path><path d="M171.88 126.78l275.67 275.68H171.88V126.78z" fill="#de7f27"></path><path d="M466.34 126.78L190.67 402.46h275.67V126.78z" fill="#de7f27"></path><path d="M370.61 272.32c0 28.15-22.86 51.01-51.01 51.01-28.16 0-51.02-22.86-51.02-51.01 0-28.16 22.86-51.02 51.02-51.02 28.15 0 51.01 22.86 51.01 51.02z" fill="#de7f27"></path><path d="M253.44 259.45l1.38.23 1.34.28 1.32.35 1.29.4 1.26.46 1.22.51 1.19.57 1.14.61 1.11.67 1.07.71 1.02.75.97.8.93.84.88.89.82.91.77.96.71.99.66 1.02.59 1.06.53 1.08.47 1.11.4 1.14.33 1.16.27 1.19.19 1.21.11 1.22.04 1.24h.11v46.42h-.14l-.01.15-.11 1.22-.19 1.21-.27 1.18-.33 1.16-.4 1.14-.47 1.11-.53 1.09-.59 1.05-.66 1.03-.71.99-.77.95-.82.92-.88.88-.93.84-.97.8-1.02.76-1.07.71-1.11.66-1.14.62-1.19.56-1.22.52-1.26.45-1.29.41-1.32.34-1.34.29-1.38.23-1.4.16-1.42.1-1.44.03-1.44-.03-1.42-.1-1.39-.16-1.38-.23-1.34-.29-1.32-.34-1.29-.41-1.26-.45-1.22-.52-1.19-.56-1.15-.62-1.1-.66-1.07-.71-1.02-.76-.97-.8-.93-.84-.88-.88-.82-.92-.77-.95-.71-.99-.66-1.03-.59-1.05-.53-1.09-.47-1.11-.4-1.14-.33-1.16-.27-1.18-.19-1.21-.11-1.22-.01-.15h-.03v-46.42l.04-1.24.11-1.22.19-1.21.27-1.19.33-1.16.4-1.14.47-1.11.53-1.08.59-1.06.66-1.02.71-.99.77-.96.82-.91.88-.89.93-.84.97-.8 1.02-.75 1.07-.71 1.1-.67 1.15-.61 1.19-.57 1.22-.51 1.26-.46 1.29-.4 1.32-.35 1.34-.28 1.38-.23 1.39-.16 1.42-.1 1.44-.04 1.44.04 1.42.1 1.4.16z" fill="#111"></path><path d="M394.88 259.45l1.37.23 1.35.28 1.32.35 1.28.4 1.26.46 1.22.51 1.19.57 1.15.61 1.1.67 1.07.71 1.02.75.98.8.92.84.88.89.82.91.77.96.71.99.66 1.02.59 1.06.54 1.08.46 1.11.4 1.14.34 1.16.26 1.19.19 1.21.11 1.22.04 1.24h.11v46.42h-.14l-.01.15-.11 1.22-.19 1.21-.26 1.18-.34 1.16-.4 1.14-.46 1.11-.54 1.09-.59 1.05-.66 1.03-.71.99-.77.95-.82.92-.88.88-.92.84-.98.8-1.02.76-1.07.71-1.1.66-1.15.62-1.19.56-1.22.52-1.26.45-1.28.41-1.32.34-1.35.29-1.37.23-1.4.16-1.42.1-1.44.03-1.44-.03-1.42-.1-1.4-.16-1.37-.23-1.35-.29-1.32-.34-1.29-.41-1.26-.45-1.22-.52-1.18-.56-1.15-.62-1.11-.66-1.07-.71-1.02-.76-.97-.8-.93-.84-.87-.88-.83-.92-.77-.95-.71-.99-.65-1.03-.6-1.05-.53-1.09-.47-1.11-.4-1.14-.33-1.16-.26-1.18-.19-1.21-.12-1.22v-.15h-.04v-46.42l.04-1.24.12-1.22.19-1.21.26-1.19.33-1.16.4-1.14.47-1.11.53-1.08.6-1.06.65-1.02.71-.99.77-.96.83-.91.87-.89.93-.84.97-.8 1.02-.75 1.07-.71 1.11-.67 1.15-.61 1.18-.57 1.22-.51 1.26-.46 1.29-.4 1.32-.35 1.35-.28 1.37-.23 1.4-.16 1.42-.1 1.44-.04 1.44.04 1.42.1 1.4.16z" fill="#111"></path><path d="M170.85 402.46l148.75 45.28v-45.28H170.85z" fill="#de7f27"></path><path d="M468.34 402.46L319.6 447.74v-45.28h148.74z" fill="#de7f27"></path><path d="M341.98 413.09l1.16.31 1.13.39 1.11.47 1.06.55 1.04.62.99.69.95.76.91.82.86.89.82.94.76 1 .71 1.05.66 1.11.59 1.15.54 1.2.47 1.23.4 1.28.34 1.31.27 1.35.19 1.38.12 1.4.04 1.43-.04 1.42-.12 1.41-.19 1.37-.27 1.35-.34 1.31-.4 1.28-.47 1.24-.54 1.19-.6 1.15-.65 1.11-.71 1.05-.76 1-.82.95-.86.88-.91.82-.95.76-1 .69-1.03.62-1.07.55-1.1.47-1.13.39-1.16.31-1.19.23-1.21.13-1.23.05v.09h-38.41v-.13l-.33-.01-1.21-.14-1.19-.22-1.16-.31-1.13-.39-1.1-.47-1.07-.55-1.03-.62-.99-.69-.96-.76-.9-.82-.87-.89-.81-.94-.77-1-.71-1.05-.65-1.11-.6-1.15-.53-1.2-.47-1.23-.41-1.28-.34-1.31-.26-1.35-.2-1.37-.12-1.41-.04-1.43.04-1.42.12-1.41.2-1.37.26-1.35.34-1.31.41-1.28.47-1.24.53-1.19.6-1.15.66-1.11.71-1.05.76-1 .81-.95.87-.88.91-.82.95-.76.99-.69 1.03-.62 1.07-.55 1.1-.47 1.14-.39 1.16-.31 1.18-.23 1.22-.13.32-.01v-.04h38.41l1.23.05 1.21.14 1.19.22z" fill="#111"></path><path d="M323.76 413.81l1.35.27 1.31.34 1.28.4 1.23.47 1.2.54 1.15.59 1.11.66 1.05.71 1 .76.94.82.89.86.82.91.76.95.69 1 .62 1.03.55 1.07.47 1.1.39 1.13.31 1.16.22 1.19.14 1.21.05 1.23h.09v38.41h-.13l-.01.33-.14 1.21-.22 1.18-.31 1.17-.39 1.13-.47 1.1-.55 1.07-.62 1.03-.69.99-.76.95-.82.91-.89.87-.94.81-1 .76-1.06.71-1.1.66-1.15.6-1.2.53-1.24.47-1.27.41-1.32.34-1.34.26-1.38.2-1.4.11-1.43.04-1.43-.04-1.4-.11-1.38-.2-1.34-.26-1.32-.34-1.27-.41-1.24-.47-1.2-.54-1.15-.59-1.1-.66-1.05-.71-1-.76-.95-.81-.88-.87-.83-.91-.75-.95-.7-.99-.62-1.03-.54-1.07-.47-1.1-.39-1.14-.31-1.16-.23-1.18-.14-1.22-.01-.32h-.03v-38.41l.05-1.23.13-1.21.23-1.19.31-1.16.39-1.13.47-1.11.55-1.06.62-1.04.69-.99.76-.95.82-.91.88-.86.95-.82 1-.76 1.05-.71 1.11-.66 1.15-.59 1.19-.54 1.24-.47 1.28-.4 1.31-.34 1.35-.27 1.37-.19 1.41-.12 1.42-.04 1.43.04 1.41.12 1.37.19z" fill="#111"></path></svg>'}(r));var a=document.createElement("div");return a.style.cssText=(r.round?"border-radius: 50%;":"")+"align-items:center;background-color:"+r.color+";color:"+r.textColor+';display:flex;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-size:'+r.size/2+"px;height:"+r.size+"px;justify-content:center;margin:0;padding:0;width:"+r.size+"px;",r.cssClass?a.classList.add("smart-avatar",r.cssClass):a.classList.add("smart-avatar"),r.timestamp&&a.setAttribute("sa_timestamp",Date.now()),a.innerHTML='<span style="display:flex;">'+e+"</span>",a}function o(t,r,e){if(r.style.opacity=0,"el"===e.type)delete r.onerror,t.appendChild(e.content),t.removeChild(r);else if(r.src=e.content,r.style.opacity=1,!r.src)throw new Error("SmartAvatar ERROR: internal error - img src recursively undefined")}t.exports.renderSA=function(t,r){var n=function(t,r){var n=["mp","identicon","monsterid","wavatar","retro","robohash"],i={};switch(!0){case"smart"===r.priority.src1&&r.initials:i.asset=e("initEl",r),i.finished=!0;break;case"smart"===r.priority.src1&&r.icon&&!n.includes(r.icon):i.asset=e("iconEl",r),i.finished=!0;break;case"smart"===r.priority.src1&&r.icon&&n.includes(r.icon):i.asset=e("iconImg",r),i.finished=!0;break;default:i.asset=function(t,r){var n=function(t){var r=["mp","identicon","monsterid","wavatar","retro","robohash"],n={asset1:{},asset2:{},asset3:{}};n.asset1.content="gravatar"===t.priority.src1?t.gravatarUrl:t.src,n.asset1.type="url";for(var o=2;o<=3;o++){var i="src"+o,s="asset"+o;"gravatar"===t.priority[i]?(n[s].content=t.gravatarUrl,n[s].type="url"):"src"===t.priority[i]?(n[s].content=t.src,n[s].type="url"):"smart"===t.priority[i]&&(t.initials?(n[s].content=e("initEl",t),n[s].type="el"):t.icon&&!r.includes(t.icon)?(n[s].content=e("iconEl",t),n[s].type="el"):t.icon&&r.includes(t.icon)&&(n[s].content=a(t.icon),n[s].type="url"))}return n}(r),i=n.asset1,s=n.asset2,l=n.asset3,c=new Image;return c.src=i.content,c.style.cssText=(r.round?"border-radius: 50%;":"")+"height:"+r.size+"px;width:"+r.size+"px;",c.onerror=function(){o(t,c,s),"el"!==s.type&&(c.onerror=function(){o(t,c,l)})},r.cssClass?c.classList.add("smart-avatar",r.cssClass):c.classList.add("smart-avatar"),r.timestamp&&c.setAttribute("sa_timestamp",Date.now()),r.alt&&(c.alt=r.alt),c}(t,r),i.finished=!0}return i}(t,r);if(n.finished)return n.asset;throw new Error("SmartAvatar ERROR: something went wrong.")}}]);