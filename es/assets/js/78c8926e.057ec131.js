"use strict";(self.webpackChunkreprovider_docs=self.webpackChunkreprovider_docs||[]).push([[641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),l=u(n),m=o,h=l["".concat(p,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},i),{},{components:n})):r.createElement(h,s({ref:t},i))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="Usage",c={unversionedId:"buildux/usage",id:"buildux/usage",title:"Usage",description:"Install the dependencies",source:"@site/docs/buildux/usage.md",sourceDirName:"buildux",slug:"/buildux/usage",permalink:"/reprovider-docs/es/docs/buildux/usage",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/buildux/usage.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/reprovider-docs/es/docs/buildux/overview"},next:{title:"Buildux Thunk",permalink:"/reprovider-docs/es/docs/buildux/buildux-thunk"}},p={},u=[],i={toc:u},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Install the dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"\nnpm install reprovider @reduxjs/toolkit react-redux\n\n")),(0,o.kt)("p",null,"First create the state interface"),(0,o.kt)("p",null,"counter-state.interface.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nexportinterfaceCounterState {\n\nvalue: number;\n\n\n}\n\n\n")),(0,o.kt)("p",null,"Now, create the buildux file, import the state, and pass the state type to the instance. This will return a context that you will use later in reducers."),(0,o.kt)("p",null,"counter.buildux.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimport { Buildux } from"reprovider";\n\nimport { CounterState } from"../../interfaces/counter-state.interface";\n\n\nconst { context } = newBuildux<CounterState>({\n\nname:"counter",\n\ninitialState: { value:0 },\n\n})\n\n\n')),(0,o.kt)("p",null,"After created the Buildux instance, we need create the reducers. For that, use the createReducers method:"),(0,o.kt)("p",null,"counter.buildux.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nconst { context } = newBuildux<CounterState>({\n\nname:"counter",\n\ninitialState: { value:0 },\n\n}).createReducers({\n\nreducers: {\n\nincrement: (state) => {\n\nstate.value+=1;\n\n    },\n\ndecrement: (state) => {\n\nstate.value-=1;\n\n    },\n\n  },\n\n});\n\n\n\n')),(0,o.kt)("p",null,"then exports the actions created from reducers and the reducer from context:"),(0,o.kt)("p",null,"counter.buildux.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nexportconst { increment, decrement } = context.actions;\n\nexportconstcounterReducer = context.reducer;\n\n")),(0,o.kt)("p",null,"Now create the store and import the exported reducer from counter.buildux.ts"),(0,o.kt)("p",null,"store.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimport { configureStore } from"@reduxjs/toolkit";\n\nimport { counterReducer } from"./counter-store/counter.buildux";\n\n\nexportconststore = configureStore({\n\nreducer: {\n\ncounter:counterReducer,\n\n  },\n\n});\n\n\nexporttypeRootState = ReturnType<typeofstore.getState>;\n\nexporttypeAppDispatch = typeofstore.dispatch;\n\n')),(0,o.kt)("p",null,"In your index.tsx, import the store and the Provider Component and pass the store to tag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimportReactfrom"react";\n\nimportReactDOMfrom"react-dom/client";\n\nimportAppfrom"./App";\n\nimport"./index.css";\n\n\nimport { store } from"./core/store/store";\n\nimport { Provider } from"react-redux";\n\n\nReactDOM.createRoot(document.getElementById("root")!).render(\n\n  <React.StrictMode>\n\n    <Providerstore={store}>\n\n      <App/>\n\n    </Provider>\n\n  </React.StrictMode>\n\n);\n\n\n')),(0,o.kt)("p",null,"For consume the reducers and dispatch actions we need create these hooks:"),(0,o.kt)("p",null,"hooks.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimport { useDispatch, useSelector } from"react-redux";\n\nimporttype { TypedUseSelectorHook } from"react-redux";\n\nimport { AppDispatch, RootState } from"../store/store";\n\n\n//Hooks for read and emit states with redux.\n\n\n//Calls an action\n\nexportconstuseAppDispatch: () =>AppDispatch = useDispatch;\n\n\n//Read the state\n\nexportconstuseAppSelector: TypedUseSelectorHook<RootState> = useSelector;\n\n\n')),(0,o.kt)("p",null,"Now, we are ready to use the states and actions. For that, import the hooks in the component and use the hooks as follows:"),(0,o.kt)("p",null,"app.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconstcount = useAppSelector((state) =>state.counter.value);\n\nconstdispatch = useAppDispatch();\n\n")),(0,o.kt)("p",null,"app.tsx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimportreproviderLogofrom"./assets/reprovider_logo.png";\n\nimport"./App.css";\n\nimport { useAppSelector, useAppDispatch } from"./core/hooks/hooks";\n\nimport {\n\ndecrement,\n\nincrement,\n\n} from"./core/store/counter-store/counter.buildux";\n\n\nfunctionApp() {\n\nconstcount = useAppSelector((state) =>state.counter.value);\n\nconstdispatch = useAppDispatch();\n\nreturn (\n\n    <>\n\n      <div>\n\n        <imgsrc={reproviderLogo} className="logo"alt="Reprovider logo"/>\n\n        <ahref="https://redux-toolkit.js.org/">\n\n          <img\n\nsrc="https://redux-toolkit.js.org/img/redux.svg"\n\nclassName="logo Redux Toolkit"\n\nalt="Redux toolkit logo"\n\n/>\n\n        </a>\n\n      </div>\n\n      <h1>Reprovider+ReduxExample</h1>\n\n      <divclassName="card">\n\n        <buttononClick={() => dispatch(increment(1))}>+1</button>\n\n        <h1>Countervalueis: {count}</h1>\n\n        <buttononClick={() => dispatch(decrement(1))}>-1</button>\n\n        <p>\n\nEdit <code>src/App.tsx</code> andsavetotestHMR\n\n        </p>\n\n      </div>\n\n    </>\n\n  );\n\n}\n\n\nexportdefaultApp;\n\n\n')),(0,o.kt)("p",null,"You can read the complete example reading ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Lopez15-Hub/reprovider/tree/master/examples/buildux-counter"},"here")))}d.isMDXComponent=!0}}]);