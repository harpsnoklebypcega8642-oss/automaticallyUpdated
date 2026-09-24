import{aV as ke,eG as Ne,c5 as q,aF as ie,c6 as V,eH as Pe,eI as Re,o as Ie,r as T,z,w as l,x as de,di as X,A as j,E as ce,aJ as Ke,eJ as Ce,eK as Oe,eL as _e,cW as De,c as y,G as J,dI as pe,I as H,R as ze,a5 as $e,dl as Ae,eM as Fe,dJ as Te,dH as je,P as N,cT as Be,O as E,c0 as le,W as I,Y as D,D as Me,b0 as Le,aa as Ee,J as K,F as He,T as fe,eN as Ue,U as F,ab as We,ae as te,dX as he}from"./index-CP-huyAt.js";import{h as se,c as Ge,b as qe}from"./create-BOEuAWPS.js";function Ve(e={},n){const i=ke({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,o=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(m=>{if(m!==d.key)return;const v=r[m];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},c=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(m=>{if(m!==d.key)return;const v=t[m];if(typeof v=="function")v(d);else{const{stop:g=!1,prevent:S=!1}=v;g&&d.stopPropagation(),S&&d.preventDefault(),v.handler(d)}})},f=()=>{(n===void 0||n.value)&&(q("keydown",document,o),q("keyup",document,c)),n!==void 0&&ie(n,d=>{d?(q("keydown",document,o),q("keyup",document,c)):(V("keydown",document,o),V("keyup",document,c))})};return Pe()?(Re(f),Ie(()=>{(n===void 0||n.value)&&(V("keydown",document,o),V("keyup",document,c))})):f(),Ne(i)}function Je(e,n,i){const r=T(e.value);let t=null;return ie(e,o=>{t!==null&&window.clearTimeout(t),o===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},n):r.value=!1}),r}const Xe=z({name:"ChevronRight",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),ae=de("n-dropdown-menu"),Y=de("n-dropdown"),ue=de("n-dropdown-option"),ve=z({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return l("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),Ye=z({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:n}=j(ae),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:o}=j(Y);return{labelField:r,showIcon:e,hasSubmenu:n,renderLabel:i,nodeProps:t,renderOption:o}},render(){var e;const{clsPrefix:n,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:o,renderOption:c}=this,{rawNode:f}=this.tmNode,d=l("div",Object.assign({class:`${n}-dropdown-option`},t==null?void 0:t(f)),l("div",{class:`${n}-dropdown-option-body ${n}-dropdown-option-body--group`},l("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__prefix`,r&&`${n}-dropdown-option-body__prefix--show-icon`]},X(f.icon)),l("div",{class:`${n}-dropdown-option-body__label`,"data-dropdown-option":!0},o?o(f):X((e=f.title)!==null&&e!==void 0?e:f[this.labelField])),l("div",{class:[`${n}-dropdown-option-body__suffix`,i&&`${n}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:d,option:f}):d}});function re(e,n){return e.type==="submenu"||e.type===void 0&&e[n]!==void 0}function Ze(e){return e.type==="group"}function we(e){return e.type==="divider"}function Qe(e){return e.type==="render"}const be=z({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const n=j(Y),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:o,activeKeyPathRef:c,animatedRef:f,mergedShowRef:d,renderLabelRef:m,renderIconRef:v,labelFieldRef:g,childrenFieldRef:S,renderOptionRef:P,nodePropsRef:C,menuPropsRef:B}=n,x=j(ue,null),O=j(ae),U=j(pe),Z=y(()=>e.tmNode.rawNode),W=y(()=>{const{value:s}=S;return re(e.tmNode.rawNode,s)}),Q=y(()=>{const{disabled:s}=e.tmNode;return s}),ee=y(()=>{if(!W.value)return!1;const{key:s,disabled:b}=e.tmNode;if(b)return!1;const{value:R}=i,{value:$}=r,{value:ne}=t,{value:A}=o;return R!==null?A.includes(s):$!==null?A.includes(s)&&A[A.length-1]!==s:ne!==null?A.includes(s):!1}),oe=y(()=>r.value===null&&!f.value),G=Je(ee,300,oe),M=y(()=>!!(x!=null&&x.enteringSubmenuRef.value)),L=T(!1);H(ue,{enteringSubmenuRef:L});function _(){L.value=!0}function a(){L.value=!1}function w(){const{parentKey:s,tmNode:b}=e;b.disabled||d.value&&(t.value=s,r.value=null,i.value=b.key)}function p(){const{tmNode:s}=e;s.disabled||d.value&&i.value!==s.key&&w()}function u(s){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:b}=s;b&&!se({target:b},"dropdownOption")&&!se({target:b},"scrollbarRail")&&(i.value=null)}function k(){const{value:s}=W,{tmNode:b}=e;d.value&&!s&&!b.disabled&&(n.doSelect(b.key,b.rawNode),n.doUpdateShow(!1))}return{labelField:g,renderLabel:m,renderIcon:v,siblingHasIcon:O.showIconRef,siblingHasSubmenu:O.hasSubmenuRef,menuProps:B,popoverBody:U,animated:f,mergedShowSubmenu:y(()=>G.value&&!M.value),rawNode:Z,hasSubmenu:W,pending:J(()=>{const{value:s}=o,{key:b}=e.tmNode;return s.includes(b)}),childActive:J(()=>{const{value:s}=c,{key:b}=e.tmNode,R=s.findIndex($=>b===$);return R===-1?!1:R<s.length-1}),active:J(()=>{const{value:s}=c,{key:b}=e.tmNode,R=s.findIndex($=>b===$);return R===-1?!1:R===s.length-1}),mergedDisabled:Q,renderOption:P,nodeProps:C,handleClick:k,handleMouseMove:p,handleMouseEnter:w,handleMouseLeave:u,handleSubmenuBeforeEnter:_,handleSubmenuAfterEnter:a}},render(){var e,n;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:o,siblingHasIcon:c,siblingHasSubmenu:f,renderLabel:d,renderIcon:m,renderOption:v,nodeProps:g,props:S,scrollable:P}=this;let C=null;if(t){const U=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=l(ye,Object.assign({},U,{clsPrefix:o,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const B={class:[`${o}-dropdown-option-body`,this.pending&&`${o}-dropdown-option-body--pending`,this.active&&`${o}-dropdown-option-body--active`,this.childActive&&`${o}-dropdown-option-body--child-active`,this.mergedDisabled&&`${o}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},x=g==null?void 0:g(r),O=l("div",Object.assign({class:[`${o}-dropdown-option`,x==null?void 0:x.class],"data-dropdown-option":!0},x),l("div",ce(B,S),[l("div",{class:[`${o}-dropdown-option-body__prefix`,c&&`${o}-dropdown-option-body__prefix--show-icon`]},[m?m(r):X(r.icon)]),l("div",{"data-dropdown-option":!0,class:`${o}-dropdown-option-body__label`},d?d(r):X((n=r[this.labelField])!==null&&n!==void 0?n:r.title)),l("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__suffix`,f&&`${o}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?l(Ke,null,{default:()=>l(Xe,null)}):null)]),this.hasSubmenu?l(Ce,null,{default:()=>[l(Oe,null,{default:()=>l("div",{class:`${o}-dropdown-offset-container`},l(_e,{show:this.mergedShowSubmenu,placement:this.placement,to:P&&this.popoverBody||void 0,teleportDisabled:!P},{default:()=>l("div",{class:`${o}-dropdown-menu-wrapper`},i?l(De,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return v?v({node:O,option:r}):O}}),eo=z({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:n,clsPrefix:i}=this,{children:r}=e;return l(ze,null,l(Ye,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:o}=t;return o.show===!1?null:we(o)?l(ve,{clsPrefix:i,key:t.key}):t.isGroup?($e("dropdown","`group` node is not allowed to be put in `group` node."),null):l(be,{clsPrefix:i,tmNode:t,parentKey:n,key:t.key})}))}}),oo=z({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:n}}=this.tmNode;return l("div",n,[e==null?void 0:e()])}}),ye=z({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:n,childrenFieldRef:i}=j(Y);H(ae,{showIconRef:y(()=>{const t=n.value;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:f}=o;return t?t(f):f.icon})}),hasSubmenuRef:y(()=>{const{value:t}=i;return e.tmNodes.some(o=>{var c;if(o.isGroup)return(c=o.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>re(d,t));const{rawNode:f}=o;return re(f,t)})})});const r=T(null);return H(Te,null),H(je,null),H(pe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:n,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:o}=t;return o.show===!1?null:Qe(o)?l(oo,{tmNode:t,key:t.key}):we(o)?l(ve,{clsPrefix:n,key:t.key}):Ze(o)?l(eo,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key}):l(be,{clsPrefix:n,tmNode:t,parentKey:e,key:t.key,props:o.props,scrollable:i})});return l("div",{class:[`${n}-dropdown-menu`,i&&`${n}-dropdown-menu--scrollable`],ref:"bodyRef"},i?l(Ae,{contentClass:`${n}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Fe({clsPrefix:n,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),no=N("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Be(),N("dropdown-option",`
 position: relative;
 `,[E("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[E("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),N("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[E("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),le("disabled",[I("pending",`
 color: var(--n-option-text-color-hover);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),E("&::before","background-color: var(--n-option-color-hover);")]),I("active",`
 color: var(--n-option-text-color-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),E("&::before","background-color: var(--n-option-color-active);")]),I("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[D("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),I("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),I("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[D("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[I("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),D("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[I("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),D("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),D("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[I("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),N("icon",`
 font-size: var(--n-option-icon-size);
 `)]),N("dropdown-menu","pointer-events: all;")]),N("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),N("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),N("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),E(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),le("scrollable",`
 padding: var(--n-padding);
 `),I("scrollable",[D("content",`
 padding: var(--n-padding);
 `)])]),to={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},ro=Object.keys(he),io=Object.assign(Object.assign(Object.assign({},he),to),fe.props),so=z({name:"Dropdown",inheritAttrs:!1,props:io,setup(e){const n=T(!1),i=Ee(K(e,"show"),n),r=y(()=>{const{keyField:a,childrenField:w}=e;return Ge(e.options,{getKey(p){return p[a]},getDisabled(p){return p.disabled===!0},getIgnored(p){return p.type==="divider"||p.type==="render"},getChildren(p){return p[w]}})}),t=y(()=>r.value.treeNodes),o=T(null),c=T(null),f=T(null),d=y(()=>{var a,w,p;return(p=(w=(a=o.value)!==null&&a!==void 0?a:c.value)!==null&&w!==void 0?w:f.value)!==null&&p!==void 0?p:null}),m=y(()=>r.value.getPath(d.value).keyPath),v=y(()=>r.value.getPath(e.value).keyPath),g=J(()=>e.keyboard&&i.value);Ve({keydown:{ArrowUp:{prevent:!0,handler:Q},ArrowRight:{prevent:!0,handler:W},ArrowDown:{prevent:!0,handler:ee},ArrowLeft:{prevent:!0,handler:Z},Enter:{prevent:!0,handler:oe},Escape:U}},g);const{mergedClsPrefixRef:S,inlineThemeDisabled:P}=He(e),C=fe("Dropdown","-dropdown",no,Ue,e,S);H(Y,{labelFieldRef:K(e,"labelField"),childrenFieldRef:K(e,"childrenField"),renderLabelRef:K(e,"renderLabel"),renderIconRef:K(e,"renderIcon"),hoverKeyRef:o,keyboardKeyRef:c,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:m,activeKeyPathRef:v,animatedRef:K(e,"animated"),mergedShowRef:i,nodePropsRef:K(e,"nodeProps"),renderOptionRef:K(e,"renderOption"),menuPropsRef:K(e,"menuProps"),doSelect:B,doUpdateShow:x}),ie(i,a=>{!e.animated&&!a&&O()});function B(a,w){const{onSelect:p}=e;p&&te(p,a,w)}function x(a){const{"onUpdate:show":w,onUpdateShow:p}=e;w&&te(w,a),p&&te(p,a),n.value=a}function O(){o.value=null,c.value=null,f.value=null}function U(){x(!1)}function Z(){M("left")}function W(){M("right")}function Q(){M("up")}function ee(){M("down")}function oe(){const a=G();a!=null&&a.isLeaf&&i.value&&(B(a.key,a.rawNode),x(!1))}function G(){var a;const{value:w}=r,{value:p}=d;return!w||p===null?null:(a=w.getNode(p))!==null&&a!==void 0?a:null}function M(a){const{value:w}=d,{value:{getFirstAvailableNode:p}}=r;let u=null;if(w===null){const k=p();k!==null&&(u=k.key)}else{const k=G();if(k){let s;switch(a){case"down":s=k.getNext();break;case"up":s=k.getPrev();break;case"right":s=k.getChild();break;case"left":s=k.getParent();break}s&&(u=s.key)}}u!==null&&(o.value=null,c.value=u)}const L=y(()=>{const{size:a,inverted:w}=e,{common:{cubicBezierEaseInOut:p},self:u}=C.value,{padding:k,dividerColor:s,borderRadius:b,optionOpacityDisabled:R,[F("optionIconSuffixWidth",a)]:$,[F("optionSuffixWidth",a)]:ne,[F("optionIconPrefixWidth",a)]:A,[F("optionPrefixWidth",a)]:me,[F("fontSize",a)]:ge,[F("optionHeight",a)]:xe,[F("optionIconSize",a)]:Se}=u,h={"--n-bezier":p,"--n-font-size":ge,"--n-padding":k,"--n-border-radius":b,"--n-option-height":xe,"--n-option-prefix-width":me,"--n-option-icon-prefix-width":A,"--n-option-suffix-width":ne,"--n-option-icon-suffix-width":$,"--n-option-icon-size":Se,"--n-divider-color":s,"--n-option-opacity-disabled":R};return w?(h["--n-color"]=u.colorInverted,h["--n-option-color-hover"]=u.optionColorHoverInverted,h["--n-option-color-active"]=u.optionColorActiveInverted,h["--n-option-text-color"]=u.optionTextColorInverted,h["--n-option-text-color-hover"]=u.optionTextColorHoverInverted,h["--n-option-text-color-active"]=u.optionTextColorActiveInverted,h["--n-option-text-color-child-active"]=u.optionTextColorChildActiveInverted,h["--n-prefix-color"]=u.prefixColorInverted,h["--n-suffix-color"]=u.suffixColorInverted,h["--n-group-header-text-color"]=u.groupHeaderTextColorInverted):(h["--n-color"]=u.color,h["--n-option-color-hover"]=u.optionColorHover,h["--n-option-color-active"]=u.optionColorActive,h["--n-option-text-color"]=u.optionTextColor,h["--n-option-text-color-hover"]=u.optionTextColorHover,h["--n-option-text-color-active"]=u.optionTextColorActive,h["--n-option-text-color-child-active"]=u.optionTextColorChildActive,h["--n-prefix-color"]=u.prefixColor,h["--n-suffix-color"]=u.suffixColor,h["--n-group-header-text-color"]=u.groupHeaderTextColor),h}),_=P?We("dropdown",y(()=>`${e.size[0]}${e.inverted?"i":""}`),L,e):void 0;return{mergedClsPrefix:S,mergedTheme:C,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&O()},doUpdateShow:x,cssVars:P?void 0:L,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const e=(r,t,o,c,f)=>{var d;const{mergedClsPrefix:m,menuProps:v}=this;(d=this.onRender)===null||d===void 0||d.call(this);const g=(v==null?void 0:v(void 0,this.tmNodes.map(P=>P.rawNode)))||{},S={ref:qe(t),class:[r,`${m}-dropdown`,this.themeClass],clsPrefix:m,tmNodes:this.tmNodes,style:[...o,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:f};return l(ye,ce(this.$attrs,S,g))},{mergedTheme:n}=this,i={show:this.mergedShow,theme:n.peers.Popover,themeOverrides:n.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return l(Le,Object.assign({},Me(this.$props,ro),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}});export{so as N,Ve as u};
