
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as B}from"./index-8b6b646b.js";import{a as f}from"./config-68c3151c.js";import{d as w,Q as R,r as p,x as h,o as q,c as v,e,f as o,a as S,k as O,E as g,h as a,q as b}from"./index-a62c661f.js";const U={class:"flex justify-between"},j=S("b",null,"COS参数设置",-1),E=w({__name:"cos",setup(N){const t=R({cosSecretId:"",cosSecretKey:"",cosBucket:"",cosRegion:""}),y=p({cosSecretKey:[{required:!0,trigger:"blur",message:"请填写SecretKey"}],cosBucket:[{required:!0,trigger:"blur",message:"请填写存储桶名称"}],cosRegion:[{required:!0,trigger:"blur",message:"请填写存储桶所属地域"}],cosSecretId:[{required:!0,trigger:"blur",message:"请填写SecretId"}]}),i=p();async function m(){const r=await f.queryConfig({keys:["cosSecretKey","cosBucket","cosRegion","cosSecretId"]});Object.assign(t,r.data)}function x(){var r;(r=i.value)==null||r.validate(async l=>{if(l){try{await f.setConfig({settings:V(t)}),g.success("变更配置信息成功")}catch{}m()}else g.error("请填写完整信息")})}function V(r){return Object.keys(r).map(l=>({configKey:l,configVal:r[l]}))}return h(()=>{m()}),(r,l)=>{const _=a("el-alert"),k=B,C=a("el-button"),c=a("el-input"),s=a("el-form-item"),u=a("el-col"),d=a("el-row"),I=a("el-form"),K=a("el-card");return q(),v("div",null,[e(k,null,{default:o(()=>[e(_,{closable:!1,"show-icon":"",title:"COS参数说明",description:"当前默认使用腾讯云COS对象存储、如果您有特殊的对接通道、将为您开放API对接！！",type:"success"})]),_:1}),e(K,{style:{margin:"20px"}},{header:o(()=>[S("div",U,[j,e(C,{class:"button",text:"",onClick:x},{default:o(()=>[O(" 保存设置 ")]),_:1})])]),default:o(()=>[e(I,{ref_key:"formRef",ref:i,rules:y.value,model:t,"label-width":"120px"},{default:o(()=>[e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(s,{label:"SecretId",prop:"cosSecretId"},{default:o(()=>[e(c,{modelValue:t.cosSecretId,"onUpdate:modelValue":l[0]||(l[0]=n=>t.cosSecretId=n),placeholder:"请填写SecretId",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(s,{label:"SecretKey",prop:"cosSecretKey"},{default:o(()=>[e(c,{modelValue:t.cosSecretKey,"onUpdate:modelValue":l[1]||(l[1]=n=>t.cosSecretKey=n),placeholder:"请填写SecretKey",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(s,{label:"存储桶名称",prop:"cosBucket"},{default:o(()=>[e(c,{modelValue:t.cosBucket,"onUpdate:modelValue":l[2]||(l[2]=n=>t.cosBucket=n),placeholder:"请填写存储桶名称",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(d,null,{default:o(()=>[e(u,{xs:24,md:20,lg:15,xl:12},{default:o(()=>[e(s,{label:"所属地域",prop:"cosRegion"},{default:o(()=>[e(c,{modelValue:t.cosRegion,"onUpdate:modelValue":l[3]||(l[3]=n=>t.cosRegion=n),placeholder:"请填写所属地域(ap-guangzhou)",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["rules","model"])]),_:1})])}}});typeof b=="function"&&b(E);export{E as default};
