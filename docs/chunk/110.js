(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"546":function(e,t,o){var n=o(35),r=o(547);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var c={"insert":"head","singleton":!1},l=(n(r,c),r.locals?r.locals:{});e.exports=l},"547":function(e,t,o){(t=o(36)(!1)).push([e.i,"",""]),e.exports=t},"730":function(e,t,o){"use strict";o.r(t);var n=o(12);var r=o(8),c=o(1),l=(o(546),o(3)),a=o(171),u=function BackgroundColorService(e,t){Object(r.a)(this,BackgroundColorService),Object(c.a)(this,"context",void 0),Object(c.a)(this,"color",Object(l.j)("")),this.context=t,this.color.value=e.modelValue},i=Object(n.m)({"props":{"modelValue":{"type":String,"default":""},"name":{"type":String,"default":""},"formats":{"type":Object,"default":{}}},"emits":["update:modelValue","getName"],"components":{"y-color":Object(n.l)((function(){return o.e(18).then(o.bind(null,608))}))},"setup":function setup(e,t){var o=new u(e,t);return Object(n.G)((function(){return o.color.value}),(function(t){o.context.emit("update:modelValue",t),o.context.emit("getName",e.name)})),{"YEditorImgElType":a.b,"color":o.color}}});i.render=function render(e,t,o,r,c,l){var a=Object(n.z)("y-color");return Object(n.v)(),Object(n.f)(a,{"modelValue":e.color,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.color=t}),"iconName":e.YEditorImgElType.BACKGROUND_COLOR,"formats":e.formats},null,8,["modelValue","iconName","formats"])};t.default=i}}]);