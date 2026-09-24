import{S as E}from"./SubViewLayout-qgfGKAK6.js";import{z as $,r as x,c as k,aF as P,J as W,w as r,ad as B,O as l,d7 as I,P as b,d8 as H,W as h,Y as F,d9 as Z,da as G,$ as X,N as q,cT as M,cW as D,a6 as U,db as J,F as K,T as O,dc as Q,H as ee,dd as te,U as ne,ab as ae,de as oe,aj as N,ak as t,bk as ie,aV as se,a$ as L,aG as re,aH as m,at as z,df as le,ar as R,aJ as ce,b0 as ue,aq as de}from"./index-CP-huyAt.js";import{F as fe}from"./FriendApply-BjgUyT1r.js";import{G as me}from"./GroupApply-tgKu1ll7.js";import{_ as he,b as be}from"./Tabs-CTZftNO8.js";import{S as ke}from"./Scrollbar-DoQKxJZw.js";import{g as ve}from"./attribute-Cz32yFEB.js";import"./ButtonDropdown.vue_vue_type_script_setup_true_lang-79jG9MMi.js";import"./Dropdown-Djx1pCTK.js";import"./create-BOEuAWPS.js";import"./useInject-DLyFTAD5.js";import"./string-DvZm4MNo.js";import"./Input-BE34VZsA.js";import"./use-locale-BZIyPeCr.js";import"./SendOne-CiGYCH-D.js";import"./Tooltip-D5iBDJ8x.js";import"./Empty-BTUuC_OW.js";const V=$({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){const o=x(null),s=x(e.value),c=x(e.value),a=x("up"),n=x(!1),d=k(()=>n.value?`${e.clsPrefix}-base-slot-machine-current-number--${a.value}-scroll`:null),v=k(()=>n.value?`${e.clsPrefix}-base-slot-machine-old-number--${a.value}-scroll`:null);P(W(e,"value"),(i,u)=>{s.value=u,c.value=i,B(p)});function p(){const i=e.newOriginalNumber,u=e.oldOriginalNumber;u===void 0||i===void 0||(i>u?g("up"):u>i&&g("down"))}function g(i){a.value=i,n.value=!1,B(()=>{var u;(u=o.value)===null||u===void 0||u.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:i}=e;return r("span",{ref:o,class:`${i}-base-slot-machine-number`},s.value!==null?r("span",{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--top`,v.value]},s.value):null,r("span",{class:[`${i}-base-slot-machine-current-number`,d.value]},r("span",{ref:"numberWrapper",class:[`${i}-base-slot-machine-current-number__inner`,typeof e.value!="number"&&`${i}-base-slot-machine-current-number__inner--not-number`]},c.value)),s.value!==null?r("span",{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--bottom`,v.value]},s.value):null)}}}),{cubicBezierEaseOut:_}=I;function ge({duration:e=".2s"}={}){return[l("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${e} ${_},
 max-width ${e} ${_},
 transform ${e} ${_}
 `}),l("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${e} ${_},
 max-width ${e} ${_},
 transform ${e} ${_}
 `}),l("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),l("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),l("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),l("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const we=l([l("@keyframes n-base-slot-machine-fade-up-in",`
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
 `)])])])])]),ye=$({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){Z("-base-slot-machine",we,W(e,"clsPrefix"));const o=x(),s=x(),c=k(()=>{if(typeof e.value=="string")return[];if(e.value<1)return[0];const a=[];let n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)a.push(n%10),n/=10,n=Math.floor(n);return a.reverse(),a});return P(W(e,"value"),(a,n)=>{typeof a=="string"?(s.value=void 0,o.value=void 0):typeof n=="string"?(s.value=a,o.value=void 0):(s.value=a,o.value=n)}),()=>{const{value:a,clsPrefix:n}=e;return typeof a=="number"?r("span",{class:`${n}-base-slot-machine`},r(G,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>c.value.map((d,v)=>r(V,{clsPrefix:n,key:c.value.length-v-1,oldOriginalNumber:o.value,newOriginalNumber:s.value,value:d}))}),r(X,{key:"+",width:!0},{default:()=>e.max!==void 0&&e.max<a?r(V,{clsPrefix:n,value:"+"}):null})):r("span",{class:`${n}-base-slot-machine`},a)}}});function xe(e){const{errorColor:o,infoColor:s,successColor:c,warningColor:a,fontFamily:n}=e;return{color:o,colorInfo:s,colorSuccess:c,colorError:o,colorWarning:a,fontSize:"12px",fontFamily:n}}const pe={common:q,self:xe},Ce=l([l("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),b("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[h("as-is",[b("badge-sup",{position:"static",transform:"translateX(0)"},[M({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),h("dot",[b("badge-sup",`
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
 `,[M({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),b("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),l("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),_e=Object.assign(Object.assign({},O.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),je=$({name:"Badge",props:_e,setup(e,{slots:o}){const{mergedClsPrefixRef:s,inlineThemeDisabled:c,mergedRtlRef:a}=K(e),n=O("Badge","-badge",Ce,pe,e,s),d=x(!1),v=()=>{d.value=!0},p=()=>{d.value=!1},g=k(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!Q(o.value)));ee(()=>{g.value&&(d.value=!0)});const i=te("Badge",a,s),u=k(()=>{const{type:w,color:f}=e,{common:{cubicBezierEaseInOut:y,cubicBezierEaseOut:S},self:{[ne("color",w)]:j,fontFamily:Y,fontSize:A}}=n.value;return{"--n-font-size":A,"--n-font-family":Y,"--n-color":f||j,"--n-ripple-color":f||j,"--n-bezier":y,"--n-ripple-bezier":S}}),C=c?ae("badge",k(()=>{let w="";const{type:f,color:y}=e;return f&&(w+=f[0]),y&&(w+=oe(y)),w}),u,e):void 0,T=k(()=>{const{offset:w}=e;if(!w)return;const[f,y]=w,S=typeof f=="number"?`${f}px`:f,j=typeof y=="number"?`${y}px`:y;return{transform:`translate(calc(${i!=null&&i.value?"50%":"-50%"} + ${S}), ${j})`}});return{rtlEnabled:i,mergedClsPrefix:s,appeared:d,showBadge:g,handleAfterEnter:v,handleAfterLeave:p,cssVars:c?void 0:u,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender,offsetStyle:T}},render(){var e;const{mergedClsPrefix:o,onRender:s,themeClass:c,$slots:a}=this;s==null||s();const n=(e=a.default)===null||e===void 0?void 0:e.call(a);return r("div",{class:[`${o}-badge`,this.rtlEnabled&&`${o}-badge--rtl`,c,{[`${o}-badge--dot`]:this.dot,[`${o}-badge--as-is`]:!n}],style:this.cssVars},n,r(D,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?r("sup",{class:`${o}-badge-sup`,title:ve(this.value),style:this.offsetStyle},U(a.value,()=>[this.dot?null:r(ye,{clsPrefix:o,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?r(J,{clsPrefix:o}):null):null}))}}),Le=N("chart-graph",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("rect",{x:"17",y:"6",width:"14",height:"9",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("rect",{x:"6",y:"33",width:"14",height:"9",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("rect",{x:"28",y:"33",width:"14",height:"9",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M24 16V24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M13 33V24H35V33",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),$e=N("mail",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M4 39H44V24V9H24H4V24V39Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4 9L24 24L44 9",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M24 9H4V24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M44 24V9H24",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Ne=N("peoples",!0,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M32.6077 7C34.6405 8.2249 36.0001 10.4537 36.0001 13C36.0001 15.5463 34.6405 17.7751 32.6077 19",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Se=N("peoples-two",!1,function(e){return t("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[t("path",{d:"M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M12 7.25488C10.1865 8.51983 9 10.6214 9 13.0002C9 15.5465 10.3596 17.7753 12.3924 19.0002",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M36 7.25488C37.8135 8.51983 39 10.6214 39 13.0002C39 15.3789 37.8135 17.4806 36 18.7455",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M12 40V42H36V40C36 36.2725 36 34.4087 35.391 32.9385C34.5791 30.9783 33.0217 29.4209 31.0615 28.609C29.5913 28 27.7275 28 24 28C20.2725 28 18.4087 28 16.9385 28.609C14.9783 29.4209 13.4209 30.9783 12.609 32.9385C12 34.4087 12 36.2725 12 40Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),t("path",{d:"M4.00009 42.0001V40.8001C4.00009 36.3197 4.00009 34.0795 4.87204 32.3682C5.63902 30.8629 6.86287 29.6391 8.36816 28.8721",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ze={class:"flex pointer",style:{"align-items":"center",gap:"8px"}},qe=$({__name:"layout",setup(e){const o=ie(),s=k(()=>o.isContactApply||o.isGroupApply),c=se([{name:"我的好友",path:"/contact/friend",icon:L(le)},{name:"我的群聊",path:"/contact/group",icon:L(Ne)},{name:"公开群聊",path:"/contact/open-group",icon:L(Se)},{name:"企业组织",path:"/contact/organize",icon:L(Le),show:k(()=>o.isQiye)}]);return(a,n)=>{const d=ce,v=je,p=ke,g=be,i=he,u=ue;return de(),re(E,{title:"通讯录",menus:z(c)},{action:m(()=>[t(u,{trigger:"click"},{trigger:m(()=>[t(v,{dot:"",show:z(s),offset:[-80,5]},{default:m(()=>[R("div",ze,[t(d,{component:z($e),size:18},null,8,["component"]),n[0]||(n[0]=R("span",null,"好友(群)通知",-1))])]),_:1},8,["show"])]),default:m(()=>[t(i,{type:"line","justify-content":"start","pane-style":"height: 500px;width: 350px;"},{default:m(()=>[t(g,{name:"friend",tab:"好友通知"},{default:m(()=>[t(p,{"content-style":"height: 500px"},{default:m(()=>[t(fe)]),_:1})]),_:1}),t(g,{name:"group",tab:"入群通知"},{default:m(()=>[t(p,{"content-style":"height: 500px"},{default:m(()=>[t(me)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["menus"])}}});export{qe as default};
