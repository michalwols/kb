"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[5574],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,c={unversionedId:"ml/rec-ret/semantic-search",id:"ml/rec-ret/semantic-search",title:"semantic-search",description:"word-embeddings",source:"@site/docs/01-ml/rec-ret/semantic-search.md",sourceDirName:"01-ml/rec-ret",slug:"/ml/rec-ret/semantic-search",permalink:"/docs/ml/rec-ret/semantic-search",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/01-ml/rec-ret/semantic-search.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Recommendation Systems",permalink:"/docs/ml/rec-ret/recommenders"},next:{title:"Multi Modal as Learning to Rank",permalink:"/docs/ml/research-ideas/Multi Modal as Learning to Rank"}},l={},s=[{value:"Text Embeddings",id:"text-embeddings",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#retrieval #word-embeddings "),(0,a.kt)("h1",{id:"semantic-search"},"Semantic Search"),(0,a.kt)("h2",{id:"text-embeddings"},"Text Embeddings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2310.19923"},"[2310.19923] Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jina-ai/finetuner"},"GitHub - jina-ai/finetuner: \ud83c\udfaf Task-oriented embedding tuning for BERT, CLIP, etc."))))}u.isMDXComponent=!0}}]);