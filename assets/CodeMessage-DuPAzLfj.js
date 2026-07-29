import{bC as O,z as b,bU as q,q as F,r as v,s as D,b5 as p,b4 as U,t as L,u as z,x as K,a2 as S,aj as Q,a3 as w,bz as N,y as H,b7 as A,I as G,H as l,M as J,N as X,O as _,P as Y,Q as C,a7 as Z,T as ee,_ as ne}from"./index-BnO87JmI.js";import{u as te}from"./useInject-DwBZkdUa.js";import{c as oe}from"./common-L0r08OyL.js";import{C as le}from"./Copy-BZ9fyqbD.js";import"./string-DvZm4MNo.js";import"./Input-C3takuZv.js";import"./use-locale-CI-Dbm0X.js";import"./Dropdown-e40ahP6A.js";import"./create-BOEuAWPS.js";import"./SendOne-ZWdL4Jgl.js";import"./Tooltip-7B8iMFN6.js";function se(e,n){const o=O(q,null);return b(()=>e.hljs||(o==null?void 0:o.mergedHljsRef.value))}function re(e){const{textColor2:n,fontSize:o,fontWeightStrong:i,textColor3:h}=e;return{textColor:n,fontSize:o,fontWeightStrong:i,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:h}}const ie={common:F,self:re},ae=v([D("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[p("show-line-numbers",`
 display: flex;
 `),U("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),p("word-wrap",[v("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),v("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),v("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const n=`${e.bPrefix}code`;return[`${n} .hljs-comment,
 ${n} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${n} .hljs-doctag,
 ${n} .hljs-keyword,
 ${n} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${n} .hljs-section,
 ${n} .hljs-name,
 ${n} .hljs-selector-tag,
 ${n} .hljs-deletion,
 ${n} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${n} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${n} .hljs-string,
 ${n} .hljs-regexp,
 ${n} .hljs-addition,
 ${n} .hljs-attribute,
 ${n} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${n} .hljs-built_in,
 ${n} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${n} .hljs-attr,
 ${n} .hljs-variable,
 ${n} .hljs-template-variable,
 ${n} .hljs-type,
 ${n} .hljs-selector-class,
 ${n} .hljs-selector-attr,
 ${n} .hljs-selector-pseudo,
 ${n} .hljs-number {
 color: var(--n-hue-6);
 }`,`${n} .hljs-symbol,
 ${n} .hljs-bullet,
 ${n} .hljs-link,
 ${n} .hljs-meta,
 ${n} .hljs-selector-id,
 ${n} .hljs-title {
 color: var(--n-hue-2);
 }`,`${n} .hljs-emphasis {
 font-style: italic;
 }`,`${n} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${n} .hljs-link {
 text-decoration: underline;
 }`]}]),ce=Object.assign(Object.assign({},H.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),he=L({name:"Code",props:ce,setup(e,{slots:n}){const{internalNoHighlight:o}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:h}=K(),a=S(null),m=o?{value:void 0}:se(e),j=(t,r,s)=>{const{value:c}=m;return!c||!(t&&c.getLanguage(t))?null:c.highlight(s?r.trim():r,{language:t}).value},k=b(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),f=()=>{if(n.default)return;const{value:t}=a;if(!t)return;const{language:r}=e,s=e.uri?window.decodeURIComponent(e.code):e.code;if(r){const u=j(r,s,e.trim);if(u!==null){if(e.inline)t.innerHTML=u;else{const $=t.querySelector(".__code__");$&&t.removeChild($);const g=document.createElement("pre");g.className="__code__",g.innerHTML=u,t.appendChild(g)}return}}if(e.inline){t.textContent=s;return}const c=t.querySelector(".__code__");if(c)c.textContent=s;else{const u=document.createElement("pre");u.className="__code__",u.textContent=s,t.innerHTML="",t.appendChild(u)}};Q(f),w(N(e,"language"),f),w(N(e,"code"),f),o||w(m,f);const M=H("Code","-code",ae,ie,e,i),x=b(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:r},self:{textColor:s,fontSize:c,fontWeightStrong:u,lineNumberTextColor:$,"mono-3":g,"hue-1":R,"hue-2":W,"hue-3":B,"hue-4":P,"hue-5":E,"hue-5-2":I,"hue-6":T,"hue-6-2":V}}=M.value,{internalFontSize:y}=e;return{"--n-font-size":y?`${y}px`:c,"--n-font-family":r,"--n-font-weight-strong":u,"--n-bezier":t,"--n-text-color":s,"--n-mono-3":g,"--n-hue-1":R,"--n-hue-2":W,"--n-hue-3":B,"--n-hue-4":P,"--n-hue-5":E,"--n-hue-5-2":I,"--n-hue-6":T,"--n-hue-6-2":V,"--n-line-number-text-color":$}}),d=h?A("code",b(()=>`${e.internalFontSize||"a"}`),x,e):void 0;return{mergedClsPrefix:i,codeRef:a,mergedShowLineNumbers:k,lineNumbers:b(()=>{let t=1;const r=[];let s=!1;for(const c of e.code)c===`
`?(s=!0,r.push(t++)):s=!1;return s||r.push(t++),r.join(`
`)}),cssVars:h?void 0:x,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e,n;const{mergedClsPrefix:o,wordWrap:i,mergedShowLineNumbers:h,onRender:a}=this;return a==null||a(),z("code",{class:[`${o}-code`,this.themeClass,i&&`${o}-code--word-wrap`,h&&`${o}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},h?z("pre",{class:`${o}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}}),ue=G("stretching",!0,function(e){return l("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[l("g",{"clip-path":"url(#"+e.id+"44a4c228)"},[l("path",{d:"M23.0005 5.99951H8.00049C6.89592 5.99951 6.00049 6.89494 6.00049 7.99951V39.9999C6.00049 41.1044 6.89592 41.9998 8.00049 41.9998H40.0005C41.1051 41.9998 42.0005 41.1044 42.0005 39.9998V24.9998",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),l("path",{d:"M24.001 15.9998V23.9998",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),l("path",{d:"M42 5.99951V13.9995",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),l("path",{d:"M32.001 23.9998H24.001",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null),l("path",{d:"M42 5.99951L24 23.9995",stroke:e.colors[0],"stroke-width":e.strokeWidth},null),l("path",{d:"M42.0005 5.99951H34.0005",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap},null)]),l("defs",null,[l("clipPath",{id:e.id+"44a4c228"},[l("rect",{width:"48",height:"48",fill:e.colors[2]},null)])])])}),de={class:"el-header header"},me={style:{display:"flex",gap:"5px"}},fe={class:"el-main main me-scrollbar me-scrollbar-thumb"},ge=L({__name:"CodeMessage",props:{code:{},lang:{}},setup(e){const n=e,{message:o}=te(),i=S(!1),h=()=>{oe(n.code,()=>{o.success("复制成功")})};return(a,m)=>{const j=Z,k=he;return X(),J("section",{class:ee(["immsg-code el-container is-vertical",{full:C(i)}])},[_("header",de,[_("p",null,Y(a.lang),1),_("p",me,[l(j,{class:"icon",size:18,component:C(le),onClick:h},null,8,["component"]),l(j,{class:"icon",size:18,component:C(ue),onClick:m[0]||(m[0]=f=>i.value=!C(i))},null,8,["component"])])]),_("main",fe,[l(k,{language:a.lang,code:a.code,"show-line-numbers":""},null,8,["language","code"])])],2)}}}),ze=ne(ge,[["__scopeId","data-v-8434a41b"]]);export{ze as default};
