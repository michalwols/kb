"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[1665],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7973:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},i="Hardware",c={unversionedId:"dev/hardware",id:"dev/hardware",title:"Hardware",description:"GPUs",source:"@site/docs/02-dev/hardware.mdx",sourceDirName:"02-dev",slug:"/dev/hardware",permalink:"/docs/dev/hardware",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/02-dev/hardware.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ffmpeg",permalink:"/docs/dev/ffmpeg"},next:{title:"Kubernetes",permalink:"/docs/dev/kubernetes"}},l={},p=[{value:"GPUs",id:"gpus",level:2},{value:"CUDA",id:"cuda",level:3},{value:"NVIDIA Tools",id:"nvidia-tools",level:2}],u={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hardware"},"Hardware"),(0,o.kt)("h2",{id:"gpus"},"GPUs"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CSMcOzv5Bhw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/V1d4F3-AAfc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("h3",{id:"cuda"},"CUDA"),(0,o.kt)("h2",{id:"nvidia-tools"},"NVIDIA Tools"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/XuehaiPan/nvitop"},"GitHub - XuehaiPan/nvitop: An interactive NVIDIA-GPU process viewer and beyond, the one-stop solution for GPU process management.")))}d.isMDXComponent=!0}}]);