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
export interface CounterState {
  value: number;
}
```

Now, create the buildux file, import the state, and pass the state type to the instance. This will return a context that you will use later in reducers.

Buildux Recieve the following parameters:

**Angular Types** 

* **State** - The state of current Buildux.
* **ThunkTypes** - Type used when you are using Thunks.

**Params** 

* **name** - The Buildux name
* **InitialState** - The first state declared into Buildux
* **services** - Used for inject services into reducers and thunks.

counter.buildux.ts

```typescript
import { Buildux } from "reprovider";
import { CounterState } from "../../interfaces/counter-state.interface";

const { context } = new Buildux<CounterState>({
  name: "counter",
  initialState: { value: 0 },
});
```

After created the Buildux instance, we need create the reducers. For that, use the createReducers method:

counter.buildux.ts

```typescript
const { context } = new Buildux<CounterState>({
  name: "counter",
  initialState: { value: 0 },
}).createReducers({
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
});
```

## Standalone Reducers

Also we can declare the reducers into a separated file for better organization  like this:

**counter-reducers.registry.ts**

```typescript
export const counterReducers = {
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },
  },
};

```

and import the counterReducers into Buildux:

```typescript
//...Other imports

import { counterReducers } from "./counter-reducers.registry";

const { context,createReducers } = new Buildux<CounterState>({
  name: "counter",
  initialState: { value: 0 },
});

//Register reducers:
createReducers(counterReducers);
```

### Working with extraReducers

:::caution

When we are working with standalone reducers you need define the type `ActionReducerMapBuilder<UsersState>` for pass the State into builder

:::

**Example:**

```typescript
export const usersReducers = {
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<UsersState>) {
    builder.addCase(
      fetchUsers.fulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        if (payload) state.users = payload;
        console.log(state.users);
      }
    );
  },
};
```




Finally exports the actions created from reducers and the reducer from context:

counter.buildux.ts

```typescript
export const { increment, decrement } = context.actions;

export const counterReducer = context.reducer;
```



Now create the store and import the exported reducer from counter.buildux.ts

store.ts

```typescript
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter-store/counter.buildux";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
```

## Front End implementation

In your index.tsx, import the store and the Provider Component and pass the store to tag.

```typescript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./core/store/store";
import { Provider } from "react-redux";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Custom hooks

For consume the reducers and dispatch actions we need create these hooks:


hooks.ts

```typescript
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

//Hooks for read and emit states with redux.

//Calls an action
export const useAppDispatch: () => AppDispatch = useDispatch;

//Read the state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

Now, we are ready to use the states and actions. For that, import the hooks in the component and use the hooks as follows:

app.tsx

```typescript
const count = useAppSelector((state) => state.counter.value);
const dispatch = useAppDispatch();
```

app.tsx

```typescript
import reproviderLogo from "./assets/reprovider_logo.png";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./core/hooks/hooks";
import {
  decrement,
  increment,
} from "./core/store/counter-store/counter.buildux";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <img src={reproviderLogo} className="logo" alt="Reprovider logo" />
        <a href="https://redux-toolkit.js.org/">
          <img
            src="https://redux-toolkit.js.org/img/redux.svg"
            className="logo Redux Toolkit"
            alt="Redux toolkit logo"
          />
        </a>
      </div>
      <h1>Reprovider + Redux Example</h1>
      <div className="card">
        <button onClick={() => dispatch(increment(1))}>+1</button>
        <h1>Counter value is: {count}</h1>
        <button onClick={() => dispatch(decrement(1))}>-1</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
```

You can read the complete example clicking [here](https://github.com/Lopez15-Hub/reprovider/tree/master/examples/buildux-counter)
