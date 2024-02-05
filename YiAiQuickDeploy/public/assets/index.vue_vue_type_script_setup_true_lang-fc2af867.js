import{aG as V,aH as S,aI as q,d as O,e as _,bd as K,ab as o,aw as oe,be as ie,bf as se,bg as ae,bh as ne,aM as ve,aN as le,bi as be,b9 as Q,aR as xe,a5 as F,o as x,c as P,a as w,J as R,t as W,m as t,F as X,j as ke,k as b,_ as I,p as j,A as Se,s as B,l as L,E as we,C as ce,f as ue,Y as $e,D as de,u as pe,r as N,w as U,h as Ce,a3 as _e,ad as Pe,b as Ie,Q as Be,ae as Z,bj as De,I as Y,n as ee,af as ze}from"./index-df8775ab.js";import{N as Ne}from"./Popconfirm-51935e3d.js";import{N as te}from"./NumberAnimation-f1791864.js";import{N as Re}from"./LayoutSider-3192526d.js";const Te=V([S("progress",{display:"inline-block"},[S("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),q("line",`
 width: 100%;
 display: block;
 `,[S("progress-content",`
 display: flex;
 align-items: center;
 `,[S("progress-graph",{flex:1})]),S("progress-custom-content",{marginLeft:"14px"}),S("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[q("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),q("circle, dashboard",{width:"120px"},[S("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),S("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),S("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),q("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[S("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),S("progress-content",{position:"relative"}),S("progress-graph",{position:"relative"},[S("progress-graph-circle",[V("svg",{verticalAlign:"bottom"}),S("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[q("empty",{opacity:0})]),S("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),S("progress-graph-line",[q("indicator-inside",[S("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[S("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),S("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),q("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[S("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),S("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),S("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[S("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[q("processing",[V("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),V("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),Me={success:o(ie,null),error:o(se,null),warning:o(ae,null),info:o(ne,null)},We=O({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:v}){const m=_(()=>K(e.height)),g=_(()=>e.railBorderRadius!==void 0?K(e.railBorderRadius):e.height!==void 0?K(e.height,{c:.5}):""),i=_(()=>e.fillBorderRadius!==void 0?K(e.fillBorderRadius):e.railBorderRadius!==void 0?K(e.railBorderRadius):e.height!==void 0?K(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:l,railColor:$,railStyle:c,percentage:f,unit:u,indicatorTextColor:h,status:y,showIndicator:C,fillColor:a,processing:n,clsPrefix:r}=e;return o("div",{class:`${r}-progress-content`,role:"none"},o("div",{class:`${r}-progress-graph`,"aria-hidden":!0},o("div",{class:[`${r}-progress-graph-line`,{[`${r}-progress-graph-line--indicator-${l}`]:!0}]},o("div",{class:`${r}-progress-graph-line-rail`,style:[{backgroundColor:$,height:m.value,borderRadius:g.value},c]},o("div",{class:[`${r}-progress-graph-line-fill`,n&&`${r}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:a,height:m.value,lineHeight:m.value,borderRadius:i.value}},l==="inside"?o("div",{class:`${r}-progress-graph-line-indicator`,style:{color:h}},v.default?v.default():`${f}${u}`):null)))),C&&l==="outside"?o("div",null,v.default?o("div",{class:`${r}-progress-custom-content`,style:{color:h},role:"none"},v.default()):y==="default"?o("div",{role:"none",class:`${r}-progress-icon ${r}-progress-icon--as-text`,style:{color:h}},f,u):o("div",{class:`${r}-progress-icon`,"aria-hidden":!0},o(oe,{clsPrefix:r},{default:()=>Me[y]}))):null)}}}),Ae={success:o(ie,null),error:o(se,null),warning:o(ae,null),info:o(ne,null)},Ge=O({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:v}){function m(g,i,l){const{gapDegree:$,viewBoxWidth:c,strokeWidth:f}=e,u=50,h=0,y=u,C=0,a=2*u,n=50+f/2,r=`M ${n},${n} m ${h},${y}
      a ${u},${u} 0 1 1 ${C},${-a}
      a ${u},${u} 0 1 1 ${-C},${a}`,k=Math.PI*2*u,d={stroke:l,strokeDasharray:`${g/100*(k-$)}px ${c*8}px`,strokeDashoffset:`-${$/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:r,pathStyle:d}}return()=>{const{fillColor:g,railColor:i,strokeWidth:l,offsetDegree:$,status:c,percentage:f,showIndicator:u,indicatorTextColor:h,unit:y,gapOffsetDegree:C,clsPrefix:a}=e,{pathString:n,pathStyle:r}=m(100,0,i),{pathString:k,pathStyle:d}=m(f,$,g),p=100+l;return o("div",{class:`${a}-progress-content`,role:"none"},o("div",{class:`${a}-progress-graph`,"aria-hidden":!0},o("div",{class:`${a}-progress-graph-circle`,style:{transform:C?`rotate(${C}deg)`:void 0}},o("svg",{viewBox:`0 0 ${p} ${p}`},o("g",null,o("path",{class:`${a}-progress-graph-circle-rail`,d:n,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:r})),o("g",null,o("path",{class:[`${a}-progress-graph-circle-fill`,f===0&&`${a}-progress-graph-circle-fill--empty`],d:k,"stroke-width":l,"stroke-linecap":"round",fill:"none",style:d}))))),u?o("div",null,v.default?o("div",{class:`${a}-progress-custom-content`,role:"none"},v.default()):c!=="default"?o("div",{class:`${a}-progress-icon`,"aria-hidden":!0},o(oe,{clsPrefix:a},{default:()=>Ae[c]})):o("div",{class:`${a}-progress-text`,style:{color:h},role:"none"},o("span",{class:`${a}-progress-text__percentage`},f),o("span",{class:`${a}-progress-text__unit`},y))):null)}}});function re(e,v,m=100){return`m ${m/2} ${m/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const qe=O({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:v}){const m=_(()=>e.percentage.map((i,l)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*l)-e.circleGap*l)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:g,strokeWidth:i,circleGap:l,showIndicator:$,fillColor:c,railColor:f,railStyle:u,percentage:h,clsPrefix:y}=e;return o("div",{class:`${y}-progress-content`,role:"none"},o("div",{class:`${y}-progress-graph`,"aria-hidden":!0},o("div",{class:`${y}-progress-graph-circle`},o("svg",{viewBox:`0 0 ${g} ${g}`},h.map((C,a)=>o("g",{key:a},o("path",{class:`${y}-progress-graph-circle-rail`,d:re(g/2-i/2*(1+2*a)-l*a,i,g),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:f[a]},u[a]]}),o("path",{class:[`${y}-progress-graph-circle-fill`,C===0&&`${y}-progress-graph-circle-fill--empty`],d:re(g/2-i/2*(1+2*a)-l*a,i,g),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:m.value[a],strokeDashoffset:0,stroke:c[a]}})))))),$&&v.default?o("div",null,o("div",{class:`${y}-progress-text`},v.default())):null)}}}),Le=Object.assign(Object.assign({},le.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),St=O({name:"Progress",props:Le,setup(e){const v=_(()=>e.indicatorPlacement||e.indicatorPosition),m=_(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:g,inlineThemeDisabled:i}=ve(e),l=le("Progress","-progress",Te,be,e,g),$=_(()=>{const{status:f}=e,{common:{cubicBezierEaseInOut:u},self:{fontSize:h,fontSizeCircle:y,railColor:C,railHeight:a,iconSizeCircle:n,iconSizeLine:r,textColorCircle:k,textColorLineInner:d,textColorLineOuter:p,lineBgProcessing:s,fontWeightCircle:D,[Q("iconColor",f)]:T,[Q("fillColor",f)]:A}}=l.value;return{"--n-bezier":u,"--n-fill-color":A,"--n-font-size":h,"--n-font-size-circle":y,"--n-font-weight-circle":D,"--n-icon-color":T,"--n-icon-size-circle":n,"--n-icon-size-line":r,"--n-line-bg-processing":s,"--n-rail-color":C,"--n-rail-height":a,"--n-text-color-circle":k,"--n-text-color-line-inner":d,"--n-text-color-line-outer":p}}),c=i?xe("progress",_(()=>e.status[0]),$,e):void 0;return{mergedClsPrefix:g,mergedIndicatorPlacement:v,gapDeg:m,cssVars:i?void 0:$,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{type:e,cssVars:v,indicatorTextColor:m,showIndicator:g,status:i,railColor:l,railStyle:$,color:c,percentage:f,viewBoxWidth:u,strokeWidth:h,mergedIndicatorPlacement:y,unit:C,borderRadius:a,fillBorderRadius:n,height:r,processing:k,circleGap:d,mergedClsPrefix:p,gapDeg:s,gapOffsetDegree:D,themeClass:T,$slots:A,onRender:E}=this;return E==null||E(),o("div",{class:[T,`${p}-progress`,`${p}-progress--${e}`,`${p}-progress--${i}`],style:v,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":f,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?o(Ge,{clsPrefix:p,status:i,showIndicator:g,indicatorTextColor:m,railColor:l,fillColor:c,railStyle:$,offsetDegree:this.offsetDegree,percentage:f,viewBoxWidth:u,strokeWidth:h,gapDegree:s===void 0?e==="dashboard"?75:0:s,gapOffsetDegree:D,unit:C},A):e==="line"?o(We,{clsPrefix:p,status:i,showIndicator:g,indicatorTextColor:m,railColor:l,fillColor:c,railStyle:$,percentage:f,processing:k,indicatorPlacement:y,unit:C,fillBorderRadius:n,railBorderRadius:a,height:r},A):e==="multiple-circle"?o(qe,{clsPrefix:p,strokeWidth:h,railColor:l,fillColor:c,railStyle:$,viewBoxWidth:u,percentage:f,showIndicator:g,circleGap:d},A):null)}});function Oe(e,v){let m;return(...g)=>{const i=()=>{clearTimeout(m),e(...g)};clearTimeout(m),m=setTimeout(i,v)}}const Ke={class:"mb-2 text-xs text-neutral-400 font-bold"},je={class:"ml-1"},Ee=["onClick"],Ue={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},Ve={key:1},He={key:0,class:"absolute z-10 flex visible right-1"},Xe=["onClick"],Ye={class:"p-1"},Fe={key:0,class:"p-1"},Je={class:"p-1"},H=O({__name:"ListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup(e,{emit:v}){const m=e,g=m.dataSources,i=F();async function l(n){v("select",n)}function $(n,r,k){k==null||k.stopPropagation(),n.isEdit=r}async function c(n,r){r==null||r.stopPropagation(),await i.updateGroupInfo({isSticky:!n.isSticky,groupId:n.uuid}),await i.queryMyGroup()}async function f(n,r){r==null||r.stopPropagation(),v("delete",n)}const u=Oe(f,600);async function h(n){const{uuid:r,title:k}=n;n.isEdit=!1,await i.updateGroupInfo({groupId:r,title:k}),await i.queryMyGroup()}async function y(n,r){r==null||r.stopPropagation(),r.key==="Enter"&&h(n)}function C(n,r){r==null||r.stopPropagation(),h(n)}function a(n){return i.active===n}return(n,r)=>{var k;return x(),P(X,null,[w("p",Ke,[R(W(m.title)+" ",1),w("span",je,"("+W((k=t(g))==null?void 0:k.length)+")",1)]),(x(!0),P(X,null,ke(t(g),d=>(x(),P("div",{key:`${d.uuid}`},[w("a",{class:we(["relative flex items-center gap-3 px-3 py-2.5 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]",a(d.uuid)&&["border-[#3076FD]","bg-neutral-100","text-[#3076FD]","dark:bg-[#24272e]","dark:border-[#3076fd]","pr-20"]]),onClick:p=>l(d)},[w("span",null,[b(t(I),{icon:d.isSticky?"ri:pushpin-2-line":d.appId?"icon-park-outline:application-one":"eos-icons:typing"},null,8,["icon"])]),w("div",Ue,[d.isEdit?(x(),j(t(Se),{key:0,value:d.title,"onUpdate:value":p=>d.title=p,size:"tiny",onKeypress:p=>y(d,p)},null,8,["value","onUpdate:value","onKeypress"])):(x(),P("span",Ve,W(d.title),1))]),a(d.uuid)?(x(),P("div",He,[d.isEdit?(x(),P("button",{key:0,class:"p-1",onClick:p=>C(d,p)},[b(t(I),{icon:"ri:save-line"})],8,Xe)):(x(),P(X,{key:1},[w("button",Ye,[b(t(I),{icon:d.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:p=>c(d,p)},null,8,["icon","onClick"])]),d.appId?B("",!0):(x(),P("button",Fe,[b(t(I),{icon:"ri:edit-line",onClick:p=>$(d,!0,p)},null,8,["onClick"])])),b(t(Ne),{placement:"bottom",onPositiveClick:p=>t(u)(d,p)},{trigger:L(()=>[w("button",Je,[b(t(I),{icon:"ri:delete-bin-line"})])]),default:L(()=>[R(" "+W(n.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):B("",!0)],10,Ee)]))),128))],64)}}}),Qe={class:"flex flex-col gap-3 text-sm"},Ze={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},et=O({__name:"List",setup(e){const{isMobile:v}=ce(),m=ue(),g=$e(),i=de(),l=F(),$=pe(),c=N(100),f=_(()=>l.groupList),u=_(()=>l.groupKeyWord);U(f,()=>c.value=c.value+1),U(u,()=>c.value=c.value+1),_(()=>$.isLogin);function h(s){const T=new Date(s).getTime()+8*60*60*1e3;return new Date(T).getTime()}const y=new Date().setHours(0,0,0,0),C=_(()=>f.value.filter(s=>u.value?s.title.includes(u.value)&&s.isSticky:s.isSticky)),a=_(()=>f.value.filter(s=>u.value?s.title.includes(u.value)&&!s.isSticky&&s.appId:!s.isSticky&&s.appId)),n=_(()=>f.value.filter(s=>u.value?s.title.includes(u.value)&&!s.isSticky&&!s.appId&&h(s.createdAt)>=y:!s.isSticky&&!s.appId&&h(s.createdAt)>=y)),r=_(()=>f.value.filter(s=>u.value?s.title.includes(u.value)&&!s.isSticky&&!s.appId&&h(s.createdAt)<y:!s.isSticky&&!s.appId&&h(s.createdAt)<y));async function k(s){const{uuid:D}=s;p(D)||(await l.setActiveGroup(D),g.name!=="Chat"&&m.push("/chat"),v.value&&i.setSiderCollapsed(!0))}async function d(s){event==null||event.stopPropagation(),await l.deleteGroup(s),await l.queryMyGroup(),v.value&&i.setSiderCollapsed(!0)}function p(s){return l.active===s}return Ce(()=>{l.queryMyGroup()}),(s,D)=>(x(),j(t(_e),{class:"px-4"},{default:L(()=>[w("div",Qe,[t(f).length?(x(),P(X,{key:1},[t(C).length?(x(),j(H,{key:1e3+c.value,title:"置顶","data-sources":t(C),onSelect:k,onDelete:d},null,8,["data-sources"])):B("",!0),t(a).length?(x(),j(H,{key:2e3+c.value,title:"应用分类组","data-sources":t(a),onSelect:k,onDelete:d},null,8,["data-sources"])):B("",!0),t(n).length?(x(),j(H,{key:3e3+c.value,title:"今天","data-sources":t(n),onSelect:k,onDelete:d},null,8,["data-sources"])):B("",!0),t(r).length?(x(),j(H,{key:4e3+c.value,title:"其他","data-sources":t(r),onSelect:k,onDelete:d},null,8,["data-sources"])):B("",!0)],64)):(x(),P("div",Ze,[b(t(I),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),w("span",null,W(s.$t("common.noData")),1)]))])]),_:1}))}}),tt={class:"flex flex-col h-full flex-1 min-h-0"},rt={class:"flex items-center space-x-2 bg-white dark:bg-gray-900 h-12 px-3 border-b border-t-gray-100 dark:border-b dark:border-b-gray-800 text-lg mb-2"},ot={class:"flex-1 relative"},it={class:"flex-1 relative"},st={class:"flex-1 min-h-0 pb-4 overflow-hidden"},at={class:"p-4 border-t dark:border-t-neutral-800 flex flex-col"},nt={key:0,class:"my-1 flex items-center select-none"},lt={key:1,class:"my-1 flex items-center select-none"},ct={key:2,class:"my-1 flex items-center select-none"},ut={key:3,class:"my-1 flex items-center select-none"},dt={key:4,class:"my-1 flex items-center select-none"},pt={key:5,class:"my-1 flex items-center select-none"},gt={class:"flex justify-between my-3"},ft=w("span",{class:"mr-2"},"公告栏",-1),ht=w("span",{class:"mr-3"},"工作台",-1),yt={class:"flex justify-betweenx"},mt=w("span",{class:"mr-3"},"清空全部非置顶会话",-1),wt=O({__name:"index",setup(e){const v=Pe(),m=ue(),g=de(),i=F(),l=pe();Ie();const $=N(null),c=N(null),f=_(()=>l.userBalance),u=Be(),h=_(()=>i==null?void 0:i.activeModelKeyDeductType),y=_(()=>i==null?void 0:i.activeModelKeyPrice),C=N(0),a=N(0),n=N(0),r=N(0),k=N(!1),d=N(null);U(()=>l.userBalance.useModel3Token,(M,z)=>{var G;C.value=z||0,a.value=M||0,(G=$.value)==null||G.play()},{immediate:!0,flush:"post"}),U(()=>l.userBalance.useModel4Token,(M,z)=>{var G;n.value=z||0,r.value=M||0,(G=c.value)==null||G.play()},{immediate:!0,flush:"post"});const{isMobile:p}=ce(),s=N(!1),D=_(()=>g.siderCollapsed),T=N("");function A(M){const z=M.target.value;T.value=z,i.setGroupKeyWord(z)}function E(){k.value=!1}function ge(){m.push("/role")}async function fe(){try{s.value=!0,await i.addNewChatGroup(),await i.queryMyGroup(),s.value=!1,p.value&&g.setSiderCollapsed(!0)}catch{s.value=!1}}async function he(){u.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await i.delAllGroup()}})}function J(){g.setSiderCollapsed(!D.value)}const ye=_(()=>p.value?{position:"fixed",zIndex:50}:{}),me=_(()=>p.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return U(p,M=>{g.setSiderCollapsed(M)},{immediate:!0,flush:"post"}),(M,z)=>(x(),P("div",null,[b(t(Re),{collapsed:t(D),"collapsed-width":0,width:260,"show-trigger":t(p)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:ee(t(ye)),onUpdateCollapsed:J},{default:L(()=>[w("div",{class:"flex flex-col h-full bg-[#fafbfc] dark:bg-[#18181c]",style:ee(t(me))},[w("main",tt,[w("div",rt,[w("div",ot,[w("div",it,[b(t(I),{icon:"material-symbols-light:search",class:"pointer-events-none absolute inset-y-0 left-0 h-full w-6 h-6 text-gray-400"}),Z(w("input",{ref_key:"searchRef",ref:d,"onUpdate:modelValue":z[0]||(z[0]=G=>T.value=G),type:"text",placeholder:"搜索历史对话",class:"block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-700 placeholder:text-gray-400 sm:text-sm dark:bg-gray-900 dark:text-gray-400",onBlur:E,onInput:A},null,544),[[De,T.value]])])]),w("button",{type:"button",class:"rounded-md p-2 text-sm focus-visible:outline bg-white text-gray-400 dark:bg-gray-800",onClick:fe},[b(t(I),{icon:"material-symbols-light:add",class:"h-6 w-6"})])]),w("div",st,[b(et)]),w("div",at,[t(h)===1?(x(),P("div",nt,[b(t(I),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),R("普通额度： "+W(`${t(f).sumModel3Count||0} 积分`),1)])):B("",!0),t(h)===1?(x(),P("div",lt,[b(t(I),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),R(" 我已使用： "),b(t(te),{ref_key:"model3AnimationInstRef",ref:$,from:C.value,to:a.value},null,8,["from","to"]),R(" Token ")])):B("",!0),t(h)===1?(x(),P("div",ct,[b(t(I),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),R(" 模型费用： "+W(`${t(y)||0}积分 / 次对话`),1)])):B("",!0),t(h)===2?(x(),P("div",ut,[b(t(I),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),R("我已使用： "),b(t(te),{ref_key:"model4AnimationInstRef",ref:c,from:n.value,to:r.value},null,8,["from","to"]),R(" Token ")])):B("",!0),t(h)===2?(x(),P("div",dt,[b(t(I),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),R("高级额度： "+W(`${t(f).sumModel4Count||0} 积分`),1)])):B("",!0),t(h)===2?(x(),P("div",pt,[b(t(I),{icon:"mingcute:bill-line",class:"ml-2 mr-2 text-base"}),R("模型费用： "+W(`${t(y)||0}积分 / 次对话`),1)])):B("",!0),w("div",gt,[b(t(Y),{type:"tertiary",size:"small",onClick:z[1]||(z[1]=G=>t(v).updateNoticeDialog(!0))},{default:L(()=>[b(t(I),{icon:"mdi:notice-board",class:"ml-2 mr-2 text-sm"}),ft]),_:1}),b(t(Y),{type:"tertiary",size:"small",onClick:ge},{default:L(()=>[b(t(I),{icon:"ri:emoji-sticker-line",class:"ml-2 mr-2 text-sm"}),ht]),_:1})]),w("div",yt,[b(t(Y),{type:"tertiary",size:"small",style:{width:"100%"},onClick:he},{default:L(()=>[b(t(I),{icon:"ant-design:delete-outlined",class:"ml-2 mr-2 text-sm"}),mt]),_:1})])])])],4)]),_:1},8,["collapsed","show-trigger","style"]),t(p)?Z((x(),P("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:J},null,512)),[[ze,!t(D)]]):B("",!0)]))}});export{St as N,wt as _};
