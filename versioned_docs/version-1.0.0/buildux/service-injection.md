# Service Injection

If you need consume services into a reducer you can follow the next steps:

Create the registry file for store the services for slice

:::tip
It is recommended to create a registry for the slice and only include the services that are part of it. This helps in building a better code structure.
:::
Create the registry file

**registry.ts**

```typescript
import { Service } from "reprovider";

export const services: Service[] = [
  {
    description: "Service for greeting people",
    service: UsersService,
    dependencies: [UsersRepository],
  },
];
```

**users.buildux.ts**

```typescript
import { services } from "./registry";

const { context } = new Buildux<UsersState>({
  name: "users",
  services,
  initialState: {
    name: "",
    lastName: "",
    email: "",
  },
}).createReducers({
  getUsers: (state) => {
    const service = context.consumer.get(MyService);
    // Do something with your service...
    state.value += 1;
  },
});
```

### Consuming services into a thunk

**users.thunks-registry.ts**

```typescript
//Register a new thunk.
thunksRegistry(context, (context) => [
  builduxThunk<User[], void>({
    description: "Get user from API",
    reference: "/users",
    action: async () => {
      // Read the service from context
      const usersService = context.consumer.get(UsersService);
      const users = await usersService.getUsers();
      return users;
    },
  }),
]);
```
