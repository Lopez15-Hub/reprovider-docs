"use strict";(self.webpackChunkreprovider_docs=self.webpackChunkreprovider_docs||[]).push([[8109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,v=p["".concat(a,".").concat(m)]||p[m]||d[m]||s;return r?n.createElement(v,o(o({ref:t},l),{},{components:r})):n.createElement(v,o({ref:t},l))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2550:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const s={},o="Service Injection",c={unversionedId:"buildux/service-injection",id:"buildux/service-injection",title:"Service Injection",description:"If you need consume services into a reducer you can follow the next steps:",source:"@site/docs/buildux/service-injection.md",sourceDirName:"buildux",slug:"/buildux/service-injection",permalink:"/reprovider-docs/es/docs/buildux/service-injection",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/buildux/service-injection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buildux Thunk",permalink:"/reprovider-docs/es/docs/buildux/buildux-thunk"}},a={},u=[{value:"Consuming services into a thunk",id:"consuming-services-into-a-thunk",level:3}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"service-injection"},"Service Injection"),(0,i.kt)("p",null,"If you need consume services into a reducer you can follow the next steps:"),(0,i.kt)("p",null,"Create the registry file for store the services for slice"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to create a registry for the slice and only insert the services that are part of it. This helps build a better code structure.")),(0,i.kt)("p",null,"Create the registry file"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"registry.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Service } from "reprovider";\n\nexport const services: Service[] = [\n  {\n    description: "Service for greeting people",\n    service: UsersService,\n    dependencies: [UsersRepository],\n  },\n];\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"users.buildux.ts\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { services } from \'./registry\'\n\nconst { context } = new Buildux<UsersState>({\n  name: "users",\n  services\n  initialState: {\n    name: "",\n    lastName: "",\n    email: "",\n  },\n}).createReducers({\n  getUsers: (state) => {\n    const service = service.consumer.get(MyService)\n    // Do something with your service...\n    state.value += 1;\n\n  },\n\n});\n')),(0,i.kt)("h3",{id:"consuming-services-into-a-thunk"},"Consuming services into a thunk"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"users.thunks-registry.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'//Register a new thunk.\nthunksRegistry(context, (context) => [\n  builduxThunk<User[], void>({\n    description: "Get user from API",\n    reference: "/users",\n    action: async () => {\n      // Read the service from context\n      const usersService = context.consumer.get(UsersService);\n      const users = await usersService.getUsers();\n      return users;\n    },\n  }),\n]);\n')))}d.isMDXComponent=!0}}]);