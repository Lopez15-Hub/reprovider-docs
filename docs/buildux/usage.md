---
sidebar_position: 1
---
# Usage

Install the dependencies

```powershell

npm install reprovider @reduxjs/toolkit react-redux

```

First create the state interface

counter-state.interface.ts

```typescript

exportinterfaceCounterState {

value: number;


}


```

Now, create the buildux file, import the state, and pass the state type to the instance. This will return a context that you will use later in reducers.

counter.buildux.ts

```typescript

import { Buildux } from"reprovider";

import { CounterState } from"../../interfaces/counter-state.interface";


const { context } = newBuildux<CounterState>({

name:"counter",

initialState: { value:0 },

})


```

After created the Buildux instance, we need create the reducers. For that, use the createReducers method:

counter.buildux.ts

```typescript

const { context } = newBuildux<CounterState>({

name:"counter",

initialState: { value:0 },

}).createReducers({

reducers: {

increment: (state) => {

state.value+=1;

    },

decrement: (state) => {

state.value-=1;

    },

  },

});



```

then exports the actions created from reducers and the reducer from context:

counter.buildux.ts

```typescript

exportconst { increment, decrement } = context.actions;

exportconstcounterReducer = context.reducer;

```

Now create the store and import the exported reducer from counter.buildux.ts

store.ts

```typescript

import { configureStore } from"@reduxjs/toolkit";

import { counterReducer } from"./counter-store/counter.buildux";


exportconststore = configureStore({

reducer: {

counter:counterReducer,

  },

});


exporttypeRootState = ReturnType<typeofstore.getState>;

exporttypeAppDispatch = typeofstore.dispatch;

```

In your index.tsx, import the store and the Provider Component and pass the store to tag.

```typescript

importReactfrom"react";

importReactDOMfrom"react-dom/client";

importAppfrom"./App";

import"./index.css";


import { store } from"./core/store/store";

import { Provider } from"react-redux";


ReactDOM.createRoot(document.getElementById("root")!).render(

  <React.StrictMode>

    <Providerstore={store}>

      <App/>

    </Provider>

  </React.StrictMode>

);


```

For consume the reducers and dispatch actions we need create these hooks:

hooks.ts

```typescript

import { useDispatch, useSelector } from"react-redux";

importtype { TypedUseSelectorHook } from"react-redux";

import { AppDispatch, RootState } from"../store/store";


//Hooks for read and emit states with redux.


//Calls an action

exportconstuseAppDispatch: () =>AppDispatch = useDispatch;


//Read the state

exportconstuseAppSelector: TypedUseSelectorHook<RootState> = useSelector;


```

Now, we are ready to use the states and actions. For that, import the hooks in the component and use the hooks as follows:

app.tsx

```typescript

constcount = useAppSelector((state) =>state.counter.value);

constdispatch = useAppDispatch();

```

app.tsx

```typescript

importreproviderLogofrom"./assets/reprovider_logo.png";

import"./App.css";

import { useAppSelector, useAppDispatch } from"./core/hooks/hooks";

import {

decrement,

increment,

} from"./core/store/counter-store/counter.buildux";


functionApp() {

constcount = useAppSelector((state) =>state.counter.value);

constdispatch = useAppDispatch();

return (

    <>

      <div>

        <imgsrc={reproviderLogo} className="logo"alt="Reprovider logo"/>

        <ahref="https://redux-toolkit.js.org/">

          <img

src="https://redux-toolkit.js.org/img/redux.svg"

className="logo Redux Toolkit"

alt="Redux toolkit logo"

/>

        </a>

      </div>

      <h1>Reprovider+ReduxExample</h1>

      <divclassName="card">

        <buttononClick={() => dispatch(increment(1))}>+1</button>

        <h1>Countervalueis: {count}</h1>

        <buttononClick={() => dispatch(decrement(1))}>-1</button>

        <p>

Edit <code>src/App.tsx</code> andsavetotestHMR

        </p>

      </div>

    </>

  );

}


exportdefaultApp;


```

You can read the complete example reading [here](https://github.com/Lopez15-Hub/reprovider/tree/master/examples/buildux-counter)
