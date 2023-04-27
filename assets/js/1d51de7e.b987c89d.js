"use strict";(self.webpackChunkkb=self.webpackChunkkb||[]).push([[4535],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var i=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,i,r=function(t,e){if(null==t)return{};var a,i,r={},n=Object.keys(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)a=n[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=i.createContext({}),p=function(t){var e=i.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return i.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(a),h=r,d=c["".concat(s,".").concat(h)]||c[h]||u[h]||n;return a?i.createElement(d,o(o({ref:e},m),{},{components:a})):i.createElement(d,o({ref:e},m))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1768:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(7462),r=(a(7294),a(3905));const n={},o="Optimization",l={unversionedId:"math/optimization",id:"math/optimization",title:"Optimization",description:"Optimizers",source:"@site/docs/03-math/optimization.mdx",sourceDirName:"03-math",slug:"/math/optimization",permalink:"/docs/math/optimization",draft:!1,editUrl:"https://github.com/michalwols/kb/edit/master/docs/03-math/optimization.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Linear Algebra",permalink:"/docs/math/linear-algebra"},next:{title:"Business",permalink:"/docs/category/business"}},s={},p=[{value:"Optimizers",id:"optimizers",level:2},{value:"SGD + Momentum",id:"sgd--momentum",level:3},{value:"Adam",id:"adam",level:3},{value:"AdamW",id:"adamw",level:4},{value:"LAMB",id:"lamb",level:3},{value:"Lion",id:"lion",level:3},{value:"Warmup",id:"warmup",level:2},{value:"Schedules",id:"schedules",level:2},{value:"Regularization",id:"regularization",level:2},{value:"Weight Decay",id:"weight-decay",level:3},{value:"Gradient Clipping",id:"gradient-clipping",level:3},{value:"Batch Size vs Learning Rate",id:"batch-size-vs-learning-rate",level:2},{value:"Distributed",id:"distributed",level:2},{value:"Hyperparameter Optimization",id:"hyperparameter-optimization",level:2},{value:"Evolutionary",id:"evolutionary",level:3},{value:"Tips",id:"tips",level:2}],m={toc:p};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,i.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"optimization"},"Optimization"),(0,r.kt)("h2",{id:"optimizers"},"Optimizers"),(0,r.kt)("h3",{id:"sgd--momentum"},"SGD + Momentum"),(0,r.kt)("h3",{id:"adam"},"Adam"),(0,r.kt)("h4",{id:"adamw"},"AdamW"),(0,r.kt)("h3",{id:"lamb"},"LAMB"),(0,r.kt)("h3",{id:"lion"},"Lion"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/automl/tree/master/lion"},"automl/lion at master \xb7 google/automl \xb7 GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lucidrains/lion-pytorch"},"GitHub - lucidrains/lion-pytorch: \ud83e\udd81 Lion, new optimizer discovered by Google Brain using genetic algorithms that is purportedly better than Adam(w), in Pytorch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mlfoundations/open_clip/pull/432"},"[WIP] Testing the lion optimizer by mitchellnw \xb7 Pull Request #432 \xb7 mlfoundations/open_clip \xb7 GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/lucidrains/lion-pytorch/discussions/1"},"discuss whether it worked or didn't work \xb7 lucidrains/lion-pytorch \xb7 Discussion #1 \xb7 GitHub")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/TimDettmers/bitsandbytes/pull/188"},"Lion 8 bit by lucidrains \xb7 Pull Request #188 \xb7 TimDettmers/bitsandbytes \xb7 GitHub"))),(0,r.kt)("h2",{id:"warmup"},"Warmup"),(0,r.kt)("h2",{id:"schedules"},"Schedules"),(0,r.kt)("h2",{id:"regularization"},"Regularization"),(0,r.kt)("h3",{id:"weight-decay"},"Weight Decay"),(0,r.kt)("h3",{id:"gradient-clipping"},"Gradient Clipping"),(0,r.kt)("h2",{id:"batch-size-vs-learning-rate"},"Batch Size vs Learning Rate"),(0,r.kt)("h2",{id:"distributed"},"Distributed"),(0,r.kt)("h2",{id:"hyperparameter-optimization"},"Hyperparameter Optimization"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/optuna/optuna"},"Optuna: A hyperparameter optimization framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.ray.io/en/latest/tune/index.html"},"Tune: Scalable Hyperparameter Tuning \u2014 Ray 1.13.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/nevergrad"},"GitHub - facebookresearch/nevergrad: A Python toolbox for performing gradient-free optimization")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/Ax"},"GitHub - Facebook/Ax: Adaptive Experimentation Platform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/pytorch/botorch"},"GitHub - pytorch/botorch: Bayesian optimization in PyTorch")),(0,r.kt)("li",{parentName:"ul"})),(0,r.kt)("h3",{id:"evolutionary"},"Evolutionary"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nnaisense/evotorch"},"EvoTorch")),(0,r.kt)("h2",{id:"tips"},"Tips"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"For small batch sizes - AdamW with small decay"),(0,r.kt)("li",{parentName:"ol"},"Large batch sizes (say 1000s) - LAMB. LAMB is ~ AdamW + warmup + cosine decay rolled into one and all you need to decide on is a learning rate (3e-4 :)"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/sgondala2/status/1555677621748346880"},"https://twitter.com/sgondala2/status/1555677621748346880")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LR warmup was one of the things looked at in ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2110.04369"},"https://arxiv.org/abs/2110.04369"),", the idea being it helps you use a ",(0,r.kt)("strong",{parentName:"p"},"higher peak LR")," which lets you overall train faster. so when ablating I'd also try adding a warmup and also increasing your max LR")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/zacharynado/status/1555920966982803457"},"https://twitter.com/zacharynado/status/1555920966982803457")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"...I have done extensive experiments of schedules like cos vs linear vs staircase etc decays. If each one is tuned correctly, they always end up giving the same results. So I think it's not worth spending time on that.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/giffmana/status/1555818856756793344"},"https://twitter.com/giffmana/status/1555818856756793344")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Just in case: ",(0,r.kt)("strong",{parentName:"p"},"warm-up")," seems to typically ",(0,r.kt)("strong",{parentName:"p"},"not be needed at small batch or with small models"),', so you may not notice its effect in "mini" experiments.')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/giffmana/status/1555819323586928640"},"https://twitter.com/giffmana/status/1555819323586928640")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I think it's (warmup) mostly to do with the starting beta's of Adam being poorly chosen. The linear warmup gives the exponential moving averages some time to get the correct values before learning starts in earnest.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/pbloemesquire/status/1555834823578632195"},"https://twitter.com/pbloemesquire/status/1555834823578632195")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"My experience, gained from fine tuning with small data, is that lr schedule dramatically impacts the end result accuracy.  And yes, some form of warmup helps a lot.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/JFPuget/status/1555836240968093696"},"https://twitter.com/JFPuget/status/1555836240968093696")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also, gradient clipping hard clip by value at +-3 to 5 is very useful. ",(0,r.kt)("strong",{parentName:"p"},"I'm generally a fan of aggressive learning rates / schedules + aggressive clipping settings"),", with some long decay schedules and adaptive gradient methods (e.g. Adam family) for my model training.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/kastnerkyle/status/1555565583294496769"},"https://twitter.com/kastnerkyle/status/1555565583294496769")))}u.isMDXComponent=!0}}]);