(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{"321":function(n,e,t){var o=t(35),u=t(322);"string"==typeof(u=u.__esModule?u.default:u)&&(u=[[n.i,u,""]]);var c={"insert":"head","singleton":!1},r=(o(u,c),u.locals?u.locals:{});n.exports=r},"322":function(n,e,t){(e=t(36)(!1)).push([n.i,".container {\n  padding: 0.85333rem;\n}\n.container .counter-box {\n  width: 6.4rem;\n}",""]),n.exports=e},"662":function(n,e,t){"use strict";t.r(e);var o=t(12);var u=t(8),c=t(9),r=t(1),i=t(3),a=(t(321),function(){function InputNumberService(){Object(u.a)(this,InputNumberService),Object(r.a)(this,"count",Object(i.j)(4)),Object(r.a)(this,"options",Object(i.j)({"maxCount":10,"minCount":1}))}return Object(c.a)(InputNumberService,[{"key":"onCatchChangeNumber","value":function onCatchChangeNumber(n){console.log("添加的数字",n)}}]),InputNumberService}()),b=Object(o.m)({"components":{"y-input-number":Object(o.l)((function(){return t.e(41).then(t.bind(null,703))}))},"setup":function setup(){var n=new a;return{"count":n.count,"options":n.options,"onCatchChangeNumber":n.onCatchChangeNumber.bind(n)}}});b.render=function render(n,e){var t=Object(o.z)("y-input-number"),u=Object(o.z)("taro-view"),c=Object(o.A)("reSize");return Object(o.J)((Object(o.v)(),Object(o.f)(u,{"id":"container","class":"container"},{"default":Object(o.I)((function(){return[Object(o.k)(t,{"modelValue":n.count,"onUpdate:modelValue":e[1]||(e[1]=function(e){return n.count=e}),"options":n.options,"onOnChange":n.onCatchChangeNumber},null,8,["modelValue","options","onOnChange"])]})),"_":1},512)),[[c]])};e.default=b}}]);