"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[6734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o="LLMs (Large Language Models)",i={unversionedId:"ml/large-language-models",id:"ml/large-language-models",title:"LLMs (Large Language Models)",description:"- LLM Worksheet - Google Sheets",source:"@site/docs/01-ml/large-language-models.md",sourceDirName:"01-ml",slug:"/ml/large-language-models",permalink:"/docs/ml/large-language-models",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/01-ml/large-language-models.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Label Noise",permalink:"/docs/ml/label-noise"},next:{title:"Long Tail Classification and Class Imbalance",permalink:"/docs/ml/long-tail"}},c={},s=[{value:"Chat",id:"chat",level:2},{value:"RLHF",id:"rlhf",level:2},{value:"Efficient Fine Tuning",id:"efficient-fine-tuning",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"llms-large-language-models"},"LLMs (Large Language Models)"),(0,a.kt)("p",null,"#ml/nlp/llm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1kT4or6b0Fedd-W_jMwYpb63e1ZR3aePczz3zlbJW-Y4/edit#gid=741531996"},"LLM Worksheet - Google Sheets"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/lm-sys/FastChat"},'GitHub - lm-sys/FastChat: The release repo for "Vicuna: An Open Chatbot Impressing GPT-4"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/kernelmachine/cbtm"},"GitHub - kernelmachine/cbtm: Code repository for the c-BTM paper"))),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"chat"},"Chat"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.langchain.dev/"},"LangChain"))),(0,a.kt)("h2",{id:"rlhf"},"RLHF"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/blog/trl-peft"},"Fine-tuning 20B LLMs with RLHF on a 24GB consumer GPU")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://huggingface.co/blog/rlhf"},"Illustrating Reinforcement Learning from Human Feedback (RLHF)"))),(0,a.kt)("h2",{id:"efficient-fine-tuning"},"Efficient Fine Tuning"))}u.isMDXComponent=!0}}]);