
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as Q}from"./index-8b6b646b.js";import{A as X}from"./mj-2376ecd0.js";import{A as V}from"./chat-dba0b33b.js";import{u as G}from"./utcformatTime-e76e5157.js";import{d as K,W as Z,e as ee}from"./index-de2a4d09.js";import{d as te,r as h,Q as le,x as ae,o as _,c as I,e as t,f as l,R,S as P,b as p,k as c,a as v,w as oe,I as C,t as f,E as $,h as o,X as ne,q as L}from"./index-a62c661f.js";const re={style:{float:"right"}},se={class:"answer"},ie={class:"answer_container"},ce=["src"],ue=te({__name:"draw",setup(de){const D=h(),k=h(0),w=h(!1),s=le({rec:null,status:null,page:1,size:10}),z=h([]);async function u(){try{w.value=!0;const r=await X.queryAdminDrawList(s);w.value=!1;const{rows:a,count:g}=r.data;k.value=g,z.value=a}catch{w.value=!1}}function N(r){r==null||r.resetFields(),u()}async function j(r){const a=await V.recMjDrawImg({id:r});$.success(a.data),u()}async function B(r){const a=await V.delChatLog({id:r});$.success(a.data),u()}return ae(()=>{u()}),(r,a)=>{const g=o("el-option"),A=o("el-select"),b=o("el-form-item"),m=o("el-button"),W=o("el-form"),y=Q,Y=o("el-alert"),n=o("el-table-column"),q=o("el-image"),S=o("el-tag"),O=o("el-popover"),x=o("el-popconfirm"),F=o("el-table"),E=o("el-pagination"),H=o("el-row"),J=ne("loading");return _(),I("div",null,[t(y,null,{default:l(()=>[t(W,{ref_key:"formRef",ref:D,inline:!0,model:s},{default:l(()=>[t(b,{label:"推荐状态",prop:"rec"},{default:l(()=>[t(A,{modelValue:s.rec,"onUpdate:modelValue":a[0]||(a[0]=e=>s.rec=e),placeholder:"请选择推荐状态",clearable:""},{default:l(()=>[(_(!0),I(R,null,P(p(K),e=>(_(),C(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,{label:"绘制状态",prop:"status"},{default:l(()=>[t(A,{modelValue:s.status,"onUpdate:modelValue":a[1]||(a[1]=e=>s.status=e),placeholder:"请选择绘制状态",clearable:""},{default:l(()=>[(_(!0),I(R,null,P(p(Z),e=>(_(),C(g,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(b,null,{default:l(()=>[t(m,{type:"primary",onClick:u},{default:l(()=>[c(" 查询 ")]),_:1}),t(m,{onClick:a[2]||(a[2]=e=>N(p(D)))},{default:l(()=>[c(" 重置 ")]),_:1})]),_:1}),v("span",re,[t(m,{type:"success",onClick:u},{default:l(()=>[c(" 刷新列表 ")]),_:1})])]),_:1},8,["model"])]),_:1}),t(y,null,{default:l(()=>[t(Y,{"show-icon":"",title:"MJ绘图历史说明",description:"点击推荐的图片将会出现在画廊当中！",type:"success"})]),_:1}),t(y,{style:{width:"100%"}},{default:l(()=>[oe((_(),C(F,{border:"",data:p(z),style:{width:"100%"},size:"large"},{default:l(()=>[t(n,{prop:"id",align:"center",label:"ID",width:"70"}),t(n,{prop:"drawUrl",align:"center",label:"绘图结果"},{default:l(e=>{var i,d;return[t(q,{style:{height:"120px"},"preview-teleported":"",fit:"contain","preview-src-list":[(i=e.row)==null?void 0:i.drawUrl],src:(d=e.row)==null?void 0:d.drawUrl,lazy:"","hide-on-click-modal":""},null,8,["preview-src-list","src"])]}),_:1}),t(n,{prop:"userInfo.username",align:"center",label:"用户名",width:"120"}),t(n,{prop:"fileInfo.thumbImg",align:"center",label:"推荐状态",width:"90"},{default:l(e=>[t(S,{type:e.row.rec===1?"success":""},{default:l(()=>[c(f(e.row.rec===1?"已推荐":"未推荐"),1)]),_:2},1032,["type"])]),_:1}),t(n,{prop:"userInfo.email",label:"邮箱",width:"180",align:"center"}),t(n,{prop:"status",align:"center",label:"绘图状态",width:"105"},{default:l(e=>[t(S,{type:e.row.status===100?"success":""},{default:l(()=>[c(f(p(ee)[e.row.status]),1)]),_:2},1032,["type"])]),_:1}),t(n,{prop:"fullPrompt",label:"绘图指令",align:"center",width:"200"},{default:l(e=>[t(O,{placement:"top",width:400,trigger:"click"},{reference:l(()=>[v("div",se,f(e.row.fullPrompt),1)]),default:l(()=>[v("div",ie,f(e.row.fullPrompt),1)]),_:2},1024)]),_:1}),t(n,{prop:"progress",align:"center",label:"绘图进度",width:"90"}),t(n,{prop:"fileInfo.thumbImg",align:"center",label:"绘图尺寸",width:"120"},{default:l(e=>{var i,d,T,M,U;return[c(f((i=e.row)!=null&&i.fileInfo?`${(T=(d=e.row)==null?void 0:d.fileInfo)==null?void 0:T.width}*${(U=(M=e.row)==null?void 0:M.fileInfo)==null?void 0:U.height}`:"---"),1)]}),_:1}),t(n,{prop:"userInfo.avatar",label:"用户头像",width:"90"},{default:l(e=>{var i,d;return[v("img",{src:(d=(i=e.row)==null?void 0:i.userInfo)==null?void 0:d.avatar,style:{height:"50px"}},null,8,ce)]}),_:1}),t(n,{prop:"createdAt",label:"提问时间",align:"center",width:"200"},{default:l(e=>[c(f(p(G)(e.row.createdAt,"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),t(n,{fixed:"right",label:"操作",width:"200",align:"center"},{default:l(e=>[t(x,{title:`确认${e.row.rec===1?"取消推荐":"推荐"}图片吗！`,width:"260","icon-color":"red",onConfirm:i=>j(e.row.id)},{reference:l(()=>[t(m,{link:"",type:e.row.rec===1?"success":"",size:"small"},{default:l(()=>[c(" 推荐图片 ")]),_:2},1032,["type"])]),_:2},1032,["title","onConfirm"]),t(x,{title:"`确认删除此条记录么！",width:"260","icon-color":"red",onConfirm:i=>B(e.row.id)},{reference:l(()=>[t(m,{type:"warning",size:"small"},{default:l(()=>[c(" 删除记录 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[J,p(w)]]),t(H,{class:"flex justify-end mt-5"},{default:l(()=>[t(E,{"current-page":s.page,"onUpdate:currentPage":a[3]||(a[3]=e=>s.page=e),"page-size":s.size,"onUpdate:pageSize":a[4]||(a[4]=e=>s.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:p(k),onSizeChange:u,onCurrentChange:u},null,8,["current-page","page-size","total"])]),_:1})]),_:1})])}}});typeof L=="function"&&L(ue);export{ue as default};
