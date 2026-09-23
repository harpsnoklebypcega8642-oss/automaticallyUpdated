import{z as We,ad as lt,w as a,ax as Ht,r as S,ei as Kt,ej as Jt,ek as qt,H as St,O as he,P as y,Y as L,c0 as it,W as Z,f0 as Qt,aY as nt,R as rt,b0 as Yt,di as Ne,F as st,dd as kt,T as ze,J as me,f1 as Zt,c as R,aF as Le,a4 as He,U as J,dk as ut,ab as dt,cT as Xt,eJ as Gt,eK as en,eL as tn,f2 as Ke,cW as nn,az as on,v as an,dE as ct,f3 as rn,aa as Je,eo as ln,a9 as sn,cX as dn,f4 as un,f5 as cn,ae as q,a6 as fn,a1 as Pe,f6 as hn}from"./index-BNlgNkbi.js";import{N as vn,_ as ft}from"./Input-CwkONfTO.js";import{u as gn,N as bn,p as ot,f as pn,c as mn,a as wn,_ as xn}from"./Popselect-DrDPdDq3.js";import{g as ht}from"./attribute-Cz32yFEB.js";import{c as Cn,h as at}from"./create-BOEuAWPS.js";import{u as Mt}from"./use-locale-C9Iw-Z_K.js";import{F as vt,B as gt,a as bt,b as pt}from"./Forward-CA9iq-2g.js";const pe="v-hidden",Fn=Kt("[v-hidden]",{display:"none!important"}),mt=We({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(e,{slots:r}){const b=S(null),f=S(null);function h(E){const{value:l}=b,{getCounter:P,getTail:c}=e;let d;if(P!==void 0?d=P():d=f.value,!l||!d)return;d.hasAttribute(pe)&&d.removeAttribute(pe);const{children:m}=l;if(E.showAllItemsBeforeCalculate)for(const O of m)O.hasAttribute(pe)&&O.removeAttribute(pe);const F=l.offsetWidth,w=[],B=r.tail?c==null?void 0:c():null;let v=B?B.offsetWidth:0,z=!1;const U=l.children.length-(r.tail?1:0);for(let O=0;O<U-1;++O){if(O<0)continue;const _=m[O];if(z){_.hasAttribute(pe)||_.setAttribute(pe,"");continue}else _.hasAttribute(pe)&&_.removeAttribute(pe);const T=_.offsetWidth;if(v+=T,w[O]=T,v>F){const{updateCounter:H}=e;for(let I=O;I>=0;--I){const G=U-1-I;H!==void 0?H(G):d.textContent=`${G}`;const oe=d.offsetWidth;if(v-=w[I],v+oe<=F||I===0){z=!0,O=I-1,B&&(O===-1?(B.style.maxWidth=`${F-oe}px`,B.style.boxSizing="border-box"):B.style.maxWidth="");const{onUpdateCount:Q}=e;Q&&Q(G);break}}}}const{onUpdateOverflow:j}=e;z?j!==void 0&&j(!0):(j!==void 0&&j(!1),d.setAttribute(pe,""))}const M=Jt();return Fn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:qt,ssr:M}),St(()=>h({showAllItemsBeforeCalculate:!1})),{selfRef:b,counterRef:f,sync:h}},render(){const{$slots:e}=this;return lt(()=>this.sync({showAllItemsBeforeCalculate:!1})),a("div",{class:"v-overflow",ref:"selfRef"},[Ht(e,"default"),e.counter?e.counter():a("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function wt(e){switch(e){case"tiny":return"mini";case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}throw new Error(`${e} has no smaller size.`)}const xt=We({name:"More",render(){return a("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},a("g",{fill:"currentColor","fill-rule":"nonzero"},a("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}}),yn=he([y("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[y("base-loading",`
 color: var(--n-loading-color);
 `),y("base-selection-tags","min-height: var(--n-height);"),L("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),L("state-border",`
 z-index: 1;
 border-color: #0000;
 `),y("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[L("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),y("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[L("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),y("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[L("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),y("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),y("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[y("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[L("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),L("render-label",`
 color: var(--n-text-color);
 `)]),it("disabled",[he("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),y("base-selection-label","background-color: var(--n-color-active);"),y("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[L("arrow",`
 color: var(--n-arrow-color-disabled);
 `),y("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[y("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),L("render-label",`
 color: var(--n-text-color-disabled);
 `)]),y("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),y("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),y("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[L("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),L("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[L("state-border",`border: var(--n-border-${e});`),it("disabled",[he("&:hover",[L("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[L("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),y("base-selection-label",`background-color: var(--n-color-active-${e});`),y("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[L("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),y("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),y("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[he("&:last-child","padding-right: 0;"),y("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[L("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Sn=We({name:"InternalSelection",props:Object.assign(Object.assign({},ze.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:r,mergedRtlRef:b}=st(e),f=kt("InternalSelection",b,r),h=S(null),M=S(null),E=S(null),l=S(null),P=S(null),c=S(null),d=S(null),m=S(null),F=S(null),w=S(null),B=S(!1),v=S(!1),z=S(!1),U=ze("InternalSelection","-internal-selection",yn,Zt,e,me(e,"clsPrefix")),j=R(()=>e.clearable&&!e.disabled&&(z.value||e.active)),O=R(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Ne(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),_=R(()=>{const o=e.selectedOption;if(o)return o[e.labelField]}),T=R(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function H(){var o;const{value:s}=h;if(s){const{value:D}=M;D&&(D.style.width=`${s.offsetWidth}px`,e.maxTagCount!=="responsive"&&((o=F.value)===null||o===void 0||o.sync({showAllItemsBeforeCalculate:!1})))}}function I(){const{value:o}=w;o&&(o.style.display="none")}function G(){const{value:o}=w;o&&(o.style.display="inline-block")}Le(me(e,"active"),o=>{o||I()}),Le(me(e,"pattern"),()=>{e.multiple&&lt(H)});function oe(o){const{onFocus:s}=e;s&&s(o)}function Q(o){const{onBlur:s}=e;s&&s(o)}function ae(o){const{onDeleteOption:s}=e;s&&s(o)}function ie(o){const{onClear:s}=e;s&&s(o)}function $(o){const{onPatternInput:s}=e;s&&s(o)}function ve(o){var s;(!o.relatedTarget||!(!((s=E.value)===null||s===void 0)&&s.contains(o.relatedTarget)))&&oe(o)}function ee(o){var s;!((s=E.value)===null||s===void 0)&&s.contains(o.relatedTarget)||Q(o)}function N(o){ie(o)}function ge(){z.value=!0}function Y(){z.value=!1}function we(o){!e.active||!e.filterable||o.target!==M.value&&o.preventDefault()}function A(o){ae(o)}const re=S(!1);function te(o){if(o.key==="Backspace"&&!re.value&&!e.pattern.length){const{selectedOptions:s}=e;s!=null&&s.length&&A(s[s.length-1])}}let de=null;function be(o){const{value:s}=h;if(s){const D=o.target.value;s.textContent=D,H()}e.ignoreComposition&&re.value?de=o:$(o)}function K(){re.value=!0}function ce(){re.value=!1,e.ignoreComposition&&$(de),de=null}function le(o){var s;v.value=!0,(s=e.onPatternFocus)===null||s===void 0||s.call(e,o)}function W(o){var s;v.value=!1,(s=e.onPatternBlur)===null||s===void 0||s.call(e,o)}function n(){var o,s;if(e.filterable)v.value=!1,(o=c.value)===null||o===void 0||o.blur(),(s=M.value)===null||s===void 0||s.blur();else if(e.multiple){const{value:D}=l;D==null||D.blur()}else{const{value:D}=P;D==null||D.blur()}}function g(){var o,s,D;e.filterable?(v.value=!1,(o=c.value)===null||o===void 0||o.focus()):e.multiple?(s=l.value)===null||s===void 0||s.focus():(D=P.value)===null||D===void 0||D.focus()}function X(){const{value:o}=M;o&&(G(),o.focus())}function ue(){const{value:o}=M;o&&o.blur()}function xe(o){const{value:s}=d;s&&s.setTextContent(`+${o}`)}function Re(){const{value:o}=m;return o}function Te(){return M.value}let Ce=null;function Fe(){Ce!==null&&window.clearTimeout(Ce)}function Ie(){e.active||(Fe(),Ce=window.setTimeout(()=>{T.value&&(B.value=!0)},100))}function _e(){Fe()}function $e(o){o||(Fe(),B.value=!1)}Le(T,o=>{o||(B.value=!1)}),St(()=>{He(()=>{const o=c.value;o&&(e.disabled?o.removeAttribute("tabindex"):o.tabIndex=v.value?-1:0)})}),gn(E,e.onResize);const{inlineThemeDisabled:Se}=e,ye=R(()=>{const{size:o}=e,{common:{cubicBezierEaseInOut:s},self:{fontWeight:D,borderRadius:Ae,color:Ee,placeholderColor:ke,textColor:Me,paddingSingle:Oe,paddingMultiple:je,caretColor:De,colorDisabled:Be,textColorDisabled:fe,placeholderColorDisabled:t,colorActive:i,boxShadowFocus:u,boxShadowActive:k,boxShadowHover:x,border:p,borderFocus:C,borderHover:V,borderActive:se,arrowColor:qe,arrowColorDisabled:Qe,loadingColor:Ye,colorActiveWarning:Ze,boxShadowFocusWarning:Xe,boxShadowActiveWarning:Ge,boxShadowHoverWarning:et,borderWarning:tt,borderFocusWarning:Ot,borderHoverWarning:Bt,borderActiveWarning:Pt,colorActiveError:zt,boxShadowFocusError:Rt,boxShadowActiveError:Tt,boxShadowHoverError:It,borderError:_t,borderFocusError:$t,borderHoverError:At,borderActiveError:Et,clearColor:jt,clearColorHover:Dt,clearColorPressed:Wt,clearSize:Vt,arrowSize:Ut,[J("height",o)]:Nt,[J("fontSize",o)]:Lt}}=U.value,Ve=ut(Oe),Ue=ut(je);return{"--n-bezier":s,"--n-border":p,"--n-border-active":se,"--n-border-focus":C,"--n-border-hover":V,"--n-border-radius":Ae,"--n-box-shadow-active":k,"--n-box-shadow-focus":u,"--n-box-shadow-hover":x,"--n-caret-color":De,"--n-color":Ee,"--n-color-active":i,"--n-color-disabled":Be,"--n-font-size":Lt,"--n-height":Nt,"--n-padding-single-top":Ve.top,"--n-padding-multiple-top":Ue.top,"--n-padding-single-right":Ve.right,"--n-padding-multiple-right":Ue.right,"--n-padding-single-left":Ve.left,"--n-padding-multiple-left":Ue.left,"--n-padding-single-bottom":Ve.bottom,"--n-padding-multiple-bottom":Ue.bottom,"--n-placeholder-color":ke,"--n-placeholder-color-disabled":t,"--n-text-color":Me,"--n-text-color-disabled":fe,"--n-arrow-color":qe,"--n-arrow-color-disabled":Qe,"--n-loading-color":Ye,"--n-color-active-warning":Ze,"--n-box-shadow-focus-warning":Xe,"--n-box-shadow-active-warning":Ge,"--n-box-shadow-hover-warning":et,"--n-border-warning":tt,"--n-border-focus-warning":Ot,"--n-border-hover-warning":Bt,"--n-border-active-warning":Pt,"--n-color-active-error":zt,"--n-box-shadow-focus-error":Rt,"--n-box-shadow-active-error":Tt,"--n-box-shadow-hover-error":It,"--n-border-error":_t,"--n-border-focus-error":$t,"--n-border-hover-error":At,"--n-border-active-error":Et,"--n-clear-size":Vt,"--n-clear-color":jt,"--n-clear-color-hover":Dt,"--n-clear-color-pressed":Wt,"--n-arrow-size":Ut,"--n-font-weight":D}}),ne=Se?dt("internal-selection",R(()=>e.size[0]),ye,e):void 0;return{mergedTheme:U,mergedClearable:j,mergedClsPrefix:r,rtlEnabled:f,patternInputFocused:v,filterablePlaceholder:O,label:_,selected:T,showTagsPanel:B,isComposing:re,counterRef:d,counterWrapperRef:m,patternInputMirrorRef:h,patternInputRef:M,selfRef:E,multipleElRef:l,singleElRef:P,patternInputWrapperRef:c,overflowRef:F,inputTagElRef:w,handleMouseDown:we,handleFocusin:ve,handleClear:N,handleMouseEnter:ge,handleMouseLeave:Y,handleDeleteOption:A,handlePatternKeyDown:te,handlePatternInputInput:be,handlePatternInputBlur:W,handlePatternInputFocus:le,handleMouseEnterCounter:Ie,handleMouseLeaveCounter:_e,handleFocusout:ee,handleCompositionEnd:ce,handleCompositionStart:K,onPopoverUpdateShow:$e,focus:g,focusInput:X,blur:n,blurInput:ue,updateCounter:xe,getCounter:Re,getTail:Te,renderLabel:e.renderLabel,cssVars:Se?void 0:ye,themeClass:ne==null?void 0:ne.themeClass,onRender:ne==null?void 0:ne.onRender}},render(){const{status:e,multiple:r,size:b,disabled:f,filterable:h,maxTagCount:M,bordered:E,clsPrefix:l,ellipsisTagPopoverProps:P,onRender:c,renderTag:d,renderLabel:m}=this;c==null||c();const F=M==="responsive",w=typeof M=="number",B=F||w,v=a(Qt,null,{default:()=>a(vn,{clsPrefix:l,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var U,j;return(j=(U=this.$slots).arrow)===null||j===void 0?void 0:j.call(U)}})});let z;if(r){const{labelField:U}=this,j=$=>a("div",{class:`${l}-base-selection-tag-wrapper`,key:$.value},d?d({option:$,handleClose:()=>{this.handleDeleteOption($)}}):a(nt,{size:b,closable:!$.disabled,disabled:f,onClose:()=>{this.handleDeleteOption($)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m($,!0):Ne($[U],$,!0)})),O=()=>(w?this.selectedOptions.slice(0,M):this.selectedOptions).map(j),_=h?a("div",{class:`${l}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:f,value:this.pattern,autofocus:this.autofocus,class:`${l}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${l}-base-selection-input-tag__mirror`},this.pattern)):null,T=F?()=>a("div",{class:`${l}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(nt,{size:b,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:f})):void 0;let H;if(w){const $=this.selectedOptions.length-M;$>0&&(H=a("div",{class:`${l}-base-selection-tag-wrapper`,key:"__counter__"},a(nt,{size:b,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:f},{default:()=>`+${$}`})))}const I=F?h?a(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:T,tail:()=>_}):a(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:O,counter:T}):w&&H?O().concat(H):O(),G=B?()=>a("div",{class:`${l}-base-selection-popover`},F?O():this.selectedOptions.map(j)):void 0,oe=B?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},P):null,ae=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)):null,ie=h?a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-tags`},I,F?null:_,v):a("div",{ref:"multipleElRef",class:`${l}-base-selection-tags`,tabindex:f?void 0:0},I,v);z=a(rt,null,B?a(Yt,Object.assign({},oe,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ie,default:G}):ie,ae)}else if(h){const U=this.pattern||this.isComposing,j=this.active?!U:!this.selected,O=this.active?!1:this.selected;z=a("div",{ref:"patternInputWrapperRef",class:`${l}-base-selection-label`,title:this.patternInputFocused?void 0:ht(this.label)},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${l}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:f,disabled:f,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),O?a("div",{class:`${l}-base-selection-label__render-label ${l}-base-selection-overlay`,key:"input"},a("div",{class:`${l}-base-selection-overlay__wrapper`},d?d({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Ne(this.label,this.selectedOption,!0))):null,j?a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,v)}else z=a("div",{ref:"singleElRef",class:`${l}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${l}-base-selection-input`,title:ht(this.label),key:"input"},a("div",{class:`${l}-base-selection-input__content`},d?d({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Ne(this.label,this.selectedOption,!0))):a("div",{class:`${l}-base-selection-placeholder ${l}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${l}-base-selection-placeholder__inner`},this.placeholder)),v);return a("div",{ref:"selfRef",class:[`${l}-base-selection`,this.rtlEnabled&&`${l}-base-selection--rtl`,this.themeClass,e&&`${l}-base-selection--${e}-status`,{[`${l}-base-selection--active`]:this.active,[`${l}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${l}-base-selection--disabled`]:this.disabled,[`${l}-base-selection--multiple`]:this.multiple,[`${l}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},z,E?a("div",{class:`${l}-base-selection__border`}):null,E?a("div",{class:`${l}-base-selection__state-border`}):null)}}),kn=he([y("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),y("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Xt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Mn=Object.assign(Object.assign({},ze.props),{to:Ke.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),On=We({name:"Select",props:Mn,slots:Object,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:b,namespaceRef:f,inlineThemeDisabled:h}=st(e),M=ze("Select","-select",kn,rn,e,r),E=S(e.defaultValue),l=me(e,"value"),P=Je(l,E),c=S(!1),d=S(""),m=ln(e,["items","options"]),F=S([]),w=S([]),B=R(()=>w.value.concat(F.value).concat(m.value)),v=R(()=>{const{filter:t}=e;if(t)return t;const{labelField:i,valueField:u}=e;return(k,x)=>{if(!x)return!1;const p=x[i];if(typeof p=="string")return ot(k,p);const C=x[u];return typeof C=="string"?ot(k,C):typeof C=="number"?ot(k,String(C)):!1}}),z=R(()=>{if(e.remote)return m.value;{const{value:t}=B,{value:i}=d;return!i.length||!e.filterable?t:pn(t,v.value,i,e.childrenField)}}),U=R(()=>{const{valueField:t,childrenField:i}=e,u=wn(t,i);return Cn(z.value,u)}),j=R(()=>mn(B.value,e.valueField,e.childrenField)),O=S(!1),_=Je(me(e,"show"),O),T=S(null),H=S(null),I=S(null),{localeRef:G}=Mt("Select"),oe=R(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:G.value.placeholder}),Q=[],ae=S(new Map),ie=R(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:i,valueField:u}=e;return k=>({[i]:String(k),[u]:k})}return t===!1?!1:i=>Object.assign(t(i),{value:i})});function $(t){const i=e.remote,{value:u}=ae,{value:k}=j,{value:x}=ie,p=[];return t.forEach(C=>{if(k.has(C))p.push(k.get(C));else if(i&&u.has(C))p.push(u.get(C));else if(x){const V=x(C);V&&p.push(V)}}),p}const ve=R(()=>{if(e.multiple){const{value:t}=P;return Array.isArray(t)?$(t):[]}return null}),ee=R(()=>{const{value:t}=P;return!e.multiple&&!Array.isArray(t)?t===null?null:$([t])[0]||null:null}),N=sn(e),{mergedSizeRef:ge,mergedDisabledRef:Y,mergedStatusRef:we}=N;function A(t,i){const{onChange:u,"onUpdate:value":k,onUpdateValue:x}=e,{nTriggerFormChange:p,nTriggerFormInput:C}=N;u&&q(u,t,i),x&&q(x,t,i),k&&q(k,t,i),E.value=t,p(),C()}function re(t){const{onBlur:i}=e,{nTriggerFormBlur:u}=N;i&&q(i,t),u()}function te(){const{onClear:t}=e;t&&q(t)}function de(t){const{onFocus:i,showOnFocus:u}=e,{nTriggerFormFocus:k}=N;i&&q(i,t),k(),u&&W()}function be(t){const{onSearch:i}=e;i&&q(i,t)}function K(t){const{onScroll:i}=e;i&&q(i,t)}function ce(){var t;const{remote:i,multiple:u}=e;if(i){const{value:k}=ae;if(u){const{valueField:x}=e;(t=ve.value)===null||t===void 0||t.forEach(p=>{k.set(p[x],p)})}else{const x=ee.value;x&&k.set(x[e.valueField],x)}}}function le(t){const{onUpdateShow:i,"onUpdate:show":u}=e;i&&q(i,t),u&&q(u,t),O.value=t}function W(){Y.value||(le(!0),O.value=!0,e.filterable&&Oe())}function n(){le(!1)}function g(){d.value="",w.value=Q}const X=S(!1);function ue(){e.filterable&&(X.value=!0)}function xe(){e.filterable&&(X.value=!1,_.value||g())}function Re(){Y.value||(_.value?e.filterable?Oe():n():W())}function Te(t){var i,u;!((u=(i=I.value)===null||i===void 0?void 0:i.selfRef)===null||u===void 0)&&u.contains(t.relatedTarget)||(c.value=!1,re(t),n())}function Ce(t){de(t),c.value=!0}function Fe(){c.value=!0}function Ie(t){var i;!((i=T.value)===null||i===void 0)&&i.$el.contains(t.relatedTarget)||(c.value=!1,re(t),n())}function _e(){var t;(t=T.value)===null||t===void 0||t.focus(),n()}function $e(t){var i;_.value&&(!((i=T.value)===null||i===void 0)&&i.$el.contains(un(t))||n())}function Se(t){if(!Array.isArray(t))return[];if(ie.value)return Array.from(t);{const{remote:i}=e,{value:u}=j;if(i){const{value:k}=ae;return t.filter(x=>u.has(x)||k.has(x))}else return t.filter(k=>u.has(k))}}function ye(t){ne(t.rawNode)}function ne(t){if(Y.value)return;const{tag:i,remote:u,clearFilterAfterSelect:k,valueField:x}=e;if(i&&!u){const{value:p}=w,C=p[0]||null;if(C){const V=F.value;V.length?V.push(C):F.value=[C],w.value=Q}}if(u&&ae.value.set(t[x],t),e.multiple){const p=Se(P.value),C=p.findIndex(V=>V===t[x]);if(~C){if(p.splice(C,1),i&&!u){const V=o(t[x]);~V&&(F.value.splice(V,1),k&&(d.value=""))}}else p.push(t[x]),k&&(d.value="");A(p,$(p))}else{if(i&&!u){const p=o(t[x]);~p?F.value=[F.value[p]]:F.value=Q}Me(),n(),A(t[x],t)}}function o(t){return F.value.findIndex(u=>u[e.valueField]===t)}function s(t){_.value||W();const{value:i}=t.target;d.value=i;const{tag:u,remote:k}=e;if(be(i),u&&!k){if(!i){w.value=Q;return}const{onCreate:x}=e,p=x?x(i):{[e.labelField]:i,[e.valueField]:i},{valueField:C,labelField:V}=e;m.value.some(se=>se[C]===p[C]||se[V]===p[V])||F.value.some(se=>se[C]===p[C]||se[V]===p[V])?w.value=Q:w.value=[p]}}function D(t){t.stopPropagation();const{multiple:i}=e;!i&&e.filterable&&n(),te(),i?A([],[]):A(null,null)}function Ae(t){!at(t,"action")&&!at(t,"empty")&&!at(t,"header")&&t.preventDefault()}function Ee(t){K(t)}function ke(t){var i,u,k,x,p;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((i=T.value)===null||i===void 0)&&i.isComposing)){if(_.value){const C=(u=I.value)===null||u===void 0?void 0:u.getPendingTmNode();C?ye(C):e.filterable||(n(),Me())}else if(W(),e.tag&&X.value){const C=w.value[0];if(C){const V=C[e.valueField],{value:se}=P;e.multiple&&Array.isArray(se)&&se.includes(V)||ne(C)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;_.value&&((k=I.value)===null||k===void 0||k.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;_.value?(x=I.value)===null||x===void 0||x.next():W();break;case"Escape":_.value&&(cn(t),n()),(p=T.value)===null||p===void 0||p.focus();break}}function Me(){var t;(t=T.value)===null||t===void 0||t.focus()}function Oe(){var t;(t=T.value)===null||t===void 0||t.focusInput()}function je(){var t;_.value&&((t=H.value)===null||t===void 0||t.syncPosition())}ce(),Le(me(e,"options"),ce);const De={focus:()=>{var t;(t=T.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=T.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=T.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=T.value)===null||t===void 0||t.blurInput()}},Be=R(()=>{const{self:{menuBoxShadow:t}}=M.value;return{"--n-menu-box-shadow":t}}),fe=h?dt("select",void 0,Be,e):void 0;return Object.assign(Object.assign({},De),{mergedStatus:we,mergedClsPrefix:r,mergedBordered:b,namespace:f,treeMate:U,isMounted:dn(),triggerRef:T,menuRef:I,pattern:d,uncontrolledShow:O,mergedShow:_,adjustedTo:Ke(e),uncontrolledValue:E,mergedValue:P,followerRef:H,localizedPlaceholder:oe,selectedOption:ee,selectedOptions:ve,mergedSize:ge,mergedDisabled:Y,focused:c,activeWithoutMenuOpen:X,inlineThemeDisabled:h,onTriggerInputFocus:ue,onTriggerInputBlur:xe,handleTriggerOrMenuResize:je,handleMenuFocus:Fe,handleMenuBlur:Ie,handleMenuTabOut:_e,handleTriggerClick:Re,handleToggle:ye,handleDeleteOption:ne,handlePatternInput:s,handleClear:D,handleTriggerBlur:Te,handleTriggerFocus:Ce,handleKeydown:ke,handleMenuAfterLeave:g,handleMenuClickOutside:$e,handleMenuScroll:Ee,handleMenuKeydown:ke,handleMenuMousedown:Ae,mergedTheme:M,cssVars:h?void 0:Be,themeClass:fe==null?void 0:fe.themeClass,onRender:fe==null?void 0:fe.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Gt,null,{default:()=>[a(en,null,{default:()=>a(Sn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,r;return[(r=(e=this.$slots).arrow)===null||r===void 0?void 0:r.call(e)]}})}),a(tn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ke.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(nn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,r,b;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),on(a(bn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(r=this.menuProps)===null||r===void 0?void 0:r.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(b=this.menuProps)===null||b===void 0?void 0:b.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var f,h;return[(h=(f=this.$slots).empty)===null||h===void 0?void 0:h.call(f)]},header:()=>{var f,h;return[(h=(f=this.$slots).header)===null||h===void 0?void 0:h.call(f)]},action:()=>{var f,h;return[(h=(f=this.$slots).action)===null||h===void 0?void 0:h.call(f)]}}),this.displayDirective==="show"?[[an,this.mergedShow],[ct,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ct,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Ct=`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`,Ft=[Z("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)],Bn=y("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[y("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),y("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),he("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),y("select",`
 width: var(--n-select-width);
 `),he("&.transition-disabled",[y("pagination-item","transition: none!important;")]),y("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[y("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),y("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[Z("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[y("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),it("disabled",[Z("hover",Ct,Ft),he("&:hover",Ct,Ft),he("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[Z("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),Z("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[he("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[Z("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[y("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)]),Z("simple",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[y("pagination-quick-jumper",[y("input",`
 margin: 0;
 `)])])]);function Pn(e){var r;if(!e)return 10;const{defaultPageSize:b}=e;if(b!==void 0)return b;const f=(r=e.pageSizes)===null||r===void 0?void 0:r[0];return typeof f=="number"?f:(f==null?void 0:f.value)||10}function zn(e,r,b,f){let h=!1,M=!1,E=1,l=r;if(r===1)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:l,fastBackwardTo:E,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}]};if(r===2)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:l,fastBackwardTo:E,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1},{type:"page",label:2,active:e===2,mayBeFastBackward:!0,mayBeFastForward:!1}]};const P=1,c=r;let d=e,m=e;const F=(b-5)/2;m+=Math.ceil(F),m=Math.min(Math.max(m,P+b-3),c-2),d-=Math.floor(F),d=Math.max(Math.min(d,c-b+3),P+2);let w=!1,B=!1;d>P+2&&(w=!0),m<c-2&&(B=!0);const v=[];v.push({type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}),w?(h=!0,E=d-1,v.push({type:"fast-backward",active:!1,label:void 0,options:f?yt(P+1,d-1):null})):c>=P+1&&v.push({type:"page",label:P+1,mayBeFastBackward:!0,mayBeFastForward:!1,active:e===P+1});for(let z=d;z<=m;++z)v.push({type:"page",label:z,mayBeFastBackward:!1,mayBeFastForward:!1,active:e===z});return B?(M=!0,l=m+1,v.push({type:"fast-forward",active:!1,label:void 0,options:f?yt(m+1,c-1):null})):m===c-2&&v[v.length-1].label!==c-1&&v.push({type:"page",mayBeFastForward:!0,mayBeFastBackward:!1,label:c-1,active:e===c-1}),v[v.length-1].label!==c&&v.push({type:"page",mayBeFastForward:!1,mayBeFastBackward:!1,label:c,active:e===c}),{hasFastBackward:h,hasFastForward:M,fastBackwardTo:E,fastForwardTo:l,items:v}}function yt(e,r){const b=[];for(let f=e;f<=r;++f)b.push({label:`${f}`,value:f});return b}const Rn=Object.assign(Object.assign({},ze.props),{simple:Boolean,page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:Number,pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},selectProps:Object,prev:Function,next:Function,goto:Function,prefix:Function,suffix:Function,label:Function,displayOrder:{type:Array,default:["pages","size-picker","quick-jumper"]},to:Ke.propTo,showQuickJumpDropdown:{type:Boolean,default:!0},"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]}),Dn=We({name:"Pagination",props:Rn,slots:Object,setup(e){const{mergedComponentPropsRef:r,mergedClsPrefixRef:b,inlineThemeDisabled:f,mergedRtlRef:h}=st(e),M=ze("Pagination","-pagination",Bn,hn,e,b),{localeRef:E}=Mt("Pagination"),l=S(null),P=S(e.defaultPage),c=S(Pn(e)),d=Je(me(e,"page"),P),m=Je(me(e,"pageSize"),c),F=R(()=>{const{itemCount:n}=e;if(n!==void 0)return Math.max(1,Math.ceil(n/m.value));const{pageCount:g}=e;return g!==void 0?Math.max(g,1):1}),w=S("");He(()=>{e.simple,w.value=String(d.value)});const B=S(!1),v=S(!1),z=S(!1),U=S(!1),j=()=>{e.disabled||(B.value=!0,ee())},O=()=>{e.disabled||(B.value=!1,ee())},_=()=>{v.value=!0,ee()},T=()=>{v.value=!1,ee()},H=n=>{N(n)},I=R(()=>zn(d.value,F.value,e.pageSlot,e.showQuickJumpDropdown));He(()=>{I.value.hasFastBackward?I.value.hasFastForward||(B.value=!1,z.value=!1):(v.value=!1,U.value=!1)});const G=R(()=>{const n=E.value.selectionSuffix;return e.pageSizes.map(g=>typeof g=="number"?{label:`${g} / ${n}`,value:g}:g)}),oe=R(()=>{var n,g;return((g=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n.Pagination)===null||g===void 0?void 0:g.inputSize)||wt(e.size)}),Q=R(()=>{var n,g;return((g=(n=r==null?void 0:r.value)===null||n===void 0?void 0:n.Pagination)===null||g===void 0?void 0:g.selectSize)||wt(e.size)}),ae=R(()=>(d.value-1)*m.value),ie=R(()=>{const n=d.value*m.value-1,{itemCount:g}=e;return g!==void 0&&n>g-1?g-1:n}),$=R(()=>{const{itemCount:n}=e;return n!==void 0?n:(e.pageCount||1)*m.value}),ve=kt("Pagination",h,b);function ee(){lt(()=>{var n;const{value:g}=l;g&&(g.classList.add("transition-disabled"),(n=l.value)===null||n===void 0||n.offsetWidth,g.classList.remove("transition-disabled"))})}function N(n){if(n===d.value)return;const{"onUpdate:page":g,onUpdatePage:X,onChange:ue,simple:xe}=e;g&&q(g,n),X&&q(X,n),ue&&q(ue,n),P.value=n,xe&&(w.value=String(n))}function ge(n){if(n===m.value)return;const{"onUpdate:pageSize":g,onUpdatePageSize:X,onPageSizeChange:ue}=e;g&&q(g,n),X&&q(X,n),ue&&q(ue,n),c.value=n,F.value<d.value&&N(F.value)}function Y(){if(e.disabled)return;const n=Math.min(d.value+1,F.value);N(n)}function we(){if(e.disabled)return;const n=Math.max(d.value-1,1);N(n)}function A(){if(e.disabled)return;const n=Math.min(I.value.fastForwardTo,F.value);N(n)}function re(){if(e.disabled)return;const n=Math.max(I.value.fastBackwardTo,1);N(n)}function te(n){ge(n)}function de(){const n=Number.parseInt(w.value);Number.isNaN(n)||(N(Math.max(1,Math.min(n,F.value))),e.simple||(w.value=""))}function be(){de()}function K(n){if(!e.disabled)switch(n.type){case"page":N(n.label);break;case"fast-backward":re();break;case"fast-forward":A();break}}function ce(n){w.value=n.replace(/\D+/g,"")}He(()=>{d.value,m.value,ee()});const le=R(()=>{const{size:n}=e,{self:{buttonBorder:g,buttonBorderHover:X,buttonBorderPressed:ue,buttonIconColor:xe,buttonIconColorHover:Re,buttonIconColorPressed:Te,itemTextColor:Ce,itemTextColorHover:Fe,itemTextColorPressed:Ie,itemTextColorActive:_e,itemTextColorDisabled:$e,itemColor:Se,itemColorHover:ye,itemColorPressed:ne,itemColorActive:o,itemColorActiveHover:s,itemColorDisabled:D,itemBorder:Ae,itemBorderHover:Ee,itemBorderPressed:ke,itemBorderActive:Me,itemBorderDisabled:Oe,itemBorderRadius:je,jumperTextColor:De,jumperTextColorDisabled:Be,buttonColor:fe,buttonColorHover:t,buttonColorPressed:i,[J("itemPadding",n)]:u,[J("itemMargin",n)]:k,[J("inputWidth",n)]:x,[J("selectWidth",n)]:p,[J("inputMargin",n)]:C,[J("selectMargin",n)]:V,[J("jumperFontSize",n)]:se,[J("prefixMargin",n)]:qe,[J("suffixMargin",n)]:Qe,[J("itemSize",n)]:Ye,[J("buttonIconSize",n)]:Ze,[J("itemFontSize",n)]:Xe,[`${J("itemMargin",n)}Rtl`]:Ge,[`${J("inputMargin",n)}Rtl`]:et},common:{cubicBezierEaseInOut:tt}}=M.value;return{"--n-prefix-margin":qe,"--n-suffix-margin":Qe,"--n-item-font-size":Xe,"--n-select-width":p,"--n-select-margin":V,"--n-input-width":x,"--n-input-margin":C,"--n-input-margin-rtl":et,"--n-item-size":Ye,"--n-item-text-color":Ce,"--n-item-text-color-disabled":$e,"--n-item-text-color-hover":Fe,"--n-item-text-color-active":_e,"--n-item-text-color-pressed":Ie,"--n-item-color":Se,"--n-item-color-hover":ye,"--n-item-color-disabled":D,"--n-item-color-active":o,"--n-item-color-active-hover":s,"--n-item-color-pressed":ne,"--n-item-border":Ae,"--n-item-border-hover":Ee,"--n-item-border-disabled":Oe,"--n-item-border-active":Me,"--n-item-border-pressed":ke,"--n-item-padding":u,"--n-item-border-radius":je,"--n-bezier":tt,"--n-jumper-font-size":se,"--n-jumper-text-color":De,"--n-jumper-text-color-disabled":Be,"--n-item-margin":k,"--n-item-margin-rtl":Ge,"--n-button-icon-size":Ze,"--n-button-icon-color":xe,"--n-button-icon-color-hover":Re,"--n-button-icon-color-pressed":Te,"--n-button-color-hover":t,"--n-button-color":fe,"--n-button-color-pressed":i,"--n-button-border":g,"--n-button-border-hover":X,"--n-button-border-pressed":ue}}),W=f?dt("pagination",R(()=>{let n="";const{size:g}=e;return n+=g[0],n}),le,e):void 0;return{rtlEnabled:ve,mergedClsPrefix:b,locale:E,selfRef:l,mergedPage:d,pageItems:R(()=>I.value.items),mergedItemCount:$,jumperValue:w,pageSizeOptions:G,mergedPageSize:m,inputSize:oe,selectSize:Q,mergedTheme:M,mergedPageCount:F,startIndex:ae,endIndex:ie,showFastForwardMenu:z,showFastBackwardMenu:U,fastForwardActive:B,fastBackwardActive:v,handleMenuSelect:H,handleFastForwardMouseenter:j,handleFastForwardMouseleave:O,handleFastBackwardMouseenter:_,handleFastBackwardMouseleave:T,handleJumperInput:ce,handleBackwardClick:we,handleForwardClick:Y,handlePageItemClick:K,handleSizePickerChange:te,handleQuickJumperChange:be,cssVars:f?void 0:le,themeClass:W==null?void 0:W.themeClass,onRender:W==null?void 0:W.onRender}},render(){const{$slots:e,mergedClsPrefix:r,disabled:b,cssVars:f,mergedPage:h,mergedPageCount:M,pageItems:E,showSizePicker:l,showQuickJumper:P,mergedTheme:c,locale:d,inputSize:m,selectSize:F,mergedPageSize:w,pageSizeOptions:B,jumperValue:v,simple:z,prev:U,next:j,prefix:O,suffix:_,label:T,goto:H,handleJumperInput:I,handleSizePickerChange:G,handleBackwardClick:oe,handlePageItemClick:Q,handleForwardClick:ae,handleQuickJumperChange:ie,onRender:$}=this;$==null||$();const ve=O||e.prefix,ee=_||e.suffix,N=U||e.prev,ge=j||e.next,Y=T||e.label;return a("div",{ref:"selfRef",class:[`${r}-pagination`,this.themeClass,this.rtlEnabled&&`${r}-pagination--rtl`,b&&`${r}-pagination--disabled`,z&&`${r}-pagination--simple`],style:f},ve?a("div",{class:`${r}-pagination-prefix`},ve({page:h,pageSize:w,pageCount:M,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,this.displayOrder.map(we=>{switch(we){case"pages":return a(rt,null,a("div",{class:[`${r}-pagination-item`,!N&&`${r}-pagination-item--button`,(h<=1||h>M||b)&&`${r}-pagination-item--disabled`],onClick:oe},N?N({page:h,pageSize:w,pageCount:M,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):a(Pe,{clsPrefix:r},{default:()=>this.rtlEnabled?a(vt,null):a(gt,null)})),z?a(rt,null,a("div",{class:`${r}-pagination-quick-jumper`},a(ft,{value:v,onUpdateValue:I,size:m,placeholder:"",disabled:b,theme:c.peers.Input,themeOverrides:c.peerOverrides.Input,onChange:ie}))," /"," ",M):E.map((A,re)=>{let te,de,be;const{type:K}=A;switch(K){case"page":const le=A.label;Y?te=Y({type:"page",node:le,active:A.active}):te=le;break;case"fast-forward":const W=this.fastForwardActive?a(Pe,{clsPrefix:r},{default:()=>this.rtlEnabled?a(pt,null):a(bt,null)}):a(Pe,{clsPrefix:r},{default:()=>a(xt,null)});Y?te=Y({type:"fast-forward",node:W,active:this.fastForwardActive||this.showFastForwardMenu}):te=W,de=this.handleFastForwardMouseenter,be=this.handleFastForwardMouseleave;break;case"fast-backward":const n=this.fastBackwardActive?a(Pe,{clsPrefix:r},{default:()=>this.rtlEnabled?a(bt,null):a(pt,null)}):a(Pe,{clsPrefix:r},{default:()=>a(xt,null)});Y?te=Y({type:"fast-backward",node:n,active:this.fastBackwardActive||this.showFastBackwardMenu}):te=n,de=this.handleFastBackwardMouseenter,be=this.handleFastBackwardMouseleave;break}const ce=a("div",{key:re,class:[`${r}-pagination-item`,A.active&&`${r}-pagination-item--active`,K!=="page"&&(K==="fast-backward"&&this.showFastBackwardMenu||K==="fast-forward"&&this.showFastForwardMenu)&&`${r}-pagination-item--hover`,b&&`${r}-pagination-item--disabled`,K==="page"&&`${r}-pagination-item--clickable`],onClick:()=>{Q(A)},onMouseenter:de,onMouseleave:be},te);if(K==="page"&&!A.mayBeFastBackward&&!A.mayBeFastForward)return ce;{const le=A.type==="page"?A.mayBeFastBackward?"fast-backward":"fast-forward":A.type;return A.type!=="page"&&!A.options?ce:a(xn,{to:this.to,key:le,disabled:b,trigger:"hover",virtualScroll:!0,style:{width:"60px"},theme:c.peers.Popselect,themeOverrides:c.peerOverrides.Popselect,builtinThemeOverrides:{peers:{InternalSelectMenu:{height:"calc(var(--n-option-height) * 4.6)"}}},nodeProps:()=>({style:{justifyContent:"center"}}),show:K==="page"?!1:K==="fast-backward"?this.showFastBackwardMenu:this.showFastForwardMenu,onUpdateShow:W=>{K!=="page"&&(W?K==="fast-backward"?this.showFastBackwardMenu=W:this.showFastForwardMenu=W:(this.showFastBackwardMenu=!1,this.showFastForwardMenu=!1))},options:A.type!=="page"&&A.options?A.options:[],onUpdateValue:this.handleMenuSelect,scrollable:!0,showCheckmark:!1},{default:()=>ce})}}),a("div",{class:[`${r}-pagination-item`,!ge&&`${r}-pagination-item--button`,{[`${r}-pagination-item--disabled`]:h<1||h>=M||b}],onClick:ae},ge?ge({page:h,pageSize:w,pageCount:M,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):a(Pe,{clsPrefix:r},{default:()=>this.rtlEnabled?a(gt,null):a(vt,null)})));case"size-picker":return!z&&l?a(On,Object.assign({consistentMenuWidth:!1,placeholder:"",showCheckmark:!1,to:this.to},this.selectProps,{size:F,options:B,value:w,disabled:b,theme:c.peers.Select,themeOverrides:c.peerOverrides.Select,onUpdateValue:G})):null;case"quick-jumper":return!z&&P?a("div",{class:`${r}-pagination-quick-jumper`},H?H():fn(this.$slots.goto,()=>[d.goto]),a(ft,{value:v,onUpdateValue:I,size:m,placeholder:"",disabled:b,theme:c.peers.Input,themeOverrides:c.peerOverrides.Input,onChange:ie})):null;default:return null}}),ee?a("div",{class:`${r}-pagination-suffix`},ee({page:h,pageSize:w,pageCount:M,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}});export{Dn as _};
