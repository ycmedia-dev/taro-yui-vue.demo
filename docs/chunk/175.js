(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{"129":function(t,e,i){"use strict";i.r(e),i.d(e,"taro_audio_core",(function(){return r}));var n=i(8),o=i(9),d=i(37),r=function(){function Audio(t){Object(n.a)(this,Audio),Object(d.g)(this,t),this.onError=Object(d.c)(this,"error",7),this.onPlay=Object(d.c)(this,"play",7),this.onPause=Object(d.c)(this,"pause",7),this.onTimeUpdate=Object(d.c)(this,"timeupdate",7),this.onEnded=Object(d.c)(this,"ended",7),this.controls=!0,this.autoplay=!1,this.loop=!1,this.muted=!1}return Object(o.a)(Audio,[{"key":"bindevent","value":function bindevent(){var t=this;this.audio.addEventListener("timeupdate",(function(e){t.onTimeUpdate.emit({"duration":e.srcElement.duration,"currentTime":e.srcElement.duration})})),this.audio.addEventListener("ended",(function(){t.onEnded.emit()})),this.audio.addEventListener("play",(function(){t.onPlay.emit()})),this.audio.addEventListener("pause",(function(e){t.onPause.emit(e)})),this.audio.addEventListener("error",(function(e){var i;t.onError.emit({"errMsg":null===(i=e.srcElement.error)||void 0===i?void 0:i.code})}))}},{"key":"componentDidLoad","value":function componentDidLoad(){this.bindevent()}},{"key":"render","value":function render(){var t=this,e=this.src,i=this.controls,n=this.autoplay,o=this.loop,r=this.muted;return Object(d.e)("audio",{"src":e,"controls":i,"autoplay":n,"loop":o,"muted":r,"ref":function ref(e){t.audio=e}})}}]),Audio}();r.style="audio{max-width:100%;outline:none}"}}]);