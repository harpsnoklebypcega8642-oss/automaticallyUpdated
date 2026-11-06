import{P as _,c5 as z,Y as i,W as h,z as j,w as a,R as G,F as L,T as y,c6 as K,c as k,ab as B,x as Y,N as Z,O as p,a6 as J,a1 as X,c7 as Q,c8 as ee,r as $,J as oe,aa as te,c9 as w,A as ne,H as re,ca as ie,o as se,cb as le,ae as R,ak as P,al as f,aW as ae}from"./index-BRWWJpNX.js";import{N as de}from"./useInject-DN4TGpb0.js";const ce=_("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[z("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[z("no-title",`
 display: flex;
 align-items: center;
 `)]),i("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),h("title-position-left",[i("line",[h("left",{width:"28px"})])]),h("title-position-right",[i("line",[h("right",{width:"28px"})])]),h("dashed",[i("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),h("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),i("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),z("dashed",[i("line",{backgroundColor:"var(--n-color)"})]),h("dashed",[i("line",{borderColor:"var(--n-color)"})]),h("vertical",{backgroundColor:"var(--n-color)"})]),ue=Object.assign(Object.assign({},y.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),pe=j({name:"Divider",props:ue,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=L(e),l=y("Divider","-divider",ce,K,e,o),c=k(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:m,textColor:r,fontWeight:u}}=l.value;return{"--n-bezier":t,"--n-color":m,"--n-text-color":r,"--n-font-weight":u}}),n=s?B("divider",void 0,c,e):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:c,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$slots:o,titlePlacement:s,vertical:l,dashed:c,cssVars:n,mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:l,[`${t}-divider--no-title`]:!o.default,[`${t}-divider--dashed`]:c,[`${t}-divider--title-position-${s}`]:o.default&&s}],style:n},l?null:a("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!l&&o.default?a(G,null,a("div",{class:`${t}-divider__title`},this.$slots),a("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}});Object.assign(Object.assign({},y.props),{left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"}});const he=Y("n-float-button-group");function fe(e){const{popoverColor:o,textColor2:s,buttonColor2Hover:l,buttonColor2Pressed:c,primaryColor:n,primaryColorHover:t,primaryColorPressed:m,borderRadius:r}=e;return{color:o,colorHover:l,colorPressed:c,colorPrimary:n,colorPrimaryHover:t,colorPrimaryPressed:m,textColor:s,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .16)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .24)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .24)",textColorPrimary:"#fff",borderRadiusSquare:r}}const me={common:Z,self:fe},be=_("float-button",`
 user-select: none;
 cursor: pointer;
 color: var(--n-text-color);
 background-color: var(--n-color);
 font-size: 18px;
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-shadow: var(--n-box-shadow);
 display: flex;
 align-items: stretch;
 box-sizing: border-box;
`,[h("circle-shape",`
 border-radius: 4096px;
 `),h("square-shape",`
 border-radius: var(--n-border-radius-square);
 `),i("fill",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0
 left: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `),i("body",`
 position: relative;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 border-radius: inherit;
 flex-direction: column;
 box-sizing: border-box;
 padding: 2px 4px;
 gap: 2px;
 transform: scale(1);
 `,[i("description",`
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]),p("&:hover","box-shadow: var(--n-box-shadow-hover);",[p(">",[i("fill",`
 background-color: var(--n-color-hover);
 `)])]),p("&:active","box-shadow: var(--n-box-shadow-pressed);",[p(">",[i("fill",`
 background-color: var(--n-color-pressed);
 `)])]),h("show-menu",[p(">",[i("menu",`
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `),i("close",`
 transform: scale(1);
 opacity: 1;
 `),i("body",`
 transform: scale(0.75);
 opacity: 0;
 `)])]),i("close",`
 opacity: 0;
 transform: scale(0.75);
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: transform .3s var(--n-bezier), opacity .3s var(--n-bezier);
 `),i("menu",`
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `,[p("> *",`
 margin-bottom: 16px;
 `),_("float-button",`
 position: relative !important;
 `)])]),ve=Object.assign(Object.assign({},y.props),{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"},type:{type:String,default:"default"},menuTrigger:String,showMenu:{type:Boolean,default:void 0},onUpdateShowMenu:{type:[Function,Array],default:void 0},"onUpdate:showMenu":{type:[Function,Array],default:void 0}}),we=j({name:"FloatButton",props:ve,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=L(e),l=$(null),c=y("FloatButton","-float-button",be,me,e,o),n=ne(he,null),t=$(!1),m=oe(e,"showMenu"),r=te(m,t);function u(d){const{onUpdateShowMenu:x,"onUpdate:showMenu":C}=e;t.value=d,x&&R(x,d),C&&R(C,d)}const b=k(()=>{const{self:{color:d,textColor:x,boxShadow:C,boxShadowHover:O,boxShadowPressed:T,colorHover:V,colorPrimary:E,colorPrimaryHover:I,textColorPrimary:F,borderRadiusSquare:U,colorPressed:A,colorPrimaryPressed:D},common:{cubicBezierEaseInOut:q}}=c.value,{type:S}=e;return{"--n-bezier":q,"--n-box-shadow":C,"--n-box-shadow-hover":O,"--n-box-shadow-pressed":T,"--n-color":S==="primary"?E:d,"--n-text-color":S==="primary"?F:x,"--n-color-hover":S==="primary"?I:V,"--n-color-pressed":S==="primary"?D:A,"--n-border-radius-square":U}}),v=k(()=>{const{width:d,height:x}=e;return Object.assign({position:n?void 0:e.position,width:w(d),minHeight:w(x)},n?null:{left:w(e.left),right:w(e.right),top:w(e.top),bottom:w(e.bottom)})}),N=k(()=>n?n.shapeRef.value:e.shape),H=()=>{e.menuTrigger==="hover"&&u(!0)},M=()=>{e.menuTrigger==="hover"&&r.value&&u(!1)},W=()=>{e.menuTrigger==="click"&&u(!r.value)},g=s?B("float-button",k(()=>e.type[0]),b,e):void 0;return re(()=>{const d=l.value;d&&ie("mousemoveoutside",d,M)}),se(()=>{const d=l.value;d&&le("mousemoveoutside",d,M)}),{inlineStyle:v,selfElRef:l,cssVars:s?void 0:b,mergedClsPrefix:o,mergedShape:N,mergedShowMenu:r,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,Mouseenter:H,handleMouseleave:M,handleClick:W}},render(){var e;const{mergedClsPrefix:o,cssVars:s,mergedShape:l,type:c,menuTrigger:n,mergedShowMenu:t,themeClass:m,$slots:r,inlineStyle:u,onRender:b}=this;return b==null||b(),a("div",{ref:"selfElRef",class:[`${o}-float-button`,`${o}-float-button--${l}-shape`,`${o}-float-button--${c}-type`,t&&`${o}-float-button--show-menu`,m],style:[s,u],onMouseenter:this.Mouseenter,onMouseleave:this.handleMouseleave,onClick:this.handleClick,role:"button"},a("div",{class:`${o}-float-button__fill`,"aria-hidden":!0}),a("div",{class:`${o}-float-button__body`},(e=r.default)===null||e===void 0?void 0:e.call(r),ee(r.description,v=>v?a("div",{class:`${o}-float-button__description`},v):null)),n?a("div",{class:`${o}-float-button__close`},a(X,{clsPrefix:o},{default:()=>a(Q,null)})):null,n?a("div",{onClick:v=>{v.stopPropagation()},"data-float-button-menu":!0,class:`${o}-float-button__menu`},J(r.menu,()=>[])):null)}}),ke=P("add",!1,function(e){return f("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[f("rect",{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),f("path",{d:"M24 16V32",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),f("path",{d:"M16 24L32 24",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ye=P("folder-upload",!0,function(e){return f("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[f("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),f("path",{d:"M30 25.9867L24 20L18 26",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),f("path",{d:"M24 20V34",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Ce=P("time",!0,function(e){return f("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[f("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),f("path",{d:"M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});function Se(e){const o=ae({options:[],show:!1,x:0,y:0,item:{}}),s=()=>{o.show=!1,o.item={}},l=(r,u,b)=>{o.item=b,o.options=[...u],o.x=r.clientX,o.y=r.clientY,o.show=!0,r.preventDefault()},c=()=>o.item,n=(r,u)=>{e(r,u),s()},t=()=>{s()},m=j({name:"ContextMenuElement",render(){return a(de,{options:o.options,x:o.x,y:o.y,show:o.show,onSelect:n,onClickoutside:t,animated:!0,placement:"right",showArrow:!0})}});return{menu:{close:s,show:l,getItem:c},ContextMenuElement:m}}export{ke as A,ye as F,Ce as T,we as _,pe as a,Se as u};
