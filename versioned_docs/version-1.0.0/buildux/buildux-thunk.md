# Buildux Thunk

## Overview

Buildux provide a custom thunk for asincronus calls and it's an implementation of [createAsyncThunk](https://redux-toolkit.js.org/usage/usage-guide#async-requests-with-createasyncthunk).

## Creating a BuilduxThunk

```typescript

import { builduxThunk } from "reprovider";

builduxThunk<User[], void>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
```

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

//Register a new thunk.
thunksRegistry(context, (context) => [
  builduxThunk<User[], void>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
]);
```

also we can declare our thunks out of our buildux file and the pass the reference into thunksRegistry.

users-thunks.registry.ts

```typescript
export const userThunksRegistry = <T>(context: BuilduxContext<T>) => [
  builduxThunk<User[], void>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
];
```

then we can import it into buildux file.

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
