
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as H}from"./index-8b6b646b.js";import{a as v}from"./config-68c3151c.js";import{d as B,Q as K,r as y,x as S,o as T,c as L,e,f as l,a as i,k as P,E as g,h as n,q as V}from"./index-a62c661f.js";const W={class:"flex justify-between"},J=i("b",null,"MJ参数设置",-1),q=i("h4",null,"绘图代理设置",-1),E=i("h4",null,"绘图可选设置",-1),Q=i("div",{style:{width:"250px"}}," 隐藏客户端绘图页面的不需要的元素模块、隐藏后用户不可选择无法选中模块 ",-1),F=i("div",{style:{width:"250px"}}," 客户端绘图页面隐藏掉工作中模块、将不再展示给用户此模块。 ",-1),O=i("div",{style:{width:"250px"}}," 默认会存储图片到配置的存储中、如果开启此选择则表示不保存原图到我们配置的存储上、那么则必须配置一个图片反代地址、直接反代访问原始图片、这样可以进一步节省空间、需要您部署mj-proxy项目并填写基础地址即可！ ",-1),R=B({__name:"proxy",setup(A){const o=K({mjTimeoutMs:"500000",mjProxyUrl:"",mjKey:"",mjLimitCount:"2",mjNotSaveImg:"0",mjHideNotBlock:"0",mjHideWorkIn:"0"}),h=y({}),j=y();async function x(){const m=await v.queryConfig({keys:["mjTimeoutMs","mjKey","mjProxyUrl","mjLimitCount","mjNotSaveImg","mjHideNotBlock","mjHideWorkIn"]});Object.assign(o,m.data)}function k(){var m;(m=j.value)==null||m.validate(async t=>{if(t){try{await v.setConfig({settings:w(o)}),g.success("变更配置信息成功")}catch{}x()}else g.error("请填写完整信息")})}function w(m){return Object.keys(m).map(t=>({configKey:t,configVal:m[t]}))}return S(()=>{x()}),(m,t)=>{const b=n("el-alert"),C=H,N=n("el-button"),r=n("el-input"),d=n("el-form-item"),s=n("el-col"),u=n("el-row"),U=n("el-divider"),c=n("el-switch"),_=n("QuestionFilled"),p=n("el-icon"),f=n("el-tooltip"),I=n("el-form"),M=n("el-card");return T(),L("div",null,[e(C,null,{default:l(()=>[e(b,{closable:!1,"show-icon":"",title:"MJ参数说明",description:"如果您是海外服务器则不强制开启代理、反之则需要开启代理、代理为系统配套项目、非常规代理、如果您想自己搭建代理请查看教程、如果您想使用系统提供的默认代理、那么选择开启代理并且不填写代理地址即可使用默认地址、如果想获取默认地址请在售后群获取地址！",type:"success"})]),_:1}),e(M,{style:{margin:"20px"}},{header:l(()=>[i("div",W,[J,e(N,{class:"button",text:"",onClick:k},{default:l(()=>[P(" 保存设置 ")]),_:1})])]),default:l(()=>[e(I,{ref_key:"formRef",ref:j,rules:h.value,model:o,"label-width":"150px"},{default:l(()=>[q,e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"请填写代理地址",prop:"mjProxyUrl","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjProxyUrl,"onUpdate:modelValue":t[0]||(t[0]=a=>o.mjProxyUrl=a),placeholder:"请填写代理地址、详细使用请访问教程！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"MJ 绘图 Key",prop:"mjKey","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjKey,"onUpdate:modelValue":t[1]||(t[1]=a=>o.mjKey=a),placeholder:"请填 MJ 绘图使用的 Key",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"绘画超时时间设置ms",prop:"mjTimeoutMs","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjTimeoutMs,"onUpdate:modelValue":t[2]||(t[2]=a=>o.mjTimeoutMs=a),placeholder:"请设置绘画超时时间、单位为ms、根据慢速快速定义（后续优化逻辑）",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"单人绘图并发限制",prop:"mjLimitCount","label-width":"150"},{default:l(()=>[e(r,{modelValue:o.mjLimitCount,"onUpdate:modelValue":t[3]||(t[3]=a=>o.mjLimitCount=a),placeholder:"单人同时绘制限制数量、同一时间最多可以绘制几张！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(U),E,e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏不需要元素模块",prop:"mjHideNotBlock","label-width":"150"},{default:l(()=>[e(c,{modelValue:o.mjHideNotBlock,"onUpdate:modelValue":t[4]||(t[4]=a=>o.mjHideNotBlock=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[Q]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"隐藏工作中内容模块",prop:"mjHideWorkIn","label-width":"150"},{default:l(()=>[e(c,{modelValue:o.mjHideWorkIn,"onUpdate:modelValue":t[5]||(t[5]=a=>o.mjHideWorkIn=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[F]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(s,{xs:24,md:20,lg:15,xl:12},{default:l(()=>[e(d,{label:"不存储图片",prop:"mjNotSaveImg"},{default:l(()=>[e(c,{modelValue:o.mjNotSaveImg,"onUpdate:modelValue":t[6]||(t[6]=a=>o.mjNotSaveImg=a),"active-value":"1","inactive-value":"0"},null,8,["modelValue"]),e(f,{class:"box-item",effect:"dark",placement:"right"},{content:l(()=>[O]),default:l(()=>[e(p,{class:"ml-3 cursor-pointer"},{default:l(()=>[e(_)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof V=="function"&&V(R);export{R as default};
