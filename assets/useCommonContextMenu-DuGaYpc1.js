import{y as p,bu as q,q as A,s as L,b5 as M,b4 as l,r as v,t as R,u as c,bv as D,bw as G,bx as K,by as Z,x as X,a2 as z,bz as Y,bA as J,z as S,bB as x,bC as Q,b7 as ee,aj as oe,bD as te,bE as ne,bF as re,bG as P,I as C,H as n,al as ie}from"./index-BLrDgO7A.js";import{N as se}from"./Dropdown-CMCAGwl8.js";Object.assign(Object.assign({},p.props),{left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"}});const le=q("n-float-button-group");function ae(e){const{popoverColor:o,textColor2:s,buttonColor2Hover:a,buttonColor2Pressed:f,primaryColor:i,primaryColorHover:u,primaryColorPressed:b,borderRadius:t}=e;return{color:o,colorHover:a,colorPressed:f,colorPrimary:i,colorPrimaryHover:u,colorPrimaryPressed:b,textColor:s,boxShadow:"0 2px 8px 0px rgba(0, 0, 0, .16)",boxShadowHover:"0 2px 12px 0px rgba(0, 0, 0, .24)",boxShadowPressed:"0 2px 12px 0px rgba(0, 0, 0, .24)",textColorPrimary:"#fff",borderRadiusSquare:t}}const de={common:A,self:ae},ce=L("float-button",`
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
`,[M("circle-shape",`
 border-radius: 4096px;
 `),M("square-shape",`
 border-radius: var(--n-border-radius-square);
 `),l("fill",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0
 left: 0;
 transition: background-color .3s var(--n-bezier);
 border-radius: inherit;
 `),l("body",`
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
 `,[l("description",`
 font-size: 12px;
 text-align: center;
 line-height: 14px;
 `)]),v("&:hover","box-shadow: var(--n-box-shadow-hover);",[v(">",[l("fill",`
 background-color: var(--n-color-hover);
 `)])]),v("&:active","box-shadow: var(--n-box-shadow-pressed);",[v(">",[l("fill",`
 background-color: var(--n-color-pressed);
 `)])]),M("show-menu",[v(">",[l("menu",`
 pointer-events: all;
 bottom: 100%;
 opacity: 1;
 `),l("close",`
 transform: scale(1);
 opacity: 1;
 `),l("body",`
 transform: scale(0.75);
 opacity: 0;
 `)])]),l("close",`
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
 `),l("menu",`
 position: absolute;
 bottom: calc(100% - 8px);
 display: flex;
 flex-direction: column;
 opacity: 0;
 pointer-events: none;
 transition:
 opacity .3s var(--n-bezier),
 bottom .3s var(--n-bezier); 
 `,[v("> *",`
 margin-bottom: 16px;
 `),L("float-button",`
 position: relative !important;
 `)])]),ue=Object.assign(Object.assign({},p.props),{width:{type:[Number,String],default:40},height:{type:[Number,String],default:40},left:[Number,String],right:[Number,String],top:[Number,String],bottom:[Number,String],shape:{type:String,default:"circle"},position:{type:String,default:"fixed"},type:{type:String,default:"default"},menuTrigger:String,showMenu:{type:Boolean,default:void 0},onUpdateShowMenu:{type:[Function,Array],default:void 0},"onUpdate:showMenu":{type:[Function,Array],default:void 0}}),be=R({name:"FloatButton",props:ue,slots:Object,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=X(e),a=z(null),f=p("FloatButton","-float-button",ce,de,e,o),i=Q(le,null),u=z(!1),b=Y(e,"showMenu"),t=J(b,u);function d(r){const{onUpdateShowMenu:k,"onUpdate:showMenu":w}=e;u.value=r,k&&P(k,r),w&&P(w,r)}const h=S(()=>{const{self:{color:r,textColor:k,boxShadow:w,boxShadowHover:N,boxShadowPressed:W,colorHover:$,colorPrimary:V,colorPrimaryHover:E,textColorPrimary:T,borderRadiusSquare:I,colorPressed:O,colorPrimaryPressed:U},common:{cubicBezierEaseInOut:F}}=f.value,{type:y}=e;return{"--n-bezier":F,"--n-box-shadow":w,"--n-box-shadow-hover":N,"--n-box-shadow-pressed":W,"--n-color":y==="primary"?V:r,"--n-text-color":y==="primary"?T:k,"--n-color-hover":y==="primary"?E:$,"--n-color-pressed":y==="primary"?U:O,"--n-border-radius-square":I}}),m=S(()=>{const{width:r,height:k}=e;return Object.assign({position:i?void 0:e.position,width:x(r),minHeight:x(k)},i?null:{left:x(e.left),right:x(e.right),top:x(e.top),bottom:x(e.bottom)})}),_=S(()=>i?i.shapeRef.value:e.shape),H=()=>{e.menuTrigger==="hover"&&d(!0)},j=()=>{e.menuTrigger==="hover"&&t.value&&d(!1)},B=()=>{e.menuTrigger==="click"&&d(!t.value)},g=s?ee("float-button",S(()=>e.type[0]),h,e):void 0;return oe(()=>{const r=a.value;r&&te("mousemoveoutside",r,j)}),ne(()=>{const r=a.value;r&&re("mousemoveoutside",r,j)}),{inlineStyle:m,selfElRef:a,cssVars:s?void 0:h,mergedClsPrefix:o,mergedShape:_,mergedShowMenu:t,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender,Mouseenter:H,handleMouseleave:j,handleClick:B}},render(){var e;const{mergedClsPrefix:o,cssVars:s,mergedShape:a,type:f,menuTrigger:i,mergedShowMenu:u,themeClass:b,$slots:t,inlineStyle:d,onRender:h}=this;return h==null||h(),c("div",{ref:"selfElRef",class:[`${o}-float-button`,`${o}-float-button--${a}-shape`,`${o}-float-button--${f}-type`,u&&`${o}-float-button--show-menu`,b],style:[s,d],onMouseenter:this.Mouseenter,onMouseleave:this.handleMouseleave,onClick:this.handleClick,role:"button"},c("div",{class:`${o}-float-button__fill`,"aria-hidden":!0}),c("div",{class:`${o}-float-button__body`},(e=t.default)===null||e===void 0?void 0:e.call(t),Z(t.description,m=>m?c("div",{class:`${o}-float-button__description`},m):null)),i?c("div",{class:`${o}-float-button__close`},c(G,{clsPrefix:o},{default:()=>c(K,null)})):null,i?c("div",{onClick:m=>{m.stopPropagation()},"data-float-button-menu":!0,class:`${o}-float-button__menu`},D(t.menu,()=>[])):null)}}),me=C("add",!1,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("rect",{x:"6",y:"6",width:"36",height:"36",rx:"3",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M24 16V32",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M16 24L32 24",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ge=C("folder-upload",!0,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M30 25.9867L24 20L18 26",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M24 20V34",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ke=C("share",!0,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M28 6H42V20",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M25.7998 22.1999L41.0998 6.8999",stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])}),ve=C("time",!0,function(e){return n("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},[n("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:e.colors[1],stroke:e.colors[0],"stroke-width":e.strokeWidth,"stroke-linejoin":e.strokeLinejoin},null),n("path",{d:"M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883",stroke:e.colors[2],"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},null)])});function xe(e){const o=ie({options:[],show:!1,x:0,y:0,item:{}}),s=()=>{o.show=!1,o.item={}},a=(t,d,h)=>{o.item=h,o.options=[...d],o.x=t.clientX,o.y=t.clientY,o.show=!0,t.preventDefault()},f=()=>o.item,i=(t,d)=>{e(t,d),s()},u=()=>{s()},b=R({name:"ContextMenuElement",render(){return c(se,{options:o.options,x:o.x,y:o.y,show:o.show,onSelect:i,onClickoutside:u,animated:!0,placement:"right",showArrow:!0})}});return{menu:{close:s,show:a,getItem:f},ContextMenuElement:b}}export{me as A,ge as F,ke as S,ve as T,be as _,xe as u};
