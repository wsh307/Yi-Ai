
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{B as w,r as y,aj as q,ak as S,al as h,am as A,C as R,an as C,ao as z,x as _}from"./index-a62c661f.js";function g(a){var u;const n=S(a);return(u=n==null?void 0:n.$el)!=null?u:n}const D=h?window:void 0,T=h?window.document:void 0,B=h?window.navigator:void 0;function E(...a){let u,n,f,l;if(typeof a[0]=="string"||Array.isArray(a[0])?([n,f,l]=a,u=D):[u,n,f,l]=a,!u)return A;Array.isArray(n)||(n=[n]),Array.isArray(f)||(f=[f]);const i=[],d=()=>{i.forEach(r=>r()),i.length=0},o=(r,m,p,c)=>(r.addEventListener(m,p,c),()=>r.removeEventListener(m,p,c)),s=R(()=>[g(u),S(l)],([r,m])=>{d(),r&&i.push(...n.flatMap(p=>f.map(c=>o(r,p,c,m))))},{immediate:!0,flush:"post"}),v=()=>{s(),d()};return C(v),v}function L(){const a=y(!1);return z()&&_(()=>{a.value=!0}),a}function M(a){const u=L();return w(()=>(u.value,!!a()))}function V(a={}){const{navigator:u=B,read:n=!1,source:f,copiedDuring:l=1500,legacy:i=!1}=a,d=["copy","cut"],o=M(()=>u&&"clipboard"in u),s=w(()=>o.value||i),v=y(""),r=y(!1),m=q(()=>r.value=!1,l);function p(){o.value?u.clipboard.readText().then(t=>{v.value=t}):v.value=b()}if(s.value&&n)for(const t of d)E(t,p);async function c(t=S(f)){s.value&&t!=null&&(o.value?await u.clipboard.writeText(t):F(t),v.value=t,r.value=!0,m.start())}function F(t){const e=document.createElement("textarea");e.value=t??"",e.style.position="absolute",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),e.remove()}function b(){var t,e,x;return(x=(e=(t=document==null?void 0:document.getSelection)==null?void 0:t.call(document))==null?void 0:e.toString())!=null?x:""}return{isSupported:s,text:v,copied:r,copy:c}}const k=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function W(a,u={}){const{document:n=T,autoExit:f=!1}=u,l=w(()=>{var e;return(e=g(a))!=null?e:n==null?void 0:n.querySelector("html")}),i=y(!1),d=w(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(e=>n&&e in n||l.value&&e in l.value)),o=w(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(e=>n&&e in n||l.value&&e in l.value)),s=w(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(e=>n&&e in n||l.value&&e in l.value)),v=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(e=>n&&e in n),r=M(()=>l.value&&n&&d.value!==void 0&&o.value!==void 0&&s.value!==void 0),m=()=>v?(n==null?void 0:n[v])===l.value:!1,p=()=>{if(s.value){if(n&&n[s.value]!=null)return n[s.value];{const e=l.value;if((e==null?void 0:e[s.value])!=null)return!!e[s.value]}}return!1};async function c(){if(r.value){if(o.value)if((n==null?void 0:n[o.value])!=null)await n[o.value]();else{const e=l.value;(e==null?void 0:e[o.value])!=null&&await e[o.value]()}i.value=!1}}async function F(){if(!r.value)return;p()&&await c();const e=l.value;d.value&&(e==null?void 0:e[d.value])!=null&&(await e[d.value](),i.value=!0)}async function b(){await(i.value?c():F())}const t=()=>{const e=p();(!e||e&&m())&&(i.value=e)};return E(n,k,t,!1),E(()=>g(l),k,t,!1),f&&C(c),{isSupported:r,isFullscreen:i,enter:F,exit:c,toggle:b}}export{W as a,V as u};
