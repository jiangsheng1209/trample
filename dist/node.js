!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.trample=e():t.trample=e()}(global,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",o="day",i="week",u="month",a="quarter",s="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:d,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+d(r,2,"0")+":"+d(o,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),o=e-r<0,i=t.clone().add(n+(o?-1:1),u);return Number(-(n+(e-r)/(o?r-i:i-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(c){return{M:u,y:s,w:i,d:o,h:r,m:n,s:e,ms:t,Q:a}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},p="en",g={};g[p]=h;var v=function(t){return t instanceof b},y=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)g[t]&&(r=t),e&&(g[t]=e,r=t);else{var o=t.name;g[o]=t,r=o}return n||(p=r),r},m=function(t,e,n){if(v(t))return t.clone();var r=e?"string"==typeof e?{format:e,pl:n}:e:{};return r.date=t,new b(r)},$=l;$.l=y,$.i=v,$.w=function(t,e){return m(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var b=function(){function d(t){this.$L=this.$L||y(t.locale,null,!0),this.parse(t)}var l=d.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if($.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(c);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return $},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=m(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return m(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<m(t)},l.$g=function(t,e,n){return $.u(t)?this[e]:this.set(n,t)},l.year=function(t){return this.$g(t,"$y",s)},l.month=function(t){return this.$g(t,"$M",u)},l.day=function(t){return this.$g(t,"$W",o)},l.date=function(t){return this.$g(t,"$D","date")},l.hour=function(t){return this.$g(t,"$H",r)},l.minute=function(t){return this.$g(t,"$m",n)},l.second=function(t){return this.$g(t,"$s",e)},l.millisecond=function(e){return this.$g(e,"$ms",t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,a){var c=this,f=!!$.u(a)||a,d=$.p(t),l=function(t,e){var n=$.w(c.$u?Date.UTC(c.$y,e,t):new Date(c.$y,e,t),c);return f?n:n.endOf(o)},h=function(t,e){return $.w(c.toDate()[t].apply(c.toDate(),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),c)},p=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case s:return f?l(1,0):l(31,11);case u:return f?l(1,g):l(0,g+1);case i:var m=this.$locale().weekStart||0,b=(p<m?p+7:p)-m;return l(f?v-b:v+(6-b),g);case o:case"date":return h(y+"Hours",0);case r:return h(y+"Minutes",1);case n:return h(y+"Seconds",2);case e:return h(y+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(i,a){var c,f=$.p(i),d="set"+(this.$u?"UTC":""),l=(c={},c[o]=d+"Date",c.date=d+"Date",c[u]=d+"Month",c[s]=d+"FullYear",c[r]=d+"Hours",c[n]=d+"Minutes",c[e]=d+"Seconds",c[t]=d+"Milliseconds",c)[f],h=f===o?this.$D+(a-this.$W):a;if(f===u||f===s){var p=this.clone().set("date",1);p.$d[l](h),p.init(),this.$d=p.set("date",Math.min(this.$D,p.daysInMonth())).toDate()}else l&&this.$d[l](h);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[$.p(t)]()},l.add=function(t,a){var c,f=this;t=Number(t);var d=$.p(a),l=function(e){var n=m(f);return $.w(n.date(n.date()+Math.round(e*t)),f)};if(d===u)return this.set(u,this.$M+t);if(d===s)return this.set(s,this.$y+t);if(d===o)return l(1);if(d===i)return l(7);var h=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[d]||1,p=this.$d.getTime()+t*h;return $.w(p,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),o=this.$locale(),i=this.$H,u=this.$m,a=this.$M,s=o.weekdays,c=o.months,d=function(t,r,o,i){return t&&(t[r]||t(e,n))||o[r].substr(0,i)},l=function(t){return $.s(i%12||12,t,"0")},h=o.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:$.s(a+1,2,"0"),MMM:d(o.monthsShort,a,c,3),MMMM:c[a]||c(this,n),D:this.$D,DD:$.s(this.$D,2,"0"),d:String(this.$W),dd:d(o.weekdaysMin,this.$W,s,2),ddd:d(o.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:$.s(i,2,"0"),h:l(1),hh:l(2),a:h(i,u,!0),A:h(i,u,!1),m:String(u),mm:$.s(u,2,"0"),s:String(this.$s),ss:$.s(this.$s,2,"0"),SSS:$.s(this.$ms,3,"0"),Z:r};return n.replace(f,(function(t,e){return e||p[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,f){var d,l=$.p(c),h=m(t),p=6e4*(h.utcOffset()-this.utcOffset()),g=this-h,v=$.m(this,h);return v=(d={},d[s]=v/12,d[u]=v,d[a]=v/3,d[i]=(g-p)/6048e5,d[o]=(g-p)/864e5,d[r]=g/36e5,d[n]=g/6e4,d[e]=g/1e3,d)[l]||g,f?v:$.a(v)},l.daysInMonth=function(){return this.endOf(u).$D},l.$locale=function(){return g[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=y(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return $.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},d}();return m.prototype=b.prototype,m.extend=function(t,e){return t(e,b,m),m},m.locale=y,m.isDayjs=v,m.unix=function(t){return m(1e3*t)},m.en=g[p],m.Ls=g,m}()},function(t,e,n){"use strict";(function(t){var r=n(2),o=n.n(r),i=n(3),u=n.n(i);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=n?process.cwd():t;return u.a.join(r,e)}e.a={AbsPath:a,IsExistPath:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return o.a.existsSync(a(t,e))}}}).call(this,"/")},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("child_process")},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(e);var o=n(0),i=n.n(o);var u={FormatCountdown:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=+new Date,n=+new Date(t),r=n-e;if(r>=0){var o=Math.floor(r/1e3/3600/24),i=Math.floor(r/1e3/60/60%24),u=Math.floor(r/1e3/60%60),a=Math.floor(r/1e3%60);return"".concat(o?o+"天":"").concat(i?i+"时":"").concat(u?u+"分":"").concat(a?a+"秒":"")}return"时间已到"},FormatDiffTime:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=i()(),n=i()(t),r=e.diff(n),o=Math.abs(r),u=r>=0?"前":"后",a=30.4375,s=365.25,c=6e4,f=60*c,d=24*f,l=d*a,h=d*s,p=o/c,g=o/f,v=o/d,y=o/l,m=o/h;return m>=1||y>=12?n.format("YYYY-MM-DD HH:mm:ss"):y>=1&&y<12?"".concat(parseInt(y),"个月").concat(u):v>=1&&v<a?"".concat(parseInt(v),"天").concat(u):g>=1&&g<24?"".concat(parseInt(g),"小时").concat(u):p>=1&&p<60?"".concat(parseInt(p),"分钟").concat(u):r>=0?"刚刚":"准备"}};function a(t,e,n,r,o,i,u){try{var a=t[i](u),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function u(t){a(i,r,o,u,s,"next",t)}function s(t){a(i,r,o,u,s,"throw",t)}u(void 0)}))}}function c(t,e){var n=Object.prototype.toString.call(t).replace(/\[object (\w+)\]/,"$1").toLowerCase();return e?n===e:n}function f(t){return c(t,"object")}function d(t){return Array.isArray(t)&&!t.length}function l(t){return f(t)&&!Object.keys(t).length}function h(){return"undefined"!=typeof window?"web":"undefined"!=typeof global?"node":"unknow"}var p={DataType:c,EnvType:h,IsArguments:function(t){return c(t,"arguments")},IsArray:function(t){return c(t,"array")},IsAsyncFunction:function(t){return c(t,"asyncfunction")},IsBoolean:function(t){return c(t,"boolean")},IsClass:function(t){return c(t,"function")&&/^class\s|^function\s+[A-Z]/.test(t.toString())},IsDate:function(t){return c(t,"date")},IsEmpty:function(t){return!t},IsEmptyArray:d,IsEmptyObject:l,IsError:function(t){return t instanceof Error},IsFunction:function(t){return c(t,"function")},IsMap:function(t){return c(t,"map")},IsNode:function(){return"node"===h()},IsNull:function(t){return c(t,"null")},IsNumber:function(t){return c(t,"number")},IsObject:f,IsRegExp:function(t){return c(t,"regexp")},IsSet:function(t){return c(t,"set")},IsString:function(t){return c(t,"string")},IsSymbol:function(t){return c(t,"symbol")},IsSyncFunction:function(t){return c(t,"function")},IsUndefined:function(t){return c(t,"undefined")},IsWeakMap:function(t){return c(t,"weakmap")},IsWeakSet:function(t){return c(t,"weakset")},IsWeb:function(){return"web"===h()}};function g(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(t).reduce((function(t,e){return"".concat(t).concat(e[0],"=").concat(encodeURIComponent(e[1]),"&")}),l(t)?"":"?").replace(/&$/,"")}function v(){return(v=s(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1e3,t.abrupt("return",new Promise((function(t){return setTimeout((function(){return t(!0)}),e)})));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y={Ajax:function(t){var e=t.data,n=void 0===e?{}:e,r=t.error,o=void 0===r?null:r,i=t.success,u=void 0===i?null:i,a=t.type,s=void 0===a?"get":a,c=t.url,f=void 0===c?"":c;if(f){var d=new XMLHttpRequest;s=s.toUpperCase(),n=g(n),"GET"===s?(d.open("GET",n?"".concat(f).concat(n):"".concat(f,"?t=").concat(+new Date),!0),d.send()):"POST"===s&&(d.open("POST",f,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.send(n)),d.onreadystatechange=function(){4===d.readyState&&(200===d.status?u&&u(d.responseText):o&&o(d.status))}}},AsyncTo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Promise.resolve(!0);return t?t.then((function(t){return[null,t]})).catch((function(t){return[t]})):[null,null]},WaitFor:function(){return v.apply(this,arguments)}};function m(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Math.floor(Math.random()*(e-t+1)+t)}var $={FillNum:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.toString().padStart(e,"0")},RandomNum:m,RandomNumPlus:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=[];;){for(var o=!1,i=m(t,e),u=0;u<r.length;u++)if(i===r[u]){o=!0;break}if(o||r.push(i),r.length===n)return r}},RoundNum:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n?Math.round(t*Math.pow(10,e)*100)/Math.pow(10,e)+"%":Math.round(t*Math.pow(10,e))/Math.pow(10,e)},ThousandNum:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},b={address:{msg:"地址只能由2到200位中文、英文、数字或空格组成",regexp:/^[\u4e00-\u9fa5A-Za-z0-9 ]{2,200}$/},count:{msg:"数量只能由数字组成",regexp:/^\d{1,}$/},date:{msg:"日期只能由YYYY-MM-DD hh:mm:ss形式组成",regexp:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/},email:{msg:"邮箱只能由xxx@yyy.zzz形式组成",regexp:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/},idcard:{msg:"身份证只能由13位数字或12位数字和X组成",regexp:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/},image:{msg:"图片只能是jpg、png、gif或svg类型",regexp:/\.(jpe?g|png|gif|svg)$/},name:{msg:"名称只能由2到50位中文、英文、数字、下划线或中划线组成",regexp:/^[\u4e00-\u9fa5\w-]{2,50}$/},number:{msg:"计数只能由数字或小数点组成",regexp:/^[+-]?(0|([1-9]\d*))(\.\d+)?$/},password:{msg:"密码只能由8到20位英文、数字或符号至少两种组成",regexp:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,20}$/},phone:{msg:"手机只能由11位数字组成，且需符合通讯运营商的规范",regexp:/^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/}},O="^$.*+-?=!:|\\/()[]{}".split("");function w(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var S=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},u,{},y,{},$,{},{CheckText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t||!e)return{flag:!1,msg:"校验信息不能为空"};var n=b[t],r=n.regexp,o=n.msg,i=r.test(e);return{flag:i,msg:i?"":o}},CheckTextPlus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new RegExp,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!t||!e||!n)return{flag:!1,msg:"校验信息不能为空"};var r=t.test(n);return{flag:r,msg:r?"":e}},MatchBracketText:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"(*)",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.split("*").map((function(t){return O.includes(t)?"\\"+t:t})),r=new RegExp(n[0]+"(.+?)"+n[1],"g"),o=e.match(r);return(o||[]).map((function(t){return t.replace(r,"$1")}))}},{},{RandomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16).padEnd(6,"0")},RandomId:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return(t<1||t>10)&&(t=5),Math.random().toString(36).substr(3,t)},StartScore:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return t<0&&(t=0),t>e&&(t=e),[].concat(w(Array.from(new Array(e).keys()).fill("★")),w(Array.from(new Array(e).keys()).fill("☆"))).join("").slice(e-t,2*e-t)}},{},p),j=n(1),D=n(4),x=n.n(D);function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"node -v";return x.a.execSync(t,{encoding:"utf8"})}var I={RunCmd:P};var A={NodeType:function(){return{nodeVs:P("node -v").replace(/(v|\n|\r\n)/g,""),npmVs:P("npm -v").replace(/\n/g,"")}}};function T(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var _=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?T(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},j.a,{},I,{},A);function k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.default=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?k(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},S,{},_)}])}));