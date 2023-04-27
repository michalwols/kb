"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[3948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Convolutional Neural Networks",l={unversionedId:"ml/cnns",id:"ml/cnns",title:"Convolutional Neural Networks",description:"Contrastive Pretraining for CNNs",source:"@site/docs/01-ml/cnns.mdx",sourceDirName:"01-ml",slug:"/ml/cnns",permalink:"/docs/ml/cnns",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/01-ml/cnns.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model Benchmarks",permalink:"/docs/ml/benchmarks"},next:{title:"Computer Vision Datasets",permalink:"/docs/ml/datasets"}},c={},s=[{value:"Contrastive Pretraining for CNNs",id:"contrastive-pretraining-for-cnns",level:2},{value:"Fast Training",id:"fast-training",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"convolutional-neural-networks"},"Convolutional Neural Networks"),(0,o.kt)("h2",{id:"contrastive-pretraining-for-cnns"},"Contrastive Pretraining for CNNs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/keyu-tian/SparK"},"GitHub - keyu-tian/SparK: [ICLR'23 Spotlight] The first successful BERT-style pretraining on any ",(0,o.kt)("em",{parentName:"a"},"convolutional network"),'; Pytorch impl. of "Designing BERT for Convolutional Networks: Sparse and Hierarchical Masked Modeling"'))),(0,o.kt)("h2",{id:"fast-training"},"Fast Training"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/tysam-code/hlb-CIFAR10"},"GitHub - tysam-code/hlb-CIFAR10: Train to 94% on CIFAR-10 in less than 10 seconds on a single A100, the current world record. Or ~95.77% in ~188 seconds."))))}p.isMDXComponent=!0}}]);