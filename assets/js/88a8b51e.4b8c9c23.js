"use strict";(self.webpackChunkreprovider_docs=self.webpackChunkreprovider_docs||[]).push([[981],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(b,u(u({ref:r},s),{},{components:t})):n.createElement(b,u({ref:r},s))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=f;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[d]="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4896:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const i={},u="Buildux",a={unversionedId:"buildux/Buildux",id:"buildux/Buildux",title:"Buildux",description:"What is buildux?",source:"@site/docs/buildux/Buildux.md",sourceDirName:"buildux",slug:"/buildux/",permalink:"/reprovider-docs/docs/buildux/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/buildux/Buildux.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic counter with Redux using Buildux",permalink:"/reprovider-docs/docs/examples/read-data-from-api-with-buildux"},next:{title:"Overview",permalink:"/reprovider-docs/docs/buildux/overview"}},c={},l=[],s={toc:l},d="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"buildux"},"Buildux"),(0,o.kt)("p",null,"What is buildux?"),(0,o.kt)("p",null,"Buildux is a slice builder that allows inject services into reducers and thunks creating a context and consume services from reducers easy. It works with redux-toolkit library."))}p.isMDXComponent=!0}}]);