(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"10ab":function(t,e,a){"use strict";var n=a("6fea"),r=a.n(n);r.a},"16a5":function(t,e,a){},"1d15":function(t,e,a){"use strict";var n=a("f09e"),r=a.n(n);r.a},"2c69":function(t,e,a){"use strict";var n=a("6c55"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("dashboard")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"dashboard-bg-image"}),a("div",{style:t.marginStyle},[a("div",{staticStyle:{position:"relative"}},[a("div",{staticClass:"dashboard-container",staticStyle:{width:"1920px",height:"1080px"},style:t.transformStyle},[a("top-title",{attrs:{title:t.title},on:{"update:title":function(e){t.title=e}}}),a("dashboard1"),a("dashboard2"),a("dashboard3"),a("dashboard4")],1)])])])])},o=[],c=(a("c5f6"),a("a481"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",{staticClass:"left-z"}),t._v(t._s(t.title)+" "),a("span",{staticClass:"right-z"})])}),l=[],u={name:"TopTitle",props:["title"]},d=u,f=(a("10ab"),a("2877")),h=Object(f["a"])(d,c,l,!1,null,"11439d96",null),p=h.exports;function v(t,e){return t&&t.currentStyle?t.currentStyle[e]:window.getComputedStyle?window.getComputedStyle(t,void 0).getPropertyValue(e):t.style[e]}var b=a("2ef0"),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-item dashboard1"},[a("div",{staticClass:"chart-item"},[a("div",{staticClass:"arrow-top-left"}),a("div",{staticClass:"arrow-top-right"})])])}],y={name:"Dashboard1"},g=y,w=(a("ef08"),Object(f["a"])(g,m,_,!1,null,"70f01781",null)),C=w.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-item dashboard2"},[a("div",{staticClass:"dashboard-top"},[a("div",{staticClass:"dashboard-top-title"},[t._v("dashboard2")])]),a("div",{staticClass:"chart-item"},[a("div",{staticClass:"arrow-top-right"})])])}],S={name:"Dashboard2"},j=S,E=(a("2c69"),Object(f["a"])(j,x,O,!1,null,"0ea20421",null)),$=E.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-item dashboard3"},[a("div",{staticClass:"dashboard-top"},[a("div",{staticClass:"dashboard-top-title"},[t._v("dashboard3")])]),a("div",{staticClass:"chart-item"},[a("div",{staticClass:"arrow-top-right"})])])}],P={name:"Dashboard3"},T=P,N=(a("5ee4"),Object(f["a"])(T,D,z,!1,null,"94e5679c",null)),k=N.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-item dashboard4"},[a("div",{staticClass:"dashboard-top"},[a("div",{staticClass:"dashboard-top-title"},[t._v("dashboard4")])]),a("div",{staticClass:"chart-item"},[a("div",{staticClass:"arrow-top-right"})])])}],I={name:"Dashboard4"},X=I,Y=(a("1d15"),Object(f["a"])(X,M,H,!1,null,"aa76ca94",null)),J=Y.exports,L={name:"Dashboard",timeInterval:null,timeInterval1:null,timeInterval2:null,timeInterval3:null,websocket:null,websocketMsgList:[],data:function(){return{scaleX:1,scaleY:1,marginHorizontal:0,title:"这是标题"}},components:{TopTitle:p,Dashboard1:C,Dashboard2:$,Dashboard3:k,Dashboard4:J},created:function(){},mounted:function(){this.init()},computed:{transformStyle:function(){return{transform:"scale(".concat(this.scaleX,", ").concat(this.scaleY,")")}},marginStyle:function(){return{margin:"0px ".concat(this.marginHorizontal,"px")}}},watch:{},methods:{init:function(){this.listenResize()},initScale:function(){var t=document.querySelector(".container"),e=v(t,"width").replace("px",""),a=v(t,"height").replace("px","");e=Number(e),a=Number(a),e=isNaN(e)?0:e,a=isNaN(a)?0:a;var n=1080,r=1920,i=1;a<n&&(i=a/n),this.scaleX=i,this.scaleY=i;var s=r*i;this.marginHorizontal=0,e>s&&(s=(e-s)/2,this.marginHorizontal=s)},listenResize:function(){var t=this;this.initScale(),window.addEventListener("resize",Object(b["debounce"])((function(){t.initScale()}),300))}},destroyed:function(){}},R=L,q=(a("b985"),Object(f["a"])(R,s,o,!1,null,null,null)),A=q.exports,V={name:"App",components:{Dashboard:A}},B=V,F=(a("5c0b"),Object(f["a"])(B,r,i,!1,null,null,null)),G=F.exports;a("b20f");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(G)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("e332"),r=a.n(n);r.a},"5ee4":function(t,e,a){"use strict";var n=a("9ecd"),r=a.n(n);r.a},"6c55":function(t,e,a){},"6fea":function(t,e,a){},"9ecd":function(t,e,a){},a3c6:function(t,e,a){},b20f:function(t,e,a){},b985:function(t,e,a){"use strict";var n=a("16a5"),r=a.n(n);r.a},e332:function(t,e,a){},ef08:function(t,e,a){"use strict";var n=a("a3c6"),r=a.n(n);r.a},f09e:function(t,e,a){}});