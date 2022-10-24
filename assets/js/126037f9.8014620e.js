"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[6649],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>s});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=p(r),s=o,h=m["".concat(l,".").concat(s)]||m[s]||d[s]||i;return r?n.createElement(h,a(a({ref:e},u),{},{components:r})):n.createElement(h,a({ref:e},u))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7933:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={},a="PyTorch",c={unversionedId:"dev/pytorch",id:"dev/pytorch",title:"PyTorch",description:"Performance Optimizaitons",source:"@site/docs/02-dev/pytorch.md",sourceDirName:"02-dev",slug:"/dev/pytorch",permalink:"/docs/dev/pytorch",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/02-dev/pytorch.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/dev/python"},next:{title:"Ray",permalink:"/docs/dev/ray"}},l={},p=[{value:"Performance Optimizaitons",id:"performance-optimizaitons",level:2},{value:"JIT",id:"jit",level:3},{value:"TorchDynamo",id:"torchdynamo",level:3},{value:"TorchInductor",id:"torchinductor",level:3},{value:"AITemplate",id:"aitemplate",level:3},{value:"Distributed",id:"distributed",level:2},{value:"Debugging and Profiling",id:"debugging-and-profiling",level:2},{value:"Memory",id:"memory",level:3}],u={toc:p};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pytorch"},"PyTorch"),(0,o.kt)("h2",{id:"performance-optimizaitons"},"Performance Optimizaitons"),(0,o.kt)("h3",{id:"jit"},"JIT"),(0,o.kt)("h3",{id:"torchdynamo"},"TorchDynamo"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/pytorch/torchdynamo"},"https://github.com/pytorch/torchdynamo")),(0,o.kt)("p",null,"ex: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pytorch/torchdynamo/blob/main/benchmarks/training_loss.py"},"https://github.com/pytorch/torchdynamo/blob/main/benchmarks/training_loss.py")),(0,o.kt)("h3",{id:"torchinductor"},"TorchInductor"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dev-discuss.pytorch.org/t/torchinductor-a-pytorch-native-compiler-with-define-by-run-ir-and-symbolic-shapes/747"},"https://dev-discuss.pytorch.org/t/torchinductor-a-pytorch-native-compiler-with-define-by-run-ir-and-symbolic-shapes/747")),(0,o.kt)("h3",{id:"aitemplate"},"AITemplate"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/AITemplate"},"https://github.com/facebookincubator/AITemplate")),(0,o.kt)("h2",{id:"distributed"},"Distributed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://lambdalabs.com/blog/multi-node-pytorch-distributed-training-guide/"},"https://lambdalabs.com/blog/multi-node-pytorch-distributed-training-guide/"))),(0,o.kt)("h2",{id:"debugging-and-profiling"},"Debugging and Profiling"),(0,o.kt)("h3",{id:"memory"},"Memory"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zdevito.github.io/2022/08/16/memory-snapshots.html"},"Debugging PyTorch memory use with snapshots")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zdevito.github.io/2022/08/04/cuda-caching-allocator.html"},"A guide to PyTorch's CUDA Caching Allocator"))))}d.isMDXComponent=!0}}]);