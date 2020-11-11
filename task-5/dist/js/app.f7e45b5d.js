(function(t){function e(e){for(var i,l,o=e[0],n=e[1],s=e[2],f=0,p=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);u&&u(e);while(p.length)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],i=!0,o=1;o<r.length;o++){var n=r[o];0!==a[n]&&(i=!1)}i&&(c.splice(e--,1),t=l(l.s=r[0]))}return t}var i={},a={app:0},c=[];function l(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=i,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(r,i,function(e){return t[e]}.bind(null,i));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],n=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var u=n;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var i=r("85ec"),a=r.n(i);a.a},"0bc0":function(t,e,r){},"11fc":function(t,e,r){"use strict";var i=r("0bc0"),a=r.n(i);a.a},2921:function(t,e,r){"use strict";var i=r("8118"),a=r.n(i);a.a},"3e69":function(t,e,r){},"3f4c":function(t,e,r){"use strict";var i=r("5fc3"),a=r.n(i);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("shop")],1)},c=[],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Shop"},[r("header-shop",{staticClass:"HeaderShop",attrs:{title:"My Shop"},on:{"filter-title":t.setFilterTitle}}),r("filter-tab",{staticClass:"FilterTab",attrs:{categoryArray:t.categoryArray,yearArray:t.yearArray,colorArray:t.colorArray},on:{"filter-change":t.setFilterData}}),r("product-list",{staticClass:"ProductList",attrs:{products:t.filteredProducts}})],1)},o=[],n=(r("4de4"),r("7db0"),r("4160"),r("caad"),r("a15b"),r("ac1f"),r("2532"),r("1276"),r("159b"),r("5530")),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"HeaderShop"},[r("div",{staticClass:"title"},[t._v(t._s(t.title))]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],attrs:{type:"text",placeholder:"Input title"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}}),r("div",{staticClass:"cart"},[r("button",[r("router-link",{attrs:{to:"/Cart"}},[t._v("Cart")])],1),r("button",[r("router-link",{attrs:{to:"/"}},[t._v("Close Cart")])],1)]),r("router-view")],1)},u=[],f={name:"HeaderShop",props:{title:{type:String,default:"title"}},data:function(){return{filter:null}},watch:{filter:function(t){this.$emit("filter-title",t)}}},p=f,d=(r("f2d4"),r("2877")),m=Object(d["a"])(p,s,u,!1,null,"ac8de958",null),h=m.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"FilterTab"},[r("div",{staticClass:"price"},[r("div",{staticClass:"title"},[t._v("Price")]),r("div",{staticClass:"input-price"},[r("b-field",[r("b-slider",{attrs:{min:1,max:15,step:.5,ticks:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),r("input",{directives:[{name:"model",rawName:"v-model",value:t.minPrice,expression:"minPrice"}],attrs:{type:"number",placeholder:"min"},domProps:{value:t.minPrice},on:{input:function(e){e.target.composing||(t.minPrice=e.target.value)}}}),t._v(" - "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPrice,expression:"maxPrice"}],attrs:{type:"number",placeholder:"max"},domProps:{value:t.maxPrice},on:{input:function(e){e.target.composing||(t.maxPrice=e.target.value)}}})],1)]),r("div",{staticClass:"category"},[r("div",{staticClass:"title"},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.category,expression:"category"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.category=e.target.multiple?r:r[0]}}},t._l(t.categoryArray,(function(e){return r("option",{key:e},[t._v(" "+t._s(e)+" ")])})),0)]),r("div",{staticClass:"year"},[r("div",{staticClass:"title"},[t._v("Year")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.year=e.target.multiple?r:r[0]}}},t._l(t.yearArray,(function(e){return r("option",{key:e.year,attrs:{disabled:e.isDisabled}},[t._v(" "+t._s(e.year)+" ")])})),0)]),r("div",{staticClass:"color"},[r("div",{staticClass:"title"},[t._v("Color")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.color=e.target.multiple?r:r[0]}}},t._l(t.colorArray,(function(e){return r("option",{key:e.color,attrs:{disabled:e.isDisabled}},[t._v(" "+t._s(e.color)+" ")])})),0)])])},g=[],v={name:"FilterTab",props:{categoryArray:{type:Array,default:null},yearArray:{type:Array,default:null},colorArray:{type:Array,default:null}},data:function(){return{minPrice:null,maxPrice:null,category:this.categoryArray[0],year:this.yearArray[0].year,color:this.colorArray[0].color,price:[2,5]}},watch:{minPrice:function(t){this.$emit("filter-change",{minPrice:t||null})},maxPrice:function(t){this.$emit("filter-change",{maxPrice:t||null})},category:function(t){"Усі категорії"==t&&(t=null),this.color="Усі кольори",this.year="Усі роки",this.minPrice=null,this.maxPrice=null,this.$emit("filter-change",{category:t})},year:function(t){"Усі роки"==t&&(t=null),this.$emit("filter-change",{year:t})},color:function(t){"Усі кольори"==t&&(t=null),this.$emit("filter-change",{color:t})}}},b=v,_=(r("2921"),Object(d["a"])(b,y,g,!1,null,"883cf992",null)),P=_.exports,C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ProductList"},t._l(t.products,(function(e,i){return r("product",{key:i,attrs:{imgSrc:e.imgSrc,price:e.price,title:e.title},on:{"to-cart":function(r){return t.toCart(e)}}})})),1)},x=[],j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"addToCart",on:{click:t.toCart}},[r("img",{staticClass:"cartIcon",attrs:{src:"https://img.icons8.com/material-outlined/64/000000/shopping-cart.png"}})]),r("img",{staticClass:"productImage",attrs:{src:t.imgSrc,alt:""}}),r("div",{staticClass:"price"},[t._v(" "+t._s(t.processedPrice)+" грн ")]),r("div",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),r("div",{staticClass:"dolPrice"},[t._v(" "+t._s(t.dolPrice)+" $ ")])])},w=[],A=(r("a9e3"),{name:"Product",props:{imgSrc:{type:String,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fsoznatelno.ru%2Fno-image-icon-23485%2F&psig=AOvVaw0OSAagaQT69u8kq7UtUQkd&ust=1602751759949000&source=images&cd=vfe&ved=2ahUKEwjXh-Xb2bPsAhWMzyoKHaXwB1EQr4kDegUIARCqAQ"},price:{type:[String,Number],default:null},title:{type:String,default:"Product Name"}},computed:{dolPrice:function(){return Math.round(this.price/28)},processedPrice:function(){var t=this.price%1e3,e=Math.floor(this.price/1e3)||"",r=Math.floor(this.price/1e6)||"";return r+" "+e+" "+t}},methods:{toCart:function(){this.$emit("to-cart")}}}),O=A,S=(r("3f4c"),Object(d["a"])(O,j,w,!1,null,"511a09fe",null)),k=S.exports,E=r("2f62"),T={name:"ProductList",components:{product:k},props:{products:{type:Array,default:null}},methods:Object(n["a"])(Object(n["a"])({},Object(E["b"])(["addToCart"])),{},{toCart:function(t){this.addToCart(t)}})},F=T,$=(r("11fc"),Object(d["a"])(F,C,x,!1,null,"f454b5b8",null)),M=$.exports,B=[{id:1,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_11_b_2_1.jpg",price:25499,title:"Apple iPhone 11 128GB Black",category:"phone",year:2019,color:"Red"},{id:2,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_11_pro_max_mg_2_1.jpg",price:42499,title:"Apple iPhone 11 Pro Max 256GB Midnight Green",category:"phone",year:"2019",color:"Midnight Green"},{id:3,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/r/u/ruun_iphone-se_black_q220_pdp-image-1_2.jpg",price:"14499",title:"iPhone SE 64GB Black ",category:"phone",year:2017,color:"Black"},{id:4,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_11_p_2_1_1.jpg",price:"23499",title:"Apple iPhone 11 64GB Purple",category:"phone",year:2019,color:"Purple"},{id:5,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/e/w/ewcccccccccwww_1.jpg",price:"7999",title:"Samsung Galaxy A50 4/64 Black",category:"phone",year:2020,color:"Black"},{id:6,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1496.jpg",price:"9999",title:"Samsung Galaxy A71 6/128GB ",category:"phone",year:"2020",color:"Black"},{id:7,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/j/y/jyu4232cn_1.jpg",price:"17999",title:"Mi RedmiBook 14 II R5/8/512/W",category:"laptop",year:"2018",color:"Grey"},{id:8,imgSrc:"https://i.allo.ua/media/catalog/product/cache/3/image/425x295/602f0fa2c1f0d1ba5e241f914e856ff9/w/w/wwru_macbook-air_spacegray_q220_pdp-image-1_1.jpg",price:"1002354",title:"Apple Macbook Air Retina 2020 (MWTJ2) ",category:"laptop",year:"2020",color:"Space Grey"}],D={name:"Shop",components:{ProductList:M,HeaderShop:h,FilterTab:P},data:function(){return{products:B,filter:{title:null,minPrice:null,maxPrice:null,category:null,year:null,color:null}}},computed:{categoryArray:function(){var t=[];return this.products.forEach((function(e){t.includes(e.category)||t.push(e.category)})),t.sort(),t.unshift("Усі категорії"),t},yearArray:function(){var t=this,e=[],r=[{year:"Усі роки",isDisabled:!1}];return this.products.forEach((function(t){e.includes(+t.year)||e.push(+t.year)})),e.sort((function(t,e){return e-t})),e.forEach((function(e){var i=t.filteredYears.find((function(t){return t.year==e}));i?r.push({year:e,isDisabled:!1}):r.push({year:e,isDisabled:!0})})),r},colorArray:function(){var t=this,e=[],r=[{color:"Усі кольори",isDisabled:!1}];return this.products.forEach((function(t){e.includes(t.color)||e.push(t.color)})),e.sort(),e.forEach((function(e){var i=t.filteredColors.find((function(t){return t.color==e}));i?r.push({color:e,isDisabled:!1}):r.push({color:e,isDisabled:!0})})),r},isFilterEmpty:function(){return null===this.filter.title&&null===this.filter.minPrice&&null===this.filter.maxPrice&&null===this.filter.year&&null===this.filter.category&&null===this.filter.color},filteredProducts:function(){var t=this;return this.isFilterEmpty?this.products:this.products.filter((function(e){return(!t.filter.title||e.title.toLowerCase().includes(t.filter.title))&&(null===t.filter.minPrice||+e.price>=t.filter.minPrice)&&(null===t.filter.maxPrice||+e.price<=t.filter.maxPrice)&&(null===t.filter.category||e.category===t.filter.category)&&(null===t.filter.year||e.year==t.filter.year)&&(null===t.filter.color||e.color==t.filter.color)}))},filteredYears:function(){var t=this;return this.isFilterEmpty?this.products:this.products.filter((function(e){return(!t.filter.title||e.title.toLowerCase().includes(t.filter.title))&&(null===t.filter.minPrice||+e.price>=t.filter.minPrice)&&(null===t.filter.maxPrice||+e.price<=t.filter.maxPrice)&&(null===t.filter.category||e.category===t.filter.category)&&(null===t.filter.color||e.color==t.filter.color)}))},filteredColors:function(){var t=this;return this.isFilterEmpty?this.products:this.products.filter((function(e){return(!t.filter.title||e.title.toLowerCase().includes(t.filter.title))&&(null===t.filter.minPrice||+e.price>=t.filter.minPrice)&&(null===t.filter.maxPrice||+e.price<=t.filter.maxPrice)&&(null===t.filter.category||e.category===t.filter.category)&&(null===t.filter.year||e.year==t.filter.year)}))}},methods:{setFilterTitle:function(t){this.filter=Object(n["a"])(Object(n["a"])({},this.filter),{},{title:t.toLowerCase().split(" ").join("")})},setFilterData:function(t){this.filter=Object(n["a"])(Object(n["a"])({},this.filter),t)}}},G=D,L=(r("bd2f"),Object(d["a"])(G,l,o,!1,null,"5a8224fa",null)),N=L.exports,I={name:"App",components:{Shop:N}},H=I,R=(r("034f"),Object(d["a"])(H,a,c,!1,null,null,null)),q=R.exports;r("c740"),r("a434");i["a"].use(E["a"]);var Q=new E["a"].Store({state:{cart:[]},mutations:{addToCart:function(t,e){var r=t.cart.findIndex((function(t){return t.id===e.id}));-1!=r?t.cart.push(Object(n["a"])(Object(n["a"])({},e),{},{count:t.cart[r].count++})):t.cart.push(Object(n["a"])(Object(n["a"])({},e),{},{count:1}))},clearCart:function(t){t.cart.splice(0,t.cart.length)}},actions:{addToCart:function(t,e){var r=t.commit;r("addToCart",e)},clearCart:function(t){var e=t.commit;e("clearCart")}},getters:{getCart:function(t){return t.cart}}}),U=Q,J=r("289d"),W=(r("5abe"),r("8c4f")),X=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"cart"},[r("div",{staticClass:"cart-amount"},[t._v("Кількість елементів у корзині: "+t._s(t.getCart.length))]),r("button",{on:{click:t.clearCart}},[t._v("Очистити корзину")])])])},Y=[],z={name:"Cart",computed:Object(n["a"])({},Object(E["c"])(["getCart"])),methods:Object(n["a"])({},Object(E["b"])(["clearCart"]))},K=z,V=Object(d["a"])(K,X,Y,!1,null,"4db2496d",null),Z=V.exports;i["a"].use(W["a"]);var tt=[{path:"/Cart",component:Z}],et=new W["a"]({mode:"history",routes:tt}),rt=et;i["a"].use(J["a"]),i["a"].config.productionTip=!1,new i["a"]({router:rt,store:U,render:function(t){return t(q)}}).$mount("#app")},"5fc3":function(t,e,r){},8118:function(t,e,r){},"85ec":function(t,e,r){},a9b2:function(t,e,r){},bd2f:function(t,e,r){"use strict";var i=r("3e69"),a=r.n(i);a.a},f2d4:function(t,e,r){"use strict";var i=r("a9b2"),a=r.n(i);a.a}});
//# sourceMappingURL=app.f7e45b5d.js.map