(function(t){function e(e){for(var n,s,a=e[0],u=e[1],l=e[2],d=0,p=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},1223:function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("to-do-list",{attrs:{title:"Restaurant"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.ordering,expression:"ordering"}],attrs:{type:"text",placeholder:"Введіть свій заказ"},domProps:{value:t.ordering},on:{input:function(e){e.target.composing||(t.ordering=e.target.value)}}}),r("button",{attrs:{disabled:!t.isValid},on:{click:t.order}},[t._v(" Замовити ")]),r("div",{staticClass:"task-bar"},[r("to-do-item",{attrs:{title:"Замовлення для приготування",buttonText:"Приготовано",taskList:t.orders},on:{"on-task":t.toReadyOrders}}),r("to-do-item",{attrs:{title:"Готові замовлення",buttonText:"Віднесено",taskList:t.readyOrders},on:{"on-task":t.removeOrder}}),r("to-do-item",{attrs:{title:"Історія замовлень",taskList:t.history,isHistorySection:!0}})],1)])},a=[],u=(r("c975"),r("a434"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"component"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),r("hr"),t.taskList.length>0?r("div",{staticClass:"list "},t._l(t.taskList,(function(e,n){return r("div",{key:n,staticClass:"list-item"},[r("span",[t._v(t._s(e))]),t.isHistorySection?t._e():r("button",{on:{click:function(r){return t.$emit("on-task",e)}}},[t._v(" "+t._s(t.buttonText)+" ")])])})),0):t._e()])}),l=[],c={name:"TaskList",props:{title:{type:String,default:"title"},buttonText:{type:String,default:"ok"},taskList:{type:Array,default:function(){return[]}},isHistorySection:{type:Boolean,default:!1}}},d=c,p=(r("fcbf"),r("2877")),f=Object(p["a"])(d,u,l,!1,null,"1798ef1a",null),v=f.exports,h={name:"ToDoList",components:{ToDoItem:v},props:{title:{type:String,default:"title"}},data:function(){return{ordering:null,orders:[],readyOrders:[],history:[]}},computed:{isValid:function(){return this.ordering}},methods:{order:function(){this.orders.push(this.ordering),this.history.push(this.ordering),this.ordering=null},toReadyOrders:function(t){var e=this.orders.indexOf(t);this.orders.splice(e,1),this.readyOrders.push(t)},removeOrder:function(t){var e=this.readyOrders.indexOf(t);this.readyOrders.splice(e,1)}}},y=h,b=(r("5825"),Object(p["a"])(y,s,a,!1,null,"586832da",null)),m=b.exports,g={name:"App",components:{ToDoList:m}},O=g,_=(r("034f"),Object(p["a"])(O,o,i,!1,null,null,null)),k=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")},5825:function(t,e,r){"use strict";var n=r("6e98"),o=r.n(n);o.a},"6e98":function(t,e,r){},"85ec":function(t,e,r){},fcbf:function(t,e,r){"use strict";var n=r("1223"),o=r.n(n);o.a}});
//# sourceMappingURL=app.d225adca.js.map