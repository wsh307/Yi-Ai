
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as I}from"./index-8b6b646b.js";import{a as m}from"./config-68c3151c.js";import{d as S,Q as T,r as p,x as U,o as j,c as q,e,f as o,a as k,k as B,E as b,h as n,q as g}from"./index-a62c661f.js";const E={class:"flex justify-between"},N=k("b",null,"系统基础设置",-1),M=S({__name:"base",setup(O){const t=T({baiduCode:"",baiduSiteId:"",baiduToken:""}),x=p({}),c=p();async function _(){const a=await m.queryConfig({keys:["baiduCode","baiduSiteId","baiduToken"]});Object.assign(t,a.data)}function y(){var a;(a=c.value)==null||a.validate(async l=>{if(l){try{await m.setConfig({settings:C(t)}),b.success("变更配置信息成功")}catch{}_()}else b.error("请填写完整信息")})}function C(a){return Object.keys(a).map(l=>({configKey:l,configVal:a[l]}))}return U(()=>{_()}),(a,l)=>{const f=n("el-alert"),V=I,w=n("el-button"),s=n("el-input"),u=n("el-form-item"),i=n("el-col"),r=n("el-row"),h=n("el-form"),v=n("el-card");return j(),q("div",null,[e(V,null,{default:o(()=>[e(f,{closable:!1,"show-icon":"",title:"基础设置说明",description:"百度统计默认使用的是demo数据、用于demo展示、最终数据在首页程呈现、请查看部署文档或前往百度统计申请自己的专属key与token、这是免费的服务、如果您不想使用将下面设置留空就行。",type:"success"})]),_:1}),e(v,{style:{margin:"20px"}},{header:o(()=>[k("div",E,[N,e(w,{class:"button",text:"",onClick:y},{default:o(()=>[B(" 保存设置 ")]),_:1})])]),default:o(()=>[e(h,{ref_key:"formRef",ref:c,rules:x.value,model:t,"label-width":"120px"},{default:o(()=>[e(r,null,{default:o(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(u,{label:"百度统计siteId",prop:"baiduSiteId"},{default:o(()=>[e(s,{modelValue:t.baiduSiteId,"onUpdate:modelValue":l[0]||(l[0]=d=>t.baiduSiteId=d),placeholder:"请填写百度site_id、不会请查看部署文档！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(u,{label:"百度统计token",prop:"baiduToken"},{default:o(()=>[e(s,{modelValue:t.baiduToken,"onUpdate:modelValue":l[1]||(l[1]=d=>t.baiduToken=d),placeholder:"请填写百度access_token、不会请查看部署文档！",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(i,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(u,{label:"百度统计代码",prop:"baiduCode"},{default:o(()=>[e(s,{modelValue:t.baiduCode,"onUpdate:modelValue":l[2]||(l[2]=d=>t.baiduCode=d),placeholder:"填写百度统计代码可统计每日访问量详情，如果没有使用用请查看详细文档！",type:"textarea",rows:12,clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof g=="function"&&g(M);export{M as default};
