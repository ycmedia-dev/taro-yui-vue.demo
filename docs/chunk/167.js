/*! For license information please see 167.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{"154":function(l,o,r){"use strict";r.r(o),r.d(o,"taro_scroll_view_core",(function(){return i}));var t=r(8),e=r(9),s=r(37),c=r(167);function easeOutScroll(l,o,r){if(l!==o&&"number"==typeof l){var t=o-l,e=Date.now(),s=o>=l;!function step(){l=function linear(l,o,r,t){return r*l/t+o}(Date.now()-e,l,t,500),s&&l>=o||!s&&o>=l?r(o):(r(l),requestAnimationFrame(step))}()}}var i=function(){function ScrollView(l){var o=this;Object(t.a)(this,ScrollView),Object(s.g)(this,l),this.onScroll=Object(s.c)(this,"scroll",7),this.onScrollToUpper=Object(s.c)(this,"scrolltoupper",7),this.onScrollToLower=Object(s.c)(this,"scrolltolower",7),this.scrollX=!1,this.scrollY=!1,this.upperThreshold=50,this.lowerThreshold=50,this.scrollWithAnimation=!1,this.handleScroll=function(l){if(!(l instanceof CustomEvent)){var r=o.el,t=r.scrollLeft,e=r.scrollTop,s=r.scrollHeight,c=r.scrollWidth;o._scrollLeft=t,o._scrollTop=e,o.uperAndLower(),o.onScroll.emit({"scrollLeft":t,"scrollTop":e,"scrollHeight":s,"scrollWidth":c})}},this.uperAndLower=function debounce(l,o){var r;return function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];clearTimeout(r),r=setTimeout((function(){l.apply(void 0,e)}),o)}}((function(){var l=o.el,r=l.offsetWidth,t=l.offsetHeight,e=l.scrollLeft,s=l.scrollTop,c=l.scrollHeight,i=l.scrollWidth,n=Number(o.lowerThreshold),a=Number(o.upperThreshold);!isNaN(n)&&(o.scrollY&&t+s+n>=c||o.scrollX&&r+e+n>=i)&&o.onScrollToLower.emit({"direction":o.scrollX?"right":o.scrollY?"bottom":""}),!isNaN(a)&&(o.scrollY&&s<=a||o.scrollX&&e<=a)&&o.onScrollToUpper.emit({"direction":o.scrollX?"left":o.scrollY?"top":""})}),200)}return Object(e.a)(ScrollView,[{"key":"watchScrollLeft","value":function watchScrollLeft(l){var o=this,r=Number(l);this.scrollX&&!isNaN(r)&&r!==this._scrollLeft&&(this.scrollWithAnimation?easeOutScroll(this._scrollLeft,r,(function(l){return o.el.scrollLeft=l})):this.el.scrollLeft=r,this._scrollLeft=r)}},{"key":"watchScrollTop","value":function watchScrollTop(l){var o=this,r=Number(l);this.scrollY&&!isNaN(r)&&r!==this._scrollTop&&(this.scrollWithAnimation?easeOutScroll(this._scrollTop,r,(function(l){return o.el.scrollTop=l})):this.el.scrollTop=r,this._scrollTop=r)}},{"key":"watchScrollIntoView","value":function watchScrollIntoView(l){var o;"string"==typeof l&&l&&(null===(o=document.querySelector("#".concat(l)))||void 0===o||o.scrollIntoView({"behavior":"smooth","block":"center","inline":"start"}))}},{"key":"componentDidLoad","value":function componentDidLoad(){var l=this,o=this.scrollY,r=this.scrollX,t=this.scrollWithAnimation,e=Number(this.mpScrollTop),s=Number(this.mpScrollLeft);o&&!isNaN(e)&&(t?easeOutScroll(0,e,(function(o){return l.el.scrollTop=o})):this.el.scrollTop=e,this._scrollTop=e),r&&!isNaN(s)&&(t?easeOutScroll(0,s,(function(o){return l.el.scrollLeft=o})):this.el.scrollLeft=s,this._scrollLeft=s)}},{"key":"render","value":function render(){var l=this.scrollX,o=this.scrollY,r=Object(c.a)({"taro-scroll-view__scroll-x":l,"taro-scroll-view__scroll-y":o});return Object(s.e)(s.a,{"class":r,"onScroll":this.handleScroll},Object(s.e)("slot",null))}},{"key":"el","get":function get(){return Object(s.d)(this)}}],[{"key":"watchers","get":function get(){return{"mpScrollLeft":["watchScrollLeft"],"mpScrollTop":["watchScrollTop"],"mpScrollIntoView":["watchScrollIntoView"]}}}]),ScrollView}();i.style="taro-scroll-view-core{display:block;width:100%;-webkit-overflow-scrolling:auto}taro-scroll-view-core::-webkit-scrollbar{display:none}.taro-scroll-view__scroll-x{overflow-x:scroll;overflow-y:hidden}.taro-scroll-view__scroll-y{overflow-x:hidden;overflow-y:scroll}"},"167":function(l,o,r){"use strict";r.d(o,"a",(function(){return e}));var t=r(5);var e=function createCommonjsModule(l,o,r){return l(r={"path":o,"exports":{},"require":function require(l,o){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}((function(l){!function(){var o={}.hasOwnProperty;function classNames(){for(var l=[],r=0;r<arguments.length;r++){var e=arguments[r];if(e){var s=Object(t.a)(e);if("string"===s||"number"===s)l.push(e);else if(Array.isArray(e)){if(e.length){var c=classNames.apply(null,e);c&&l.push(c)}}else if("object"===s)if(e.toString===Object.prototype.toString)for(var i in e)o.call(e,i)&&e[i]&&l.push(i);else l.push(e.toString())}}return l.join(" ")}l.exports?(classNames.default=classNames,l.exports=classNames):window.classNames=classNames}()}))}}]);