"use strict";(self.webpackChunkreprovider_docs=self.webpackChunkreprovider_docs||[]).push([[3327],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),h=s,m=p["".concat(o,".").concat(h)]||p[h]||d[h]||a;return t?r.createElement(m,u(u({ref:n},c),{},{components:t})):r.createElement(m,u({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,u=new Array(a);u[0]=h;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:s,u[1]=i;for(var l=2;l<a;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5251:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(7462),s=(t(7294),t(3905));const a={},u="Buildux Thunk",i={unversionedId:"buildux/buildux-thunk",id:"buildux/buildux-thunk",title:"Buildux Thunk",description:"Overview",source:"@site/docs/buildux/buildux-thunk.md",sourceDirName:"buildux",slug:"/buildux/buildux-thunk",permalink:"/docs/latest/buildux/buildux-thunk",draft:!1,editUrl:"https://github.com/Lopez15-Hub/reprovider-docs/tree/master/docs/docs/buildux/buildux-thunk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/latest/buildux/usage"},next:{title:"Service Injection",permalink:"/docs/latest/buildux/service-injection"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Creating a BuilduxThunk",id:"creating-a-builduxthunk",level:2},{value:"Passing params into action",id:"passing-params-into-action",level:2},{value:"Using Thunk",id:"using-thunk",level:2},{value:"Standalone Thunks",id:"standalone-thunks",level:2},{value:"Using Thunks in front end",id:"using-thunks-in-front-end",level:2}],c={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,s.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"buildux-thunk"},"Buildux Thunk"),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Buildux provide a custom thunk for asincronus calls and it's an implementation of ",(0,s.kt)("a",{parentName:"p",href:"https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk"},"createAsyncThunk"),"."),(0,s.kt)("h2",{id:"creating-a-builduxthunk"},"Creating a BuilduxThunk"),(0,s.kt)("p",null,"The thunk recieve the following parameters:"),(0,s.kt)("p",null,"Angular Types:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Returned")," - Used for define the return data of thunk."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"ParamType -")," The type of thunk action param")),(0,s.kt)("p",null,"Params:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Description")," - Describes the thunk action."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Reference")," - Describes the endpoint that you are calling."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Action")," - Function that do anything.")),(0,s.kt)("p",null,"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'\nimport { builduxThunk } from "reprovider";\n\nbuilduxThunk<User[]>({\n    description: "Get user from API",\n    reference: "/users",\n    action: async () => {\n      const usersService = context.consumer.get(UsersService);\n      const users = await usersService.getUsers();\n      return users;\n    },\n  }),\n')),(0,s.kt)("h2",{id:"passing-params-into-action"},"Passing params into action"),(0,s.kt)("p",null,"Can pass any params specifying the param type into the second argument of angular type if you need pass more than one argument you must create an interface for that."),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { builduxThunk } from "reprovider";\n\ninterface ActionParams{\nuserId:number;\n}\n\n\nbuilduxThunk<User[],ActionParams>({ //Specify the type here\n    description: "Get user from API",\n    reference: "/users",\n    action: async ({ userId }:ActionParams) => {\n      const usersService = context.consumer.get(UsersService);\n      const user = await usersService.getUserById(userId);\n      return user;\n    },\n  }),\n')),(0,s.kt)("h2",{id:"using-thunk"},"Using Thunk"),(0,s.kt)("p",null,"For use the thunk we need register into thunkRegistry method that it's provided when we create the Buildux instance"),(0,s.kt)("p",null,"users.buildux.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const { context, thunksRegistry } = new Buildux<UsersState>({\n  name: "users",\n  services,\n  initialState: {\n    users: [],\n  },\n});\n//... Rest of code\n\n//Register a new thunk.thunksRegistry(context, (context) => ({\n  fetchUsers: builduxThunk<User[]>({\n    description: "Get user from API",\n    reference: "/users",\n    action: async () => {\n      const usersService = context.consumer.get(UsersService);\n      const users = await usersService.getUsers();\n      return users;\n    },\n  }),\n}));\n')),(0,s.kt)("h2",{id:"standalone-thunks"},"Standalone Thunks"),(0,s.kt)("p",null,"Also we can declare our thunks out of our buildux file and the pass the reference into thunksRegistry."),(0,s.kt)("p",null,"users-thunks.registry.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'export const userThunksRegistry = <T>(context: BuilduxContext<T>) => ({\n  fetchUsers: builduxThunk<User[]>({\n    description: "Get user from API",\n    reference: "/users",\n    action: async () => {\n      const usersService = context.consumer.get(UsersService);\n      const users = await usersService.getUsers();\n      return users;\n    },\n  }),\n});\n\n')),(0,s.kt)("p",null,"After, register the Thunks into ",(0,s.kt)("inlineCode",{parentName:"p"},"thunksRegistry")," function"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"users.buildux.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const { context, thunksRegistry } = new Buildux<UsersState>({\n  name: "users",\n  services,\n  initialState: {\n    users: [],\n  },\n})\n// Register here\nthunksRegistry(context, userThunksRegistry);\n')),(0,s.kt)("p",null,"then we can use it in the extra reducers."),(0,s.kt)("p",null,"users.buildux.ts"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'const { context, thunksRegistry } = new Buildux<UsersState>({\n  name: "users",\n  services,\n  initialState: {\n    users: [],\n  },\n}).createReducers({\n  reducers: {\n    setUsers: (state, payload: PayloadAction<User[]>) => {\n      state.users = payload.payload;\n    },\n  },\n  extraReducers(builder: ActionReducerMapBuilder<UsersState>) {\n    builder.addCase(\n      context.thunks[0].fulfilled,\n      (state, { payload }: PayloadAction<User[]>) => {\n        if (payload) state.users = payload;\n        console.log(state.users);\n      }\n    );\n  },\n});\n\nthunksRegistry(context, userThunksRegistry);\n')),(0,s.kt)("h2",{id:"using-thunks-in-front-end"},"Using Thunks in front end"),(0,s.kt)("p",null,"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useEffect } from "react";\nimport { useAppDispatch, useAppSelector } from "./core/hooks/hooks";\nimport { fetchUsers } from "./core/store/users-store/users.buildux";\nimport { User } from "./core/interfaces/user.interface";\n  \nfunction App() {\n\n  // Import the redux hooks\n  const dispatch = useAppDispatch();\n\n  // Get users from state\n  const { users } = useAppSelector((state) => state.users);\n\n  useEffect(() => {\n     // Dispatch the thunk action\n    dispatch(fetchUsers());\n  }, [dispatch]);\n\n  return (\n    <>\n      <h1>Read data from Json Placeholder with Buildux example</h1>\n      <div className="card">\n        <a\n          target="_blank"\n          href="https://docs.reprovider.com.ar"\n        >\n          Read the Docs\n        </a>\n      </div>\n      <div className="table-container">\n        {users ? (\n          <table>\n            <thead>\n              <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Username</th>\n                <th>Email</th>\n              </tr>\n            </thead>\n            <tbody>\n              {users.map(({ id, name, username, email }: User) => (\n                <tr key={user.id}>\n                  <td>{user.id}</td>\n                  <td>{user.name}</td>\n                  <td>{user.username}</td>\n                  <td>{user.email}</td>\n                </tr>\n              ))}\n            </tbody>\n          </table>\n        ) : (\n          <span>Fetching users...</span>\n        )}\n      </div>\n    </>\n  );\n}\n')))}d.isMDXComponent=!0}}]);