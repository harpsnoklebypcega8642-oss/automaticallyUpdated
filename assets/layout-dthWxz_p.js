import{S as E}from"./SubViewLayout-Bl1N9zbq.js";import{t as $,a2 as x,z as k,a3 as O,bz as W,u as r,aU as B,r as l,cN as I,s as b,cO as H,b5 as h,b4 as F,cP as Z,cQ as X,cR as q,q as D,ct as R,cv as G,bv as U,cS as Q,x as K,y as P,cT as J,aj as ee,cU as te,A as ne,b7 as oe,cV as ae,I as N,H as t,aL as ie,al as se,ar as L,a4 as re,a5 as m,Q as z,cW as le,O as M,a7 as ce,as as ue,N as de}from"./index-BnO87JmI.js";import{F as fe}from"./FriendApply-DIN5WSx6.js";import{G as me}from"./GroupApply-4l60sDLn.js";import{_ as he,b as be}from"./Tabs-2ho5sTxX.js";import{S as ke}from"./Scrollbar-Dx_WQUWA.js";import{g as ve}from"./attribute-Cz32yFEB.js";import"./ButtonDropdown.vue_vue_type_script_setup_true_lang-U0AuY9Bb.js";import"./Dropdown-e40ahP6A.js";import"./create-BOEuAWPS.js";import"./useInject-DwBZkdUa.js";import"./string-DvZm4MNo.js";import"./Input-C3takuZv.js";import"./use-locale-CI-Dbm0X.js";import"./SendOne-ZWdL4Jgl.js";import"./Tooltip-7B8iMFN6.js";import"./Empty-CaMarQaw.js";const V=$({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const a=x(null),s=x(e.value),c=x(e.value),o=x("up"),n=x(!1),d=k(()=>n.value?`${e.clsPrefix}-base-slot-machine-current-number--${o.value}-scroll`:null),v=k(()=>n.value?`${e.clsPrefix}-base-slot-machine-old-number--${o.value}-scroll`:null);O(W(e,"value"),(i,u)=>{s.value=u,c.value=i,B(p)});function p(){const i=e.newOriginalNumber,u=e.oldOriginalNumber;u===void 0||i===void 0||(i>u?g("up"):u>i&&g("down"))}function g(i){o.value=i,n.value=!1,B(()=>{var u;(u=a.value)===null||u===void 0||u.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:i}=e;return r("span",{ref:a,class:`${i}-base-slot-machine-number`},s.value!==null?r("span",{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--top`,v.value]},s.value):null,r("span",{class:[`${i}-base-slot-machine-current-number`,d.value]},r("span",{ref:"numberWrapper",class:[`${i}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${i}-base-slot-machine-current-number__inner--not-number`]},c.value)),s.value!==null?r("span",{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--bottom`,v.value]},s.value):null)}}}),{cubicBezierEaseOut:_}=I;function ge({duration:e=".2s"}={}){return[l("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${_},
 max-width ${e} ${_},
 transform ${e} ${_}
 `}),l("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${_},
 max-width ${e} ${_},
 transform ${e} ${_}
 `}),l("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),l("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),l("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),l("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const ye=l([l("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),l("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),l("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),l("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),b("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[b("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[ge({duration:".2s"}),H({duration:".2s",delay:"0s"}),b("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[h("top",{transform:"translateY(-100%)"}),h("bottom",{transform:"translateY(100%)"}),h("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),h("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),b("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[h("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),h("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),F("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[h("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),we=$({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){Z("-base-slot-machine",ye,W(e,"clsPrefix"));const a=x(),s=x(),c=k(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const o=[];let n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)o.push(n%10),n/=10,n=Math.floor(n);return o.reverse(),o});return O(W(e,"value"),(o,n)=>{typeof o=="string"?(s.value=void 0,a.value=void 0):typeof n=="string"?(s.value=o,a.value=void 0):(s.value=o,a.value=n)}),()=>{const{value:o,clsPrefix:n}=e;return typeof o=="number"?r("span",{class:`${n}-base-slot-machine`},r(X,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>c.value.map((d,v)=>r(V,{clsPrefix:n,key:c.value.length-v-1,oldOriginalNumber:a.value,newOriginalNumber:s.value,value:d}))}),r(q,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<o?r(V,{clsPrefix:n,value:"+"}):null})):r("span",{class:`${n}-base-slot-machine`},o)}}});function xe(e){const{errorColor:a,infoColor:s,successColor:c,warningColor:o,fontFamily:n}=e;return{color:a,colorInfo:s,colorSuccess:c,colorError:a,colorWarning:o,fontSize:"12px",fontFamily:n}}const pe={common:D,self:xe},Ce=l([l("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),b("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[h("as-is",[b("badge-sup",{position:"static",transform:"translateX(0)"},[R({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),h("dot",[b("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[l("::before","border-radius: 4px;")])]),b("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[R({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),b("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),l("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),_e=Object.assign(Object.assign({},P.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),je=$({name:"Badge",props:_e,setup(e,{slots:a}){const{mergedClsPrefixRef:s,inlineThemeDisabled:c,mergedRtlRef:o}=K(e),n=P("Badge","-badge",Ce,pe,e,s),d=x(!1),v=()=>{d.value=!0},p=()=>{d.value=!1},g=k(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!J(a.value)));ee(()=>{g.value&&(d.value=!0)});const i=te("Badge",o,s),u=k(()=>{const{type:y,color:f}=e,{common:{cubicBezierEaseInOut:w,cubicBezierEaseOut:S},self:{[ne("color",y)]:j,fontFamily:T,fontSize:Y}}=n.value;return{"--n-font-size":Y,"--n-font-family":T,"--n-color":f||j,"--n-ripple-color":f||j,"--n-bezier":w,"--n-ripple-bezier":S}}),C=c?oe("badge",k(()=>{let y="";const{type:f,color:w}=e;return f&&(y+=f[0]),w&&(y+=ae(w)),y}),u,e):void 0,A=k(()=>{const{offset:y}=e;if(!y)return;const[f,w]=y,S=typeof f=="number"?`${f}px`:f,j=typeof w=="number"?`${w}px`:w;return{transform:`translate(calc(${i!=null&&i.value?"50%":"-50%"} + ${S}), ${j})`}});return{rtlEnabled:i,mergedClsPrefix:s,appeared:d,showBadge:g,handleAfterEnter:v,handleAfterLeave:p,cssVars:c?void 0:u,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender,offsetStyle:A}},render(){var e;const{mergedClsPrefix:a,onRender:s,themeClass:c,$slots:o}=this;s==null||s();const n=(e=o.default)===null||e===void 0?void 0:e.call(o);return r("div",{class:[`${a}-badge`,this.rtlEnabled&&`${a}-badge--rtl`,c,{[`${a}-badge--dot`]:this.dot,[`${a}-badge--as-is`]:!n}],style:this.cssVars},n,r(G,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?r("sup",{class:`${a}-badge-sup`,title:ve(this.value),style:this.offsetStyle},U(o.value,()=>[this.dot?null:r(we,{clsPrefix:a,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?r(Q,{clsPrefix:a}):null):null}))}}),Le=N("chart-graph",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("rect",{x:"17",y:"6",width:"14",height:"9",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("rect",{x:"6",y:"33",width:"14",height:"9",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("rect",{x:"28",y:"33",width:"14",height:"9",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M24 16V24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M13 33V24H35V33",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),$e=N("mail",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M4 39H44V24V9H24H4V24V39Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4 9L24 24L44 9",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M24 9H4V24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M44 24V9H24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Ne=N("peoples",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M32.6077 7C34.6405 8.2249 36.0001 10.4537 36.0001 13C36.0001 15.5463 34.6405 17.7751 32.6077 19",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Se=N("peoples-two",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M12 7.25488C10.1865 8.51983 9 10.6214 9 13.0002C9 15.5465 10.3596 17.7753 12.3924 19.0002",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M36 7.25488C37.8135 8.51983 39 10.6214 39 13.0002C39 15.3789 37.8135 17.4806 36 18.7455",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M12 40V42H36V40C36 36.2725 36 34.4087 35.391 32.9385C34.5791 30.9783 33.0217 29.4209 31.0615 28.609C29.5913 28 27.7275 28 24 28C20.2725 28 18.4087 28 16.9385 28.609C14.9783 29.4209 13.4209 30.9783 12.609 32.9385C12 34.4087 12 36.2725 12 40Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4.00009 42.0001V40.8001C4.00009 36.3197 4.00009 34.0795 4.87204 32.3682C5.63902 30.8629 6.86287 29.6391 8.36816 28.8721",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ze={class:"flex pointer",style:{"align-items":"center",gap:"8px"}},De=$({__name:"layout",setup(e){const a=ie(),s=k(()=>a.isContactApply||a.isGroupApply),c=se([{name:"我的好友",path:"/contact/friend",icon:L(le)},{name:"我的群聊",path:"/contact/group",icon:L(Ne)},{name:"公开群聊",path:"/contact/open-group",icon:L(Se)},{name:"企业组织",path:"/contact/organize",icon:L(Le),show:k(()=>a.isQiye)}]);return(o,n)=>{const d=ce,v=je,p=ke,g=be,i=he,u=ue;return de(),re(E,{title:"通讯录",menus:z(c)},{action:m(()=>[t(u,{trigger:"click"},{trigger:m(()=>[t(v,{dot:"",show:z(s),offset:[-80,5]},{default:m(()=>[M("div",ze,[t(d,{component:z($e),size:18},null,8,["component"]),n[0]||(n[0]=M("span",null,"好友(群)通知",-1))])]),_:1},8,["show"])]),default:m(()=>[t(i,{type:"line","justify-content":"start","pane-style":"height: 500px;width: 350px;"},{default:m(()=>[t(g,{name:"friend",tab:"好友通知"},{default:m(()=>[t(p,{"content-style":"height: 500px"},{default:m(()=>[t(fe)]),_:1})]),_:1}),t(g,{name:"group",tab:"入群通知"},{default:m(()=>[t(p,{"content-style":"height: 500px"},{default:m(()=>[t(me)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["menus"])}}});export{De as default};
