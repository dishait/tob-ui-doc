(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-others-backTop-backTop"],{"0d04":function(t,e,a){"use strict";var r=a("4ea4");a("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("80af")),n=a("7945"),c={name:"t-nav-bar",mixins:[(0,n.Shadow)({shadow:"sm"}),(0,n.Emits)(["click","rightClick","centerClick"]),(0,n.Color)({color:"bg-white"})],emits:["leftClick","rightClick","centerClick"],components:{tIcon:i.default},props:(0,n.$P)({title:"",delta:1,zIndex:100,leftText:"",rightText:"",rightIcon:"",sticky:!1,leftIcon:"left",customGo:!1,height:"44px"}),computed:(0,n.$C)({Sticky:"sticky top-0"}),methods:{leftClick:function(t){this.$emit("leftClick",t),this.customGo||this.back()},back:function(){uni.navigateBack({delta:parseInt(this.delta)})}}};e.default=c},"120e":function(t,e,a){"use strict";a.r(e);var r=a("89a7"),i=a("a39e");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("4d33");var c,o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"2f0c099e",null,!1,r["a"],c);e["default"]=s.exports},"12fb":function(t,e,a){"use strict";var r=a("19c1"),i=a.n(r);i.a},"19c1":function(t,e,a){var r=a("2e75");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("2f35fc43",r,!0,{sourceMap:!1,shadowMode:!1})},"1e1b":function(t,e,a){"use strict";a.r(e);var r=a("29fa"),i=a("9f25");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);var c,o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=s.exports},"1f53":function(t,e,a){"use strict";a.r(e);var r=a("4a51"),i=a("3d7d");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("12fb");var c,o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"04a3c20d",null,!1,r["a"],c);e["default"]=s.exports},2975:function(t,e,a){"use strict";a.r(e);var r=a("72a5"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"29fa":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={tNavBar:a("120e").default,tBackTop:a("1f53").default,tSwitch:a("5126").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("t-nav-bar",{attrs:{title:"Back Top",leftText:"Home",sticky:!0}}),a("t-back-top",{attrs:{color:t.Color,icon:t.Icon,rounded:t.Rounded,light:t.light}}),a("v-uni-view",{staticClass:"text-neutral text-xl pt-5",staticStyle:{height:"120vh"}},[a("v-uni-view",{staticClass:"bg-accent text-center text-white"},[t._v("请往下拉")]),a("v-uni-view",{staticClass:"flex flex-col m-5 text-base"},[a("t-switch",{staticClass:"my-2",attrs:{color:"primary"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},[t._v("颜色")]),a("t-switch",{staticClass:"my-2",attrs:{color:"secondary"},model:{value:t.light,callback:function(e){t.light=e},expression:"light"}},[t._v("高亮")]),a("t-switch",{staticClass:"my-2",attrs:{color:"accent"},model:{value:t.rounded,callback:function(e){t.rounded=e},expression:"rounded"}},[t._v("圆角")]),a("t-switch",{staticClass:"my-2",attrs:{color:"error"},model:{value:t.icon,callback:function(e){t.icon=e},expression:"icon"}},[t._v("自定义图标")])],1)],1)],1)},n=[]},"2e75":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".t-back-top[data-v-04a3c20d]{position:fixed;opacity:0;display:inline-flex;align-items:center;justify-content:center;pointer-events:none;-webkit-transform:scale(.5);transform:scale(.5);transition-property:opacity transform;transition:.3s ease-in-out;cursor:pointer}.back-top-show[data-v-04a3c20d]{opacity:1;-webkit-transform:scale(1);transform:scale(1);pointer-events:auto}.back-top-show[data-v-04a3c20d]:active{-webkit-transform:scale(.8);transform:scale(.8)}",""]),t.exports=e},"3b40":function(t,e,a){var r=a("967d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("0c9ca8ce",r,!0,{sourceMap:!1,shadowMode:!1})},"3d7d":function(t,e,a){"use strict";a.r(e);var r=a("7343"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"448b":function(t,e,a){var r=a("5480");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("4f06").default;i("06dca758",r,!0,{sourceMap:!1,shadowMode:!1})},"4a51":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={tIcon:a("80af").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"t-back-top",class:[t.Color,t.Rounded,t.Shadow,t.Size,t.Visible],style:{right:t.right,bottom:t.bottom},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[a("t-icon",{attrs:{type:t.icon}})],1)},n=[]},"4d33":function(t,e,a){"use strict";var r=a("3b40"),i=a.n(r);i.a},5126:function(t,e,a){"use strict";a.r(e);var r=a("dee0"),i=a("2975");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);a("f2fb");var c,o=a("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"4bfc46fb",null,!1,r["a"],c);e["default"]=s.exports},5480:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".t-switch-label[data-v-4bfc46fb]{display:inline-flex;align-items:center;cursor:pointer}.t-switch[data-v-4bfc46fb]{margin-right:%?10?%;--bg-opacity:1;opacity:.6;display:inline-block;cursor:pointer;border:1.5px solid;transition:.25s ease-in-out;transition-property:box-shadow,opacity;box-shadow:calc(var(--offset) * -1) 0 0 2px #fff inset,0 0 0 2px #fff inset}.switch-checked[data-v-4bfc46fb]{opacity:1;box-shadow:var(--offset) 0 0 2px #fff inset,0 0 0 2px #fff inset}.switch-primary[data-v-4bfc46fb]{background-color:rgba(var(--primary),var(--bg-opacity,1));border-color:rgba(var(--primary),var(--border-opacity,1))}.switch-secondary[data-v-4bfc46fb]{background-color:rgba(var(--secondary),var(--bg-opacity,1));border-color:rgba(var(--secondary),var(--border-opacity,1))}.switch-accent[data-v-4bfc46fb]{background-color:rgba(var(--accent),var(--bg-opacity,1));border-color:rgba(var(--accent),var(--border-opacity,1))}.switch-neutral[data-v-4bfc46fb]{background-color:rgba(var(--neutral),var(--bg-opacity,1));border-color:rgba(var(--neutral),var(--border-opacity,1))}.switch-base[data-v-4bfc46fb]{background-color:rgba(var(--base),var(--bg-opacity,1));border-color:rgba(var(--base),var(--border-opacity,1))}.switch-info[data-v-4bfc46fb]{background-color:rgba(var(--info),var(--bg-opacity,1));border-color:rgba(var(--info),var(--border-opacity,1))}.switch-success[data-v-4bfc46fb]{background-color:rgba(var(--success),var(--bg-opacity,1));border-color:rgba(var(--success),var(--border-opacity,1))}.switch-warning[data-v-4bfc46fb]{background-color:rgba(var(--warning),var(--bg-opacity,1));border-color:rgba(var(--warning),var(--border-opacity,1))}.switch-error[data-v-4bfc46fb]{background-color:rgba(var(--error),var(--bg-opacity,1));border-color:rgba(var(--error),var(--border-opacity,1))}.switch-xs[data-v-4bfc46fb]{--offset:0.75rem;height:1.25rem;width:2rem}.switch-sm[data-v-4bfc46fb]{--offset:1rem;height:1.2rem;width:2.2rem}.switch-md[data-v-4bfc46fb]{--offset:1.5rem;height:1.5rem;width:3rem}.switch-lg[data-v-4bfc46fb]{--offset:2rem;height:2rem;width:4rem}.switch-disabled[data-v-4bfc46fb]{opacity:.5;cursor:not-allowed;pointer-events:none}",""]),t.exports=e},"72a5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("f30d"),i=a("7945"),n={name:"t-switch",mixins:[(0,i.Emits)(["change"]),(0,r.FieldTrack)("t-switch"),(0,i.VModel)({value:!1}),(0,i.Rounded)({rounded:"full"}),(0,i.Color)({color:"base",presets:(0,i.createColorPresets)("switch")}),(0,i.Size)({presets:{xs:"switch-xs",sm:"switch-sm",md:"switch-md",lg:"switch-lg"}})],emits:["click"],props:(0,i.$P)({disabled:!1}),computed:(0,i.$C)({Disabled:"switch-disabled",Checked:function(){var t=this.VModelValue;return t&&"switch-checked"}}),watch:{VModelValue:function(t){this.change(t)}},methods:(0,i.$M)({toggle:!0,click:function(){this.updateVModelValue(!this.VModelValue),this.$emit("click")}})};e.default=n},7343:function(t,e,a){"use strict";var r=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(a("80af")),n=a("7945");uni.useBackTopMixin=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;return{onPageScroll:function(e){uni.$emit("_backTop",e.scrollTop>=t)}}};var c={name:"t-back-top",mixins:[(0,n.Color)({color:"bg-white"}),(0,n.Shadow)({shadow:"sm"}),(0,n.Size)({presets:{xs:"text-xs w-7 h-7 font-semibold",sm:"text-sm w-8 h-8 font-semibold",md:"text-md w-8 h-8 font-bold",lg:"text-lg w-9 h-9 font-bold"}}),(0,n.Rounded)({rounded:"full"})],emits:["click"],components:{tIcon:i.default},props:(0,n.$P)({icon:"caret-up",right:"50rpx",bottom:"50rpx"}),data:function(){return{visible:!1}},computed:(0,n.$C)({Visible:"back-top-show"}),methods:{click:function(t){this.$emit("click",t),uni.pageScrollTo({scrollTop:0,duration:150})},visibleEvent:function(t){this.visible=t},createVisibleEvent:function(){uni.$on("_backTop",this.visibleEvent)},destroyVisibleEvent:function(){uni.$off("_backTop",this.visibleEvent)}},created:function(){this.createVisibleEvent()},destroyed:function(){this.destroyVisibleEvent()}};e.default=c},"89a7":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var r={tIcon:a("80af").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"t-nav-bar",class:[t.Sticky,t.Color,t.Shadow],style:{zIndex:t.zIndex,height:t.height},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"nav-bar-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.leftClick.apply(void 0,arguments)}}},[t._t("left",[a("v-uni-view",{staticClass:"nav-bar-left-seat"},[t.leftIcon?a("t-icon",{staticClass:"nav-bar-left-arrow",attrs:{type:t.leftIcon}}):t._e(),a("v-uni-text",{staticClass:"nav-bar-left-text"},[t._v(t._s(t.leftText))])],1)])],2),a("v-uni-view",{staticClass:"nav-bar-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.centerClick.apply(void 0,arguments)}}},[t._t("default",[a("v-uni-text",{staticClass:"nav-bar-title"},[t._v(t._s(t.title))])])],2),a("v-uni-view",{staticClass:"nav-bar-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.rightClick.apply(void 0,arguments)}}},[t._t("right",[a("v-uni-view",{staticClass:"nav-bar-right-seat"},[t.rightText?a("v-uni-text",{staticClass:"nav-bar-right-text"},[t._v(t._s(t.rightText))]):t._e(),t.rightIcon?a("t-icon",{staticClass:"nav-bar-right-arrow",attrs:{type:t.rightIcon}}):t._e()],1)])],2)],1)},n=[]},"967d":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".t-nav-bar[data-v-2f0c099e]{display:flex;padding-left:%?20?%;padding-right:%?20?%;padding-top:0;align-items:center;justify-content:space-between}.nav-bar-left[data-v-2f0c099e]{justify-content:flex-start}.nav-bar-left-text[data-v-2f0c099e]{margin-left:%?10?%}.nav-bar-right[data-v-2f0c099e]{justify-content:flex-end}.nav-bar-right-text[data-v-2f0c099e]{margin-right:%?10?%}.nav-bar-left[data-v-2f0c099e],\n.nav-bar-right[data-v-2f0c099e]{flex:1 1 0}.nav-bar-left-seat[data-v-2f0c099e],\n.nav-bar-right-seat[data-v-2f0c099e]{display:flex;align-items:baseline}.nav-bar-center[data-v-2f0c099e]{flex:2;justify-content:center}.nav-bar-left[data-v-2f0c099e],\n.nav-bar-right[data-v-2f0c099e],\n.nav-bar-center[data-v-2f0c099e]{display:flex;align-items:center;cursor:pointer}.nav-bar-title[data-v-2f0c099e]{font-size:1.25rem}",""]),t.exports=e},"9f25":function(t,e,a){"use strict";a.r(e);var r=a("cbd2"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},a39e:function(t,e,a){"use strict";a.r(e);var r=a("0d04"),i=a.n(r);for(var n in r)"default"!==n&&function(t){a.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},cbd2:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={mixins:[uni.useBackTopMixin()],data:function(){return{color:!1,light:!1,rounded:!1,icon:!1}},computed:{Color:function(){var t=this.color;return t?"primary":null},Rounded:function(){var t=this.rounded;return t?"xl":"full"},Icon:function(){var t=this.icon;return t?"arrowup":"caret-up"}}};e.default=r},dee0:function(t,e,a){"use strict";var r;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"t-switch-label",class:[t.Disabled],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"t-switch",class:[t.Checked,t.Color,t.Rounded,t.Size]}),t._t("default")],2)},n=[]},f2fb:function(t,e,a){"use strict";var r=a("448b"),i=a.n(r);i.a},f30d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.FieldTrack=void 0;var r=function(){},i=function(t){return{inject:{FieldTrack:{from:"FieldTrack",default:function(){return r}}},watch:{VModelValue:function(){this.FieldTrack({trigger:"onChange",value:this.VModelValue})}},created:function(){this.FieldTrack({type:t,value:this.VModelValue})}}};e.FieldTrack=i}}]);