# Buildux Thunk

## Overview

Buildux provide a custom thunk for asincronus calls and it's an implementation of [createAsyncThunk](https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk).

## Creating a BuilduxThunk

The thunk recieve the following parameters:


Angular Types:

* **Returned** - Used for define the return data of thunk.
* **ParamType -** The type of thunk action param

Params:

* **Description** - Describes the thunk action.
* **Reference** - Describes the endpoint that you are calling.
* **Action** - Function that do anything.

Example

```typescript

import { builduxThunk } from "reprovider";

builduxThunk<User[]>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
```

## Passing params into action

Can pass any params specifying the param type into the second argument of angular type if you need pass more than one argument you must create an interface for that.

Example:

```typescript
import { builduxThunk } from "reprovider";

interface ActionParams{
userId:number;
}


builduxThunk<User[],ActionParams>({ //Specify the type here
    description: "Get user from API",
    reference: "/users",
    action: async ({ userId }:ActionParams) => {
      const usersService = context.consumer.get(UsersService);
      const user = await usersService.getUserById(userId);
      return user;
    },
  }),
```

## Using Thunk

For use the thunk we need register into thunkRegistry method that it's provided when we create the Buildux instance

users.buildux.ts

```typescript
const { context, thunksRegistry } = new Buildux<UsersState>({
  name: "users",
  services,
  initialState: {
    users: [],
  },
});
//... Rest of code

//Register a new thunk.thunksRegistry(context, (context) => ({
  fetchUsers: builduxThunk<User[]>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
}));
```

## Standalone Thunks

Also we can declare our thunks out of our buildux file and the pass the reference into thunksRegistry.

users-thunks.registry.ts

```typescript
export const userThunksRegistry = <T>(context: BuilduxContext<T>) => ({
  fetchUsers: builduxThunk<User[]>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
});

```

After, register the Thunks into `thunksRegistry` function

**users.buildux.ts**

```typescript
const { context, thunksRegistry } = new Buildux<UsersState>({
  name: "users",
  services,
  initialState: {
    users: [],
  },
})
// Register here
thunksRegistry(context, userThunksRegistry);
```

then we can use it in the extra reducers.

users.buildux.ts

```typescript
const { context, thunksRegistry } = new Buildux<UsersState>({
  name: "users",
  services,
  initialState: {
    users: [],
  },
}).createReducers({
  reducers: {
    setUsers: (state, payload: PayloadAction<User[]>) => {
      state.users = payload.payload;
    },
  },
  extraReducers(builder: ActionReducerMapBuilder<UsersState>) {
    builder.addCase(
      context.thunks[0].fulfilled,
      (state, { payload }: PayloadAction<User[]>) => {
        if (payload) state.users = payload;
        console.log(state.users);
      }
    );
  },
});

thunksRegistry(context, userThunksRegistry);
```


## Using Thunks in front end

Example:

```typescript
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./core/hooks/hooks";
import { fetchUsers } from "./core/store/users-store/users.buildux";
import { User } from "./core/interfaces/user.interface";
  
function App() {

  // Import the redux hooks
  const dispatch = useAppDispatch();

  // Get users from state
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
     // Dispatch the thunk action
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Read data from Json Placeholder with Buildux example</h1>
      <div className="card">
        <a
          target="_blank"
          href="https://docs.reprovider.com.ar"
        >
          Read the Docs
        </a>
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
              {users.map(({ id, name, username, email }: User) => (
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
```
