"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[1154],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},i="NeRF: Neural Radiance Fields",c={unversionedId:"ml/nerf",id:"ml/nerf",title:"NeRF: Neural Radiance Fields",description:"https://github.com/KAIR-BAIR/nerfacc",source:"@site/docs/01-ml/nerf.mdx",sourceDirName:"01-ml",slug:"/ml/nerf",permalink:"/docs/ml/nerf",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/01-ml/nerf.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi Task Learning",permalink:"/docs/ml/multi-task"},next:{title:"OCR: Optical Character Recognition",permalink:"/docs/ml/ocr"}},l={},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nerf-neural-radiance-fields"},"NeRF: Neural Radiance Fields"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/KAIR-BAIR/nerfacc"},"https://github.com/KAIR-BAIR/nerfacc")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kakaobrain/NeRF-Factory"},"https://github.com/kakaobrain/NeRF-Factory")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://formyfamily.github.io/NeROIC/"},"NeROIC: Neural Object Capture and Rendering from Online Image Collections")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nerfstudio-project/nerfstudio"},"https://github.com/nerfstudio-project/nerfstudio")))}s.isMDXComponent=!0}}]);