"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[3797],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Recommendation Systems",c={unversionedId:"ml/rec-ret/recommenders",id:"ml/rec-ret/recommenders",title:"Recommendation Systems",description:"Session Based Recommenders",source:"@site/docs/01-ml/rec-ret/recommenders.md",sourceDirName:"01-ml/rec-ret",slug:"/ml/rec-ret/recommenders",permalink:"/docs/ml/rec-ret/recommenders",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/01-ml/rec-ret/recommenders.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Learning to Rank",permalink:"/docs/ml/rec-ret/learning-to-rank"},next:{title:"Semantic Search",permalink:"/docs/ml/rec-ret/semantic-search"}},s={},l=[{value:"Session Based Recommenders",id:"session-based-recommenders",level:2},{value:"Articles",id:"articles",level:2},{value:"Code",id:"code",level:2},{value:"Videos",id:"videos",level:2},{value:"Tutorials",id:"tutorials",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"recommendation-systems"},"Recommendation Systems"),(0,o.kt)("h2",{id:"session-based-recommenders"},"Session Based Recommenders"),(0,o.kt)("h2",{id:"articles"},"Articles"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://amatriain.net/blog/RecsysArchitectures"},"Blueprints for recommender system architectures: 10th anniversary edition - AI, software, tech, and people, not in that order\u2026 by X"))),(0,o.kt)("h2",{id:"code"},"Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/pytorch/torchrec"},"GitHub - pytorch/torchrec: Pytorch domain library for recommendation systems")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/microsoft/recommenders"},"Microsoft Recommenders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Coder-Yu/SELFRec"},"GitHub - Coder-Yu/SELFRec: An open-source framework for self-supervised recommender systems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://recbole.io/docs/index.html"},"RecBole v1.1.1 \u2014 RecBole 1.1.1 documentation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA-Merlin/Transformers4Rec/"},"GitHub - NVIDIA-Merlin/Transformers4Rec: Transformers4Rec is a flexible and efficient library for sequential and session-based recommendation and works with PyTorch."))),(0,o.kt)("h2",{id:"videos"},"Videos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=9rouLchcC0k"},"NVIDIA Recommender Systems Summit 2022"))),(0,o.kt)("h2",{id:"tutorials"},"Tutorials"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NVIDIA-Merlin/publications/tree/main/tutorials/RecSys22tutorial"},"https://github.com/NVIDIA-Merlin/publications/tree/main/tutorials/RecSys22tutorial"))))}u.isMDXComponent=!0}}]);