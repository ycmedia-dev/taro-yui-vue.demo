(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{"479":function(n,e,t){var i=t(35),r=t(480);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var o={"insert":"head","singleton":!1},s=(i(r,o),r.locals?r.locals:{});n.exports=s},"480":function(n,e,t){(e=t(36)(!1)).push([n.i,'page {\n  font-size: 0.59733rem;\n}\n\n@media screen and (min-width: 480px) {\n  page {\n    font-size: 12PX;\n  }\n}\n.y-section {\n  background: #fff;\n  border-top: 0.34133rem solid #f2f4f6;\n}\n.y-section .label {\n  padding: 0 0.512rem;\n  font-size: 0.68267rem;\n  font-weight: bold;\n  height: 2.048rem;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1PX solid #f2f4f6;\n  position: relative;\n  padding-left: 0.512rem;\n  color: #000;\n  text-indent: 0.42667rem;\n}\n.y-section .label:before {\n  margin: 0 0.512rem;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 0.21333rem;\n  height: 0.85333rem;\n  background: #1890FF;\n}\n.y-section .label.require::before {\n  background: none;\n  text-indent: 0;\n  content: "*";\n  color: #f56c6c;\n  margin-right: 0.08533rem;\n}\n.y-section .label .tip {\n  color: #666;\n}\n.y-section-content {\n  font-size: 0.59733rem;\n  padding: 0.512rem;\n}\n.y-section .r {\n  font-weight: normal;\n  height: 100%;\n}\n\n@media screen and (min-width: 480px) {\n  .y-section {\n    border-top: 8PX solid #f2f4f6;\n  }\n  .y-section .label {\n    padding: 0 12PX;\n    font-size: 14PX;\n    height: 48PX;\n    padding-left: 12PX;\n    color: #000;\n    text-indent: 10PX;\n  }\n  .y-section .label:before {\n    margin: 0 12PX;\n    -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n            transform: translateY(-50%);\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 50%;\n    width: 0.10667rem;\n    height: 0.42667rem;\n    background: #1890FF;\n  }\n  .y-section .label.require::before {\n    margin-right: 2PX;\n  }\n  .y-section-content {\n    font-size: 12PX;\n    padding: 12PX;\n  }\n}',""]),n.exports=e},"713":function(n,e,t){"use strict";t.r(e);var i=t(12),r=t(0);var o=t(8),s=(t(479),function SectionService(){Object(o.a)(this,SectionService)}),c=Object(i.m)({"name":"y-section","props":{"title":{"type":String,"default":""},"tip":{"type":String,"default":""},"required":{"type":Boolean,"default":!1}},"setup":function setup(n,e){var t=e.slots;new s;return{"slots":t}}});c.render=function render(n,e,t,o,s,c){var a=Object(i.z)("taro-text"),l=Object(i.z)("taro-view");return Object(i.v)(),Object(i.f)(l,{"class":"y-section"},{"default":Object(i.I)((function(){return[Object(i.k)(l,{"class":["label",{"require":n.required}]},{"default":Object(i.I)((function(){return[Object(i.k)(l,null,{"default":Object(i.I)((function(){return[Object(i.j)(Object(r.J)(n.title)+" ",1),n.tip?(Object(i.v)(),Object(i.f)(a,{"key":0,"class":"tip"},{"default":Object(i.I)((function(){return[Object(i.j)("（"+Object(r.J)(n.tip)+"）",1)]})),"_":1})):Object(i.g)("",!0)]})),"_":1}),Object(i.k)(l,{"class":"r"},{"default":Object(i.I)((function(){return[Object(i.y)(n.$slots,"title-right")]})),"_":3})]})),"_":1},8,["class"]),n.slots.default?(Object(i.v)(),Object(i.f)(l,{"key":0,"class":"y-section-content"},{"default":Object(i.I)((function(){return[Object(i.y)(n.$slots,"default")]})),"_":3})):Object(i.g)("",!0)]})),"_":1})};e.default=c}}]);