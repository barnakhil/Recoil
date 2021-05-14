(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(148)),i={title:"Recoil 0.2.0"},l={permalink:"/blog/2021/03/22/0.2.0-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-03-22-0.2.0-released.md",source:"@site/blog/2021-03-22-0.2.0-released.md",description:"We are pleased to announce the release of Recoil 0.2.0. This release has a new, more reliable implementation of async selectors, greatly improved performance, and many bug fixes and improvements.",date:"2021-03-22T00:00:00.000Z",formattedDate:"March 21, 2021",tags:[],title:"Recoil 0.2.0",readingTime:3.005,truncated:!0,prevItem:{title:"Recoil 0.3.0",permalink:"/blog/2021/05/14/0.3.0-released"},nextItem:{title:"Recoil 0.1.1",permalink:"/blog/2020/10/30/0.1.1-released"}},c=[{value:"Better Async Selectors",id:"better-async-selectors",children:[]},{value:"Scaling to Large Numbers of Atoms",id:"scaling-to-large-numbers-of-atoms",children:[]},{value:"Logo",id:"logo",children:[]},{value:"Other Improvements",id:"other-improvements",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[]},{value:"Future Work",id:"future-work",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are pleased to announce the release of Recoil 0.2.0. This release has a new, more reliable implementation of async selectors, greatly improved performance, and many bug fixes and improvements."),Object(o.b)("h2",{id:"better-async-selectors"},"Better Async Selectors"),Object(o.b)("p",null,"We've reimplemented selectors to fix a number of corner cases that we didn't handle before. For instance:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Selectors can now add dependencies at any point in their async execution."),Object(o.b)("li",{parentName:"ul"},"Selectors now start over if their dependencies change while they're awaiting something."),Object(o.b)("li",{parentName:"ul"},"Diamond dependency patterns now re-execute only the necessary selectors.")),Object(o.b)("p",null,"These are just a few of the unit tests that pass only with the new implementation. You are now less likely to hit incorrect behavior when using async selectors in Recoil."),Object(o.b)("p",null,"Many of the fixed bugs manifested as unnecessary execution of selectors. In one app that heavily uses async selectors, we observed an overall 15% decrease in the number of selector executions."),Object(o.b)("p",null,"Christian Santos (",Object(o.b)("a",{parentName:"p",href:"https://github.com/csantos42"},"@csantos42"),") has been working on this with great diligence and we're extremely happy to release it today."),Object(o.b)("h2",{id:"scaling-to-large-numbers-of-atoms"},"Scaling to Large Numbers of Atoms"),Object(o.b)("p",null,"Recoil now uses ",Object(o.b)("a",{parentName:"p",href:"_https://en.wikipedia.org/wiki/Hash_array_mapped_trie_"},"special data structures")," to maintain efficiency with large numbers of atoms. It is now hundreds of times faster when using 10,000 atoms."),Object(o.b)("h2",{id:"logo"},"Logo"),Object(o.b)("p",null,"Recoil now has a logo. Thanks to Gray Pegg (",Object(o.b)("a",{parentName:"p",href:"https://github.com/graypegg"},"@graypegg"),") for designing it and for sprucing up our website!"),Object(o.b)("h2",{id:"other-improvements"},"Other Improvements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Error handling with ",Object(o.b)("inlineCode",{parentName:"li"},"waitForAny()")," has changed: It now lets you access the individual ",Object(o.b)("inlineCode",{parentName:"li"},"Loadable"),"s corresponding to its arguments, even if one of them is in an error state. This makes it more consistent with ",Object(o.b)("inlineCode",{parentName:"li"},"waitForNone()"),"."),Object(o.b)("li",{parentName:"ul"},"Added a ",Object(o.b)("inlineCode",{parentName:"li"},"waitForAllSettled()")," helper analogous to ",Object(o.b)("inlineCode",{parentName:"li"},"Promise.allSettled"),"."),Object(o.b)("li",{parentName:"ul"},"Friendlier error message for misuse of ",Object(o.b)("inlineCode",{parentName:"li"},"useRecoilCallback()"),". (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/870"},"#870"),")"),Object(o.b)("li",{parentName:"ul"},"Friendlier error message if you try to use an async function as a selector setter, which is not supported. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/777"},"#777"),")"),Object(o.b)("li",{parentName:"ul"},"Improved React Native support. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/748"},"#748"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/702"},"#702"),")"),Object(o.b)("li",{parentName:"ul"},"Added a ",Object(o.b)("inlineCode",{parentName:"li"},"useGetRecoilValueInfo_UNSTABLE()")," hook for use by dev tools. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/713"},"#713"),", ",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/714"},"#714"),")")),Object(o.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Selectors now treat any non-",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," that is thrown as an error, rather than only instances of ",Object(o.b)("inlineCode",{parentName:"li"},"Error"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"<RecoilRoot>")," could sometimes have its state updated after being unmounted. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/917"},"#917"),")"),Object(o.b)("li",{parentName:"ul"},"The error message for a missing ",Object(o.b)("inlineCode",{parentName:"li"},"<RecoilRoot>")," wasn't displayed on React experimental releases. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/712"},"#712"),")"),Object(o.b)("li",{parentName:"ul"},"Errors are no longer frozen. (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/852"},"#852"),")"),Object(o.b)("li",{parentName:"ul"},"Atom effects could fail to initialize atoms in certain cases (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/775"},"#775"),")."),Object(o.b)("li",{parentName:"ul"},"Async selectors would fail with multiple React roots."),Object(o.b)("li",{parentName:"ul"},"IE 11 compatibility (",Object(o.b)("a",{parentName:"li",href:"https://github.com/facebookexperimental/Recoil/pull/894"},"#894")," and more)")),Object(o.b)("h2",{id:"breaking-changes"},"Breaking Changes"),Object(o.b)("p",null,"As mentioned above, the behavior of ",Object(o.b)("inlineCode",{parentName:"p"},"waitForAny()")," has changed. If you rely on the behavior that ",Object(o.b)("inlineCode",{parentName:"p"},"waitForAny()")," resulted in an error state if any of its arguments is in an error state, your code will break. Now it returns individual ",Object(o.b)("inlineCode",{parentName:"p"},"Loadable"),"s for each argument, just as with the non-error state, and you can check for an error in each argument."),Object(o.b)("p",null,"If you throw something that is not a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," and not an ",Object(o.b)("inlineCode",{parentName:"p"},"Error")," from within a selector, it will now put the selector into an error state instead of treating the thrown object as a value."),Object(o.b)("h2",{id:"future-work"},"Future Work"),Object(o.b)("p",null,"We are very close to releasing Memory Management, which will allow Recoil to automatically delete atoms and selectors that are no longer being used, configurable on a per-atom basis. This will also include configurable LRU caching for selectors.\nThese new features are in use internally at Facebook, but require a slight breaking change to the API. So our next release will start warning in cases where your code will break. The required changes are not difficult, and should be rare: Out of thousands of modules that import Recoil, we found less than half a dozen that required changes."))}b.isMDXComponent=!0},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.a.createElement(h,l(l({ref:t},s),{},{components:n})):r.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);