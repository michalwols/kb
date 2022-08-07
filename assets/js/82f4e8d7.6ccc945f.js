"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[5291],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=c(r),s=i,f=u["".concat(p,".").concat(s)]||u[s]||d[s]||l;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function s(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const l={},o="Machine Learning Compilers",a={unversionedId:"applied-ml/deployment/compilers",id:"applied-ml/deployment/compilers",title:"Machine Learning Compilers",description:"TVM",source:"@site/docs/applied-ml/deployment/compilers.md",sourceDirName:"applied-ml/deployment",slug:"/applied-ml/deployment/compilers",permalink:"/docs/applied-ml/deployment/compilers",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/applied-ml/deployment/compilers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment",permalink:"/docs/category/deployment"},next:{title:"Mobile Inference",permalink:"/docs/applied-ml/deployment/mobile-inference"}},p={},c=[{value:"TVM",id:"tvm",level:2},{value:"Triton",id:"triton",level:2},{value:"MLIR",id:"mlir",level:2},{value:"XLA",id:"xla",level:2},{value:"Further Reading",id:"further-reading",level:2}],m={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"machine-learning-compilers"},"Machine Learning Compilers"),(0,i.kt)("h2",{id:"tvm"},"TVM"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLFxzvDFotCitb0dOv5SpNdK6t3Uu7tBRo"},"2022 Machine Learning Compilation Course Video Lectures")),(0,i.kt)("h2",{id:"triton"},"Triton"),(0,i.kt)("h2",{id:"mlir"},"MLIR"),(0,i.kt)("h2",{id:"xla"},"XLA"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://petewarden.com/2021/12/24/why-are-ml-compilers-so-hard/"},"Why are ML Compilers so Hard?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://huyenchip.com/2021/09/07/a-friendly-introduction-to-machine-learning-compilers-and-optimizers.html"},"A friendly introduction to machine learning compilers and optimizers"))))}d.isMDXComponent=!0}}]);