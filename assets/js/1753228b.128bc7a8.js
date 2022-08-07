"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[5178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||n;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={},o="Optimization",l={unversionedId:"math/optimization",id:"math/optimization",title:"Optimization",description:"Optimizers",source:"@site/docs/math/optimization.mdx",sourceDirName:"math",slug:"/math/optimization",permalink:"/docs/math/optimization",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/math/optimization.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linear Algebra",permalink:"/docs/math/linear-algebra"},next:{title:"PyTorch",permalink:"/docs/pytorch"}},s={},p=[{value:"Optimizers",id:"optimizers",level:2},{value:"SGD + Momentum",id:"sgd--momentum",level:3},{value:"Adam",id:"adam",level:3},{value:"AdamW",id:"adamw",level:4},{value:"LAMB",id:"lamb",level:3},{value:"Warmup",id:"warmup",level:2},{value:"Schedules",id:"schedules",level:2},{value:"Regularization",id:"regularization",level:2},{value:"Weight Decay",id:"weight-decay",level:3},{value:"Gradient Clipping",id:"gradient-clipping",level:3},{value:"Batch Size vs Learning Rate",id:"batch-size-vs-learning-rate",level:2},{value:"Distributed",id:"distributed",level:2},{value:"HyperOpt",id:"hyperopt",level:2},{value:"Tips",id:"tips",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimization"},"Optimization"),(0,i.kt)("h2",{id:"optimizers"},"Optimizers"),(0,i.kt)("h3",{id:"sgd--momentum"},"SGD + Momentum"),(0,i.kt)("h3",{id:"adam"},"Adam"),(0,i.kt)("h4",{id:"adamw"},"AdamW"),(0,i.kt)("h3",{id:"lamb"},"LAMB"),(0,i.kt)("h2",{id:"warmup"},"Warmup"),(0,i.kt)("h2",{id:"schedules"},"Schedules"),(0,i.kt)("h2",{id:"regularization"},"Regularization"),(0,i.kt)("h3",{id:"weight-decay"},"Weight Decay"),(0,i.kt)("h3",{id:"gradient-clipping"},"Gradient Clipping"),(0,i.kt)("h2",{id:"batch-size-vs-learning-rate"},"Batch Size vs Learning Rate"),(0,i.kt)("h2",{id:"distributed"},"Distributed"),(0,i.kt)("h2",{id:"hyperopt"},"HyperOpt"),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("blockquote",null,(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"For small batch sizes - AdamW with small decay"),(0,i.kt)("li",{parentName:"ol"},"Large batch sizes (say 1000s) - LAMB. LAMB is ~ AdamW + warmup + cosine decay rolled into one and all you need to decide on is a learning rate (3e-4 :)"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/sgondala2/status/1555677621748346880"},"https://twitter.com/sgondala2/status/1555677621748346880")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"LR warmup was one of the things looked at in ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2110.04369"},"https://arxiv.org/abs/2110.04369"),", the idea being it helps you use a ",(0,i.kt)("strong",{parentName:"p"},"higher peak LR")," which lets you overall train faster. so when ablating I'd also try adding a warmup and also increasing your max LR")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/zacharynado/status/1555920966982803457"},"https://twitter.com/zacharynado/status/1555920966982803457")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"...I have done extensive experiments of schedules like cos vs linear vs staircase etc decays. If each one is tuned correctly, they always end up giving the same results. So I think it's not worth spending time on that.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/giffmana/status/1555818856756793344"},"https://twitter.com/giffmana/status/1555818856756793344")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Just in case: ",(0,i.kt)("strong",{parentName:"p"},"warm-up")," seems to typically ",(0,i.kt)("strong",{parentName:"p"},"not be needed at small batch or with small models"),', so you may not notice its effect in "mini" experiments.')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/giffmana/status/1555819323586928640"},"https://twitter.com/giffmana/status/1555819323586928640")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I think it's (warmup) mostly to do with the starting beta's of Adam being poorly chosen. The linear warmup gives the exponential moving averages some time to get the correct values before learning starts in earnest.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/pbloemesquire/status/1555834823578632195"},"https://twitter.com/pbloemesquire/status/1555834823578632195")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"My experience, gained from fine tuning with small data, is that lr schedule dramatically impacts the end result accuracy.  And yes, some form of warmup helps a lot.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/JFPuget/status/1555836240968093696"},"https://twitter.com/JFPuget/status/1555836240968093696")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Also, gradient clipping hard clip by value at +-3 to 5 is very useful. ",(0,i.kt)("strong",{parentName:"p"},"I'm generally a fan of aggressive learning rates / schedules + aggressive clipping settings"),", with some long decay schedules and adaptive gradient methods (e.g. Adam family) for my model training.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/kastnerkyle/status/1555565583294496769"},"https://twitter.com/kastnerkyle/status/1555565583294496769")))}u.isMDXComponent=!0}}]);