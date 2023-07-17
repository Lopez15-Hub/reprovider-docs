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

counter.buildux.ts

```typescript
import { Buildux } from "reprovider";
import { CounterState } from "../../interfaces/counter-state.interface";

const { context } = newBuildux<CounterState>({
  name: "counter",
  initialState: { value: 0 },
});
```

After created the Buildux instance, we need create the reducers. For that, use the createReducers method:

counter.buildux.ts

```typescript
const { context } = newBuildux<CounterState>({
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

then exports the actions created from reducers and the reducer from context:

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
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./core/hooks/hooks";
import { fetchUsers } from "./core/store/users-store/users.buildux";
import { User } from "./core/interfaces/user.interface";

function App() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <img src={reproviderLogo} className="logo" alt="Reprovider logo" />
        <h1>+</h1>
        <img
          src="https://redux-toolkit.js.org/img/redux.svg"
          className="logo react"
          alt="React logo"
        />
      </div>
      <h1>Read data from Json Placeholder with Buildux example</h1>
      <div className="card">
        <a className="">Read the Docs</a>
      </div>
      <div className="table-container">
        {users ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <span>Fetching users...</span>
        )}
      </div>
    </>
  );
}

export default App;
```

You can read the complete example reading [here](https://github.com/Lopez15-Hub/reprovider/tree/master/examples/buildux-counter)
