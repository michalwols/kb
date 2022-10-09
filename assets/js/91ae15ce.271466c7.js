"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[860],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Python",c={unversionedId:"dev/python",id:"dev/python",title:"Python",description:"Faster Python",source:"@site/docs/02-dev/python.md",sourceDirName:"02-dev",slug:"/dev/python",permalink:"/docs/dev/python",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/02-dev/python.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Postgres",permalink:"/docs/dev/postgres"},next:{title:"PyTorch",permalink:"/docs/dev/pytorch"}},l={},p=[{value:"Faster Python",id:"faster-python",level:2},{value:"JITs and Compilers",id:"jits-and-compilers",level:3},{value:"Cython",id:"cython",level:4},{value:"Numba",id:"numba",level:4},{value:"MyPyC",id:"mypyc",level:4},{value:"Cinder",id:"cinder",level:4},{value:"Static Python",id:"static-python",level:4},{value:"Taichi",id:"taichi",level:4},{value:"Language Bindings / FFI",id:"language-bindings--ffi",level:3},{value:"Profiling",id:"profiling",level:3},{value:"Benchmarking",id:"benchmarking",level:3}],s={toc:p};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"python"},"Python"),(0,i.kt)("h2",{id:"faster-python"},"Faster Python"),(0,i.kt)("h3",{id:"jits-and-compilers"},"JITs and Compilers"),(0,i.kt)("h4",{id:"cython"},"Cython"),(0,i.kt)("h4",{id:"numba"},"Numba"),(0,i.kt)("h4",{id:"mypyc"},"MyPyC"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mypyc/mypyc"},"https://github.com/mypyc/mypyc")),(0,i.kt)("h4",{id:"cinder"},"Cinder"),(0,i.kt)("h4",{id:"static-python"},"Static Python"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookincubator/cinder#static-python"},"https://github.com/facebookincubator/cinder#static-python")),(0,i.kt)("h4",{id:"taichi"},"Taichi"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/taichi-dev/taichi"},"https://github.com/taichi-dev/taichi")),(0,i.kt)("h3",{id:"language-bindings--ffi"},"Language Bindings / FFI"),(0,i.kt)("h3",{id:"profiling"},"Profiling"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/PythonDebuggingTools#Profilers"},"https://wiki.python.org/moin/PythonDebuggingTools#Profilers")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/plasma-umass/scalene"},"https://github.com/plasma-umass/scalene"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/benfred/py-spy"},"https://github.com/benfred/py-spy")),(0,i.kt)("h3",{id:"benchmarking"},"Benchmarking"),(0,i.kt)("p",null,"C"))}h.isMDXComponent=!0}}]);