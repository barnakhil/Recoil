(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(8),o=(r(0),r(148)),i={title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},c={unversionedId:"api-reference/utils/waitForAll",id:"api-reference/utils/waitForAll",isDocsHomePage:!1,title:"waitForAll(dependencies)",description:"A concurrency helper which allows us to concurrently evaluate multiple asynchronous dependencies.",source:"@site/docs/api-reference/utils/waitForAll.md",slug:"/api-reference/utils/waitForAll",permalink:"/docs/api-reference/utils/waitForAll",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/waitForAll.md",version:"current",sidebar_label:"waitForAll()",sidebar:"docs",previous:{title:"noWait(state)",permalink:"/docs/api-reference/utils/noWait"},next:{title:"waitForNone(dependencies)",permalink:"/docs/api-reference/utils/waitForNone"}},l=[{value:"Examples",id:"examples",children:[]}],s={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A concurrency helper which allows us to concurrently evaluate multiple asynchronous dependencies."),Object(o.b)("p",null,"The dependencies may either be provided as a tuple array or as named dependencies in an object."),Object(o.b)("hr",null),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArray>\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObject>\n")),Object(o.b)("hr",null),Object(o.b)("p",null,"Because the concurrency helper is provided as a selector, it may be used by Recoil hooks in a React component, as a dependency in a Recoil selector, or anywhere a Recoil state is used."),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"function FriendsInfo() {\n  const [friendA, friendB] = useRecoilValue(\n    waitForAll([friendAState, friendBState])\n  );\n  return (\n    <div>\n      Friend A Name: {friendA.name}\n      Friend B Name: {friendB.name}\n    </div>\n  );\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friends = get(waitForAll(\n      friendList.map(friendID => userInfoQuery(friendID))\n    ));\n    return friends;\n  },\n});\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const customerInfoQuery = selectorFamily({\n  key: 'CustomerInfoQuery',\n  get: id => ({get}) => {\n    const {info, invoices, payments} = get(waitForAll({\n      info: customerInfoQuery(id),\n      invoices: invoicesQuery(id),\n      payments: paymentsQuery(id),\n    }));\n\n    return {\n      name: info.name,\n      transactions: [\n        ...invoices,\n        ...payments,\n      ],\n    };\n  },\n});\n")))}u.isMDXComponent=!0},148:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=u(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},f=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=t,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,c(c({ref:n},s),{},{components:r})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);