(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"165":function(e,n,r){var o,i,s=r(39);!function(c,f){"object"==s(n)&&void 0!==e?e.exports=f():void 0===(i="function"==typeof(o=f)?o.call(n,r,n,e):o)||(e.exports=i)}(0,(function(){"use strict";var e="millisecond",n="second",r="minute",o="hour",i="day",c="week",f="month",g="quarter",b="year",C="date",O=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,S=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={"name":"en","weekdays":"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),"months":"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function $(e,n,r){var o=String(e);return!o||o.length>=n?e:""+Array(n+1-o.length).join(r)+e},E={"s":_,"z":function z(e){var n=-e.utcOffset(),r=Math.abs(n),o=Math.floor(r/60),i=r%60;return(n<=0?"+":"-")+_(o,2,"0")+":"+_(i,2,"0")},"m":function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,f),i=n-o<0,s=e.clone().add(r+(i?-1:1),f);return+(-(r+(n-o)/(i?o-s:s-o))||0)},"a":function a(e){return e<0?Math.ceil(e)||0:Math.floor(e)},"p":function p(s){return{"M":f,"y":b,"w":c,"d":i,"D":C,"h":o,"m":r,"s":n,"ms":e,"Q":g}[s]||String(s||"").toLowerCase().replace(/s$/,"")},"u":function u(e){return void 0===e}},k="en",I={};I[k]=y;var w=function m(e){return e instanceof j},x=function D(e,n,r){var o;if(!e)return k;if("string"==typeof e)I[e]&&(o=e),n&&(I[e]=n,o=e);else{var i=e.name;I[i]=e,o=i}return!r&&o&&(k=o),o||!r&&k},T=function v(e,n){if(w(e))return e.clone();var r="object"==s(n)?n:{};return r.date=e,r.args=arguments,new j(r)},N=E;N.l=x,N.i=w,N.w=function(e,n){return T(e,{"locale":n.$L,"utc":n.$u,"x":n.$x,"$offset":n.$offset})};var j=function(){function d(e){this.$L=x(e.locale,null,!0),this.parse(e)}var s=d.prototype;return s.parse=function(e){this.$d=function(e){var n=e.date,r=e.utc;if(null===n)return new Date(NaN);if(N.u(n))return new Date;if(n instanceof Date)return new Date(n);if("string"==typeof n&&!/Z$/i.test(n)){var o=n.match(O);if(o){var i=o[2]-1||0,s=(o[7]||"0").substring(0,3);return r?new Date(Date.UTC(o[1],i,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)):new Date(o[1],i,o[3]||1,o[4]||0,o[5]||0,o[6]||0,s)}}return new Date(n)}(e),this.$x=e.x||{},this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return N},s.isValid=function(){return!("Invalid Date"===this.$d.toString())},s.isSame=function(e,n){var r=T(e);return this.startOf(n)<=r&&r<=this.endOf(n)},s.isAfter=function(e,n){return T(e)<this.startOf(n)},s.isBefore=function(e,n){return this.endOf(n)<T(e)},s.$g=function(e,n,r){return N.u(e)?this[n]:this.set(r,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,s){var g=this,O=!!N.u(s)||s,S=N.p(e),y=function $(e,n){var r=N.w(g.$u?Date.UTC(g.$y,n,e):new Date(g.$y,n,e),g);return O?r:r.endOf(i)},_=function l(e,n){return N.w(g.toDate()[e].apply(g.toDate("s"),(O?[0,0,0,0]:[23,59,59,999]).slice(n)),g)},E=this.$W,k=this.$M,I=this.$D,w="set"+(this.$u?"UTC":"");switch(S){case b:return O?y(1,0):y(31,11);case f:return O?y(1,k):y(0,k+1);case c:var x=this.$locale().weekStart||0,T=(E<x?E+7:E)-x;return y(O?I-T:I+(6-T),k);case i:case C:return _(w+"Hours",0);case o:return _(w+"Minutes",1);case r:return _(w+"Seconds",2);case n:return _(w+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(s,c){var g,O=N.p(s),S="set"+(this.$u?"UTC":""),y=(g={},g[i]=S+"Date",g[C]=S+"Date",g[f]=S+"Month",g[b]=S+"FullYear",g[o]=S+"Hours",g[r]=S+"Minutes",g[n]=S+"Seconds",g[e]=S+"Milliseconds",g)[O],_=O===i?this.$D+(c-this.$W):c;if(O===f||O===b){var E=this.clone().set(C,1);E.$d[y](_),E.init(),this.$d=E.set(C,Math.min(this.$D,E.daysInMonth())).$d}else y&&this.$d[y](_);return this.init(),this},s.set=function(e,n){return this.clone().$set(e,n)},s.get=function(e){return this[N.p(e)]()},s.add=function(e,s){var g,C=this;e=Number(e);var O=N.p(s),S=function d(n){var r=T(C);return N.w(r.date(r.date()+Math.round(n*e)),C)};if(O===f)return this.set(f,this.$M+e);if(O===b)return this.set(b,this.$y+e);if(O===i)return S(1);if(O===c)return S(7);var y=(g={},g[r]=6e4,g[o]=36e5,g[n]=1e3,g)[O]||1,_=this.$d.getTime()+e*y;return N.w(_,this)},s.subtract=function(e,n){return this.add(-1*e,n)},s.format=function(e){var n=this;if(!this.isValid())return"Invalid Date";var r=e||"YYYY-MM-DDTHH:mm:ssZ",o=N.z(this),i=this.$locale(),s=this.$H,c=this.$m,f=this.$M,g=i.weekdays,b=i.months,C=function h(e,o,i,s){return e&&(e[o]||e(n,r))||i[o].substr(0,s)},O=function d(e){return N.s(s%12||12,e,"0")},y=i.meridiem||function(e,n,r){var o=e<12?"AM":"PM";return r?o.toLowerCase():o},_={"YY":String(this.$y).slice(-2),"YYYY":this.$y,"M":f+1,"MM":N.s(f+1,2,"0"),"MMM":C(i.monthsShort,f,b,3),"MMMM":C(b,f),"D":this.$D,"DD":N.s(this.$D,2,"0"),"d":String(this.$W),"dd":C(i.weekdaysMin,this.$W,g,2),"ddd":C(i.weekdaysShort,this.$W,g,3),"dddd":g[this.$W],"H":String(s),"HH":N.s(s,2,"0"),"h":O(1),"hh":O(2),"a":y(s,c,!0),"A":y(s,c,!1),"m":String(c),"mm":N.s(c,2,"0"),"s":String(this.$s),"ss":N.s(this.$s,2,"0"),"SSS":N.s(this.$ms,3,"0"),"Z":o};return r.replace(S,(function(e,n){return n||_[e]||o.replace(":","")}))},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,s,C){var O,S=N.p(s),y=T(e),_=6e4*(y.utcOffset()-this.utcOffset()),E=this-y,k=N.m(this,y);return k=(O={},O[b]=k/12,O[f]=k,O[g]=k/3,O[c]=(E-_)/6048e5,O[i]=(E-_)/864e5,O[o]=E/36e5,O[r]=E/6e4,O[n]=E/1e3,O)[S]||E,C?k:N.a(k)},s.daysInMonth=function(){return this.endOf(f).$D},s.$locale=function(){return I[this.$L]},s.locale=function(e,n){if(!e)return this.$L;var r=this.clone(),o=x(e,n,!0);return o&&(r.$L=o),r},s.clone=function(){return N.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},d}(),R=j.prototype;return T.prototype=R,[["$ms",e],["$s",n],["$m",r],["$H",o],["$W",i],["$M",f],["$y",b],["$D",C]].forEach((function(e){R[e[1]]=function(n){return this.$g(n,e[0],e[1])}})),T.extend=function(e,n){return e.$i||(e(n,j,T),e.$i=!0),T},T.locale=x,T.isDayjs=w,T.unix=function(e){return T(1e3*e)},T.en=I[k],T.Ls=I,T.p={},T}))},"203":function(e,n,r){"use strict";var o,i;r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return i})),function(e){e.FONT_SIZE="fontSize",e.BOLD="bold",e.ITALIC="italic",e.COLOR="color",e.DIRECTION="direction",e.BACKGROUND_COLOR="backgroundColor",e.ALIGN_LEFT="align-left",e.ALIGN_RIGHT="align-right",e.ALIGN_CENTER="align-center",e.ALIGN_JUSTIFY="align-justify",e.HEADER_1="header-1",e.HEADER_2="header-2",e.HEADER_3="header-3",e.HEADER_4="header-4",e.INDENT="indent",e.OUTDENT="outdent",e.LETTER_SPACING="letterSpacing",e.LINE_HEIGHT="lineHeight",e.SCRIPT_SUB="script-sub",e.SCRIPT_SUPER="script-super",e.STRIKE="strike",e.UNDER_LINE="underline",e.LIST_ORDERED="list-ordered",e.LIST_BULLET="list-bullet",e.LIST_CHECK="list-check",e.MARGIN_BOTTOM="marginBottom",e.MARGIN_TOP="marginTop",e.DATE="date",e.INSERT_DIVIDER="insertDivider",e.INSERT_IMAGE="insertImage",e.RE_DO="redo",e.UN_DO="undo",e.REMOVE_FORMAT="removeFormat",e.CLEAR="clear",e.FULL_SCREEN="fullScreen"}(o||(o={})),function(e){e.color="y-font-color",e.backgroundColor="y-background-color"}(i||(i={}))},"237":function(e,n,r){"use strict";r.d(n,"a",(function(){return o}));var o="y-upload"},"245":function(e,n,r){"use strict";r.d(n,"a",(function(){return upload}));var o=r(17),i=r.n(o),s=r(21),c=r(22),f=r(8),g=r(9),b=r(1),C=new(function(){function HttpUtil(){Object(f.a)(this,HttpUtil),Object(b.a)(this,"showLoadingRequestCount",0)}return Object(g.a)(HttpUtil,[{"key":"request","value":function request(e){var n=this;return new Promise((function(r,o){e.header||(e.header={}),e.showLoading&&(n.showLoadingRequestCount<1&&Object(c.showLoading)({"title":"加载中..."}),n.showLoadingRequestCount++),Object(c.request)({"url":e.url,"data":e.data,"header":e.header,"method":e.method||"GET","dataType":"json","responseType":"text","success":function success(i){switch(i=i.data,e.showLoading&&(n.showLoadingRequestCount--,n.showLoadingRequestCount<1&&Object(c.hideLoading)()),i.code){case 200:return r(i);case 201:return o(i);default:e.showErrorToast&&Object(c.showToast)({"title":i.msg,"icon":"none"})}return o(i)},"fail":function fail(r){return e.showLoading&&n.showLoadingRequestCount--,n.showLoadingRequestCount<=0&&Object(c.hideLoading)(),o(r)}})}))}}]),HttpUtil}());function getSignature(e,n){return function postJson(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return C.request({"url":e,"data":n,"method":"POST","showLoading":r,"showErrorToast":o,"header":i})}(e,n)}function upload(e,n){return _upload.apply(this,arguments)}function _upload(){return(_upload=Object(s.a)(i.a.mark((function _callee(e,n){var r,o,s,f,g;return i.a.wrap((function _callee$(i){for(;;)switch(i.prev=i.next){case 0:return r=(new Date).toUTCString(),o={"save-key":n.remotePath,"bucket":e.bucket,"expiration":Math.round((new Date).getTime()/1e3)+3600,"date":r},s=O.encode(JSON.stringify(o)),f=["POST","/"+e.bucket,r,s].join("&"),i.next=6,getSignature(e.getSignatureUrl,{"filePath":f});case 6:return g=i.sent,i.abrupt("return",new Promise((function(r,o){Object(c.uploadFile)({"url":"https://v0.api.upyun.com/".concat(e.bucket),"filePath":n.localPath,"name":"file","formData":{"authorization":"UPYUN ".concat(e.operator,":").concat(g.signature),"policy":s},"success":function success(e){r(e)},"fail":function fail(e){o(e)}})})));case 8:case"end":return i.stop()}}),_callee)})))).apply(this,arguments)}var O={"_keyStr":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=","encode":function encode(e){var n,r,o,i,s,c,f,g="",b=0;for(e=O._utf8_encode(e);b<e.length;)i=(n=e.charCodeAt(b++))>>2,s=(3&n)<<4|(r=e.charCodeAt(b++))>>4,c=(15&r)<<2|(o=e.charCodeAt(b++))>>6,f=63&o,isNaN(r)?c=f=64:isNaN(o)&&(f=64),g=g+this._keyStr.charAt(i)+this._keyStr.charAt(s)+this._keyStr.charAt(c)+this._keyStr.charAt(f);return g},"decode":function decode(e){var n,r,o,i,s,c,f="",g=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");g<e.length;)n=this._keyStr.indexOf(e.charAt(g++))<<2|(i=this._keyStr.indexOf(e.charAt(g++)))>>4,r=(15&i)<<4|(s=this._keyStr.indexOf(e.charAt(g++)))>>2,o=(3&s)<<6|(c=this._keyStr.indexOf(e.charAt(g++))),f+=String.fromCharCode(n),64!=s&&(f+=String.fromCharCode(r)),64!=c&&(f+=String.fromCharCode(o));return f=O._utf8_decode(f)},"_utf8_encode":function _utf8_encode(e){e=e.replace(/\r\n/g,"\n");for(var n="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?n+=String.fromCharCode(o):o>127&&o<2048?(n+=String.fromCharCode(o>>6|192),n+=String.fromCharCode(63&o|128)):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128),n+=String.fromCharCode(63&o|128))}return n},"_utf8_decode":function _utf8_decode(e){for(var n="",r=0,o=0,i=0;r<e.length;)if((o=e.charCodeAt(r))<128)n+=String.fromCharCode(o),r++;else if(o>191&&o<224)i=e.charCodeAt(r+1),n+=String.fromCharCode((31&o)<<6|63&i),r+=2;else{i=e.charCodeAt(r+1);var s=e.charCodeAt(r+2);n+=String.fromCharCode((15&o)<<12|(63&i)<<6|63&s),r+=3}return n}}},"254":function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return s}));var o=r(203),i={"fontFamily":{"name":"fontFamily","value":"Pacifico"},"fontSize":{"name":"fontSize","value":"24px"},"bold":{"name":"bold","value":""},"italic":{"name":"italic","value":""},"color":{"name":"color","value":"#0000ff"},"direction":{"name":"direction","value":"rtl"},"backgroundColor":{"name":"backgroundColor","value":"#00ff00"},"align-left":{"name":"align","value":"left"},"align-right":{"name":"align","value":"right"},"align-center":{"name":"align","value":"center"},"align-justify":{"name":"align","value":"justify"},"header-1":{"name":"header","value":1},"header-2":{"name":"header","value":2},"header-3":{"name":"header","value":3},"header-4":{"name":"header","value":4},"indent":{"name":"indent","value":"+1"},"outdent":{"name":"indent","value":"-1"},"letterSpacing":{"name":"letterSpacing","value":"2em"},"lineHeight":{"name":"lineHeight","value":"2"},"script-sub":{"name":"script","value":"sub"},"script-super":{"name":"script","value":"super"},"strike":{"name":"strike","value":""},"underline":{"name":"underline","value":""},"list-ordered":{"name":"list","value":"ordered"},"list-bullet":{"name":"list","value":"bullet"},"list-check":{"name":"list","value":"unchecked"},"marginBottom":{"name":"marginBottom","value":"20px"},"marginTop":{"name":"marginTop","value":"20px"},"date":{"name":"click","value":"date"},"insertDivider":{"name":"click","value":"insertDivider"},"insertImage":{"name":"click","value":"insertImage"},"redo":{"name":"click","value":"redo"},"undo":{"name":"click","value":"undo"},"removeFormat":{"name":"click","value":"removeFormat"},"clear":{"name":"click","value":"clear"},"fullScreen":{"name":"click","value":"fullScreen"}},s=[o.b.ALIGN_LEFT,o.b.ALIGN_CENTER,o.b.ALIGN_RIGHT,o.b.ALIGN_JUSTIFY,o.b.HEADER_1,o.b.HEADER_2,o.b.HEADER_3,o.b.HEADER_4,o.b.SCRIPT_SUB,o.b.SCRIPT_SUPER,o.b.LIST_ORDERED,o.b.LIST_BULLET,o.b.LIST_CHECK]},"538":function(e,n,r){var o=r(35),i=r(539);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var s={"insert":"head","singleton":!1},c=(o(i,s),i.locals?i.locals:{});e.exports=c},"539":function(e,n,r){(n=r(36)(!1)).push([e.i,"page {\n  font-size: 0.59733rem;\n}\n\n@media screen and (min-width: 480px) {\n  page {\n    font-size: 12PX;\n  }\n}\n.y-editor {\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border: 1PX solid #EBEBEB;\n}\n\n.toolbar {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0.21333rem 0;\n  border-bottom: 1PX solid #EBEBEB;\n}\n.toolbar .tool-item {\n  margin: 0.21333rem 0;\n  width: 11.11111%;\n}\n.toolbar .tool-item-list-check {\n  padding-top: 0.10667rem;\n}\n.toolbar .img_icon {\n  display: block;\n  margin: 0 auto;\n  width: 0.85333rem;\n  height: 0.85333rem;\n}\n\n.ql-container {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0.256rem 0.32rem;\n  width: 100%;\n  min-height: 50vh;\n  height: 100%;\n  background: #fff;\n  font-size: 0.59733rem;\n  line-height: 1.5;\n}\n\n@media screen and (min-width: 480px) {\n  .toolbar {\n    padding: 5PX 0;\n  }\n  .toolbar .tool-item {\n    margin: 5PX 0;\n  }\n  .toolbar .tool-item-list-check {\n    padding-top: 2PX;\n  }\n  .toolbar .img_icon {\n    width: 20PX;\n    height: 20PX;\n  }\n\n  .ql-container {\n    padding: 6PX 7PX;\n    font-size: 14PX;\n  }\n}",""]),e.exports=n},"728":function(e,n,r){"use strict";r.r(n);var o=r(12);var i=r(17),s=r.n(i),c=r(21),f=r(8),g=r(9),b=r(1),C=r(3),O=r(22),S=r(203),y=(r(538),r(245)),_=r(237),E=r(254),k=r(165),I=r.n(k),w=function(){function EditorService(e,n){Object(f.a)(this,EditorService),Object(b.a)(this,"context",void 0),Object(b.a)(this,"props",void 0),Object(b.a)(this,"baseImgUrl","https://yyres.bcadx.com/assets/img/editor_icon/"),Object(b.a)(this,"formats",Object(C.j)({})),Object(b.a)(this,"editorCtx",null),Object(b.a)(this,"customComponentName",""),Object(b.a)(this,"color",Object(C.j)("")),Object(b.a)(this,"uploadProperties",void 0),this.props=e,this.context=n,this.uploadProperties=Object(o.q)(_.a)}var e,n;return Object(g.a)(EditorService,[{"key":"toInsertDate","value":function toInsertDate(){var e=new Date,n="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate());this.editorCtx.insertText({"text":n})}},{"key":"toInsertImage","value":(n=Object(c.a)(s.a.mark((function _callee(){var e,n,r,o,i,c,f,g,b;return s.a.wrap((function _callee$(s){for(;;)switch(s.prev=s.next){case 0:if(this.uploadProperties){s.next=2;break}throw new Error("使用上传图片必须先provide uploadKey");case 2:return s.next=4,Object(O.chooseImage)({"count":10,"sizeType":["original","compressed"],"sourceType":["album","camera"]});case 4:if("chooseImage:ok"===(e=s.sent).errMsg){s.next=7;break}return s.abrupt("return");case 7:n=0;case 8:if(!(n<e.tempFilePaths.length)){s.next=33;break}return r=e.tempFilePaths[n],s.next=12,Object(O.getFileInfo)({"filePath":r});case 12:if("getFileInfo:ok"===(o=s.sent).errMsg){s.next=15;break}return s.abrupt("continue",30);case 15:return i=r.replace(/.+\./,""),c="upload/".concat(I()().format("YYYY-MM-DD"),"/").concat(o.digest,".").concat(i),s.next=19,Object(y.a)(this.uploadProperties,{"localPath":r,"remotePath":c});case 19:if("uploadFile:ok"!==(f=s.sent).errMsg){s.next=29;break}return g=JSON.parse(f.data),b="https://".concat(this.uploadProperties.domain,"/").concat(g.url),s.next=25,this.editorCtx.insertImage({"src":b,"width":"100%"});case 25:"ok"!==s.sent.errMsg&&Object(O.showToast)({"title":"请稍后重新插入","icon":"none"}),s.next=30;break;case 29:Object(O.showToast)({"title":"请稍后重新插入","icon":"none"});case 30:n++,s.next=8;break;case 33:case"end":return s.stop()}}),_callee,this)}))),function toInsertImage(){return n.apply(this,arguments)})},{"key":"onClickToolBar","value":function onClickToolBar(e){var n=e.target.dataset,r=n.name,o=n.value;if(r)if(console.log("name:",r,o),"click"===r)switch(o){case S.b.DATE:this.toInsertDate();break;case S.b.INSERT_DIVIDER:this.editorCtx.insertDivider();break;case S.b.INSERT_IMAGE:this.toInsertImage();break;case S.b.RE_DO:this.editorCtx.redo();break;case S.b.UN_DO:this.editorCtx.undo();break;case S.b.REMOVE_FORMAT:this.editorCtx.removeFormat();break;case S.b.CLEAR:this.editorCtx.clear();break;case S.b.FULL_SCREEN:}else this.editorCtx.format(r,o)}},{"key":"onEditorReady","value":function onEditorReady(){var e=this;Object(O.createSelectorQuery)().select("#editor").context((function(n){e.editorCtx=n.context})).exec((function(){e.editorCtx.setContents({"html":e.props.modelValue})}))}},{"key":"onStatusChange","value":function onStatusChange(e){console.log(e.detail),this.formats.value=e.detail}},{"key":"onBlurEditor","value":(e=Object(c.a)(s.a.mark((function _callee2(){var e;return s.a.wrap((function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.editorCtx.getContents();case 2:e=n.sent,console.log(e.html),"ok"===e.errMsg&&this.context.emit("update:modelValue",e.html);case 5:case"end":return n.stop()}}),_callee2,this)}))),function onBlurEditor(){return e.apply(this,arguments)})},{"key":"onCatchGetComponentName","value":function onCatchGetComponentName(e){this.customComponentName=e}},{"key":"onCatchClearColor","value":function onCatchClearColor(e){var n=e===S.b.COLOR?"#000000":"transparent";this.editorCtx.format(E.a[e].name,n)}}]),EditorService}(),x=Object(o.m)({"name":"y-editor","props":{"modelValue":{"type":String,"default":""},"options":{"type":Object,"default":{"placeholder":"","toolList":[],"readOnly":!1}}},"emits":["update:modelValue"],"components":{"y-font-color":Object(o.l)((function(){return r.e(156).then(r.bind(null,733))})),"y-background-color":Object(o.l)((function(){return r.e(155).then(r.bind(null,734))}))},"setup":function setup(e,n){var r=new w(e,n);return Object(o.G)((function(){return r.color.value}),(function(e){var n=r.customComponentName===S.b.COLOR&&"transparent"===e?"#000000":e;r.editorCtx.format(r.customComponentName,n)})),{"SameFormatNameImgList":E.b,"ImgElNameAndValue":E.a,"YEditorComponentName":S.a,"baseImgUrl":r.baseImgUrl,"formats":r.formats,"color":r.color,"customImgNameList":[S.b.COLOR,S.b.BACKGROUND_COLOR],"onClickToolBar":r.onClickToolBar.bind(r),"onEditorReady":r.onEditorReady.bind(r),"onStatusChange":r.onStatusChange.bind(r),"onBlurEditor":r.onBlurEditor.bind(r),"onCatchGetComponentName":r.onCatchGetComponentName.bind(r),"onCatchClearColor":r.onCatchClearColor.bind(r)}}});x.render=function render(e,n,r,i,s,c){var f=Object(o.z)("taro-image"),g=Object(o.z)("taro-view"),b=Object(o.z)("taro-editor");return Object(o.v)(),Object(o.f)(g,{"class":"y-editor"},{"default":Object(o.I)((function(){return[Object(o.k)(g,{"class":"toolbar","onTap":e.onClickToolBar},{"default":Object(o.I)((function(){return[(Object(o.v)(!0),Object(o.f)(o.b,null,Object(o.x)(e.options.toolList,(function(r,i){return Object(o.v)(),Object(o.f)(g,{"class":["tool-item","tool-item-".concat(r)],"key":"img-item-".concat(i)},{"default":Object(o.I)((function(){return[e.customImgNameList.includes(r)?(Object(o.v)(),Object(o.f)(Object(o.B)(e.YEditorComponentName[r]),{"key":0,"modelValue":e.color,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.color=n}),"name":e.ImgElNameAndValue[r].name,"formats":e.formats,"onGetName":e.onCatchGetComponentName,"onClear":e.onCatchClearColor},null,8,["modelValue","name","formats","onGetName","onClear"])):(Object(o.v)(),Object(o.f)(f,{"key":1,"class":"img_icon","mode":"aspectFit","src":"".concat(e.baseImgUrl).concat(e.SameFormatNameImgList.includes(r)&&e.formats[e.ImgElNameAndValue[r].name]===e.ImgElNameAndValue[r].value||!e.SameFormatNameImgList.includes(r)&&e.formats[e.ImgElNameAndValue[r].name]?"select/"+r+"_select":r,".svg?"),"data-name":e.ImgElNameAndValue[r].name,"data-value":e.ImgElNameAndValue[r].value},null,8,["src","data-name","data-value"]))]})),"_":2},1032,["class"])})),128))]})),"_":1},8,["onTap"]),Object(o.k)(b,{"id":"editor","class":"ql-container","placeholder":e.options.placeholder,"showImgSize":"","showImgToolbar":"","showImgResize":"","onStatuschange":e.onStatusChange,"read-only":e.options.readOnly,"onReady":e.onEditorReady,"onBlur":e.onBlurEditor},null,8,["placeholder","onStatuschange","read-only","onReady","onBlur"])]})),"_":1})};n.default=x}}]);