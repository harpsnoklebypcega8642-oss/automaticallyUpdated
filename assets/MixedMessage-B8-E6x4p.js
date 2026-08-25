import{t as u}from"./emojis-Sb65fHZp.js";import{t as f}from"./string-DvZm4MNo.js";import{h as g}from"./file-P4BUQ68a.js";import{t as x,M as o,N as r,O as p,U as t,F as m,R as y,W as M,Q as a,Y as k,H as w,_ as N}from"./index-gQczHgdU.js";import{_ as v}from"./Image-D_tiCb-v.js";import"./Tooltip-CL34e59x.js";import"./use-locale-Dd15ZlDy.js";const L={class:"im-message-mixed"},V=["innerHTML"],_=x({__name:"MixedMessage",props:{items:{}},setup(B){const d=(i,e=200)=>{const n=g(i);if(n.width==0||n.height==0)return{};if(n.width<e)return{width:`${n.width}px`,height:`${n.height}px`};let s=n.height/(n.width/e);return{width:e+"px",height:s+"px"}};return(i,e)=>{const n=v;return r(),o("div",L,[p("pre",null,[e[8]||(e[8]=t("      ")),(r(!0),o(m,null,y(i.items,(s,l)=>(r(),o("span",{class:"line",key:l},[e[6]||(e[6]=t(`
   
        `)),s.type==="text"?(r(),o(m,{key:0},[e[0]||(e[0]=t(`
               `)),p("span",{innerHTML:a(u)(a(f)(s.content))},null,8,V),e[1]||(e[1]=t(`
        `))],64)):s.type==="image"?(r(),o(m,{key:1},[e[4]||(e[4]=t(`
          `)),p("div",{style:k([d(s.content,300),{display:"flex",margin:"3px 0","border-radius":"3px",overflow:"hidden"}])},[e[2]||(e[2]=t(`
            `)),w(n,{src:s.content},null,8,["src"]),e[3]||(e[3]=t(`
          `))],4),e[5]||(e[5]=t(`
        `))],64)):M("",!0),e[7]||(e[7]=t(`
      `))]))),128)),e[9]||(e[9]=t(`
    `))])])}}}),$=N(_,[["__scopeId","data-v-ca616ae7"]]);export{$ as default};
