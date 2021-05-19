/*! For license information please see 163.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{"140":function(t,i,e){"use strict";e.r(i),e.d(i,"taro_image_core",(function(){return h}));var o=e(1),r=e(8),a=e(9),n=e(37),s=e(167);e.e(173).then(e.t.bind(null,485,7));var h=function(){function Image(t){Object(r.a)(this,Image),Object(n.g)(this,t),this.onLoad=Object(n.c)(this,"load",7),this.onError=Object(n.c)(this,"error",7),this.mode="scaleToFill",this.lazyLoad=!1,this.aspectFillMode="width"}return Object(a.a)(Image,[{"key":"componentDidLoad","value":function componentDidLoad(){var t=this;if(this.lazyLoad){var i=new IntersectionObserver((function(e){e[e.length-1].isIntersecting&&(i.unobserve(t.imgRef),t.imgRef.src=t.src)}),{"rootMargin":"300px 0px"});i.observe(this.imgRef)}}},{"key":"imageOnLoad","value":function imageOnLoad(){var t=this.imgRef,i=t.width,e=t.height,o=t.naturalWidth,r=t.naturalHeight;this.onLoad.emit({"width":i,"height":e}),this.aspectFillMode=o>r?"width":"height"}},{"key":"imageOnError","value":function imageOnError(){this.onError.emit()}},{"key":"render","value":function render(){var t=this,i=this.src,e=this.mode,r=this.lazyLoad,a=this.aspectFillMode,h=this.imageOnLoad,m=this.imageOnError,c=Object(s.a)({"taro-img__widthfix":"widthFix"===e}),l=Object(s.a)("taro-img__mode-".concat(e.toLowerCase().replace(/\s/g,"")),Object(o.a)({},"taro-img__mode-aspectfill--".concat(a),"aspectFill"===e));return Object(n.e)(n.a,{"class":c},r?Object(n.e)("img",{"ref":function ref(i){return t.imgRef=i},"class":l,"onLoad":h.bind(this),"onError":m.bind(this)}):Object(n.e)("img",{"ref":function ref(i){return t.imgRef=i},"class":l,"src":i,"onLoad":h.bind(this),"onError":m.bind(this)}))}}]),Image}();h.style='img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;font-size:0;width:320px;height:240px}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-widthfix{width:100%}.taro-img__mode-top{width:100%}.taro-img__mode-bottom{width:100%;position:absolute;bottom:0}.taro-img__mode-left{height:100%}.taro-img__mode-right{position:absolute;height:100%;right:0}.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'},"167":function(t,i,e){"use strict";e.d(i,"a",(function(){return r}));var o=e(5);var r=function createCommonjsModule(t,i,e){return t(e={"path":i,"exports":{},"require":function require(t,i){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}((function(t){!function(){var i={}.hasOwnProperty;function classNames(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=Object(o.a)(r);if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var n=classNames.apply(null,r);n&&t.push(n)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)i.call(r,s)&&r[s]&&t.push(s);else t.push(r.toString())}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}))}}]);