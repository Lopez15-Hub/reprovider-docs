"use strict";(self.webpackChunkreprovider_docs=self.webpackChunkreprovider_docs||[]).push([[338],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,h=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},i),{},{components:r})):n.createElement(h,s({ref:t},i))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2856:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},s="Usage",c={unversionedId:"buildux/usage",id:"version-1.0.0/buildux/usage",title:"Usage",description:"Install the dependencies",source:"@site/versioned_docs/version-1.0.0/buildux/usage.md",sourceDirName:"buildux",slug:"/buildux/usage",permalink:"/docs/1.0.0/buildux/usage",draft:!1,editUrl:"https://github.com/Lopez15-Hub/reprovider-docs/tree/master/docs/versioned_docs/version-1.0.0/buildux/usage.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/1.0.0/buildux/overview"},next:{title:"Buildux Thunk",permalink:"/docs/1.0.0/buildux/buildux-thunk"}},p={},u=[],i={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Install the dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install reprovider @reduxjs/toolkit react-redux\n")),(0,o.kt)("p",null,"First create the state interface"),(0,o.kt)("p",null,"counter-state.interface.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CounterState {\n  value: number;\n}\n")),(0,o.kt)("p",null,"Now, create the buildux file, import the state, and pass the state type to the instance. This will return a context that you will use later in reducers."),(0,o.kt)("p",null,"counter.buildux.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Buildux } from "reprovider";\nimport { CounterState } from "../../interfaces/counter-state.interface";\n\nconst { context } = new Buildux<CounterState>({\n  name: "counter",\n  initialState: { value: 0 },\n});\n')),(0,o.kt)("p",null,"After created the Buildux instance, we need create the reducers. For that, use the createReducers method:"),(0,o.kt)("p",null,"counter.buildux.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'const { context } = newBuildux<CounterState>({\n  name: "counter",\n  initialState: { value: 0 },\n}).createReducers({\n  reducers: {\n    increment: (state) => {\n      state.value += 1;\n    },\n\n    decrement: (state) => {\n      state.value -= 1;\n    },\n  },\n});\n')),(0,o.kt)("p",null,"then exports the actions created from reducers and the reducer from context:"),(0,o.kt)("p",null,"counter.buildux.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export const { increment, decrement } = context.actions;\n\nexport const counterReducer = context.reducer;\n")),(0,o.kt)("p",null,"Now create the store and import the exported reducer from counter.buildux.ts"),(0,o.kt)("p",null,"store.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { configureStore } from "@reduxjs/toolkit";\nimport { counterReducer } from "./counter-store/counter.buildux";\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer,\n  },\n});\n\nexport type RootState = ReturnType<typeof store.getState>;\n\nexport type AppDispatch = typeof store.dispatch;\n')),(0,o.kt)("p",null,"In your index.tsx, import the store and the Provider Component and pass the store to tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { store } from "./core/store/store";\nimport { Provider } from "react-redux";\nimport "./index.css";\n\nReactDOM.createRoot(document.getElementById("root")!).render(\n  <React.StrictMode>\n    <Provider store={store}>\n      <App />\n    </Provider>\n  </React.StrictMode>\n);\n')),(0,o.kt)("p",null,"For consume the reducers and dispatch actions we need create these hooks:"),(0,o.kt)("p",null,"hooks.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useDispatch, useSelector } from "react-redux";\nimport type { TypedUseSelectorHook } from "react-redux";\nimport { AppDispatch, RootState } from "../store/store";\n\n//Hooks for read and emit states with redux.\n\n//Calls an action\nexport const useAppDispatch: () => AppDispatch = useDispatch;\n\n//Read the state\nexport const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n')),(0,o.kt)("p",null,"Now, we are ready to use the states and actions. For that, import the hooks in the component and use the hooks as follows:"),(0,o.kt)("p",null,"app.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const count = useAppSelector((state) => state.counter.value);\nconst dispatch = useAppDispatch();\n")),(0,o.kt)("p",null,"app.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import reproviderLogo from "./assets/reprovider_logo.png";\nimport "./App.css";\nimport { useAppSelector, useAppDispatch } from "./core/hooks/hooks";\nimport {\n  decrement,\n  increment,\n} from "./core/store/counter-store/counter.buildux";\n\nfunction App() {\n  const count = useAppSelector((state) => state.counter.value);\n  const dispatch = useAppDispatch();\n  return (\n    <>\n      <div>\n        <img src={reproviderLogo} className="logo" alt="Reprovider logo" />\n        <a href="https://redux-toolkit.js.org/">\n          <img\n            src="https://redux-toolkit.js.org/img/redux.svg"\n            className="logo Redux Toolkit"\n            alt="Redux toolkit logo"\n          />\n        </a>\n      </div>\n      <h1>Reprovider + Redux Example</h1>\n      <div className="card">\n        <button onClick={() => dispatch(increment(1))}>+1</button>\n        <h1>Counter value is: {count}</h1>\n        <button onClick={() => dispatch(decrement(1))}>-1</button>\n        <p>\n          Edit <code>src/App.tsx</code> and save to test HMR\n        </p>\n      </div>\n    </>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("p",null,"You can read the complete example clicking ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lopez15-Hub/reprovider/tree/master/examples/buildux-counter"},"here")))}d.isMDXComponent=!0}}]);