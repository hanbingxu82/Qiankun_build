(window["webpackJsonp_vueAppTinkerbell"]=window["webpackJsonp_vueAppTinkerbell"]||[]).push([["chunk-a5d89d58"],{2708:function(e,t,o){"use strict";o("9719");t["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var e=this,t=window.document.querySelector("."+this.rightTitle[0].id);t.style.color="#409eff";var o=window.document.querySelector("#containers");o.onscroll=function(){if(e.rightTitle.forEach((function(t,r){var i=window.document.querySelector("#"+t.id),a=window.document.querySelector("."+t.id),l=null;e.rightTitle[r+1]&&(l=window.document.querySelector("#"+e.rightTitle[r+1].id)),(null==l||r+1>=e.rightTitle.length)&&(l={offsetTop:o.scrollHeight}),i&&(a.style.color="#606266"),i&&o.scrollTop+80>=i.offsetTop&&o.scrollTop+80<l.offsetTop&&(a.style.color="#409eff")})),0==o.scrollTop){var t=window.document.querySelector("."+e.rightTitle[0].id);t.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var e=window.document.querySelector("#containers");e.onscroll=null}}}},"6bcc":function(e,t,o){},8213:function(e,t,o){"use strict";o("915c")},"915c":function(e,t,o){},afe5:function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"right_list_screen"},[o("div",{staticClass:"right_list"},e._l(e.rightTitle,(function(t){return o("div",{key:t.id,class:"slider_li "+t.id,on:{click:function(o){return e.goMeowPoint(t.id)}}},[e._v(e._s(t.title))])})),0)])},i=[],a=(o("9719"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(e){var t=this;this.$emit("goMeowPoint",e),setTimeout((function(){var o=document.querySelectorAll(".slider_li");t.$nextTick((function(){o.forEach((function(e){e.style.color="#606266"}));var t=document.querySelector("."+e);t.style.color="#409eff"}))}),0)}}}),l=a,n=(o("8213"),o("5d22")),s=Object(n["a"])(l,r,i,!1,null,null,null);t["a"]=s.exports},d7d4:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 显示当前页面的路径，快速返回之前的任意页面。 ")]),e._m(1),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 适用广泛的基础用法。 ")]),e._m(2),o("Demo",[e._v(" 在tb-breadcrumb中使用tb-breadcrumb-item标签表示从首页开始的每一级。Tinkerbell 提供了一个separator属性，在tb-breadcrumb标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。 "),o("div",{attrs:{slot:"source"},slot:"source"},[o("div",{staticStyle:{overflow:"hidden"}},[o("tb-breadcrumb",{attrs:{separator:"/"}},[o("tb-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),o("tb-breadcrumb-item",[o("a",{attrs:{href:"/"}},[e._v("活动管理")])]),o("tb-breadcrumb-item",[e._v("活动列表")]),o("tb-breadcrumb-item",[e._v("活动详情")])],1)],1)]),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html1)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(3),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[e._v(" 使用图标进行分割 ")]),e._m(4),o("Demo",[e._v(" 通过设置 separator-class 可使用相应的 iconfont 作为分隔符，注意这将使 separator 设置失效 "),o("div",{attrs:{slot:"source"},slot:"source"},[o("div",{staticStyle:{overflow:"hidden"}},[o("tb-breadcrumb",{attrs:{"separator-class":"icon-arrow-right-bold"}},[o("tb-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),o("tb-breadcrumb-item",[e._v("活动管理")]),o("tb-breadcrumb-item",[e._v("活动列表")]),o("tb-breadcrumb-item",[e._v("活动详情")])],1)],1)]),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[e._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:e._s(e.html2)}},[e._v("\n      ")]),e._v("\n    ")])]),e._m(5),e._m(6),o("tb-table-eazy",{attrs:{rows:e.rowBreadcrumb,cols:e.col}}),e._m(7),e._m(8),o("tb-table-eazy",{attrs:{rows:e.rowBreadcrumbItem,cols:e.col}}),o("RightSmallNav",{attrs:{rightTitle:e.rightTitle},on:{goMeowPoint:e.goMeowPoint}})],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"Breadcrumb-mian-bao-xie"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#Breadcrumb-mian-bao-xie"}},[e._v("¶")]),e._v(" Breadcrumb 面包屑 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[e._v("¶")]),e._v(" 基础用法 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"tu-biao-fen-ge-fu"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#tu-biao-fen-ge-fu"}},[e._v("¶")]),e._v(" 图标分隔符 ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowBreadcrumb"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowBreadcrumb"}},[e._v("¶")]),e._v(" Breadcrumb props ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowBreadcrumbItem"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowBreadcrumbItem"}},[e._v("¶")]),e._v(" BreadcrumbItem props ")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("br")])}],a=o("2708"),l=o("afe5"),n={name:"Breadcrumb",components:{RightSmallNav:l["a"]},data:function(){return{rowBreadcrumb:[{Parameters:"separator",Explain:"分隔符",Types:"string",Optional:"-",Default:"/"},{Parameters:"separator-class",Explain:"图标分隔符 class",Types:"string",Optional:"-",Default:"-"}],rowBreadcrumbItem:[{Parameters:"to",Explain:"路由跳转对象，同 vue-router 的 to",Types:"string/object",Optional:"-",Default:"-"},{Parameters:"replace",Explain:"在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",Types:"boolean",Optional:"-",Default:"false"}],html1:'    <tb-breadcrumb separator="/">\n        <tb-breadcrumb-item :to="{ path: \'/\' }">首页</tb-breadcrumb-item>\n        <tb-breadcrumb-item><a href="/">活动管理</a></tb-breadcrumb-item>\n        <tb-breadcrumb-item>活动列表</tb-breadcrumb-item>\n        <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>\n    </tb-breadcrumb>\n              ',html2:'    <tb-breadcrumb separator-class="icon-arrow-right-bold">\n        <tb-breadcrumb-item :to="{ path: \'/\' }">首页</tb-breadcrumb-item>\n        <tb-breadcrumb-item>活动管理</tb-breadcrumb-item>\n        <tb-breadcrumb-item>活动列表</tb-breadcrumb-item>\n        <tb-breadcrumb-item>活动详情</tb-breadcrumb-item>\n    </tb-breadcrumb>\n              ',rightTitle:[{title:"Breadcrumb 面包屑",id:"Breadcrumb-mian-bao-xie"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"图标分隔符",id:"tu-biao-fen-ge-fu"},{title:"Breadcrumb props",id:"rowBreadcrumb"},{title:"BreadcrumbItem props",id:"rowBreadcrumbItem"}]}},mixins:[a["a"]],methods:{goMeowPoint:function(e){var t=window.document.querySelector("#"+e);t.scrollIntoView(!0)},hello:function(){this.$message("hello")}}},s=n,c=(o("d955"),o("5d22")),b=Object(c["a"])(s,r,i,!1,null,"28c22bc8",null);t["default"]=b.exports},d955:function(e,t,o){"use strict";o("6bcc")}}]);
//# sourceMappingURL=chunk-a5d89d58.5b295d34.js.map