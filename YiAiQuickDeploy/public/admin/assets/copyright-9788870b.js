
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as v}from"./index-8b6b646b.js";import{a as d}from"./config-68c3151c.js";import{d as T,Q as q,r as m,x as j,o as B,c as E,e,f as t,a as h,k as N,E as g,h as n,q as y}from"./index-a62c661f.js";const M={class:"flex justify-between"},O=h("b",null,"底部版权设置",-1),R=T({__name:"copyright",setup(A){const r=q({copyrightTitle:"",copyrightUrl:""}),b=m({copyrightUrl:[{required:!0,trigger:"blur",message:"请填写底部版权文字内容"}],copyrightTitle:[{required:!0,trigger:"blur",message:"请填写点击底部版本跳转的地址"}]}),s=m();async function c(){const l=await d.queryConfig({keys:["copyrightUrl","copyrightTitle"]});Object.assign(r,l.data)}function x(){var l;(l=s.value)==null||l.validate(async o=>{if(o){try{await d.setConfig({settings:V(r)}),g.success("变更配置信息成功")}catch{}c()}else g.error("请填写完整信息")})}function V(l){return Object.keys(l).map(o=>({configKey:o,configVal:l[o]}))}return j(()=>{c()}),(l,o)=>{const i=n("el-alert"),U=v,w=n("el-button"),u=n("el-input"),p=n("el-form-item"),_=n("el-col"),f=n("el-row"),C=n("el-form"),k=n("el-card");return B(),E("div",null,[e(U,null,{default:t(()=>[e(i,{closable:!1,"show-icon":"",title:"底部版本参数说明",description:"当前版本的后台版权信息、文字用于展示、地址用于点击文字的跳转地址",type:"success"})]),_:1}),e(k,{style:{margin:"20px"}},{header:t(()=>[h("div",M,[O,e(w,{class:"button",text:"",onClick:x},{default:t(()=>[N(" 保存设置 ")]),_:1})])]),default:t(()=>[e(C,{ref_key:"formRef",ref:s,rules:b.value,model:r,"label-width":"130px"},{default:t(()=>[e(f,null,{default:t(()=>[e(_,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(p,{label:"底部版权文字",prop:"copyrightTitle"},{default:t(()=>[e(u,{modelValue:r.copyrightTitle,"onUpdate:modelValue":o[0]||(o[0]=a=>r.copyrightTitle=a),placeholder:"请填写底部版权文字内容",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(_,{xs:24,md:20,lg:15,xl:12},{default:t(()=>[e(p,{label:"底部跳转地址",prop:"copyrightUrl"},{default:t(()=>[e(u,{modelValue:r.copyrightUrl,"onUpdate:modelValue":o[1]||(o[1]=a=>r.copyrightUrl=a),placeholder:"请填写点击底部版本跳转的地址",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof y=="function"&&y(R);export{R as default};
