(this["webpackJsonpreact-calc"]=this["webpackJsonpreact-calc"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(6),r=t.n(n),i=t(3),o=t(1);t(12);var b=function(e){var a="button ";return a+=e.operation?"operation":"",a+=e.double?"double":"",a+=e.triple?"triple":"",l.a.createElement("button",{onClick:function(a){return e.click&&e.click(e.label)},className:a},e.label)};t(13);var u=function(e){return l.a.createElement("div",{className:"display"},e.value)};var m=function(e,a,t){var c=0,l=parseFloat(e),n=parseFloat(a);switch(t){case"+":c=l+n;break;case"-":c=l-n;break;case"*":c=l*n;break;case"/":c=l/n;break;default:c=l}return c};t(14);var s=function(){var e=Object(c.useState)("0"),a=Object(o.a)(e,2),t=a[0],n=a[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),E=s[0],k=s[1],p=Object(c.useState)(""),f=Object(o.a)(p,2),v=f[0],d=f[1],j=Object(c.useState)([0,0]),O=Object(o.a)(j,2),h=O[0],S=O[1],N=Object(c.useState)(0),w=Object(o.a)(N,2),y=w[0],C=w[1];function F(e){if(0===y)C(1),k(!0),d(e);else{var a="="===v,t=v,c=Object(i.a)(h);try{c[0]=m(c[0],c[1],t)}catch(l){c[0]=h[0]}c[1]=0,n(c[0]),d(a?null:v),C(a?0:1),k(!a),S(Object(i.a)(c))}}function A(e){if("."!==e||!t.includes(".")){var a=("0"===t||E?"":t)+e;if(n(a),k(!1),"."!==e){var c=y,l=parseFloat(a),r=Object(i.a)(h);r[c]=l,S(Object(i.a)(r))}}}return l.a.createElement("div",{className:"calc"},l.a.createElement(u,{value:t}),l.a.createElement(b,{label:"AC",click:function(){n("0"),k(!1),d(""),S([0,0]),C(0)},triple:!0}),l.a.createElement(b,{label:"/",click:F,operation:!0}),l.a.createElement(b,{label:"7",click:A}),l.a.createElement(b,{label:"8",click:A}),l.a.createElement(b,{label:"9",click:A}),l.a.createElement(b,{label:"*",click:F,operation:!0}),l.a.createElement(b,{label:"4",click:A}),l.a.createElement(b,{label:"5",click:A}),l.a.createElement(b,{label:"6",click:A}),l.a.createElement(b,{label:"-",click:F,operation:!0}),l.a.createElement(b,{label:"1",click:A}),l.a.createElement(b,{label:"2",click:A}),l.a.createElement(b,{label:"3",click:A}),l.a.createElement(b,{label:"+",click:F,operation:!0}),l.a.createElement(b,{label:"0",click:A,double:!0}),l.a.createElement(b,{label:".",click:A}),l.a.createElement(b,{label:"=",click:F,operation:!0}))};t(15);var E=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Calculadora"),l.a.createElement(s,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.eae101d3.chunk.js.map