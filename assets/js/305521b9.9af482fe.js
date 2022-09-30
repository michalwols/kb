"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[2578],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(t),f=o,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return t?n.createElement(b,l(l({ref:r},u),{},{components:t})):n.createElement(b,l({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=m;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5639:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const i={},l="Label Noise",a={unversionedId:"ml/cv/label-noise",id:"ml/cv/label-noise",title:"Label Noise",description:"Robust Losses",source:"@site/docs/ml/cv/label-noise.mdx",sourceDirName:"ml/cv",slug:"/ml/cv/label-noise",permalink:"/docs/ml/cv/label-noise",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/ml/cv/label-noise.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Few Shot Learning",permalink:"/docs/ml/cv/few-shot"},next:{title:"Long Tail Classification and Class Imbalance",permalink:"/docs/ml/cv/long-tail"}},c={},s=[{value:"Robust Losses",id:"robust-losses",level:2},{value:"Curriculum Learning",id:"curriculum-learning",level:2},{value:"Noise Correction",id:"noise-correction",level:2}],u={toc:s};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"label-noise"},"Label Noise"),(0,o.kt)("h2",{id:"robust-losses"},"Robust Losses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2208.09884"},"DiscrimLoss: A Universal Loss for Hard Samples and Incorrect Samples Discrimination (2022-08-22)"))),(0,o.kt)("h2",{id:"curriculum-learning"},"Curriculum Learning"),(0,o.kt)("h2",{id:"noise-correction"},"Noise Correction"))}p.isMDXComponent=!0}}]);