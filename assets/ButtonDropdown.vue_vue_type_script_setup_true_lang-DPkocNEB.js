import{s as l,a$ as g,b1 as n,r,b0 as p,t as $,u as x,x as C,cL as z,cQ as N,cz as L,ef as S,I as T,H as c,a4 as h,a5 as u,W as D,ad as P,U as R,P as E,a7 as W,Q as G,N as b}from"./index-BO9T8dKv.js";import{N as I}from"./Dropdown-CaT3ns9T.js";const t="0!important",_="-1px!important";function i(o){return n(`${o}-type`,[r("& +",[l("button",{},[n(`${o}-type`,[p("border",{borderLeftWidth:t}),p("state-border",{left:_})])])])])}function s(o){return n(`${o}-type`,[r("& +",[l("button",[n(`${o}-type`,[p("border",{borderTopWidth:t}),p("state-border",{top:_})])])])])}const j=l("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[g("vertical",{flexDirection:"row"},[g("rtl",[l("button",[r("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),i("default"),n("ghost",[i("primary"),i("info"),i("success"),i("warning"),i("error")])])])]),n("vertical",{flexDirection:"column"},[l("button",[r("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),r("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),r("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),s("default"),n("ghost",[s("primary"),s("info"),s("success"),s("warning"),s("error")])])])]),M={size:{type:String,default:void 0},vertical:Boolean},V=$({name:"ButtonGroup",props:M,setup(o){const{mergedClsPrefixRef:a,mergedRtlRef:d}=C(o);return z("-button-group",j,a),L(S,o),{rtlEnabled:N("ButtonGroup",d,a),mergedClsPrefix:a}},render(){const{mergedClsPrefix:o}=this;return x("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),y=T("down",!1,function(o){return c("svg",{width:o.size,height:o.size,viewBox:"0 0 48 48",fill:"none"},[c("path",{d:"M36 18L24 30L12 18",stroke:o.colors[0],"stroke-width":o.strokeWidth,"stroke-linecap":o.strokeLinecap,"stroke-linejoin":o.strokeLinejoin},null)])}),Q={components:{Down:y}},q=$({...Q,__name:"ButtonDropdown",props:{primaryText:{default:"操作"},primaryType:{default:"primary"},options:{default:()=>[]},size:{default:"medium"},ghost:{type:Boolean,default:!1}},emits:["primary-click","select"],setup(o,{emit:a}){const d=a,m=()=>{d("primary-click")},w=e=>{d("select",e)};return(e,H)=>{const f=P,k=W,B=I,v=V;return b(),h(v,{size:"tiny"},{default:u(()=>[c(f,{type:e.primaryType,ghost:e.ghost,onClick:m},{default:u(()=>[R(E(e.primaryText),1)]),_:1},8,["type","ghost"]),e.options.length>0?(b(),h(B,{key:0,placement:"bottom-end",trigger:"click",size:"small","show-arrow":!0,onSelect:w,options:e.options},{default:u(()=>[c(f,{ghost:e.ghost},{icon:u(()=>[c(k,{component:G(y)},null,8,["component"])]),_:1},8,["ghost"])]),_:1},8,["options"])):D("",!0)]),_:1})}}});export{q as _};
