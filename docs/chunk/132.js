(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{"305":function(n,e,t){var i=t(35),c=t(306);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[n.i,c,""]]);var r={"insert":"head","singleton":!1},o=(i(c,r),c.locals?c.locals:{});n.exports=o},"306":function(n,e,t){(e=t(36)(!1)).push([n.i,".container {\n  height: 6.4rem;\n}\n.container .img-button {\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 0.21333rem;\n  width: 0.64rem;\n  height: 0.64rem;\n}",""]),n.exports=e},"654":function(n,e,t){"use strict";t.r(e);var i=t(12);var c=t(8),r=t(9),o=(t(305),function(){function FixedButtonService(){Object(c.a)(this,FixedButtonService)}return Object(r.a)(FixedButtonService,[{"key":"onClick","value":function onClick(n){alert("".concat(0===n.index?"取消":"确定","事件"))}}]),FixedButtonService}()),l=Object(i.m)({"components":{"y-fixed-button":Object(i.l)((function(){return t.e(1).then(t.bind(null,614))})),"y-page-container":Object(i.l)((function(){return t.e(4).then(t.bind(null,701))}))},"setup":function setup(){var n=new o;return{"btnLabelList":["取消","确定"],"onClick":n.onClick.bind(n)}}});l.render=function render(n,e,t,c,r,o){var l=Object(i.z)("y-fixed-button"),a=Object(i.z)("y-page-container"),u=Object(i.z)("taro-view"),b=Object(i.A)("reSize");return Object(i.J)((Object(i.v)(),Object(i.f)(u,{"id":"container","class":"container"},{"default":Object(i.I)((function(){return[Object(i.k)(a,null,{"bottom":Object(i.I)((function(){return[Object(i.k)(l,{"btnLabelList":n.btnLabelList,"onClick":n.onClick},null,8,["btnLabelList","onClick"])]})),"_":1})]})),"_":1},512)),[[b]])};e.default=l}}]);