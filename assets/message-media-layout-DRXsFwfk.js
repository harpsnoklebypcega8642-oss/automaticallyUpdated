const s={width:320,height:165},t={width:320,height:320},d={...s,fit:"cover"};function n(e,a){if(e<=0||a<=0)return d;const i=e<a;return{...e>a?s:t,fit:i?"contain":"cover"}}export{n as g,d as m};
