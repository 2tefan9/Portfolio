import{g as f}from"./index-CA597erd.js";function u(e,o){for(var i=0;i<o.length;i++){const t=o[i];if(typeof t!="string"&&!Array.isArray(t)){for(const r in t)if(r!=="default"&&!(r in e)){const n=Object.getOwnPropertyDescriptor(t,r);n&&Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:()=>t[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,c;function g(){if(c)return a;c=1,a=e,e.displayName="editorconfig",e.aliases=[];function e(o){o.languages.editorconfig={comment:/[;#].*/,section:{pattern:/(^[ \t]*)\[.+\]/m,lookbehind:!0,alias:"selector",inside:{regex:/\\\\[\[\]{},!?.*]/,operator:/[!?]|\.\.|\*{1,2}/,punctuation:/[\[\]{},]/}},key:{pattern:/(^[ \t]*)[^\s=]+(?=[ \t]*=)/m,lookbehind:!0,alias:"attr-name"},value:{pattern:/=.*/,alias:"attr-value",inside:{punctuation:/^=/}}}}return a}var s=g();const d=f(s),p=u({__proto__:null,default:d},[s]);export{p as e};
