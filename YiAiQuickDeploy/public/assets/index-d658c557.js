import{d as ne,o as r,c as p,B as fe,u as de,g as me,b as ue,r as v,e as L,f as ve,w as oe,h as pe,i as ge,a as e,n as V,F as D,j as P,k as c,l as h,m as a,T as _e,t as M,p as B,q as ee,_ as te,N as se,s as N,v as xe,C as ke,D as we,E as I,G as ye,H as be,A as Le,I as $e,z as Ce,J as Ie,L as De,K as re,M as ie,O as Pe,P as Me}from"./index-df8775ab.js";import{_ as Ne}from"./titleBar.vue_vue_type_script_setup_true_lang-ed7cfa0b.js";import{t as Be}from"./throttle-5584dbda.js";import{c as Ee}from"./index-c94da121.js";import{N as ze}from"./InputGroup-36aa208e.js";const je={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Se=fe('<path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></rect><ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></ellipse><path d="M342.15 372.17L255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path>',5),We=[Se],Oe=ne({name:"ImagesOutline",render:function($,f){return r(),p("svg",je,We)}}),Te={class:"min-h-full overflow-hidden flex flex-col"},Ae={class:"flex-1 min-h-full p-4 relative"},He=["id"],Ue=["id","src","onLoad","onError","onClick"],qe={class:"menu p-2 text-[#cbd5e1]"},Re={class:"prompt"},Ve={class:"flex justify-end items-end space-x-2"},Fe=["onClick"],Ge={class:"text-sm dark:text-slate-400"},Je=e("span",null,"画同款",-1),Ke=["onClick"],Qe={class:"text-sm dark:text-slate-400"},Xe=e("span",null,"使用当前画同款",-1),Ye=["onClick"],Ze={class:"text-sm dark:text-slate-400"},et=e("span",null,"复制提示词",-1),tt=e("div",{id:"footer",class:"w-full absolute bottom-[350px]"},null,-1),ce=ne({__name:"index",props:{dataList:null,scaleWidth:null,isDrawLike:{type:Boolean},usePropmpt:{type:Boolean},copyPropmpt:{type:Boolean},gap:{default:5},preOrigin:{type:Boolean}},emits:["loadMore","usePropmptDraw"],setup(x,{emit:$}){var n;const f=x,E=de(),k=(n=me())==null?void 0:n.appContext.config.globalProperties.$viewerApi,z=ue(),j=v({}),w=v(0),d=v(160),g=v(0),y=v([]),b=v(null),S=v(0),W=L(()=>E.isLogin),O=L(()=>f.scaleWidth?Number(f.scaleWidth)*2+f.gap+150:150),F=ve();function T(){G(),C();const s=g.value,o=d.value,t=[];f.dataList.forEach((_,i)=>{const{width:Q,height:X}=_.fileInfo,Y=o/Q,Z=X*Y+f.gap+w.value,R=j.value[_.id];if(t.length<s)R.style.top="0px",R.style.left=`${(o+f.gap)*i}px`,t.push(Z);else{const ae=Math.min.apply(null,t),le=t.findIndex(he=>he===ae);R.style.top=`${ae+0}px`,R.style.left=`${le*(d.value+f.gap)}px`,t[le]+=Z}}),S.value=Math.max(...t)+100}function u(s,o){s&&o&&(j.value[o.id]=s)}function G(){const{showName:s=0,showOther:o=0}={};w.value=[s,o].filter(t=>t).length*15}oe(()=>f.scaleWidth,s=>{m()}),oe(()=>f.dataList,s=>{s&&xe(()=>{m()})},{immediate:!0});function C(){if(!b.value)return;const s=b.value.clientWidth;g.value=Math.floor(s/O.value);const o=s-g.value*O.value,t=(g.value-1)*f.gap;o-t<0&&(g.value-=1),d.value=Math.floor((s-t)/g.value)}function A(s,o){y.value.push(o.id)}function H(s,o){y.value.push(o.id)}function U(s){if(!W.value)return E.setLoginDialog(!0);const{prompt:o}=s;Ee({text:o}),z.success("复制prompt成功")}function q(s){F.push(`/midjourney?mjId=${s.id}`)}function J(s){const{prompt:o}=s;$("usePropmptDraw",o)}function K(s){const{fileInfo:o}=s,{cosUrl:t}=o;k({options:{},images:[t]})}const l=L(()=>s=>{const{fileInfo:o}=s,{width:t,height:_}=o;return _/(t/d.value)}),m=Be(function(){T()},200);return pe(async()=>{window.addEventListener("resize",m);const s=document.getElementById("footer");new IntersectionObserver((t,_)=>{t.forEach(i=>{i.isIntersecting&&$("loadMore")})}).observe(s)}),ge(()=>{window.removeEventListener("resize",m)}),(s,o)=>(r(),p("div",Te,[e("div",Ae,[e("div",{id:"wapper",ref_key:"wapperRef",ref:b,class:"wapper",style:V({height:`${S.value}px`})},[(r(!0),p(D,null,P(x.dataList,(t,_)=>(r(),p("div",{id:t.id,key:_,ref_for:!0,ref:i=>u(i,t),class:"wapper-item",style:V({width:`${d.value}px`})},[c(_e,{name:"img",css:!0},{default:h(()=>[e("img",{id:t.id,class:"item-file rounded-sm",style:V({width:`${d.value}px`,height:`${a(l)(t)}px`}),src:x.preOrigin?t.fileInfo.cosUrl:t.fileInfo.thumbImg,loading:"lazy",onLoad:i=>A(i,t),onError:i=>H(i,t),onClick:i=>K(t)},null,44,Ue)]),_:2},1024),e("div",qe,[e("div",Re,M(t.fullPrompt),1),e("div",Ve,[x.isDrawLike?(r(),B(a(se),{key:0,trigger:"hover"},{trigger:h(()=>[e("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:ee(i=>q(t),["stop"])},[e("span",Ge,[c(a(te),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Fe)]),default:h(()=>[Je]),_:2},1024)):N("",!0),x.usePropmpt?(r(),B(a(se),{key:1,trigger:"hover"},{trigger:h(()=>[e("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:ee(i=>J(t),["stop"])},[e("span",Qe,[c(a(te),{icon:"fluent:draw-image-24-regular",class:"text-sm"})])],8,Ke)]),default:h(()=>[Xe]),_:2},1024)):N("",!0),x.copyPropmpt?(r(),B(a(se),{key:2,trigger:"hover"},{trigger:h(()=>[e("button",{class:"flex h-5 w-8 items-center justify-center rounded border transition hover:bg-[#666161] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:ee(i=>U(t),["stop"])},[e("span",Ze,[c(a(te),{icon:"tabler:copy",class:"text-sm"})])],8,Ye)]),default:h(()=>[et]),_:2},1024)):N("",!0)])]),y.value.includes(t.id)?N("",!0):(r(),p("div",{key:0,class:"item-loading",style:V({width:`${d.value}px`,height:`${a(l)(t)}px`})},null,4))],12,He))),128)),tt],4)])]))}});const st={class:"flex my-5"},ot=e("p",{class:"mx-2 text-[#707384] select-none flex-shrink-0"}," Prompt示例： ",-1),nt={class:"text-[#707384]"},at=e("h4",{class:"text-base mb-2"}," 参数设置 ",-1),lt={class:"flex items-center mt-5"},rt=e("span",{class:"mr-2 inline-block w-20 flex-shrink-0"},"图片尺寸:",-1),it=["onClick"],ct={class:"flex items-center mt-5"},dt=e("span",{class:"mr-2 inline-block w-20 flex-shrink-0"},"图片质量:",-1),ut=["onClick"],pt=e("div",{class:"flex mt-5"},[e("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 修饰词参考 "),e("p",{class:"text-[#707384]"}," 您可参考或选用下列各类修饰词丰富您的输入文本，尝试生成更加多样的图像，更多修饰词可参考 Prompt指南 或 自由输入 探索大模型作画更多未知能力 ")],-1),ht={class:"flex mt-5"},ft=e("h4",{class:"text-base mr-2 w-20 flex-shrink-0"}," 图像类型 ",-1),mt=["onClick"],vt={key:0,class:"mt-8 pb-10"},gt=e("div",{class:"flex justify-center"}," ----------- 正在生成中、图片越大数量越多所需时间越多、预计25S ----------- ",-1),_t={class:"flex flex-wrap mt-8"},xt={key:0,class:"min-h-screen"},kt={key:0,class:"min-h-screen"},Ct=ne({__name:"index",setup(x){const $=L(()=>z.theme),f=de(),E=L(()=>$.value==="dark"?"#fff":"#000"),{isMobile:k}=ke(),z=we(),j=L(()=>f.isLogin),w=v(0),d=v(!1),g=ue(),y=v([]),b=v([]),S=L(()=>z.theme==="dark");oe(j,async(l,m)=>{l&&!m&&C()});const W=["超级逼真的未来世界，真实照片，虚幻引擎","帅哥，二次元，赛博朋克风格，精致脸庞","兔子，可爱，高质量，高品质"],O=[{label:"1024x1024",value:"1024x1024"},{label:"1024x1792",value:"1024x1792"},{label:"1792x1024",value:"1792x1024"}],F=[{label:"标准(2积分)",value:"standard"},{label:"优质(4积分)",value:"hd"}],T=["古风","二次元","写实照片","油画","水彩画","油墨画","黑白雕版画","雕塑","3D模型","手绘草图","炭笔画","极简线条画","电影质感","机械感"],u=v({prompt:"",n:1,size:"1024x1024",quality:"standard"});function G(){w.value=w.value+1>=W.length?0:w.value+1}async function C(){const l=await be({model:"dall-e-3"});l.success&&(y.value=q(l.data))}async function A(){const l=await ye({size:999,rec:1,model:"dall-e-3"});if(!l.success)return g.error(l.message);b.value=q(l.data.rows)}function H(){}function U(l){u.value.prompt=l}function q(l){if(!l)return[];const m=[];return l.forEach(n=>{const{id:s,fileInfo:o,prompt:t,thumbImg:_}=n;let i=null;if(typeof o=="string")try{i=JSON.parse(o)}catch{i={}}else i=o||{};const{width:Q,height:X,cosUrl:Y}=i;m.push({id:s,prompt:t,fullPrompt:t,fileInfo:{thumbImg:_,width:Q,height:X,cosUrl:Y}})}),m.filter(n=>n.fileInfo&&n.fileInfo.width)}async function J(){if(!u.value.prompt)return g.error("请输入您想要生成的图片描述信息！");try{d.value=!0,await Me(u.value),g.success("生成图片成完成、前往我的生成查看图片！"),await C(),d.value=!1}catch{d.value=!1}}function K(l){l==="mine"&&C(),l==="all"&&A()}return pe(()=>{A()}),(l,m)=>(r(),p("div",{class:I(["main min-h-screen bg-center dark:bg-[#2F2E34]",[a(S)?"darkBg":"lightBg",a(k)?"px-3":"px-10"]])},[c(a(Ne),{title:"DALL-E绘画",des:"基于DALL-E的绘画、速度较快、同步等待到结束后在我的绘画中可以看到结果！",padding:a(k)?2:20},null,8,["padding"]),e("div",{class:I(a(k)?["px-2"]:["px-20"])},[e("div",st,[e("b",{class:"text-primary cursor-pointer select-none flex-shrink-0",onClick:G},"换示例"),ot,e("p",nt,M(W[w.value]),1)]),c(a(ze),null,{default:h(()=>[c(a(Le),{value:u.value.prompt,"onUpdate:value":m[0]||(m[0]=n=>u.value.prompt=n),disabled:d.value,clearable:"",placeholder:"请输入您想要生成的图片描述信息、可以参考上面的示例文字、我们将会对其转为英文绘画、请知悉！"},null,8,["value","disabled"]),c(a($e),{type:"success",loading:d.value,disabled:d.value,onClick:J},{icon:h(()=>[c(a(Ce),null,{default:h(()=>[c(a(Oe))]),_:1})]),default:h(()=>[Ie(" 生成图片 ")]),_:1},8,["loading","disabled"])]),_:1}),e("div",{class:I(["mt-5 py-4 bg-[#e7eaf380] dark:bg-[#2c2c32] rounded-lg",a(k)?"px-0":"px-4"])},[at,e("div",lt,[rt,e("div",null,[(r(),p(D,null,P(O,n=>e("span",{key:n.value,class:I(["rounded ml-2 select-none cursor-pointer inline-block mb-2",[n.value===u.value.size?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"],a(k)?"px-1.5 py-0.5":"px-3 py-1"]]),onClick:s=>u.value.size=n.value},M(n.label),11,it)),64))])]),e("div",ct,[dt,e("div",null,[(r(),p(D,null,P(F,n=>e("span",{key:n.value,class:I(["py-0.5 px-2.5 rounded ml-2 select-none cursor-pointer inline-block mb-2",n.value===u.value.quality?["text-primary","bg-[#0d6efd1c]"]:["bg-[#bfc4d033]"]]),onClick:s=>u.value.quality=n.value},M(n.label),11,ut)),64))])]),pt,e("div",ht,[ft,e("div",null,[(r(),p(D,null,P(T,(n,s)=>e("span",{key:n,class:"cursor-pointer hover:text-primary",onClick:o=>u.value.prompt+=u.value.prompt?`，${n}`:n},M(`${n} ${s+1===T.length?"":"、"}`),9,mt)),64))])])],2),d.value?(r(),p("div",vt,[gt,e("div",_t,[(r(!0),p(D,null,P(u.value.n,n=>(r(),p("div",{class:"w-44 h-44 border rounded-md relative ml-4 mt-4",key:n},[c(De,{"text-color":a(E),words:["图","片","绘","制","中"]},null,8,["text-color"])]))),128))])])):N("",!0),c(a(Pe),{type:"line",animated:"",class:"mt-5","onUpdate:value":K},{default:h(()=>[c(a(re),{name:"all",tab:"公共生成"},{default:h(()=>[b.value.length?(r(),p("div",xt,[c(ce,{onLoadMore:H,usePropmpt:"",gap:8,preOrigin:"",onUsePropmptDraw:U,dataList:b.value,scaleWidth:50},null,8,["dataList"])])):(r(),B(a(ie),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))]),_:1}),c(a(re),{name:"mine",tab:"我的生成"},{default:h(()=>[y.value.length?(r(),p("div",kt,[c(ce,{onLoadMore:H,usePropmpt:"",gap:8,preOrigin:"",onUsePropmptDraw:U,dataList:y.value,scaleWidth:50},null,8,["dataList"])])):(r(),B(a(ie),{key:1,size:"huge",class:"mt-20",description:"暂无数据哟~"}))]),_:1})]),_:1})],2)],2))}});export{Ct as default};
