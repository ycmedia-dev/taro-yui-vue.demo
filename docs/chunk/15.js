(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"215":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c="CheckboxGroup"},"216":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var c="update:modelValue"},"467":function(e,n,t){var c=t(35),a=t(468);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var r={"insert":"head","singleton":!1},o=(c(a,r),a.locals?a.locals:{});e.exports=o},"468":function(e,n,t){(n=t(36)(!1)).push([e.i,"page {\n  font-size: 0.59733rem;\n}\n\n@media screen and (min-width: 480px) {\n  page {\n    font-size: 12PX;\n  }\n}\n.y-checkbox-group {\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n}",""]),e.exports=n},"707":function(e,n,t){"use strict";t.r(n);var c=t(12);var a=t(8),r=(t(467),t(215)),o=t(216),i=function YcCheckboxGroupService(e,n){Object(a.a)(this,YcCheckboxGroupService);var t=function changeEvent(e){n.emit(o.a,e),Object(c.s)((function(){n.emit("change",e)}))},i=Object(c.e)({"get":function get(){return e.modelValue},"set":function set(e){t(e)}});Object(c.w)(r.a,{"name":"y-checkbox-group","modelValue":i,"changeEvent":t})},u={"name":"y-checkbox-group","props":{"modelValue":{"type":Array,"default":[]}},"emits":[o.a,"change"],"setup":function setup(e,n){new i(e,n)},"render":function render(e,n,t,a,r,o){var i=Object(c.z)("taro-view");return Object(c.v)(),Object(c.f)(i,{"class":"y-checkbox-group"},{"default":Object(c.I)((function(){return[Object(c.y)(e.$slots,"default")]})),"_":3})}};n.default=u}}]);