import{P as _,c0 as z,Y as r,W as f,z as L,w as d,R as G,F as R,T as p,c1 as K,c as y,ab as B,x as Y,N as Z,O as k,a6 as J,a1 as X,c2 as Q,c3 as ee,r as P,J as te,aa as oe,c4 as w,A as ne,H as ie,c5 as re,o as se,c6 as le,ae as $,aj as j,ak as a,aV as ae}from"./index-CP-huyAt.js";import{N as de}from"./Dropdown-Djx1pCTK.js";const ce=_("divider",`
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
 `)]),r("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),f("title-position-left",[r("line",[f("left",{width:"28px"})])]),f("title-position-right",[r("line",[f("right",{width:"28px"})])]),f("dashed",[r("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),f("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),r("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),z("dashed",[r("line",{backgroundColor:"var(--n-color)"})]),f("dashed",[r("line",{borderColor:"var(--n-color)"})]),f("vertical",{backgroundColor:"var(--n-color)"})]),ue=Object.assign(Object.assign({},p.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ke=L({name:"Divider",props:ue,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=R(e),l=p("Divider","-divider",ce,K,e,t),u=y(()=>{const{common:{cubicBezierEaseInOut:o},self:{color:m,textColor:i,fontWeight:h}}=l.value;return{"--n-bezier":o,"--n-color":m,"--n-text-color":i,"--n-font-weight":h}}),n=s?B("divider",void 0,u,e):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:u,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$slots:t,titlePlacement:s,vertical:l,dashed:u,cssVars:n,mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{role:"separator",class:[`${o}-divider`,this.themeClass,{[`${o}-divider--vertical`]:l,[`${o}-divider--no-title`]:!t.default,[`${o}-divider--dashed`]:u,[`${o}-divider--title-position-${s}`]:t.default&&s}],style:n},l?null:d("div",{class:`${o}-divider__line ${o}-divider__line--left`}),!l&&t.default?d(G,null,d("div",{class:`${o}-divider__title`},this.$slots),d("div",{class:`${o}-divider__line ${o}-divider__line--right`})):null)}});Object.assign(Object.assign({},p.props),{left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"}});const he=Y("n-float-button-group");function fe(e){const{popoverColor:t,textColor2:s,buttonColor2Hover:l,buttonColor2Pressed:u,primaryColor:n,primaryColorHover:o,primaryColorPressed:m,borderRadius:i}=e;return{color:t,colorHover:l,colorPressed:u,colorPrimary:n,colorPrimaryHover:o,colorPrimaryPressed:m,textColor:s,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .16)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .24)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .24)",textColorPrimary:"#fff",borderRadiusSquare:i}}const me={common:Z,self:fe},be=_("float-button",`
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
`,[f("circle-shape",`
 border-radius: 4096px;
 `),f("square-shape",`
 border-radius: var(--n-border-radius-square);
 `),r("fill",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0
 left: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `),r("body",`
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
 `,[r("description",`
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]),k("&:hover","box-shadow: var(--n-box-shadow-hover);",[k(">",[r("fill",`
 background-color: var(--n-color-hover);
 `)])]),k("&:active","box-shadow: var(--n-box-shadow-pressed);",[k(">",[r("fill",`
 background-color: var(--n-color-pressed);
 `)])]),f("show-menu",[k(">",[r("menu",`
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `),r("close",`
 transform: scale(1);
 opacity: 1;
 `),r("body",`
 transform: scale(0.75);
 opacity: 0;
 `)])]),r("close",`
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
 `),r("menu",`
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `,[k("> *",`
 margin-bottom: 16px;
 `),_("float-button",`
 position: relative !important;
 `)])]),ve=Object.assign(Object.assign({},p.props),{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"},type:{type:String,default:"default"},menuTrigger:String,showMenu:{type:Boolean,default:void 0},onUpdateShowMenu:{type:[Function,Array],default:void 0},"onUpdate:showMenu":{type:[Function,Array],default:void 0}}),we=L({name:"FloatButton",props:ve,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=R(e),l=P(null),u=p("FloatButton","-float-button",be,me,e,t),n=ne(he,null),o=P(!1),m=te(e,"showMenu"),i=oe(m,o);function h(c){const{onUpdateShowMenu:x,"onUpdate:showMenu":C}=e;o.value=c,x&&$(x,c),C&&$(C,c)}const b=y(()=>{const{self:{color:c,textColor:x,boxShadow:C,boxShadowHover:W,boxShadowPressed:O,colorHover:T,colorPrimary:E,colorPrimaryHover:I,textColorPrimary:F,borderRadiusSquare:U,colorPressed:A,colorPrimaryPressed:D},common:{cubicBezierEaseInOut:q}}=u.value,{type:S}=e;return{"--n-bezier":q,"--n-box-shadow":C,"--n-box-shadow-hover":W,"--n-box-shadow-pressed":O,"--n-color":S==="primary"?E:c,"--n-text-color":S==="primary"?F:x,"--n-color-hover":S==="primary"?I:T,"--n-color-pressed":S==="primary"?D:A,"--n-border-radius-square":U}}),v=y(()=>{const{width:c,height:x}=e;return Object.assign({position:n?void 0:e.position,width:w(c),minHeight:w(x)},n?null:{left:w(e.left),right:w(e.right),top:w(e.top),bottom:w(e.bottom)})}),H=y(()=>n?n.shapeRef.value:e.shape),N=()=>{e.menuTrigger==="hover"&&h(!0)},M=()=>{e.menuTrigger==="hover"&&i.value&&h(!1)},V=()=>{e.menuTrigger==="click"&&h(!i.value)},g=s?B("float-button",y(()=>e.type[0]),b,e):void 0;return ie(()=>{const c=l.value;c&&re("mousemoveoutside",c,M)}),se(()=>{const c=l.value;c&&le("mousemoveoutside",c,M)}),{inlineStyle:v,selfElRef:l,cssVars:s?void 0:b,mergedClsPrefix:t,mergedShape:H,mergedShowMenu:i,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,Mouseenter:N,handleMouseleave:M,handleClick:V}},render(){var e;const{mergedClsPrefix:t,cssVars:s,mergedShape:l,type:u,menuTrigger:n,mergedShowMenu:o,themeClass:m,$slots:i,inlineStyle:h,onRender:b}=this;return b==null||b(),d("div",{ref:"selfElRef",class:[`${t}-float-button`,`${t}-float-button--${l}-shape`,`${t}-float-button--${u}-type`,o&&`${t}-float-button--show-menu`,m],style:[s,h],onMouseenter:this.Mouseenter,onMouseleave:this.handleMouseleave,onClick:this.handleClick,role:"button"},d("div",{class:`${t}-float-button__fill`,"aria-hidden":!0}),d("div",{class:`${t}-float-button__body`},(e=i.default)===null||e===void 0?void 0:e.call(i),ee(i.description,v=>v?d("div",{class:`${t}-float-button__description`},v):null)),n?d("div",{class:`${t}-float-button__close`},d(X,{clsPrefix:t},{default:()=>d(Q,null)})):null,n?d("div",{onClick:v=>{v.stopPropagation()},"data-float-button-menu":!0,class:`${t}-float-button__menu`},J(i.menu,()=>[])):null)}}),ye=j("add",!1,function(e){return a("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[a("rect",{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M24 16V32",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M16 24L32 24",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),pe=j("folder-upload",!0,function(e){return a("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M30 25.9867L24 20L18 26",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M24 20V34",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Ce=j("share",!0,function(e){return a("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M28 6H42V20",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M25.7998 22.1999L41.0998 6.8999",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),Se=j("time",!0,function(e){return a("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[a("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),a("path",{d:"M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});function je(e){const t=ae({options:[],show:!1,x:0,y:0,item:{}}),s=()=>{t.show=!1,t.item={}},l=(i,h,b)=>{t.item=b,t.options=[...h],t.x=i.clientX,t.y=i.clientY,t.show=!0,i.preventDefault()},u=()=>t.item,n=(i,h)=>{e(i,h),s()},o=()=>{s()},m=L({name:"ContextMenuElement",render(){return d(de,{options:t.options,x:t.x,y:t.y,show:t.show,onSelect:n,onClickoutside:o,animated:!0,placement:"right",showArrow:!0})}});return{menu:{close:s,show:l,getItem:u},ContextMenuElement:m}}export{ye as A,pe as F,Ce as S,Se as T,we as _,ke as a,je as u};
