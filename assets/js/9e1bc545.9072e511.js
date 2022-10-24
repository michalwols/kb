"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[2068],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),u=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(r),c=n,d=m["".concat(s,".").concat(c)]||m[c]||h[c]||o;return r?a.createElement(d,l(l({ref:e},p),{},{components:r})):a.createElement(d,l({ref:e},p))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={},l="Rust",i={unversionedId:"dev/rust",id:"dev/rust",title:"Rust",description:"https://fasterthanli.me/articles/a-half-hour-to-learn-rust",source:"@site/docs/02-dev/rust.md",sourceDirName:"02-dev",slug:"/dev/rust",permalink:"/docs/dev/rust",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/02-dev/rust.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Redis",permalink:"/docs/dev/redis"},next:{title:"Search",permalink:"/docs/dev/search"}},s={},u=[{value:"Rust for Python",id:"rust-for-python",level:2},{value:"Rust backed Python Libs",id:"rust-backed-python-libs",level:3},{value:"SQL",id:"sql",level:2},{value:"WebAssembly",id:"webassembly",level:2},{value:"Mobile",id:"mobile",level:2},{value:"Learning",id:"learning",level:2}],p={toc:u};function h(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rust"},"Rust"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://fasterthanli.me/articles/a-half-hour-to-learn-rust"},"https://fasterthanli.me/articles/a-half-hour-to-learn-rust")),(0,n.kt)("h2",{id:"rust-for-python"},"Rust for Python"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/PyO3/pyo3"},"pyo3 Rust bindings for the Python interpreter"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLEIv4NBmh-GsWGE9mY3sF9c5lgh5Z_jLr"},"From Python to Rust Youtube Playlist")))),(0,n.kt)("h3",{id:"rust-backed-python-libs"},"Rust backed Python Libs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/pydantic/pydantic-core"},"pydantic-core")),(0,n.kt)("li",{parentName:"ul"},"[About\nFast multi-threaded DataFrame library in Rust | Python | Node.js]","](",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pola-rs/polars"},"https://github.com/pola-rs/polars"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/huggingface/tokenizers"},"tokenizers -  Fast State-of-the-Art Tokenizers optimized for Research and Production")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sfu-db/connector-x"},"conector-x")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/ijl/orjson"},"orjson")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/hora-search/hora"},"hora - efficient approximate nearest neighbor search algorithm collections library written in Rust ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/qdrant/qdrant"},"qdrant - Vector Search Engine")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/arrow-rs"},"arrow-rs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rs/arrow-flight/latest/arrow_flight/"},"arrow-flight"))),(0,n.kt)("h2",{id:"sql"},"SQL"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/diesel-rs/diesel"},"https://github.com/diesel-rs/diesel")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tcdi/pgx"},"https://github.com/tcdi/pgx")),(0,n.kt)("h2",{id:"webassembly"},"WebAssembly"),(0,n.kt)("h2",{id:"mobile"},"Mobile"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/visly/rust-on-android-19f34a2fb43"},"Rust on Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mozilla.github.io/firefox-browser-architecture/experiments/2017-09-06-rust-on-ios.html"},"Rust on iOS"))),(0,n.kt)("h2",{id:"learning"},"Learning"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/"},"The Rust Programming Language - The Rust Programming Language")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nnethercote.github.io/perf-book/title-page.html"},"The Rust Performance Book")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/stable/rust-by-example/index.htmls"},"Rust by Example")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/joaocarvalhoopen/How_to_learn_modern_Rust"},"https://github.com/joaocarvalhoopen/How_to_learn_modern_Rust")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLfllocyHVgsRwLkTAhG0E-2QxCf-ozBkk"},"Easy Rust Videos"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dhghomon.github.io/easy_rust/Chapter_0.html"},"Easy Rust")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Ygk0IMbu2nY"},"From Python to Rust"))))}h.isMDXComponent=!0}}]);