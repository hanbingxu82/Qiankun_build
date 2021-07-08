(window["webpackJsonp_vueAppTinkerbell"]=window["webpackJsonp_vueAppTinkerbell"]||[]).push([["chunk-2aa8fd47"],{2708:function(t,e,o){"use strict";o("9719");e["a"]={data:function(){return{col:[{label:"参数",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"类型",align:"center",field:"Types"},{label:"可选值",align:"center",field:"Optional"},{label:"默认值",align:"center",field:"Default"}],colEvent:[{label:"方法/事件名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"},{label:"返回值",align:"center",field:"Callback"}],colSlot:[{label:"名称",align:"center",field:"Parameters"},{label:"说明",align:"center",field:"Explain"}]}},mounted:function(){var t=this,e=window.document.querySelector("."+this.rightTitle[0].id);e.style.color="#409eff";var o=window.document.querySelector("#containers");o.onscroll=function(){if(t.rightTitle.forEach((function(e,i){var r=window.document.querySelector("#"+e.id),n=window.document.querySelector("."+e.id),a=null;t.rightTitle[i+1]&&(a=window.document.querySelector("#"+t.rightTitle[i+1].id)),(null==a||i+1>=t.rightTitle.length)&&(a={offsetTop:o.scrollHeight}),r&&(n.style.color="#606266"),r&&o.scrollTop+80>=r.offsetTop&&o.scrollTop+80<a.offsetTop&&(n.style.color="#409eff")})),0==o.scrollTop){var e=window.document.querySelector("."+t.rightTitle[0].id);e.style.color="#409eff"}}},beforeDestroy:function(){if(window.document.querySelector("#containers")){var t=window.document.querySelector("#containers");t.onscroll=null}}}},"2ace":function(t,e,o){"use strict";o("e513")},"7c17":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 返回页面顶部的操作按钮 ")]),t._m(1),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 滑动页面即可看到右下方的按钮。 ")]),t._m(2),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[t._v(" Scroll down to see the bottom-right button. "),o("tb-backtop",{attrs:{target:"#containers",bottom:100,right:"30"}})],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html1)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(3),o("p",{staticStyle:{"box-sizing":"border-box","margin-top":"1em","margin-bottom":"1em",padding:"0px",color:"rgba(0, 0, 0, 0.85)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"font-size":"14px","white-space":"normal","background-color":"rgb(255, 255, 255)"}},[t._v(" 显示区域被固定为右下方按钮的区域, 其中的文本内容可支持自定义。 ")]),t._m(4),o("Demo",[o("div",{attrs:{slot:"source"},slot:"source"},[t._v(" Scroll down to see the bottom-right button. "),o("tb-backtop",{attrs:{target:"#containers",text:"UP","visible-y":100,duration:300},on:{scrolledOnTop:function(e){return t.yourFunction()}}})],1),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{slot:"highlight"},slot:"highlight"},[t._v("      "),o("code",{staticClass:"javascript",domProps:{textContent:t._s(t.html2)}},[t._v("\n      ")]),t._v("\n    ")])]),t._m(5),t._m(6),o("tb-table-eazy",{attrs:{rows:t.rowBacktop,cols:t.col}}),t._m(7),t._m(8),o("tb-table-eazy",{attrs:{rows:t.rowBacktopEvent,cols:t.colEvent}}),o("RightSmallNav",{attrs:{rightTitle:t.rightTitle},on:{goMeowPoint:t.goMeowPoint}})],1)},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h2",{staticStyle:{"box-sizing":"border-box",margin:"0px",padding:"10px 0px","font-size":"28px","font-weight":"400",color:"rgb(31, 47, 61)","border-bottom":"1px solid rgb(197, 217, 232)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"backtop-hui-dao-ding-bu"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#backtop-hui-dao-ding-bu"}},[t._v("¶")]),t._v(" Backtop 回到顶部 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"ji-chu-yong-fa"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#ji-chu-yong-fa"}},[t._v("¶")]),t._v(" 基础用法 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"zi-ding-yi-xian-shi-nei-rong"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#zi-ding-yi-xian-shi-nei-rong"}},[t._v("¶")]),t._v(" 自定义显示内容 ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowBacktop"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowBacktop"}},[t._v("¶")]),t._v(" Backtop props ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("h3",{staticStyle:{"box-sizing":"border-box",margin:"36px 0px 20px",padding:"0px","font-size":"22px","font-weight":"400",color:"rgb(31, 47, 61)","font-family":'-apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',"white-space":"normal","background-color":"rgb(255, 255, 255)"},attrs:{id:"rowBacktopEvent"}},[o("a",{staticClass:"header-anchor",staticStyle:{"box-sizing":"border-box",color:"rgb(16, 137, 255)","text-decoration-line":"none"},attrs:{href:"#rowBacktopEvent"}},[t._v("¶")]),t._v(" Backtop events ")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("br")])}],n=o("2708"),a=o("afe5"),l={name:"Backtop",components:{RightSmallNav:a["a"]},data:function(){return{calendarArr:{type:"combination",headStyle:{todayBtn:"left",combination:"center",checkBtn:"left"},viewStyle:{day:"right"}},rightTitle:[{title:"Backtop 回到顶部",id:"backtop-hui-dao-ding-bu"},{title:"基础用法",id:"ji-chu-yong-fa"},{title:"自定义显示内容",id:"zi-ding-yi-xian-shi-nei-rong"},{title:"Backtop props",id:"rowBacktop"},{title:"Backtop events",id:"rowBacktopEvent"}],visible:!1,rowBacktop:[{Parameters:"text",Explain:"文本slot内容  如果不传递默认展示圆形图标",Types:"string",Optional:"-",Default:"-"},{Parameters:"target",Explain:"触发滚动的对象 如果没有默认就是body文档",Types:"string",Optional:"-",Default:"-"},{Parameters:"visible-y",Explain:"滚动高度达到此参数值才出现",Types:"number",Optional:"-",Default:"200"},{Parameters:"right",Explain:"控制其显示位置, 距离页面右边距",Types:"number",Optional:"-",Default:"30"},{Parameters:"bottom",Explain:"控制其显示位置, 距离页面底部距离",Types:"number",Optional:"-",Default:"30"},{Parameters:"duration",Explain:"到顶部的动画时间毫秒",Types:"number",Optional:"-",Default:"600"}],rowBacktopEvent:[{Parameters:"scrolledOnTop",Explain:"当页面滚动到顶部时触发功能",Callback:"-"}],html1:'    <template>\n        Scroll down to see the bottom-right button.\n        <tb-backtop target="#containers" :bottom="100" right="30"> </tb-backtop> \n    </template>\n              ',html2:'    <template>\n        Scroll down to see the bottom-right button.\n        <tb-backtop target="#containers" text="UP" :visibleY="100" :duration="300" @scrolledOnTop="yourFunction"> </tb-backtop>\n    </template>\n    <script>\n        export default {\n            methods: {\n                yourFunction() {\n                    console.log("到顶啦");\n                }\n            }\n        }\n    <\/script>\n              '}},mixins:[n["a"]],methods:{goMeowPoint:function(t){var e=window.document.querySelector("#"+t);e.scrollIntoView(!0)},yourFunction:function(){console.log("到顶啦")}}},s=l,c=(o("2ace"),o("5d22")),p=Object(c["a"])(s,i,r,!1,null,"6b25fde8",null);e["default"]=p.exports},8213:function(t,e,o){"use strict";o("915c")},"915c":function(t,e,o){},afe5:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"right_list_screen"},[o("div",{staticClass:"right_list"},t._l(t.rightTitle,(function(e){return o("div",{key:e.id,class:"slider_li "+e.id,on:{click:function(o){return t.goMeowPoint(e.id)}}},[t._v(t._s(e.title))])})),0)])},r=[],n=(o("9719"),{name:"RightSmallNav",props:["rightTitle"],methods:{goMeowPoint:function(t){var e=this;this.$emit("goMeowPoint",t),setTimeout((function(){var o=document.querySelectorAll(".slider_li");e.$nextTick((function(){o.forEach((function(t){t.style.color="#606266"}));var e=document.querySelector("."+t);e.style.color="#409eff"}))}),0)}}}),a=n,l=(o("8213"),o("5d22")),s=Object(l["a"])(a,i,r,!1,null,null,null);e["a"]=s.exports},e513:function(t,e,o){}}]);
//# sourceMappingURL=chunk-2aa8fd47.190d9d83.js.map